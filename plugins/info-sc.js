import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCYZ3s2hcv-3uYuR-BuO6wqg*\nJangan Lupa Subscribe`
conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/HQ3Jb07y3cI8NQBCqZGYfH/', 'Grup', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
