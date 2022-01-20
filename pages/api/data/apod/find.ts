import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        let allData = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", {
            method: 'GET',
        });
        const json = await allData.json();
        res.status(200).json(JSON.stringify({ status: 200, data: json }));
    } catch (error) {
        res.status(401).json(JSON.stringify({ status: 401, msg: 'Insufficient permissions' }))
    }
}