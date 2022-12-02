import app from './app'

app.listen(process.env.PORT, () => { 
	console.log(`Server is listen in PORT: ${process.env.PORT}`) 
})