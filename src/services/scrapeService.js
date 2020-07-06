import axios from 'axios';

function callKeywordScrape(scrapeURL) {
    return axios({
        url: "https://node-keyword-extractor.herokuapp.com/",
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