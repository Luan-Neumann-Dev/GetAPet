const express = require('express')
const cors = require('cors')

const app = express()

//CONFIGURANDO RESPOSTA EM JSON
app.use(express.json());

//RESOLVENDO CORS
app.use(cors({credentials: true, origin: 'http//localhost:3000'}));

//PASTA PUBLICA
app.use(express.static('public'));

//ROTAS
const UserRoutes = require("./routes/UserRoutes")
const PetRoutes = require("./routes/PetRoutes")

app.use("/users", UserRoutes)
app.use("/pets", PetRoutes)

app.listen(5000)