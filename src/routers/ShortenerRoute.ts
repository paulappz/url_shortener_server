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

        this.router.get('/:shortId', async (req, res) => {
            await UrlController.redirectUrl(req, res);
        });

        this.router.get('/api/list', async (req, res) => {
            await UrlController.getUrls(req, res);
        });

        this.router.post('/api/decode', async (req, res) => {
            await UrlController.decodeUrl(req, res);
        });


    }

    getRouter() {
        return this.router;
    }
}

export default new ShortenerRoute();
