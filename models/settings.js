module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define('Settings', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fbLink: DataTypes.STRING,
      ytLink: DataTypes.STRING,
      twitterLink: DataTypes.STRING,
      linkedInLink: DataTypes.STRING,
      whatsapp_num: DataTypes.STRING,
      contactFormEmail: DataTypes.STRING,
      whatsapp_address: DataTypes.STRING,
      contact_map: DataTypes.STRING,
      contact_phone_1: DataTypes.STRING,
      contact_phone_2: DataTypes.STRING,
      contact_email_1: DataTypes.STRING,
      contact_email_2: DataTypes.STRING,
      about_image: DataTypes.STRING,
      about_text: DataTypes.TEXT,
      short_one_text: DataTypes.STRING,
      short_one_number: DataTypes.STRING,
      short_two_text: DataTypes.STRING,
      short_two_number: DataTypes.STRING,
      short_three_text: DataTypes.STRING,
      short_three_number: DataTypes.STRING,
    });
  
    return Settings;
  };
  