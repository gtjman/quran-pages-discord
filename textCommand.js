client.on(`messageCreate`, async (message) => {
if(message.content === prefix + "quran"){
  let embed = new Discord.MessageEmbed()
  .setImage("https://quran-pages-images.gtjman.repl.co/1")
  .setFooter("1/604")
  .setColor(`GOLD`)

  let row = new Discord.MessageActionRow() 
   .addComponents(

   new Discord.MessageButton() 
   .setLabel(`<`) 
   .setStyle(`SECONDARY`) 
   .setCustomId(`prevQuranPage`),

   new Discord.MessageButton() 
   .setLabel(`>`) 
   .setStyle(`SECONDARY`) 
   .setCustomId(`nextQuranPage`)

   )
  message.reply({ embeds: [embed], components: [row] })
}
})
client.on(`interactionCreate`, async (interaction) => {
if(interaction.customId === "nextQuranPage"){
  interaction.deferUpdate().catch(error => { return })
  let page = Number(interaction.message.embeds[0].footer.text.split('/')[0])
  if(page === 604) return interaction.deferUpdate().catch(error => { return })
  page++
  let embed = new Discord.MessageEmbed()
  .setImage(`https://quran-pages-images.gtjman.repl.co/${page}`)
  .setFooter(`${page}/604`)
  .setColor(`GOLD`)

  let row = new Discord.MessageActionRow() 
   .addComponents(
   new Discord.MessageButton() 
   .setLabel(`<`) 
   .setStyle(`SECONDARY`) 
   .setCustomId(`prevQuranPage`),

   new Discord.MessageButton() 
   .setLabel(`>`) 
   .setStyle(`SECONDARY`) 
   .setCustomId(`nextQuranPage`)

   )
  interaction.message.edit({ embeds: [embed], components: [row] })
}
if(interaction.customId === "prevQuranPage"){
  interaction.deferUpdate().catch(error => { return })
  let page = Number(interaction.message.embeds[0].footer.text.split('/')[0])
  if(page === 1) return interaction.deferUpdate().catch(error => { return })
  page--
  let embed = new Discord.MessageEmbed()
  .setImage(`https://quran-pages-images.gtjman.repl.co/${page}`)
  .setFooter(`${page}/604`)
  .setColor(`GOLD`)

  let row = new Discord.MessageActionRow() 
   .addComponents(
   new Discord.MessageButton() 
   .setLabel(`<`) 
   .setStyle(`SECONDARY`) 
   .setCustomId(`prevQuranPage`),

   new Discord.MessageButton() 
   .setLabel(`>`) 
   .setStyle(`SECONDARY`) 
   .setCustomId(`nextQuranPage`)

   )
  interaction.message.edit({ embeds: [embed], components: [row] })
}
})
