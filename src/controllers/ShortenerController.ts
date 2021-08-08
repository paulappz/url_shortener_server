import { Request, Response } from 'express';
import IdGenerator from 'shortid';
import Validator from 'validator';

import UrlModel from '../models/UrlModel';

class ShortenerController {


    // Shorten a lomg Url  - Encode
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

    //Redirect to long uel
    async redirectUrl(req: Request, res: Response) {
        const { shortId } = req.params;

        if (!shortId) {
            return res.status(400).json({ message: 'shortId is not provided' });
        }

        try {
            const record = await UrlModel.findOne({ shortId });
            if (!record) {
                return res.status(400).json({ message: 'shortId is invalid' });
            }
            return res.redirect(record.url);
        } catch (error) {
            return res.status(500).json({ message: 'Some thing went wrong!' });
        }
    }

    //Get Url list
    async getUrls(req: Request, res: Response) {

        try {
            const records = await UrlModel.find({});
            return res.status(200).json({ urls: records });
        } catch (error) {
            return res.status(500).json({ message: 'Some thing went wrong!' });
        }
    }

    //Decode a short Url.

    async decodeUrl(req: Request, res: Response) {
        const { shortId } = req.body;
        console.log(shortId);

        if (!shortId) {
            return res.status(400).json({ message: 'shortId is not provided' });
        }

        try {
            const record = await UrlModel.findOne({ shortId });
            if (record) {
                return res.status(200).json({ shortId, url: record.url });
            }
            else { return res.status(200).json({ message: 'Invalid shortId' }); }

        } catch (error) {
            return res.status(500).json({ message: 'Some thing went wrong!' });
        }
    }


}

export default new ShortenerController();
