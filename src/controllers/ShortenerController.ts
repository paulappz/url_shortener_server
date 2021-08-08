import { Request, Response } from 'express';
import IdGenerator from 'shortid';
import Validator from 'validator';

import UrlModel from '../models/UrlModel';

class ShortenerController {


    // Shorten a lomg Url 
    async shortenUrl(req: Request, res: Response) {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ message: 'url is not provided' });
        }
        // Validate Url
        if (!Validator.isURL(url, { require_protocol: true })) {
            return res.status(400).json({ message: 'url is invalid' });
        }
        try {
            const record = await UrlModel.findOne({ url });
            if (record) {
                return res.status(200).json({ url, shortId: record.shortId });
            }
            const newUrl = {
                url,
                shortId: IdGenerator.generate(),
            };
            await UrlModel.create(newUrl);
            return res.status(200).json(newUrl);
        } catch (error) {
            return res.status(500).json({ message: 'Some thing went wrong!' });
        }
    }



}

export default new ShortenerController();
