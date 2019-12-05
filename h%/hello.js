const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	msg.channel.send("Hello!")
};

module.exports.help = {
	name: "hello",
	desc: "Says **hello**!"
}