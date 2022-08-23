import * as main from "./dist/main"
console.log("main:", main.Application)
const app = new main.Application("david", "amazon")
console.log("app.user:", app.user)
