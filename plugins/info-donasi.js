import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT ↓*
• Pulsa Indosat [085784715971]
• Dana [085784715971]
• Ovo [085784715971]
• Shopeepay [085784715971]
• Gopay [085784715971]
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://chat.whatsapp.com/HQ3Jb07y3cI8NQBCqZGYfH/', 'Grup', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
