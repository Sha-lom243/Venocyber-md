//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "243892922659";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "online",
global.MsgsInLog = process.env.MSGS_IN_LOG || "online";
global.userImages = process.env.USER_IMAGES || "yes";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "online";
global.readmessage = process.env.READ_MESSAGE || "online";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "all member";
global.read_status = process.env.AUTO_READ_STATUS || "in 0 time";
global.save_status = process.env.AUTO_SAVE_STATUS || "yes";
global.save_status_from = process.env.SAVE_STATUS_FROM || "yes";
global.read_status_from = process.env.READ_STATUS_FROM || "yes";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE40NVgwNzFwM3FQSWFpa3VJWWRrbVdjNmZ5OVZaVUYrUzZIZ0JQV1lGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxEK3ZCUjdxclRwbklUcU5qOW41ZWpYSlBwV1lSRnZWV3lBYmxNSE4zcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSFRmNDY5VDBvWlhLMXhXa0RlVUFUdEF1eU11Y05zc3VtVXhVU3c5VG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzOXpQTi9ic3lua0ZkNHZNaVBTYzBES0kyeE5CbXVQT01PN20ySlNSb1EwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DOE5QSjBVN0IxMDRQWDdhOGI3bVdhY2lES1Rmb3pPRWNRRlJoZmI3MzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklaczVPeFlEYjNKRjBPRXR3a294cnU5Sml3aEpVMVJlVVpXUGtuSzVUV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhmYUxjYWR0VFBpY3VyNHlHQkdITUpXTk9zWDRxV0MvbFBQMW1GczBtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTVBSTc2a0w2ODRhcnhpMkxkcmxvd201ZDJIZmpDSnpGWXhwZmVXdzRRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZKVzJra2Iva2lEOFNkakFueEM2MFBwcnJkdzJxMnMyOFJQSWxRbUl3L3JyZ1NhTW8vWG9vckUwWGpoaWdPSUkrbEpJNkZRd1VpMEw1TmE3TmN5RWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IkN4YWpPcFF2Zjh4OFlJbTY0NExtLy9aSXVUbWlpakZkMExBeEJYbWFMU1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjV4RjFaVjI1UzUyd3VVNzJOcWlZd0EiLCJwaG9uZUlkIjoiNDcwNGI0MDUtZTY4NC00NWRmLWI4OGUtY2U2ZTM4M2U0Njg4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVhd0xaL2ZWWEFxWFlJMi9kUVBDQW5NaWpYWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPU3JnNzBqUkkrYVFWK01QdnY5NkNnL3dsT2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjcyMzFGRFYiLCJtZSI6eyJpZCI6IjI0Mzg5MjkyMjY1OTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIzwnZCw8J2QmvCdkKXwnZCi8J2QpvCdkK4g8J2QkvCdkIfwnZCA8J2Qi/CdkI7wnZCMIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNR0owdmdCRU1hbm5yd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRTDNHbEt1Y2lZRGhUNUNVR1N5SVZqQ2hDdEhrTEZjeE9rY2tKWXV3VGhNPSIsImFjY291bnRTaWduYXR1cmUiOiJycjBDOTJkZFdkb2VtK2x2ZVgybHdTVlRPMTMxWFZodzE1OHhSWklqZkVCZmI0bTZscWZNRUV0eDVuNG1MeFhodks3WW5xRWRwNE1paTh5ZUNRM1NEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicnp6bXYvRGxEMmV1dU9ScEN6c2JSclBvSjJpSWFlcnJiREM4VVZITHcxM0pmckJPMDRmOEw3UlZ1VXpFOVNHZTNGTUdyTDB4RytUU3dOSXk0eXVJZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM4OTI5MjI2NTk6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVQzl4cFNybkltQTRVK1FsQmtzaUZZd29RclI1Q3hYTVRwSEpDV0xzRTRUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2OTM4NDUzfQ"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
