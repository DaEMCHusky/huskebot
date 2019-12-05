const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var rng = Math.floor((Math.random() * 10) + 1);
	if (rng == 1)  msg.reply("please don't bring out the whip...");
	if (rng == 2)  msg.reply("will you hurt me?");
	if (rng == 3)  msg.reply("where will you take m-me?");
	if (rng == 4)  msg.reply("just don't be too hard...");
	if (rng == 5)  msg.reply("in front of everyone?");
	if (rng == 6)  msg.reply("j-just not anything crazy");
	if (rng == 7)  msg.reply("I don't want want to be humiliated!");
	if (rng == 8)  msg.reply("can you wait until later?");
	if (rng == 9)  msg.reply("can you send this in the DM's please?");
	if (rng == 10) msg.reply("what have i done to you...");
}

module.exports.help = {
	name: "punish",
	desc: "**Punish** a disobedient bot"
}