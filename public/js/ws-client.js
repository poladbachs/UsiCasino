const ws = function () {
    // assumes the socket.io client library is loaded in the HTML file
    const socket = io();

    // Emit the userConnected event when the user connects
    socket.emit('userConnected', { userId: document.querySelector(".emailholder").innerHTML, username: document.querySelector(".usernameholder").innerHTML, game: 'none'});

    // Listen for the updateUserList event to update the list of connected users
    socket.on('updateUserList', function (connectedUsers) {
        // Assuming connectedUsers is an array of user objects, update your UI accordingly
        document.querySelector("#counter").innerHTML = `Online users: ${connectedUsers.length}`;
        // You can also update any other UI components based on the connectedUsers array
    });

    socket.on("disconnect", (reason) => {
        console.log(reason);
    });

    socket.on('redirect', function () {
        // Redirect to the "/login" page
        window.location.href = '/login';
    });
}();
