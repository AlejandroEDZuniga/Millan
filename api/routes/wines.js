const express = require("express");
const router = express.Router();
const { Wines } = require("../models");
const { Op } = require("sequelize");


router.get("/edit", (req, res, next) => {
  Wines.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Wines.findByPk(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  if (req.query) {
    const { 
      brand,
      varietal,
      harvest,
      lotnumber
  } = req.query 

    const filter = req.query; //PRUEBA
    // console.log("filtro", filter)

    Wines.findAll({
      where: {
        brand: brand,
        varietal: varietal,
        harvest: harvest,
        lotnumber: lotnumber
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(next);
  } else {
    // Wines.findAll()
    // .then((data) => {
    //   res.status(200).json(data);
    // })
    // .catch(next);
  }
});

// router.post("/", (req, res, next) => {
//   Wines.create(req.body)
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch(next);
// });

router.post("/add", (req, res, next) => {
  Wines.create(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});


router.put("/:id", (req, res, next) => {
  Wines.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([, data]) => {
      res.status(201).json(data);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Wines.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
});

module.exports = router;
