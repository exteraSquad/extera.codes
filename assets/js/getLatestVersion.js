function getLatestVersion() {    
    var xmlHttp = new XMLHttpRequest();
    var requestLink = "https://api.github.com/repos/exteraSquad/exteraGram/releases/latest";
    xmlHttp.open("GET", requestLink, false);
    xmlHttp.send(null);
    var releaseInfo = JSON.parse(xmlHttp.responseText);
    return releaseInfo.tag_name
}