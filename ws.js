
const io = require('socket.io')();

let connected_users = 0;

var allUsers = {};




function init(server) {

    io.attach(server);

    

    io.on('connection', function(socket){
        console.log('client connected',socket.id);

        connected_users++;

        io.emit('user', connected_users);

        socket.on('userConnected', (userData) => {
            const { userId, username, game } = userData;
        
            // Store the user in the allUsers object
            allUsers[userId] = {
              userId: userId,
              socketId: socket.id,
              username,
              game,
            };
        
            // Broadcast the updated list of connected users to all clients
            io.emit('updateUserList', Object.values(allUsers));
            console.log(allUsers);
          });


        socket.on('disconnect', function() {
            console.log("client disconnected", socket.id);
            connected_users--;

            io.emit('user', connected_users);
            
            const disconnectedUser = Object.values(allUsers).find((user) => user.socketId === socket.id);
            if (disconnectedUser) {
                // Remove the user from the allUsers object
                delete allUsers[disconnectedUser.userId];
                console.log(allUsers);

                // Broadcast the updated list of connected users to all clients
                io.emit('updateUserList', Object.values(allUsers));
                // console.log(Object.values(allUsers));
            }
        });
    });

    process.on('SIGINT', () => {
        // Emit the 'redirect' event with the desired path
        io.emit('redirect', '/login');
    
        // Shutdown the server
        process.exit(0);
    });

}


module.exports.init = init;
module.exports.io = io;
module.exports.allUsers = allUsers;