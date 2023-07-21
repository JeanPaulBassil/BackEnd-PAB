module.exports = {
    development: {
      name: 'property_and_beyond',
      version: '1.0.0',
      mySql: {
        options: {
          host: 'localhost',
          port: 3306,
          database: 'property_and_beyond',
          dialect: "mysql",
          username: "root",
          password: '',
          logging: false,
        },
        client: null
      },
    },
    production: {
    },
    test: {
    },
  };