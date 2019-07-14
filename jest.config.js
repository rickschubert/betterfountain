const path = require("path")
const rootDir = path.resolve("./out/test")

module.exports = {
    testMatch: [`**/*.spec.js`],
    rootDir,
    verbose: true,
    reporters: ["default"],
}
