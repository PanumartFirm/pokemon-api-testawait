const app = require('./app') //name of file cut .js example app.js => './app'
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}`))