let memeButton = document.getElementById("meme-box");
let state = true;

memeButton.addEventListener("click", function(event) {
    event.preventDefault();

    var xmlhttp = new XMLHttpRequest();
    var url = "https://meme-api.herokuapp.com/gimme";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            putImg(myArr.url);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function putImg(arr) {
        let out = '<img src="' + arr + '">';
        document.getElementById("meme-img").innerHTML = out;
    }
});

memeButton.click();