const {Telegraf} = require('telegraf')

const bot = new Telegraf()

const fs = require('fs')

const text2png = require('text2png')

bot.on('inline_query', async({ inlineQuery, answerInlineQuery }) => {
	
	try {
		let img = text2png (inlineQuery.query,{
			textColor: 'white',
			localFontPath:'./triglavian.otf', 
			localFontName: 'Triglavian',
			font: '30px Triglavian', 
			lineSpacing:5, 
			xpadding:5, 
			ypadding:5, 
			backgroundColor: '#222c36'
		})
		fs.writeFileSync(`./image/${inlineQuery.query}.png` ,img)

		let url = `http://54.169.114.12:3400/${inlineQuery.query}.png`
		results = [{
			type: 'photo',
			id: 1,
			thumb_url: encodeURI(url),
			photo_url: encodeURI(url)
		}]
		return answerInlineQuery(results,{ cache_time: 0})

	} catch(error) {
		results = [{
			type: 'photo',
			id: 1,
			thumb_url: 'http://54.169.114.12:3400/Triglavian.png',
			photo_url: 'http://54.169.114.12:3400/Triglavian.png'
		}]
		return answerInlineQuery(results,{ cache_time: 0})
	}	
})

bot.launch()