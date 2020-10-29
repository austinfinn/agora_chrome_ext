console.log("Background script is running!!")

chrome.runtime.onMessage.addListener(handleMessage)

function handleMessage(msg,sender,sendResponse) {

    if (msg.getActiveTabUrl) {
        chrome.tabs.query({ active: true }, function (tabs) {
            chrome.runtime.sendMessage({
                activeTabUrl: tabs[0].url
            });
        })
    }
}