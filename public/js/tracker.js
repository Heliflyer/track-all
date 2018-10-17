const socket = io('/'); /* Connect to root  - this connects to the Server! */

document.addEventListener('DOMContentLoaded',() =>{

    socket.emit('_ping');
    socket.on('_pong',() =>{
        console.log("Got pong at client")
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
