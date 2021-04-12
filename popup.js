document.getElementById("zoomDownloader").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        var aTag = document.createElement("a");
        aTag.innerHTML = "Click here to download the video";
        aTag.setAttribute('download', "download");
        aTag.setAttribute("target", "_blank");
        aTag.href = document.getElementsByTagName('video')[0].src;
        aTag.style.color = "white";
        aTag.style.background = "#2D8CFF";
        aTag.style.padding = "1rem";
        var appDiv = document.getElementById('app');
        appDiv.appendChild(aTag);
        return "Use CLICK ME to download";
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});