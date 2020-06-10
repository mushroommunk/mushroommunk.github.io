var APP_ID = "3380281275315253";
var APP_SECRET = "cffa04e907fb72a11a9786f31cda30a8";
var APP_REDIRECT_URI = "https://mushroommunk.github.io/";
var AUTH_WINDOW_URL = "https://api.instagram.com/oauth/authorize?client_id=3380281275315253&redirect_uri=https://mushroommunk.github.io/&scope=user_profile,user_media&response_type=code";
var AUTH_CODE = "";

function load(){

    if(getCode() == ""){
        document.write("<a href=" +AUTH_WINDOW_URL+ ">Authorize Instagram</a>");
    } else {
        alert(AUTH_CODE);
    }
}

window.onload = load;

function getCode(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const authCodeWithExtraChars = urlParams.get('code');
    AUTH_CODE = authCodeWithExtraChars.slice(0,authCodeWithExtraChars.length);
    return AUTH_CODE;
}