const Discord = module.require('discord.js');

module.exports.run = (client,msg,newmsg,args,condition,pack) => {
	
	var uT = new Date();
	var uTQ = uT.getFullYear();
	var uTD = uT.getDate();
	var uTM = uT.getMonth() + 1;
	var uTH = uT.getHours();
	var uTX = uT.getMinutes();
	var uTY = uT.getSeconds();
	var uTZ = uT.getMilliseconds();
	let time = `(${uTD}/${uTM}/${uTQ} ${uTH}:${uTX}:${uTY}.${uTZ})`;
	
	let servers = [];
	if (condition == 'start') {
		for (i = 0; i < servers.length; i++) { 
			client.channels.get(servers[i]).send({embed:{
				color: 10359183,
				fields:[{
					name:"Start Up",
					value:`HuskeBot#6719 started up at: ${time}`
				}],
				author:{
					name:client.user.username,
					icon_url:`${client.user.avatarURL}`
				}
			}}).then().catch();
			if (i == servers.length - 1) return;
		}
		return
	}
	if (condition == 'joinServer') {
		client.channels.get(servers[0]).send({embed:{
			color: 10359183,
			description:`I joined ${msg.name} (${msg.id})`,
			author:{
				name:client.user.username,
				icon_url:`${client.user.avatarURL}`
			}
		}});
		return
	}
	if (condition == 'leaveServer') {
		client.channels.get(servers[0]).send({embed:{
			color: 10359183,
			description:`I got kicked from ${msg.name} (${msg.id})`,
			author:{
				name:client.user.username,
				icon_url:`${client.user.avatarURL}`
			}
		}});
		return
	}
	if (condition == 'join') {
		joinChan.send("",{embed:{
			color:10359183,
			description:`${msg} joined`
		}});
		return
	}
	
	if (condition == 'ban') {
		let joinChan = msg.guild.channels.find(ch => ch.name === 'huskelogs');
		if (!joinChan) return;
		joinChan.send("",{embed:{
			color:10359183,
			description:`${msg} banned`
		}}).then(m => {return});
	}
	if (condition == 'banRemoved') {
		let joinChan = msg.guild.channels.find(ch => ch.name === 'huskelogs');
		if (!joinChan) return;
		joinChan.send("",{embed:{
			color:10359183,
			description:`${msg} ban revoked`
		}});
		return
	}
	
	// message related commands
	
	let chan = `<#${msg.channel.id}>`;
	let msgCnt  = msg.content;
	let nmsgCnt = newmsg.content;
	var attach = msg.attachments.array()[0];
	
	if (msg.author.id === pack.user.bot) return;
	var logging = msg.guild.channels.find("name", "huskelogs");
	if (!logging) msg.guild.createChannel("huskelogs");
	logging = msg.guild.channels.find("name", "huskelogs");
	
	if (condition == 'edit') {
		if (newmsg.content === msg.content) return;
		logging.send('',{
			embed: {
				title:"Edited Message",
				url:msg.url,
				color: 10359183,
				fields: [
					{
						name: "Details:",
						inline:true,
						value:`
							ID: **${msg.id}**
							Chars: **${msg.content.length}** => **${newmsg.content.length}**
							Channel: ${chan}
							Time: **${time}**
						`
					},
					{
						name: "Other Details:",
						inline:true,
						value:`
							txt2spc: **${msg.tts}** => **${newmsg.tts}**
							system : **${msg.system}**
							webhook: **${msg.webhookID}**
							pinned : **${msg.pinned}** => **${newmsg.pinned}**
							special: **${msg.type}**
						`
					}
				],
				author: {
					name:msg.author.tag,
					icon_url:msg.author.avatarURL
				},	
			}
		}).then(msg => {
		
			logging.send(msgCnt);
			logging.send(nmsgCnt);
			if (attach) logging.send("",{files:[attach.proxyURL]});
		
		});
	}
	if (condition == 'delete') {
		logging.send('',{
			embed: {
				title:"Deleted Message",
				url:msg.url,
				color: 10359183,
				fields: [
					{	
						name: "Details:",
						inline:true,
						value:`
							ID: **${msg.id}**
							Chars: **${msg.content.length}**
							Channel: **${chan}**
							Time: **${time}**
						`
					},
					{
						name: "Other Details:",
						inline:true,
						value: `
							txt2spc: **${msg.tts}**
							system : **${msg.system}**
							webhook: **${msg.webhookID}**
							pinned : **${msg.pinned}**
							special: **${msg.type}**
						`
					}
				],
				author: {
					name:msg.author.tag,
					icon_url:msg.author.avatarURL
				},	
			}
		}).then(msg => {
			
			logging.send(msgCnt);
			if (attach) logging.send("",{files:[attach.proxyURL]});
		
		});
	}
}

module.exports.help = {
	name: "huskelogs",
	desc: "**Log**"
}
