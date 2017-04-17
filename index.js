@@ -0,0 +1,57 @@
const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith("!" + str);
}

client.on('ready', () => {
    console.log("The bot is online!");
});

//Member greeting
client.on('guildMemberAdd', member => {
  const channel = client.channels.get('302927074640003073');
  channel.send(`Welcome to good ol' **dumpster**, ${member}!`);
});

/*
client.on('serverNewMember',(x,y)=>{
    if(x === client.servers.get('id',"SERVERID")) {
        client.sendMessage(x.channels.get('name','dumpster'),"Welcome to the dumpster " + y.mention()+"!");
    }
})
*/

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    if (commandIs("ping", message)) {
        message.channel.sendMessage("Pong. " + message.author.username + "\nServing " + client.users.count + " users.");
    }

    if (commandIs("lenny", message)) {
        if (args.length === 1) {
            message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
        }else if (args.length === 2){
            var user = args[2];
            message.reply(message, `( ͡° ͜ʖ ͡°)`);
        }
    }

    if (commandIs("doggo", message)) {
        var pics = [
            "https://images-ext-1.discordapp.net/.eJwdyLsOgjAAheF3aeJI7y2FxLjg4AAuLk4NqU25SCG0JqLx3a0O30n-8waP9Q5K0MW4lAgFM_tofcyCbUlGoLn53ofYurWdoJknFAWBVCmREYECV_iZIMsEMgRLiKGS-Q8ijNBCUqlV-kWRc8oxxqklS4WxyLWHw-IOvdOmNZ3Vo9329eVE6ioZjqIZRlq_zHaurrxxOypY9R9IoQGfL5M2NIQ.e8BrMYGw-EfKLP5TcrESHbwk8Oc?width=475&height=475",
            "http://i.imgur.com/mUIQRVy.jpg",
            "https://images.discordapp.net/.eJwtyDEOwyAMAMC_8ABsbEFRtj4hW1dCEImUxAhcqVLVv2fpjfc1736YyWyqbUwA6z6y9NUOlZ5qsVWkHiW1fdgsJyTVlLezXDqAkenhHRN7R5EJ3b_YU8AQOGJEmF_PvMwf265qfjf7sSIi.FRc7gULtAKVi9jurtRXHCUbhxxo",
            "https://images.discordapp.net/.eJwtyDEOwyAMAMC_8ABsbEFRtj4hW1dCEImUxAhcqVLVv2fpjfc1736YyWyqbUwA6z6y9NUOlZ5qsVWkHiW1fdgsJyTVlLezXDqAkenhHRN7R5EJ3b_YU8AQOGJEmF_PvMwf265qfjf7sSIi.FRc7gULtAKVi9jurtRXHCUbhxxo"
        ]
        message.channel.sendMessage(pics[Math.floor(Math.random()* pics.length)]);
    }

    if(commandIs("roll",message)) {
        var roll = Math.floor(Math.random()*6) + 1;
        message.reply("you rolled " + roll);
    }
});

client.login('MzAyOTI2MDI3NzQ1Nzg3OTE0.C9Qppg.k0lNygcDR_FGq2XF79Z4W86ITl8');
\ No newline at end of file
