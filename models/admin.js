const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const Admin = sequelize.define('Admin', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Admin.beforeCreate(async (admin) => {
    const salt = await bcrypt.genSalt();
    admin.password = await bcrypt.hash(admin.password, salt);
  });

  Admin.prototype.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return Admin;
};
