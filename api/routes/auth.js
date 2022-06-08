const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");
const { Admin } = require("../models");
// const { validateToken } = require("../middlewares");
//VERIFICAR TOKEN PARA UTILIZARLO COMO MIDDLEWARE DE SEGURIDAD//

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ where: { email } });

  if (!admin) {
    return res.status(400).json({ msg: "Usuario no encontrado" });
  }

  const validate = await admin.validatePassword(password);

  if (!validate) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ id: admin.id }, "millanfamily");

  return res.status(200).json({ token });
});

router.get("/logout", (req, res, next) => {
  req.admin = null;
  res.status(200).json({});
});


module.exports = router;
