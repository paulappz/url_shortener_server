import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Import API application
import ApiApp from './ApiApp';

// Load Config
dotenv.config();


//Connect mongoose DB
(async () => {
  await mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).catch(err => console.log(err));

  // Start Application
  ApiApp.start(process.env.PORT);
})();
