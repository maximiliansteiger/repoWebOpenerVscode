chrome.tabs.onUpdated.addListener(function (tab) {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        function: addButton,
    });
});

function addButton() {
    let buttonElement = document.querySelector(".vsCodeButton");
    if (!buttonElement) {
        let elem = document.querySelector(".file-navigation")
        let btn = document.createElement("a");
        btn.classList.add("vsCodeButton");
        btn.classList.add("btn");
        btn.classList.add("ml-2");
        btn.classList.add("d-none");
        btn.classList.add("d-md-block");
        btn.innerHTML = "VSCode";
        btn.onclick = function () {
            let url = window.location.href;
            let splittedUrl = url.split(".");
            window.open(`${splittedUrl[0]}1s.${splittedUrl[1]}`);
        }
        elem.insertBefore(btn, elem.children[3]);
    }
}