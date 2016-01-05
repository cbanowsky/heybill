chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("HEY BILL!")
  chrome.tabs.executeScript(null, {
    file: "heybill.js"
  });
});
