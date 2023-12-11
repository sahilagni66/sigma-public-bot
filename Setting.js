const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '2348039607375' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Maher-Zubair:SIGMA-MD@zubi.9g6b16y.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp" ; // put mongodb key here
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
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pWaXRMcVpRbHF0YVZYZlQzMFJyUlVUSkZyZzhBQk5QaVk1TnBoNnVWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVNFZzZwSUdKTlU5aWFzU0FPV2l2cExDeFQrc2NyWEgrQTFWWVBRU2FnTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQXc3Mm9iWFZYVWVKZ0RPeFB2dVpHOVd3Q09wNXFCcUhIRWMrL1BMdUdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSG5zU0pqVkFxNlZ6RjJNbENBRUwyTk03QjYwTGZwaC83N1ZUQ011TVQwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGLzY1RFdrMThZa0NOZExoZzhZTGk0eUl3d3dZTHZ4VGFpdDZsY3ZWVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik90OGFoZ2NKc2FEVW9iWTdqT25vd2RzRC8xUGVaRVU3b1kwVCtmcU9Bbm89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlYVdjbzFwSDNyUzVOcjZzek5Wc1V3STdobVpNbUJ6aWhteXZLR2lCblU2b2hUMjhuVVhtWEJBaEpFU2FQL2NHSVJ2YmFWaC9DWFZRL255dVV3bjdqZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM5LCJhZHZTZWNyZXRLZXkiOiJXWmx6a1pMWGErTTkrZnBmQVdZcTEzZGpwdW9sVGNKYnpoOFVnREdBL0FVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsU2tkUDhIc1FPLTNkWGQ4X1FJOEh3IiwicGhvbmVJZCI6ImFmNTkwMmU1LWNjNDAtNDJjMC1hMDhmLTQ2ZjgwMWY3YWE5MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqL3pyWHc1VFhnMVBtaFdHTWNNMkdDK1dZQWs9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im05cU82K09WNkVucnpOQXNDNjFJTm5ZdE1QWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ092NXVKb0JFSW1uMjZzR0dBUT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOXFjNlh0YlVQV09hZGcxZW5MMXBIMDdHdnFwSFV5Uy9hNXRLeW5lUHpUdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWXlEc1dQL2ZoT2h0WlRkNHBtNkY2bTVmWi8xeWk1T1NlQnFzWElXbWlIYmsxdFBQb3dQREJYdDBiRUdzMFJ1S2Iza25iTDJ2WllKMjY4S29GMnV3RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InVnakIrWGNIeTYrUk4rK0EvMERza2p0NVAyTnFVN0lxdTI0M21DeUNrVzZ6a1A2Y0o3SGZsR2FJQnlyM2xGYlVtVjBkSmJBZGtuQ1EwYWNaYzFER2hBPT0ifSwibWUiOnsiaWQiOiIyMzQ5MDI3ODYyMTE2OjE0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjc4NjIxMTY6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmFuT2w3VzFEMWptbllOWHB5OWFSOU94cjZxUjFNa3YydWJTc3AzajgwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjI4NjIyMH0=',      //Put Your Session Id Here
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
