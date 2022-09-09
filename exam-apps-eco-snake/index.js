const express = require('express');
const { Server } = require('socket.io');
const PORT = 5050;

const app = express();
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hay respuesta del servidor')
  })

/*___________________________________________

1) Create an endpoint to GET a validation message to test if the endpoint is working
_____________________________________________ */

/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  });

// escuchar eventos
ioServer.on('directions', movementButton => {

    socket.broadcast.emit('directions ', movementButton => {

    })


});

/*___________________________________________

3) Create an endpoint to POST user score and print it
_____________________________________________ */
let userScore = {
    name: "juan" ,
    score: 30
}

async function sendScore (){
    const httpRequest = {
        method : "POST", 
        headers: {'Content-type: ': 'html' } ,
        
        body: {
            userScore
        }
    }

    await fetch (URL);

}
