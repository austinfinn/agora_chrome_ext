console.log("The popup file has been called")

async function healthCheck() {
    chrome.runtime.sendMessage({ findActiveTabUrl: true })

    try {
        const { currentUrl } =  await handleMessage()
        
        if (currentUrl.includes("agora")) {
            const result = await fetch('http://agora-data-aggregation.herokuapp.com/v1/health/openBankingApi/CBA')
            console.log("the result is ", result)
        }
        
    } catch (error) {
        console.log("Error ", error)
    }
}

async function handleMessage() {
  return await new Promise(function(resolve, reject) {
    chrome.runtime.onMessage.addListener( function (msg) {
      resolve(msg)
    })
  })
}

function clickHandler(e) {
    healthCheck()
  }

function main() {
    // Initialization work goes here.
  }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', clickHandler);
    main();
  });