import fetch from 'node-fetch';
import {NextApiRequest, NextApiResponse} from "next";


function streamToString (stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    })
}



export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    let url = `${process.env.REACT_APP_MAILCHIMP_URL}`;
        url += `?u=${process.env.REACT_APP_MAILCHIMP_U}`;
        url += `&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
        url += '&orig-lang=1'
        url += `&EMAIL=${req.query['EMAIL']}`;
        url += `&MERGE1=${req.query['MERGE1']}`;
        url += `&MERGE2=${req.query['MERGE2']}`;

    try{

        const response = await fetch(url,{
            method: 'POST',
            timeout: 3
        });

        if(res.statusCode === 200){

            const result = await streamToString(response.body);
            console.log('body', result);

            res.status(200).json(response.json());
        }else{
            res.status(500).json({
                error: true
            })
        }

    }catch(err){

        res.status(500).json({
            error: true
        })
    }

}