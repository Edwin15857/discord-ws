const WebSocket = require("ws");
const config = require("./config.json");
const { opCode, properties, intents } = require("./Utils/Constants.js");
const IntentsCalculator = require("./Utils/IntentsCalculator.js");

/* A function that is called immediately after it is defined. It is used to keep the runtime environment alive. */
(function keepalive() {
    setTimeout(keepalive, 0x7FFFFFFF);
})();

/* Setting the server to the Discord API Gateway. */
let server = "wss://gateway.discord.gg/?v=6&encoding=json";

/* Creating a new WebSocket connection to the server. */
const ws = new WebSocket(server);

/* Setting the token to the token in the config.json file. */
token = config.BOT_TOKEN;

/* Calculates the intents of the bot. */
const myIntents = IntentsCalculator.Calculate([intents.GUILD_MESSAGES, intents.MESSAGE_CONTENT, intents.DIRECT_MESSAGES]);

/* Listening for the connection to be open. */
ws.on('open', function open() {
    console.log('Connected to Discord Gateway:)')
    /* Sending the identify payload to the Discord API. */
    identify(token);
})

/* Listening for a message from the Discord API. */
ws.on('message', function incoming(data) {
    /* Destructuring the payload. */
    let payload = JSON.parse(data);
    const { d, t: event, op } = payload;

    /* Checking the opcode of the payload and then doing something based on the opcode. */
    switch (op) {
        case opCode.DISPATCH:
            console.log("EventDispatched:", event)
            break;
        case opCode.HELLO:
            heartbeat(d.heartbeat_interval);
            identify(token);
            break;
        case opCode.RECONNECT:
            console.log("reconnecting required.")
            reconnect(token);
            console.log("reconnected successfuly.")
            break;
        case opCode.HEARTBEAT_ACK:
            console.log("heartbeat acknowledged.")
            break;
        case opCode.INVALID_SESSION:
            console.log("op code 9: invalid session. Failure response to Identify or Resume or invalid active session");
            reconnect();
            break;
    }

    /* Checking the event type and then doing something based on the event type. */
    switch (event) {
        case 'MESSAGE_CREATE':
            let author = d.author;
            let content = d.content;
            console.log(`${author.username} said ${content}`);
            break;

        case 'GUILD_CREATE':
            console.log(d);
            break;

        case 'GUILD_DELETE':
            console.log(d);
            break;
        default:
            break;
    }
})

/**
 * It sends a heartbeat to the server every interval
 * @param interval - The interval in milliseconds to send the heartbeat.
 */
function heartbeat(interval) {
    setInterval(() => {
        ws.send(JSON.stringify({ op: opCode.HEARTBEAT, d: null }))
    }, interval)
}

/**
 * It sends a message to the Discord API to identify the bot
 * @param [token] - The token of the bot.
 */
function identify(token = '') {
    ws.send(JSON.stringify({ op: opCode.IDENTIFY, d: { token, intents: myIntents, properties } }))
}

/**
 * It will attempt to reconnect to Discord every 3 seconds.
 * @param botToken - The token of the bot you want to use.
 */
async function reconnect(botToken) {
    setInterval(() => {
        identify(botToken);
    }, 3000)
}