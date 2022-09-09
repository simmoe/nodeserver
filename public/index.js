const clientSocket = io()

setInterval(()=>{
    let d = new Date()
    console.log('sending on mesages from clients')
    clientSocket.emit('clients', d.getSeconds())
}, 1000)

clientSocket.on('ip', ip => {
    document.getElementById('ip').innerHTML = ip
})