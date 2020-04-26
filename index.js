const {Telegraf} = require('telegraf')

const bot = new Telegraf()

const text2png = require('text2png')

bot.on('inline_query', async({ inlineQuery, answerInlineQuery }) => {
	if (inlineQuery.query.length === 0){
		return url = text2png('Triglavian',{
			textColor: 'white',
			localFontPath:'./Triglavian.otf', 
			localFontName: 'Triglavian',
			font: '20px Triglavian', 
			lineSpacing:3, 
			xpadding:3, 
			ypadding:3, 
			backgroundColor: '#222c36' })
	} else {
		return url = text2png('Triglavian',{
			textColor: 'white',
			localFontPath:'./Triglavian.otf', 
			localFontName: 'Triglavian',
			font: '20px Triglavian', 
			lineSpacing:3, 
			xpadding:3, 
			ypadding:3, 
			backgroundColor: '#222c36' })
	}

	let results = []

	results = [{
		type: 'photo',
		id: 1,
		thumb_url: url,
		photo_url: url
	}]

	return answerInlineQuery(results)
})

bot.launch()