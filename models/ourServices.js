module.exports = (sequelize, DataTypes) => {
    const OurServices = sequelize.define('OurServices', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      short_desc: DataTypes.TEXT,
      full_desc: DataTypes.TEXT,
      isArchive: DataTypes.BOOLEAN,
      order_number: DataTypes.INTEGER,
      deleted: DataTypes.BOOLEAN,
    });
  
    return OurServices;
  };
  