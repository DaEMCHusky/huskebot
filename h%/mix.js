const Discord = module.require('discord.js');
const fs = module.require('fs');

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array.join("");
}

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	
	var sayVar = shuffle(msg.content.split("").slice(6));
	msg.channel.send({embed: {
		color: 0x673bb7,
		description:`${sayVar}`,
		author: {
			name: `${msg.author.tag}`,
			icon_url: `${msg.author.avatarURL}`
		},
	}});
}

module.exports.help = {
	name: "mix",
	desc: "**Mix** letters into gibberish"
}