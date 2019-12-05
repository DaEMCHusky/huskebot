const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var con = pack.prefix + "Math";
	if (args[0] == "PI") msg.reply(Math.PI);
	if (args[0] == "Euler") msg.reply(Math.E);
	if (args[0] == "Gradient") msg.reply(args[1] * args[2]+ args[3]);
	if (args[0] == "Round") {
		if (!args[1]) msg.reply("Please input a number");
		else msg.reply(Math.round(args[1]));
	}
	if (args[0] == "Power") {
		if (!args[1] || !args[2]) msg.reply("Please input 2 numbers");
		if (args[1] && args[2]) msg.reply(Math.pow(args[1],args[2]));
	}
	if (args[0] == "SquareRoot") {
		if (!args[1]) msg.reply("Please input a number");
		else msg.reply(Math.sqrt(args[1]));
	}
	if (args[0] == "Absolute") {
		if (!args[1]) msg.reply("Please input a number");
		if (!args[1] < 0) msg.reply("Please input a viable number");
		else msg.reply(Math.abs(args[1]));
	}
	if (args[0] == "Ceiling") {
		if (!args[1]) msg.reply("Please input a number");
		else msg.reply(Math.ceil(args[1]))
	}
	if (args[0] == "Floor") {
		if (!args[1]) msg.reply("Please input a number");
		else msg.reply(Math.floor(args[1]));
	}
	if (args[0] == "Sine") {
		if (!args[1] || !args[2]) msg.reply("Please input 2 numbers");
		else msg.reply(Math.sin(args[1] * Math.PI / args[2]))
	}
	if (args[0] == "Cosine") {
		if (!args[1] || !args[2]) msg.reply("Please input 2 numbers");
		else msg.reply(Math.cos(args[1] * Math.PI / args[2]));
	}
	if (args[0] == "Minimum") {
		if (!args[1]) msg.reply("Please input a number");
		else msg.reply(Math.min(args.slice(1).join(",")));
			}
	if (args[0] == "Random") {
		if (!args[1]) msg.reply("Please input 2 numbers");
		else msg.reply(Math.floor((Math.random() * args[2]) + args[1]));
	}
}

module.exports.help = {
	name: "Math",
	desc: "Just Unless JS **Math**."
}