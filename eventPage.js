
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction"){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.pageAction.show(tabs[0].id);
	});
    } else if (request.todo == "filterUrl"){
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.update(tabs[0].id, {url: "https://oe.reddit.com/r/DotA2"});
        });
    };
});
