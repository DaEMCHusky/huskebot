const Discord = module.require('discord.js');
var timeSinceUpdate = 0;

module.exports.run = (client,pack) => {
	var dte = new Date;
	var uTH = dte.getHours();
	timeSinceUpdate += 1;
	
	function update() {
		if (client.user) {
			let ActRNG = Math.floor((Math.random() * 2));
			if (uTH >= 5 && uTH <= 7) client.user.setActivity(pack.activity.listening[ActRNG],{type:'LISTENING'});
			if (uTH >= 8 && uTH <= 20) client.user.setActivity(pack.activity.playing[ActRNG], {type:'PLAYING'});
			if (uTH >= 21 || uTH <= 4) client.user.setActivity(pack.activity.watching[ActRNG],{type:'WATCHING'});
		}
		setTimeout(update,60000);
	}
	update();
}

module.exports.help = {
	name: "Status",
	desc: "Change Status"
}