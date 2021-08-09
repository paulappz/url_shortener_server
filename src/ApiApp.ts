import express, { Application } from 'express';


// Import Router
import router from './routers/ShortenerRoute';


class ApiApp {
  private application: Application;

  constructor() {
    this.application = express();
    this.setupGlobalMiddleware();
    this.handleCors();
    this.setupRouters();
  }


handleCors(){
  return  this.application.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,X-Key');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });
}

  start(port: string | number = 3000) {
    return this.application.listen(port, () => {

      console.log(`listening on port ${port}`);
    });
  }

  getApplication() {
    return this.application;
  }

  private setupGlobalMiddleware() {
    this.application.use(express.json());
  }

  private setupRouters() {
    this.application.get('/', (_, res) => {
      res.json({ message: 'Welcome to url Shorten service!'});
    });

    this.application.use('/', router.getRouter());

  }
}

export default new ApiApp();
