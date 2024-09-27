//Event listener to check if user has accepted cookies
document.addEventListener('DOMContentLoaded', function () {
    const cookieConsentContainer = document.getElementById('cookieConsentContainer');
    const cookieConsentBanner = document.getElementById('cookieConsentBanner');
    const cookieConsentOverlay = document.getElementById('cookieConsentOverlay');

    // Check if the user has accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookieConsentAccepted');

    if (!hasAcceptedCookies) {
        
        cookieConsentBanner.style.display = 'block';
        cookieConsentOverlay.style.display = 'block';

    } else {
        
        cookieConsentContainer.style.display = 'none';
        cookieConsentBanner.style.display = 'none';
        cookieConsentOverlay.style.display = 'none';

        document.body.style.pointerEvents = 'auto';
    }

    // Handle the accept cookies button click
    document.getElementById('acceptCookies').addEventListener('click', function () {
        //use localStorage to remember the user's choice
        localStorage.setItem('cookieConsentAccepted', 'true');

        cookieConsentContainer.style.display = 'none';
        cookieConsentBanner.style.display = 'none';
        cookieConsentOverlay.style.display = 'none';

        document.body.style.pointerEvents = 'auto';
    });
});



//Validation for adding money for user account
document.getElementById('addMoney').addEventListener('click', async function (event) {
    event.preventDefault();

    let creditAmount = parseInt(document.getElementById('creditAmount').value);
    let promoCode = document.getElementById('promoCode').value;

    // Reset previous error messages
    document.getElementById('amountError').textContent = '';
    document.getElementById('promoCodeError').textContent = '';

    const response = await fetch('/validateAddMoney', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            creditAmount,
            promoCode
        })
    });

    const data = await response.json();

    
    // Handle validation errors
    if (data.errors) {
        for (const error of data.errors) {
            if (error.includes('Amount')) {
                document.getElementById('amountError').textContent = error;
            } else if (error.includes('negative')) {
                document.getElementById('amountError').textContent = error;
            } else if (error.includes('empty')) {
                document.getElementById('amountError').textContent = error;
            } else if (error.includes('promo code')) {
                document.getElementById('promoCodeError').textContent = error;
            }
        }
    } else {


        const addMoneyResponse = await fetch('/addMoney', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                creditAmount
            })
        });

        if (addMoneyResponse.ok) {
                // Money added successfully, redirect to /casino
                window.location.href = '/home';
            } else {
                // Handle errors from /addMoney route if needed
                console.error('Error during addMoney request:', addMoneyResponse.statusText);
        }

        
    }
    
});



//Event listener to check whether the new input username is taken or not
document.getElementById('newUsername').addEventListener('input', async function() {
    const newUsername = document.getElementById('newUsername').value;
    const confirmUsernameButton = document.getElementById('confirmUsername');
    const response = await fetch(`/checkUsername?username=${encodeURIComponent(newUsername)}`);
    const data = await response.json();

    
    const containsSpaces = /\s/.test(newUsername);

    // Check if the username is taken or contain spaces or empty string
    if (data.isUsernameTaken || containsSpaces || newUsername === '') {
        // Disable the "Confirm" button
        confirmUsernameButton.disabled = true;
    } else {
        // Enable the "Confirm" button
        confirmUsernameButton.disabled = false;
    }
});




//Function to display greeting depend on the time zone where usee located
function getTimeOfDay() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        return "morning";
    } else if (hour >= 12 && hour < 18) {
        return "afternoon";
    } else if (hour >= 18 && hour < 22) {
        return "evening";
    } else {
        return "night";
    }
}

function displayGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingElement = document.getElementById('greeting');

    if (greetingElement) {
        greetingElement.textContent = `Good ${timeOfDay}`;
    }
}

document.addEventListener('DOMContentLoaded', displayGreeting);




