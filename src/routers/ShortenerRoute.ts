import { Router } from 'express';

import UrlController from '../controllers/ShortenerController';

class ShortenerRoute {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRouter();
  }

  private setupRouter() {

    this.router.post('/api/encode', async (req, res) => {
        await UrlController.shortenUrl(req, res);
      });
  



  }

  getRouter() {
    return this.router;
  }
}

export default new ShortenerRoute();
