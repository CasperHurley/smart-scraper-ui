import axios from 'axios';

function callKeywordScrape(scrapeURL) {
    return axios({
        url: "http://localhost:3001/api/scrape",
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        data: {scrapeURL}
    })
}

export {
    callKeywordScrape
}