const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTHES = __dirname;

const removeExtension = (fileName) =>{


    //TODO tracks.js [tracks,js]
    return fileName.split('.').shift()


}


fs.readdirSync(PATH_ROUTHES).filter((file) => {
    const name = removeExtension(file) //TODO users,tracks,storage
    if(name !== 'index'){

        console.log(`Cargando ruta ${name}`)
        try {
            router.use(`/${name}`,require(`./${file}/${file}`))
        } catch (e) {
            console.log('el error es este'+ e)
        }
    }
})


module.exports = router ;