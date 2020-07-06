import axios from 'axios';

function callKeywordScrape(scrapeURL) {
    return axios({
        url: process.env.REACT_APP_NODE_SCRAPER_URL,
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        data: {scrapeURL}
    })
}

export {
    callKeywordScrape
}