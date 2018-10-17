const socket = io('/'); /* Connect to root  - this connects to the Server! */

document.addEventListener('DOMContentLoaded',() =>{

    socket.emit('_ping');

    socket.on('_pong',() =>{
        console.log("Got pong at client")
    });

    socket.on('_button1ClickedReceived',() =>{
        console.log("The server received the Button 1 click")
    });

    const positionOptions = {
        enableHighAccuracy:true,
        maximumAge:0
    };
    navigator.geolocation.getCurrentPosition(pos => {console.log(pos.coords)},err =>{console.error(err);},positionOptions)
});

function buttonClick() {
    socket.emit('_buttonclicked');
}

function buttonClick1() {
    socket.emit('_buttonclicked1');
}
