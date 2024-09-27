const express = require('express');
const router = express.Router();
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
module.exports = router;

let { model } = require('../model');


///////////Routes for login and registration

router.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 7200000, // 2 hours in milliseconds, after this time user session destroys
    }
}));

router.get("/", (req, res) => {

    if (req.session.user) {
        return res.redirect('/home');
    }

    return res.render('login.ejs', { errorMessage: '' });


});

router.get("/login", (req, res) => {

    if (req.session.user) {
        return res.redirect('/home');
    }

    return res.render('login.ejs', { errorMessage: '' });


});

router.get("/landingpage", (req, res) => {

    

    return res.render('landingpage.ejs');


});

router.get("/registration", (req, res) => {

    res.render('registration.ejs', { 
        usernameTaken: false, 
        emailTaken: false, 
        username: '',
        email: '',
        password: '',
        passwordMismatch: false
    })


});

router.post("/login", async (req, res) => {
    try {
        let email = req.body.email_login;
        let password = req.body.password_login;

        // Retrieve user from the database based on the provided email
        let user = await model.user_list.getUserByEmail(email);
        if (user == null) {
            return res.render('login.ejs', { errorMessage: 'Invalid email or password' });
        }

        let isPasswordValid = await bcrypt.compare(password, user.password);

        

        if (isPasswordValid) {
            // Store user information in the session
            req.session.user = user;

            // Redirect to /home
            return res.redirect('/home');
        } else {
            // If user not found, render the login page with an error message
            return res.render('login.ejs', { errorMessage: 'Invalid email or password' });
        }
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});

router.post("/create", async (req, res) => {

    //some action that will create and store in db user information
    try {
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;
        let confirmationPassword = req.body.confirm_password;

        let hashedPassword = await bcrypt.hash(password, 10);


        // Check if the username is already taken
        const isUsernameTaken = await model.user_list.isUsernameTaken(username);

        // Check if the email is already taken
        const isEmailTaken = await model.user_list.getUserByEmail(email);

        const passcheck = password !== confirmationPassword;

        if (isUsernameTaken || isEmailTaken || passcheck) {
            // Set locals based on whether username or email is taken
            let locals = {
                usernameTaken: isUsernameTaken,
                emailTaken: isEmailTaken,
                passwordMismatch: passcheck,
                username,
                email,
                password
            };

            return res.render(path.join(__dirname, '../views/registration.ejs'), locals);
        } else {

            // Get the current value of id from the "counters" collection in MongoDB
            let id = await model.getCounter();
            let credits = 10000;

            let user = {
                "username": username,
                "email": email,
                "password": hashedPassword,
                "id": id,
                "credits": credits
            }

            // Increment the id in the "counters" collection for the next user
            await model.incrementCounter();

            await model.user_list.addUser(user);

            // Registration is successful, redirect to the login page
            return res.redirect('/login');
        }
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});

router.get("/home", async (req, res) => {
    // Access the user information from the session
    const user = req.session.user;

    // Check if the user is logged in (exists in the session)
    if (!user) {
        // If not logged in, redirect to the login page
        return res.redirect('/login');
    }

    // Render the casino page with user information
    res.render('index.ejs', { user });

});


///////// End of Routes for login and registaration








///////// Routes for index.ejs

router.post("/addMoney", async (req, res) => {

    try {

        const user = req.session.user;

        const creditAmount = parseInt(req.body.creditAmount);

        let updated_user = await model.user_list.incrementUserAmountOfMoney(user.id, creditAmount);

        req.session.user = updated_user;

        return res.redirect('/home');

    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }

});

router.post("/validateAddMoney", async (req, res) => {
    try {
        const creditAmount = parseInt(req.body.creditAmount);
        const promoCode = req.body.promoCode;

        let validationErrors = [];

        if (creditAmount > 25000) {
            validationErrors.push('Amount cannot be more than 25000');
        }
        if (creditAmount < 0) {
            validationErrors.push('Amount cannot be negative');
        }
        if (isNaN(creditAmount)){
            validationErrors.push('Amount cannot be empty')
        }

        if (promoCode !== 'RETAKE') {
            validationErrors.push('Invalid promo code');
        }

        // Return JSON response with validation errors or success
        if (validationErrors.length > 0) {
            return res.status(400).json({ errors: validationErrors });
        } else {
            return res.status(200).json({ success: true });
        }
    } catch (e) {
        return res.sendStatus(500);
    }
});

router.post("/nameRenaming", async (req, res) => {
    try{

        // Access the user information from the session
        const user = req.session.user;

        const username = req.body.newUsername;

        let updated_user = await model.user_list.decrementUserAmountOfMoney(user.id, 5000);
        let updated_user2 = await model.user_list.updateUserName(updated_user.id, username);
        

        req.session.user = updated_user2;

        return res.redirect('/home');
        
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
})

//Router just to check if new usename already exists
router.get("/checkUsername", async (req, res) => {
    const username = req.query.username;
    const isUsernameTaken = await model.user_list.isUsernameTaken(username);

    res.json({ isUsernameTaken });
});

router.post("/logout", (req, res) => {
    // Destroy the session on logout
    req.session.destroy();
    return res.redirect('/');
});


////////// End of routes for index.ejs



