const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Admin extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  async validatePassword(loginPassword) {
    const hashed = await this.hash(loginPassword, this.salt);
    return hashed === this.password;
  }
}

Admin.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    isadmin: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "admins", timestamps: false  }
);

Admin.beforeCreate(async (admin) => {
  admin.salt = await bcrypt.genSalt(10);
  admin.password = await admin.hash(admin.password, admin.salt);
});

module.exports = Admin;
