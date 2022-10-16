# discord-ws
**Easily establish connections to Discord gateways without worrying about making your own event triggers!**

## Setting Up
1. Create a .env file to your project with the following content.
```
BOT_TOKEN="YOUR_BOT_TOKEN_HERE"
```
2. Specify your intents as an array in line 20 of [index.js](./index.js). Use the Intents Calculator to calculate the needed permissions for you to use the Discord Gateway properly. You can access the available intents by typing `intents.` followed by the required intents for your bot to work using this gateway. Example:
```js
/* Calculates the intents of the bot. */
const myIntents = IntentsCalculator.Calculate([intents.GUILD_MESSAGES, intents.MESSAGE_CONTENT, intents.DIRECT_MESSAGES]);
```
which is actually quite similar to how Discord.js receives intents.
```js
const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES]
});
```

3. On line 59 - 75 is where you can receive event triggers. Make sure you have the correct intents. Else certain events wont be emitted to you. You can add more events if you need it. Here is the [list of gateway events that are available to be received.](https://discord.com/developers/docs/topics/gateway-events#receive-events) Example:
```js
...
case 'MESSAGE_DELETE':
    console.log(d);
    break;
case 'VOICE_STATE_UPDATE':
    console.log(d);
    break
```

4. All the events have to be in upper case. Replace spaces with underscores. Example:
```diff
- Voice State Update
+ VOICE_STATE_UPDATE

- Message Delete
+ MESSAGE_DELETE

- Message Reaction Add
+ MESSAGE_REACTION_ADD
```

## TO DO LIST:
- [ ] Code Beautify
- [ ] Adding more features (feel free to suggest them by opening a new issue and tagging it as suggestion)

## Notes:
**This works almost just like Discord.js except it looks more complicated and messy. It will be optimized and will look simpler in the future, but for now, it is what it is:)**

## discord-ws Developer:
- **Edwin Ng:**
    - 💻Portfolio Website: https://notedwin.co
    - 🎥Dev YouTube Channel: https://link.notedwin.co/tutorials-youtube
