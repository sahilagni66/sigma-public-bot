const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '2348039607375' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority" ; // put mongodb key here
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
  sessionName: process.env.SESSION_ID || 'SIGMA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVUWC9XNm9Xb01xdEk5MHBQbmR5K2NhenRyT1Y0b0h6RDNGVWl2VlkyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEdxWFlFeHRydjBBYko4MmZhZS96dkhJcTJjM2xDYjdXaHEyMWcyanhXbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRFM4eThBT01FM2lqdytEbFByTHh4N2ptOWJXcXhaOHBxUUMwOVBXam4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQTRJcFJaR0huZ3Rldmp6TzdzRVFPY1Q3VXp5aEVneXN2VGxxS0JOT25vPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFbmdHcmh5dVZlTml6ZHZQUmVhK05aV2w1ZzhZRG8wVFJlbHRWKzN0Mms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhacE9icTYrMUVBemtmbVVxZDlJZGRWZnlZSThFZVhMZHZmYnlCN3pIZ009In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZllKeVdyOTVIUlBjSGpvSTJFR0xpV0Y4blp0bEFia1A4bEpPZWsyOHRGYkRReGxyN2xYTG5yYTJsQVJFMDZsbmZlSUNlT3pyc0pSSzk1M1JkZUFpdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjMwLCJhZHZTZWNyZXRLZXkiOiJ6aENzd3JKNjlGVzV4LysrZHRZRHIzUHJSYWNhbGRxcFFGcU04bVlQN200PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjcFVSdzBhMFI2T0EyRXRaZ3Q3N1ZnIiwicGhvbmVJZCI6IjA4ZmQ3YzA2LTE4NTgtNDQ0YS1hNjMxLTYyYzZkNTlkYjg5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaQ0VNYkdhOG9WTkc5dXdMR24zRjhzRXZVcXM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRkeDdSV09DTkZFaVpRMGw1YlJLblBnYnY2WT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ096NXVKb0JFTlBIM0tzR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOXFjNlh0YlVQV09hZGcxZW5MMXBIMDdHdnFwSFV5Uy9hNXRLeW5lUHpUdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUmVsRXNLWjdNTHVUekM1S3hEVklPVUtsU1k0UzhHYzMyNmR6K1JhTU0rWWhLL2JvTHVVRFJkTUhkK0JUdFNEQzd5NHlCcURaeG9ZM0xUZ21XTzEwQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InJaQ3J6SmhzZy8yNGs4RDduMnp5L3FKaTVJQ1ZmVVozaUpRQXoySlRWUWpzZVlaWmthaXpzY2tkczFvTUx1V21qbm1WRlFCZ2F6aTlCWmdRcmMxeWh3PT0ifSwibWUiOnsiaWQiOiIyMzQ5MDI3ODYyMTE2OjE4QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjc4NjIxMTY6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmFuT2w3VzFEMWptbllOWHB5OWFSOU94cjZxUjFNa3YydWJTc3AzajgwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjMwNjc3NH0=',      //Put Your Session Id Here
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
