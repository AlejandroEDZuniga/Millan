const { Admin, Wines } = require("./models")

const winesSeed = [
    {
        "brand": "CORDERO CON PIEL DE LOBO",
        "varietal": "Malbec",
        "harvest": 2020,
        "lotnumber": 1,
        "exportbill": 001,
        "dispatchday": "10/10/10",
        "destiny": "ECUADOR",
    },
    {
        "brand": "PERRO CALLEJERO",
        "varietal": "Blend",
        "harvest": 2021,
        "lotnumber": 2,
        "exportbill": 001,
        "dispatchday": "10/10/10",
        "destiny": "BRASIL",
    },
    {
        "brand": "PISPI",
        "varietal": "Bonarda",
        "harvest": 2020,
        "lotnumber": 1,
        "exportbill": 002,
        "dispatchday": "10/10/10",
        "destiny": "PERU",
    },
    {
        "brand": "SAPO DE OTRO POZO",
        "varietal": "Torrontes",
        "harvest": 2018,
        "lotnumber": 1,
        "exportbill": 001,
        "dispatchday": "10/10/10",
        "destiny": "ECUADOR",
    },
    {
        "brand": "MOSQUITA MUERTA" ,
        "varietal": "Cabernet Suavignon",
        "harvest": 2017,
        "lotnumber": 3,
        "exportbill": 001,
        "dispatchday": "10/10/10",
        "destiny": "PERU",
    },
    {
        "brand": "MALCRIADO",
        "varietal": "Malbec",
        "harvest": 2020,
        "lotnumber": 3,
        "exportbill": 002,
        "dispatchday": "10/10/10",
        "destiny": "BRASIL",
    },
    {
        "brand": "CORDERO CON PIEL DE LOBO",
        "varietal": "Malbec",
        "harvest": 2021,
        "lotnumber": 4,
        "exportbill": 004,
        "dispatchday": "10/10/10",
        "destiny": "BOLIVIA",
    },
    {
        "brand": "CORDERO CON PIEL DE LOBO",
        "varietal": "Malbec",
        "harvest": 2019,
        "lotnumber": 5,
        "exportbill": 003,
        "dispatchday": "10/10/10",
        "destiny": "BOLIVIA",
    },
]

const adminSeed = [
    {
        "name": "Ga",
        "email": "ga@ga.com",
        "password": "ga",
        "isadmin": true
    }
]


async function runSeed() {

    console.log("------------------\nEmpezando seed...\n------------------")

    await Admin.create(adminSeed[0])
    await Promise.all(winesSeed.map(wines => Wines.create(wines)))
   

}

runSeed().then(()=> {
    console.log("------------------\nSeed Finalizado\n------------------");
})
