const http = require('http')

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.end('Homepage')
	} else if(req.url === '/about') {
		res.end('About')
	} else {
		res.end(`
		<h1>Wrong page</h1>
		<p>Eeek!</p>

		<a href='/'>Home</a>
	`)
	}
})

server.listen(5005)