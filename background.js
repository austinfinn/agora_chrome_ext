// const axios = require('axios')

chrome.browserAction.onClicked.addListener(buttonClicked);

async function buttonClicked(tab) {
    console.log(tab)

    chrome.tabs.duplicate(tab.id)
    let url = tab.url

    if (url.includes(`qantas`)){
        try {
            const result = await fetch('http://agora-data-aggregation.herokuapp.com/v1/health/openBankingApi/CBA')
            
            console.log(result)

        } catch (error) {
            console.log("Error ", error)
        }
    }

}