const express = require('express') 
const app = express()
const ip = require ('ip')

const io = require('socket.io')

app.use('/', express.static('public'))

app.get('/endpoint', (req, res) => {
    console.log('Serveren fik besøg på /endpoint')
    res.send('velkommen til mit endpoint')
})
app.get('/m5', (req, res) => {
    console.log('Serveren fik besøg fra en m5')
    res.send('velkommen til mit endpoint')
})

const server = app.listen(4000, ()=>{
    console.log('Server lytter på localhost:4000')
})

const serverSocket = io(server)

serverSocket.on('connection', socket => {
    socket.emit('ip', ip.address())
    console.log('New client on webscoket')
    socket.on('clients', message => {
        console.log('got message: ' + message)
    })
})

