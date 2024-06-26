const express = require("express")
const app = express()


require("./models/db").connectdb()
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:false}))


// app.set("views", "views")

app.use("/",require("./routes/indexroute"))

app.listen(3000,console.log("server chalu he"))
