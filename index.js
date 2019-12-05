require('dotenv').config();
const cheerio = require('cheerio');
const request = require('request');
const compile = require('compile-run');
const Discord = require('discord.js');
const fs	  = require('fs');
const pack    = require("./package.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
fs.readdir("./h%/",(err,files) => {
	if (err) console.error(err);
	let jsFiles = files.filter(f => f.split(".").pop() == "js");
	jsFiles.forEach((f,i) => {
		let props = require(`./h%/${f}`);
		client.commands.set(props.help.name,props);
	});
});
client.scripts  = new Discord.Collection();
fs.readdir("./scripts/",(err,files) => {
	if (err) console.error(err);
	let jsFiles = files.filter(f => f.split(".").pop() == "js");
	jsFiles.forEach((f,i) => {
		let props = require(`./scripts/${f}`);
		client.scripts.set(props.help.name,props);
	});
});

function run(directory,runName,client,msg,newmsg,args,condition) {
	let cType,runC;
	if (directory == "s") runC = client.scripts.get(runName);
	if (directory == "c") runC = client.commands.get(runName);
	if (!runC) return;
	runC.run(client,msg,newmsg,args,condition,pack);
}

var uT = new Date();
var uTQ = uT.getFullYear();
var uTD = uT.getDate();
var uTM = uT.getMonth() + 1;
var uTH = uT.getHours();
var uTX = uT.getMinutes();
var uTY = uT.getSeconds();
var uTZ = uT.getMilliseconds();
const lastUpdate = `${uTD}/${uTM}/${uTQ} ${uTH}:${uTX}:${uTY}.${uTZ}`;

// when client is ready:
client.on('ready', (msg) => {
	console.log(`Logged in as ${client.user.tag}!`);
	run("s",'Status',client,pack);
	// client.fetchUser('308113331162578956').then(user => {user.send("JIM HANG")}).catch(console.error);
	// run("s",'huskelogs',client,'','','','start');
	// client.channels.get('552762688304840716').send(":moderatepain:");
});

// when client gets an error
client.on("error", (error) => {
	client.channels.get('608643214685241375').send(`error ${error}`);
	console.error(error);
});

// when client tries to reconnect
client.on("reconnecting", function(){
    console.log(`Connecting as huskeBot#6719`);
});

client.on('message', msg => {
	if (msg.author.bot || msg.channel.type == "dm" || msg.system || msg.channel.id == '552765019297677322')
        return;
	var MsgChannel = client.channels.get('610978265842057226');
	MsgChannel.send(`**${msg.author.tag} (${msg.author.id})** <#${msg.channel.id}>, ${msg.content}`);
	
	run("s",'swear',client,msg,'',msg.content,'');
	
	if (msg.content.startsWith(pack.prefix)) {
		let msgA = msg.content.split(/\s+/g);
		run("c",msgA[0].slice(pack.prefix.length),client,msg,'',msgA.slice(1),'');
	}
	else {
		if (msg.content.includes("https://discord.gg/") && msg.guild.id == '552761442407940096') {
			msg.delete()
				.then(msg => {msg.reply("no promotions.")})
				.catch();
		}
		if (msg.content == `<@${msg.author.id}>`) {
				msg.channel.send(`<@${pack.user.bot}>`)
				return
			}
		if (msg.content.toLowerCase() == "ayy") {
				msg.channel.send("lmao")
				return
			}
		if (msg.content.toLowerCase() == "owo") {
			msg.channel.send("What's this?")
			return
		}
		if (msg.content.toLowerCase() == "i like trucks and moster trucks") {
			msg.channel.send("walter")
			return
		}
	}
});
client.on('messageUpdate', (msg, newmsg) => {
    if (msg.channel.id == '552765019297677322')
        return;
	let msgA = msg.content.split(/\s+/g);
	let args = msgA.slice(1);
	let args2 = msg.content;
	let msgC = msgA[0];
	run("s",'swear',client,msg,newmsg,args2,'');
	run("s",'huskelogs',client,msg,newmsg,args,'edit');
});
client.on('messageDelete', (msg) => {
	let msgA = msg.content.split(/\s+/g);
	let args = msgA.slice(1);
	let msgC = msgA[0];
	run("s",'huskelogs',client,msg,msg,args,'delete');
});
/*
client.on('guildMemberAdd', (member) => {
	run("s",'huskelogs',client,member,'','','join');
});

client.on("guildBanAdd", function(guild, user){
    run("s",'huskelogs',client,user,'','','ban');
});
client.on("guildBanRemove", function(guild, user){
    run("s",'huskelogs',client,user,'','','banRemove');
});
client.on("guildCreate", guild => {
	run("s",'huskelogs',client,guild,'','','joinServer');
});
client.on("guildDelete", guild => {
	run("s",'huskelogs',client,guild,'','','leaveServer');
});
*/

client.login(pack.token);
