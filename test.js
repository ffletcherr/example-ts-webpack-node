var main = require('./dist/main')
console.log("main:", main)
const app = new main.Application("david", "amazon")
console.log("app.user:", app.user)
