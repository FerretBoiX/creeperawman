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
	} elif(message.content == "nick now pls reset all") {
	   message.guild.members.cache.forEach(member => member.setNickname(member.user.username));
	}
});

bot.login(TOKEN);
