const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! (${c.user.tag})`); // 起動した時に"Ready!"とBotの名前をコンソールに出力する
});

client.on(Events.guildMemberAdd, member => {
    if (member.guild.id !== "1137934839258030180") return; // 指定のサーバー以外では動作しないようにする
    member.guild.channels.cache.get("1138013244213182517").send(`${member.user}が参加しました！`);
});

client.on(Events.guildMemberAdd, member => {
    if (member.guild.id !== "1137934839258030180") return; // 指定のサーバー以外では動作しないようにする
    member.guild.channels.cache.get("1138013244213182517").send(`ようこそ！`);
});

client.on("guildMemberRemove", member => {
    if (member.guild.id !== "1137934839258030180") return; // 指定のサーバー以外では動作しないようにする
    member.guild.channels.cache.get("1138013244213182517").send(`${member.user.tag}が退出しました。`);
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return; // Botには反応しないようにする
    if (message.guild.id !== "1137934839258030180") return; // 指定のサーバー以外では動作しないようにする
    if (message.content.includes("ハロー")) {
        message.channel.send("ハローボットだよ。");
    }
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return; // Botには反応しないようにする
    if (message.guild.id !== "1137934839258030180") return; // 指定のサーバー以外では動作しないようにする
    if (message.content.includes("おはよう！")) {
        message.channel.send("おはよう♪");
    }
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return; // Botには反応しないようにする
    if (message.guild.id !== "1137934839258030180") return; // 指定のサーバー以外では動作しないようにする
    if (message.content.includes("きも")) {
        message.channel.send("は、死ね");
    }
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return; // Botには反応しないようにする
    if (message.guild.id !== "1137934839258030180") return; // 指定のサーバー以外では動作しないようにする
    if (message.content.includes("おやすみ")) {
        message.channel.send("バイバイ〜");
    }
});

client.login("MTEzNzkzNDAxMjc4MzAwNTc2MA.G2ZGMj.25u4gZ6b8_LJyWbByKgl72tl05hK0jc8ldo_OQ");