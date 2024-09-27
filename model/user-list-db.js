let { ObjectId } = require("mongodb");

function StatusError(status) {

    let messages = {
        404: "Not found",
        400: "Bad request",
        500: "Internal server error"
    }

    let err = new Error(messages[status] || "Unknown error");
    err.status = status;

    return err;
}

let make_user_list = function (client, db_name, collection_name) {

    const collection = client.db(db_name).collection(collection_name);

    async function getUsers() {
        return await collection.find({}).toArray();
    }

    async function getUser(id) {
        let filter;
        try {
            filter = {id: new ObjectId(id)};
        } catch (e) {
            throw new StatusError(404);
        }
        
        let result = await collection.findOne(filter);

        if (!result) {
            throw new StatusError(404);
        }
        return result;
    }

    async function addUser(user) {
        await collection.insertOne(user);
        return user;
    }

    async function deleteUser(id) {
        let filter = {_id: new ObjectId(id)};
        let user = await collection.findOneAndDelete(filter);
        
        if (!user) {
            throw new StatusError(404);
        }

        return user;
    }

    async function count() {
        let list = await getUsers();
        return list.length;
    }

    async function clear() {
        await collection.deleteMany({});
    }

    async function isUsernameTaken(username) {
        const existingUser = await collection.findOne({ username: username });
        return existingUser;
    }
    
    // async function isEmailTaken(email) {
    //     const existingUser = await collection.findOne({ email: email });
    //     return existingUser;
    // }

    // async function getUserByEmailAndPassword(email, password) {
    //     const user = await collection.findOne({email, password});
    //     return user;
    // }
    async function getUserByEmail(email) {
        const user = await collection.findOne({email: email});
        return user;
    }

    // Add a new field 'online' to the user object to track whether the user is online
    // async function setUserOnlineStatus(id, online) {
    //     await collection.updateOne({ _id: new ObjectId(id) }, { $set: { online } });
    // }

    // async function getOnlineUsers() {
    //     return await collection.find({ online: true }).toArray();
    // }

    async function incrementUserAmountOfMoney(userId, amount) {
        //const userObjectId = new ObjectId(userId);
        // Find the user by ObjectId
        const user = await collection.findOne({ id: userId });

        if (!user) {
            throw new StatusError(404);
        }

        // Increment the credits
        user.credits = user.credits + amount;

        // Update the user in the database
        await collection.updateOne({ id: userId }, { $set: { credits: user.credits } });

        // Return the updated user
        return user;
    }

    async function decrementUserAmountOfMoney(userId, amount) {
        //const userObjectId = new ObjectId(userId);
        // Find the user by ObjectId
        const user = await collection.findOne({ id: userId });

        if (!user) {
            throw new StatusError(404);
        }

        // Decrement the credits
        user.credits = user.credits - amount;

        // Update the user in the database
        await collection.updateOne({ id: userId }, { $set: { credits: user.credits } });

        // Return the updated user
        return user;
    }

    async function updateUserName(userId, name) {
        // Find the user by ObjectId
        const user = await collection.findOne({ id: userId });

        if (!user) {
            throw new StatusError(404);
        }

        user.username = name;

        // Update the user in the database
        await collection.updateOne({ id: userId }, { $set: { username: user.username } });

        // Return the updated user
        return user;
    }

    return {
        clear,
        count,
        deleteUser,
        addUser,
        getUser,
        getUsers,
        isUsernameTaken,
        //isEmailTaken,
        //getUserByEmailAndPassword,
        // setUserOnlineStatus,
        // getOnlineUsers,
        incrementUserAmountOfMoney,
        decrementUserAmountOfMoney,
        updateUserName,
        getUserByEmail
    }
}

module.exports = make_user_list;