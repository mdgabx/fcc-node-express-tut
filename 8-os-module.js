const os = require('os')

// user info
const user = os.userInfo()
console.log(user)

// system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currOs = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMem: os.freemem()
}

console.log(currOs);