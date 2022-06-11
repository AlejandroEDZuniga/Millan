const express = require("express");
const router = express.Router();
const { Admin } = require("../models");
const { validateToken, isAdmin } = require("../middlewares");
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  Admin.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});
router.get("/logged", validateToken, (req, res, next) => {
  Admin.findByPk(req.user.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});
router.post("/addAdmin", (req, res, next) => {
  Admin.create(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});
router.delete("/:id", (req, res, next) => {
  Admin.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
});

//VERIFICAR POR QUE CUANDO QUERIA EDITAR UN ADMIN EN WS NO FUNCIONABA, POSIBLE PROBLEMA CON SALT
// router.put("/:id", (req, res, next) => {
//   const userId = req.params.id;
//   const { email, password, name, id } = req.body;
//       Admin.update(
//         {
//           email: email,
//           name: name,
//           password: password,
//         },
//         { where: { id: userId } }
//       )
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch(next);
// });

//AMBOS DOS NO FUNCIONAN
// router.put('/:id', (req, res) => {
//   const userId = req.params.id;
//   const { email,
//           password,
//           name, id,
//           } = req.body;

//       if (password != undefined) {
//           bcrypt.hash(password, 10).then((hash) => {
//               Admin.update({
//                   email: email,
//                   password: hash,
//                   name: name,
//                   id: id
//               }, { where: {id: userId} });
//               res.json('User updated successfully');
//           })
//       } else {
//           Admin.update({
//               email: email,
//               name: name,
//               password: password
//           }, { where: {id: userId} });
//           res.json('User updated successfully');
//       }
// });
module.exports = router;
