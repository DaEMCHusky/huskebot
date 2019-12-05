const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var johns = {
		"a": [
			"The sun was in",
			"Someone touched",
			"The screen is in",
			"I'm not using",
			"I'm allergic to"
		],
		"b": [
			"my eyes",
			"my shoulder",
			"my controller",
			"the screen"
		],
		"generate": function() {
			var x = johns.a[Math.floor(Math.random() * johns.a.length)],
				y = johns.b[Math.floor(Math.random() * johns.b.length)];
			return `${x} ${y}`;
		}
	};
	
	msg.channel.send(johns.generate());
	
}

module.exports.help = {
	name: "john",
	desc: "Generates a John"
}