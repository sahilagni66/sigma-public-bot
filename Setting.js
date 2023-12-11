const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '2348039607375' ; // Add Your Number without +
//global.mongodb = process.env.MONGODB_URI || "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority" ; // put mongodb key here
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedai0010@outlook.com' ; 
global.github = 'https://github.com/Maher-Zubair/SIGMA-MD' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos' //add correct timezone or leave it same , otherwise you get erros
global.gurl = 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1' ; 
global.sudo =  process.env.SUDO || "2348039607375" ; // Do not change it
global.devs = "2348039607375"; //Dont change it From here
global.mztit = process.env.MZTIT ||"ᴀꜱᴛʀᴏ ʟᴇɢᴇɴᴅ", // add your title here
global.Gname = process.env.GNAME ||"ᴀꜱᴛʀᴏ ʟᴇɢᴇɴᴅ",
global.zyt = process.env.ZYT || 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/CmY0THcJCUYEGxLJulhcRV",
global.website = 'http://lnkiy.in/SIGMA-MD-WEB' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/03e49e6e2057568db8926.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SIGMA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJWZm5CKzRDRWo5c0ROR21ZeGxBN21YalR2UzRpRFQ3N1NRdk4vWnVFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllTSHYrSGxJRUVGNngwMlB0cVJ2R1JVMkJkUnBRNnh0dlVZaHBRMG9SUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQlFZNXRYV1FpYzF4b1hrbWh2N210VXk3NVdOYnBLblhsM0dVL0hiRVZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRWdZaUE2TlZGYkk5TkxDYzZnUFZpV3I1eTRmd1NHU2ZMdElDaVNtY0ZJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBU2FWMVpzQVg3VnljWkpSQnZqMTJKQWRjVkFuSVVuL0oza3A5Q3pZVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9zSWU3VGVmWlBqN1ZxSlYvVmRQS2loTUdZTjQzYnBCdldmRUhtQmxsM2s9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTEtHNlBRM3dsK2M2TlllU3N6QTB3d3JkMGE0WldCbTlwV2dGM0c1d3pPcXpocndKRFFzTitkZ3VieFliejlwMW5mWkV4UFJzdjgwYUNkZGpqeStCZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjc5LCJhZHZTZWNyZXRLZXkiOiJlcEo2b2pvcFg5L2VTSzViOTFmN3p1aEpNdlhYNnNhQVdxWTZKbXo4bVYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHdVhoTWhwX1FyT2d0akNFNW1KOVp3IiwicGhvbmVJZCI6ImJkMmQzODRhLTQzNTUtNGI1NC1hNGViLTg1NjViNjYwZDA5ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSC9HeTdVaWhaL0oyU2wxaEpQMXd5UnB6SmM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlmYW1qcWw4c2pCWFYyenlmSW9xNjEreWpsMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ092NXVKb0JFT3V0MjZzR0dBVT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOXFjNlh0YlVQV09hZGcxZW5MMXBIMDdHdnFwSFV5Uy9hNXRLeW5lUHpUdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMGRGcGJrcHJWYnF1MmxzbGRvWGVyTWJnUXltOG50QXV2cjd2VTV1cHhHb0Vra0kyalAwM0ZkNHBRTzdTSFJEeVRJZmkzOHdLRElWcHh5VzJaemxmQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkZTcFFkdWMzeUVjVStocGd5ejVhQmpiVWgzVkZISGorWUFyM0tUditDRzlQNXU1TUNiVlgxSksrcG1xNkVVbWR4Y0NESVIzdzlUZFpWNi83ZEd1akRnPT0ifSwibWUiOnsiaWQiOiIyMzQ5MDI3ODYyMTE2OjE1QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjc4NjIxMTY6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmFuT2w3VzFEMWptbllOWHB5OWFSOU94cjZxUjFNa3YydWJTc3AzajgwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjI4NzA4Nn0=',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'ᴀꜱᴛʀᴏ ʟᴇɢᴇɴᴅ',  // add the botname you want
  ownername:  process.env.OWNER_NAME || `ᴀꜱᴛʀᴏ ʟᴇɢᴇɴᴅ`, // add your name
  author:  process.env.PACK_AUTHER || 'ᴀꜱᴛʀᴏ ʟᴇɢᴇɴᴅ', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false', // if it true it automatically views status and send status in your inbox
  packname:  process.env.PACK_NAME || "sɪɢᴍᴀ ᴹᴰ" , 
  autoreaction: process.env.AUTO_REACTION || 'false', // if it true it will react to all messages
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', // it will show always online, false it if you dont want
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true', // it will read all your messages, false it if you dont want
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false", // if true it will disable your pm
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  //levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com,fb.com,instagram.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7", // add your remove bg key if you have it
  caption :process.env.CAPTION || "\t*⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ ᴀꜱᴛʀᴏ ᴹᴰ* ",  
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' , // add your openai key if you have it
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'SIGMA_MD',
  menu : process.env.MENU || '', // Not Available in current Version
  WORKTYPE: process.env.WORKTYPE || 'public' // if private only you can use your bot, if public everyone use your bot
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
