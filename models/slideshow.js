module.exports = (sequelize, DataTypes) => {
    const Slideshow = sequelize.define('Slideshow', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      order_num: DataTypes.INTEGER,
      image: DataTypes.STRING,
      disk: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      deleted: DataTypes.BOOLEAN
    });
    return Slideshow;
  };
  