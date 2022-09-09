const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

let character = {
    x: 0,
    y: 0
};
let whiteMouse = {
    x: 50,
    y: 50
};
let speed = 10;

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    character.x = windowWidth / 2;
    character.y = windowHeight / 2;
}

function draw() {
    background(0, 50);
    textSize(64);
    text('🐍', character.x - 25, character.y);
    textSize(24);
    text('🐁', whiteMouse.x, whiteMouse.y);
    eatsMouse();
}


function eatsMouse() {
    if (dist(character.x, character.y, whiteMouse.x, whiteMouse.y) < 50) {
        putMouseRandomPosition();
    }
}

function putMouseRandomPosition() {
    whiteMouse.x = random(50, windowWidth - 50);
    whiteMouse.y = random(50, windowHeight - 50);
}

// switch para cambiar la posicion
io.on(socket, () => {
switch (key) {
    case 1:
        "UP"
        character.y++
        break;
        case 1:
            "DOWN"
            character.y--
            
            break;
            case 1:
                "RIGTH"
                character.x++

                break;

                case 1:
                    "LEFT"
                    character.x--
                    
                    break;
    default:
        break;
}

})

// enviar puntaje
let mouseEaten = {
    score: 30
}

async function sendScore (){

    const httpRequest = {
        method : "POST", 
        headers: {'Content-type: ': 'html' }, 

        body: {
            data : mouseEaten.score, 

        }

    }

    await fetch (URL);

}

socket.on('movementButton ', movementButton => {

})
/*___________________________________________

1) Include the socket method to listen to events and change the character position.
You may want to use a Switch structure to listen for up, down, right and left cases.
_____________________________________________ */


/*___________________________________________

2) Include the fetch method to post each time the snake eats a mouse
_____________________________________________ */
