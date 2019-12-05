const Discord = module.require('discord.js');
const fs = module.require('fs');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	
	fs.readdir(`${pack.path}/h%/`,(err,files) => {
		if (err) console.error(err);
		var fFile = files.join("").split(".js").join("\n");
		msg.author.send("",{embed:{
			title:"Commands",
			color:0x673bb7
		}});
		msg.author.send(fFile);
	});
}

module.exports.help = {
	name: "help",
	desc: "**Help** for commands"
}