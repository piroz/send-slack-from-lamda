const WEBHOOK_URL = process.env.WEBHOOK_URL
const rp = require("request-promise");

exports.main = async (event) => {

    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = {
            username: 'bot',
            text: 'message!!'
        }
        const res = await rp.post({
            uri: WEBHOOK_URL,
            headers: headers,
            json: body
        });

        console.log(res)
    } catch (e) {
        throw e
    }
}