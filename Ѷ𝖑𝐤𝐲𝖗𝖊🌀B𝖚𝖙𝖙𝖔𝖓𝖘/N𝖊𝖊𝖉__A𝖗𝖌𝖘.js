("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
exports.N𝖊𝖊𝖉__A𝖗𝖌𝖘 = async (𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝖀𝖘𝖆𝖌𝖊) => {
let usedUser = require(`../Ѷ𝖑𝐤𝐲𝖗𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
let ᴍꜱᴇᴄ = require("parse-ms");
let ʙᴏᴛ_ᴜꜱᴇᴅ;
let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
await usedUser.findOne(
{
User: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗);
if (!ꜱᴇʀᴄ) {
ʙᴏᴛ_ᴜꜱᴇᴅ = 0
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds
}});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await 𝖍𝖆𝖜ӄ.sendPresenceUpdate("composing", Ѷ𝖑𝐤𝐲𝖗𝖊.chatID);
await 𝖍𝖆𝖜ӄ
.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender] },
image: { url: "./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊.png" },
caption: `🕊️ *ɴᴀᴍᴇ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}

${𝖀𝖘𝖆𝖌𝖊}`,
footer: "*⦓ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP_🌍",
buttonText: { displayText: prefix + "HELP_🌍" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Ѷ𝖑𝐤𝐲𝖗𝖊,
}
)
.catch((e) => console.log(e));
let ʀᴇᴀᴄᴛionMessage = {
ʀᴇᴀᴄᴛ: {
text: `⚡`,
key: Ѷ𝖑𝐤𝐲𝖗𝖊.key,
},
};
return await 𝖍𝖆𝖜ӄ
.sendMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.chatID, ʀᴇᴀᴄᴛionMessage)
.catch((e) => console.log(e));
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// // ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
// require("../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
// let Fs = require("fs");
// let ᴍꜱᴇᴄ = require("parse-ms");
// let ʀᴀɴᴅᴏᴍᴄ = require("random-material-color");
// let ʀᴀɴᴅᴏᴍᴋ = ʀᴀɴᴅᴏᴍᴄ.getColor();
// let { registerFont, createCanvas, loadImage } = require("canvas");
// let usedUser = require(`../Ѷ𝖑𝐤𝐲𝖗𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
// exports.N𝖊𝖊𝖉__A𝖗𝖌𝖘 = async (𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝖀𝖘𝖆𝖌𝖊) => {
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Heart_Of_Everything/Heart_Of_Everything.ttf",{ family: "Heart_Of_Everything" });
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Housttely_Signature/Housttely_Signature.ttf",{ family: "Housttely_Signature" });
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Fall_is_Coming/Fall_is_Coming.ttf", {family: "Fall_is_Coming",});
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Slouchy_Brush/Slouchy_Brush.ttf", {family: "Slouchy_Brush",});
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Kashmir_Rosy/Kashmir_Rosy.otf", {family: "Kashmir_Rosy",});
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Japanese/Japanese.ttf", {family: "Japanese",});
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Honeybee/Honeybee.ttf", {family: "Honeybee",});
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Angeles/Angeles.ttf", {family: "Angeles",});
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Shalma/Shalma.otf", { family: "Shalma" });
// registerFont("./Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Aquire/Aquire.otf", { family: "Aquire" });
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// let W = 1280;
// let H = 720;
// let ᴄᴀɴᴠᴀꜱ = createCanvas(W, H);
// let 𝖈𝖔𝖓𝖙𝖊𝖝𝖙 = ᴄᴀɴᴠᴀꜱ.getContext("2d");
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = ʀᴀɴᴅᴏᴍᴋ;
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(0, 0, W, H);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 70pt Kashmir_Rosy";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textAlign = "center";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textBaseline = "top";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// let ᴛᴇxᴛ = "❣️ Hello There ❣️\n" + (Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ");
// let ᴛᴇxᴛᴡɪᴅᴛʜ = 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.measureText(ᴛᴇxᴛ).W;
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(600 - ᴛᴇxᴛᴡɪᴅᴛʜ / 2 - 10, 170 - 5, ᴛᴇxᴛᴡɪᴅᴛʜ + 20, 120);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText(ᴛᴇxᴛ, 600, 170);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 50pt Aquire";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText("Valkyrie.com", 650, 600);
// loadImage("./Src/Ѷ𝖑𝐤𝐲𝖗𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘.png").then(async (Cmg) => {
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 140, 515, 200, 200);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 980, 515, 200, 200);
// let CmgB = ᴄᴀɴᴠᴀꜱ.toBuffer("image/png");
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// Fs.writeFileSync("./Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Valkyrie_com.png", CmgB).then(async () => {
// let ʙᴏᴛ_ᴜꜱᴇᴅ;
// let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
// await usedUser.findOne(
// {
// User: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
// },
// async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
// if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗);
// if (!ꜱᴇʀᴄ) {
// ʙᴏᴛ_ᴜꜱᴇᴅ = 0;
// ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0;
// } else {
// let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
// ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
// ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds;
// }
// }
// );
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await 𝖍𝖆𝖜ӄ.sendPresenceUpdate("composing", Ѷ𝖑𝐤𝐲𝖗𝖊.chatID);
// await 𝖍𝖆𝖜ӄ
// .sendMessage(
// Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
// {
// contextInfo: { mentionedJid: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender] },
// image: { url: "./Valkyrie_com.png" },
// caption: `🕊️ *ɴᴀᴍᴇ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}

// ${𝖀𝖘𝖆𝖌𝖊}`,
// footer: "*⦓ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
// buttons: [
// {
// buttonId: prefix + "HELP_🌍",
// buttonText: { displayText: prefix + "HELP_🌍" },
// type: 1,
// },
// ],
// headerType: 4,
// },
// {
// quoted: Ѷ𝖑𝐤𝐲𝖗𝖊,
// }
// )
// .then(Fs.unlinkSync("./Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Valkyrie_com.png"))
// .catch((e) => console.log(e));
// let ʀᴇᴀᴄᴛionMessage = {
// ʀᴇᴀᴄᴛ: {
// text: `⚡`,
// key: Ѷ𝖑𝐤𝐲𝖗𝖊.key,
// },
// };
// return await 𝖍𝖆𝖜ӄ
// .sendMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.chatID, ʀᴇᴀᴄᴛionMessage)
// .catch((e) => console.log(e));
// });
// });
// };
// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// // ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
