let fs = require('fs')
let chalk = require('chalk')

global.linkGC = ['https://chat.whatsapp.com/Jzd9DEVB5nODtNBk1VCNrV', 'https://chat.whatsapp.com/Jzd9DEVB5nODtNBk1VCNrV', 'https://chat.whatsapp.com/HBhy7rVae3o0PkIfkhvs2N'] // ganti jadi group lu
global.owner = ['6285733374626', '0', '6282128475388'] // Masukan nomot kalian
global.mods = ['6285733374626'] // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  caliph: 'https://caliphapi.com',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian^_^)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'cristian9407',
  'https://api.lolhuman.xyz': 'Dawnfrostkey',
  'https://caliphapi.com': 'ELYASXD',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'WhatsApp'
  var sticker_author = '@One Botz\n\n\n\n\n\n\n\n\n\n\n'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author

// silakan di ganti klo mau
global.wait = '_Wait.._'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *#enable* *rpg* untuk menggunakan fitur ini.'
global.nsfw = '“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.watermark = '\n𝙾𝚗𝚎 𝙱𝚘𝚝𝚣 𝚋𝚢 𝙳𝚊𝚟𝚒𝚍' //change the watermark (beberapa harus manual)
global.thumbfoto = 'https://i.ibb.co/ZLxBtr4/08a25e119b58f9eb3fe89e80110bf2fd.jpg' //Thumbnail
global.image = 'https://telegra.ph/file/8862875cbcfdfe32e5103.jpg'

// Ubah saja
global.image = 'https://i.ibb.co/5s8VWh1/2b774dd8b2b50e31438744b8e94440a5.jpg'
global.bank = 'https://telegra.ph/file/d5ddf4cc627bb0e6bc420.jpg'
global.kandang = 'https://telegra.ph/file/67a6ee607d03a4e52757d.jpg'
global.kolam = 'https://telegra.ph/file/5aa5dfa3394477e11fb18.jpg'
global.thanks = 'https://telegra.ph/file/f9c55dea5728df6345670.jpg'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 500 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
