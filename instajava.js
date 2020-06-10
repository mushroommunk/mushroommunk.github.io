var APP_ID = "3380281275315253";
var APP_SECRET = "cffa04e907fb72a11a9786f31cda30a8";
var APP_REDIRECT_URI = "https://mushroommunk.github.io/";
var AUTH_WINDOW_URL = "https://api.instagram.com/oauth/authorize?client_id=3380281275315253&redirect_uri=https://mushroommunk.github.io/&scope=user_profile,user_media&response_type=code";
var AUTH_CODE = "";

function load(){

    if(getCode() == ""){
        document.write("<a href=" +AUTH_WINDOW_URL+ ">Authorize Instagram</a>");
    } else {
        getToken();
    }
}

window.onload = load;

function getCode(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('code')){
    AUTH_CODE = urlParams.get('code');
    return AUTH_CODE;
    } else {
        return "";
    }
}

function getToken(){
    const formData = new FormData();

    formData.append("client_id", APP_ID);
    formData.append("client_secret", APP_SECRET);
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", APP_REDIRECT_URI);
    formData.append("code", AUTH_CODE);

    fetch('https://api.instagram.com/oauth/access_token', {
        method: 'POST',
        body: formData
    }).then(response => response.json()).then(json => console.log(json));
    console.log(json);
}