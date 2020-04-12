let xmlhttp = new XMLHttpRequest();
let url = "https://volchonok.xyz/memelogy/assets/media/Post.json";
let arrDiv = "";
let state = true;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && state == true) {
        state = false;
        var myArr = JSON.parse(this.responseText);
        let i = 0;

        myArr.forEach(post => {
            i++;
            let divStart = '<div class="post__box">';
            let name = '<h1>' + post.name + '</h1>';
            let text = '<p>' + post.text + '</p>';
            let img = '<img src="' + post.img + '">';
            let divEnd = '</div>';
            let strgArr = divStart + name + text + img + divEnd;
            localStorage.setItem(i, strgArr);
        });
        console.log(state);
        putPost();
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function putPost() {
    arrDiv = "";
    for (let i = localStorage.length; i > 0; i--) {
        arrDiv += localStorage[i];
    }
    document.getElementById("block-post").innerHTML = arrDiv;
}


document.getElementById("meme-box").addEventListener("click", function(event) {
    var x = document.getElementById("new-post");
    console.log(x.style.display);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

document.getElementById("push-post").addEventListener("click", function(event) {
    event.preventDefault();

    let formData = new FormData(document.getElementById("form-post")),
        divStart = '<div class="post__box">',
        name = '<h1>' + formData.get('name') + '</h1>',
        text = '<p>' + formData.get('description') + '</p>',
        img = '<img src="' + formData.get('imgUrl') + '">',
        divEnd = '</div>',
        strgArr = divStart + name + text + img + divEnd;
    localStorage.setItem(localStorage.length + 1, strgArr);
    putPost();

    var x = document.getElementById("new-post");
    x.style.display = "none";
});