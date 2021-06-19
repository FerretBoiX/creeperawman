const http = require("http");
const express = require("express");
const app = express();
const Discord = require("discord.js");
const TOKEN = process.env.TOKEN;

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
	console.log("Listening on Port 3000");
});

var random;
var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("ready");
});
bot.on("message", function(message) {
	if(message.content.startsWith("אני ")) {
	   message.channel.send("היי " + message.content.substring(4) + ", אני אבא");
	} else if(message.content == "nick now pls reset all") {
	   message.guild.members.cache.forEach(member => member.setNickname(member.user.username));
	} else if (message.content === "Creeper") {
    message.channel.send({
      file:
        "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c2f7.png"
    });
    return message.channel.send("Aw Man");
  }
  else if (message.content === "So we back in the mine") {
    return message.channel.send("Got our pickaxe swinging from side to side");
  }
  else if (message.content === "Side side to side") {
    return message.channel.send("This task a grueling one");
  }
  else if (message.content === "Hope to find some diamonds tonight night night") {
    return message.channel.send("Diamonds tonight");
  }
  else if (message.content === "Heads up") {
    return message.channel.send("You hear a sound");
  }
  else if (message.content === "Turn around and look up") {
    return message.channel.send("Total shock fills your body");
  }
  else if (message.content === "Oh no it's you again") {
    return message.channel.send("I can never forget those eyes eyes eyes");
  }
  else if (message.content === "Eyes eyes eyes") {
    return message.channel.send("Cause baby tonight");
  }
  else if (message.content === "The creepers tryin to steal all our stuff again") {
    return message.channel.send("Cause baby tonight");
  }
  else if (message.content === "You grab your pick shovel and bolt again") {
    return message.channel.send("And run run until it's done done");
  }
  else if (message.content === "Until the sun comes up in the morn") {
    return message.channel.send("Cause baby tonight");
  }
  else if (message.content === "The creepers tryin to steal all our stuff again") {
    return message.channel.send("Just when you think you're safe");
  }
  else if (message.content === "Overhear some hissing from right behind") {
    return message.channel.send("Right right behind");
  }
  else if (message.content === "That's a nice life you have") {
    return message.channel.send("Shame it's gotta end at this time time time");
  }
  else if (message.content === "Time time time time") {
    return message.channel.send("Blows up");
  }
  else if (
    message.content === "Then your health bar drops and you could use a one up"
  ) {
    return message.channel.send("Get inside don't be tardy");
  }
  else if (message.content === "So now you're stuck in here") {
    return message.channel.send("Half a heart is left but don't die die die");
  }
  else if (message.content === "Die die die") {
    return message.channel.send("Cause baby tonight");
  }
  else if (message.content === "The creepers tryin to steal all our stuff again") {
    return message.channel.send("Cause baby tonight");
  }
  else if (message.content === "You grab your pick shovel and bolt again") {
    return message.channel.send("And run run until it's done done");
  }
  else if (message.content === "Until the sun comes up in the morn") {
    message.channel.send("Cause baby tonight");
    return message.channel.send(
      "The creepers tryin to steal all our stuff again"
    );
  }
});

bot.login(TOKEN);
