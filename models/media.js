module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      table_num: DataTypes.INTEGER,
      image: DataTypes.STRING,
      ref_id: DataTypes.INTEGER,
      order_num: DataTypes.INTEGER,
      isArchive: DataTypes.BOOLEAN,
      deleted: DataTypes.BOOLEAN,
    });
    
    return Media;
  };
  