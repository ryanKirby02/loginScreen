const mongoose = require('mongoose');

const db = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://adminUser:Jeff1231@usercluster.evgdd.mongodb.net/userCluster?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = db;
