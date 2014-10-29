
var channelListID = 'channel-list';
var generalRegex = /\s*general\s*/

function onMutation(mutationRecord) {
    var channelList = document.getElementById(channelListID);

    if (!channelList || !channelList.children) {
        return;
    }

    var channelCount = channelList.childElementCount;
    var channels = channelList.children;

    for (var i = channelCount - 1; i >= 0; i--) {
        var element = channels[i];
        var match = element.textContent.match(generalRegex);
        if (match) {
            element.parentElement.removeChild(element);
        };
    };
}

function setupWatchers() {
    
    var channelList = document.getElementById(channelListID);
    var watchedAttribs = {
        childList: true,
        attributes: true,
        characterData: true
    };

    if (channelList) {
        (new MutationObserver(onMutation)).observe(channelList, watchedAttribs);
    } else {
        console.log("Could not find the channel list to attach the observer");
    }
}

window.onload = setupWatchers();
