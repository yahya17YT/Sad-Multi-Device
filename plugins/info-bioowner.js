let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Yahya17
*✉️ Nama RL* : Yahya
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 10 februari 2008
*🎨 Umur* : 13
*🧮 Kelas* : 7
*🧩 Hobby* : Nonton Anime, Main Game, Chatting, Membuat Orang Kesal
*💬 Sifat* : Ngeselin, Lumayan Ramah, Males
*🗺️ Tinggal* : Indonesia, Jawa, (Kepo Banget Sih)
*❤️ Suka* : Warna Biru & Warna Yang Cerah, Anime, Loli, Game, Hewan
*💔 Benci* : Kecoa, Tikus, Nyamuk, Di Cuekin, Baterai Hp Habis

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @yahya17_ch
*🇫 Facebook* : (Lupa😁)
*🏮 Chanel Youtube* : YAHYA17 CH
*🐈 WhatsApp:* +6285784715971

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
