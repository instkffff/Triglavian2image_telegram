const {Telegraf} = require('telegraf')

const bot = new Telegraf()

const fs = require('fs')

const text2png = require('text2png')

bot.on('inline_query', async({ inlineQuery, answerInlineQuery }) => {
	let img = text2png( inlineQuery.query,{
		textColor: 'white',
		localFontPath:'./Triglavian.otf', 
		localFontName: 'Triglavian',
		font: '20px Triglavian', 
		lineSpacing:3, 
		xpadding:3, 
		ypadding:3, 
		backgroundColor: '#222c36'
	}).catch(error){
		console.log('error')
	}
 	
	fs.writeFileSync(`./image/${inlineQuery.query}.png` ,img)

	let url = `http://54.169.114.12:3400/${inlineQuery.query}.png`

	console.log(url)

	let results = []

	results = [{
		type: 'photo',
		id: 1,
		thumb_url: encodeURI(url),
		photo_url: encodeURI(url)
	}]

	return answerInlineQuery(results,{ cache_time: 0 ,is_personal: True})
})

bot.launch()