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

var member1;
var member2;

bot.on("ready", function() {
	console.log("ready");
});

bot.on("message", function(message) {
	
	if(message.author.bot) return;
	if(message.content.startsWith("אני ")) {
		message.channel.send("היי " + message.content.substring(4) + ", אני אבא");
	} else if(message.mentions.has(bot.user.id)) {
		message.channel.send("היי " + "<@" + message.author.id + ">" + ", אני אבא");
	} else if(message.content.startsWith("!member1 ")) {
		member1 = message.content.substring(9);
	} else if(message.content.startsWith("!member2 ")) {
		member2 = message.content.substring(9);
	};
	
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
	
	let member = newPresence.member;
	if (member.id === member1 || member.id === member2) {
		const channel = "864952835698720788";
		message.guild.members.cache.forEach(member => {
			if(member.id === member1 || member.id === member2 || !member.voice.channel) return;
			member.voice.setChannel(channel);
		});
	};
	
});
	
bot.login(TOKEN);
