//    Exercise 3
    // get the href attribute of the link
    var Di = document.getElementById("dI");
    console.log(Di.getAttribute("href"));

    // Exercise 1
    var DivNode = document.body.firstElementChild;
    //   var DivNode = document.body.children[0]
    console.log(DivNode);
    var UlNode = document.body.firstElementChild.nextElementSibling;
    //   var UlNode = document.body.children[1]

    console.log(UlNode);

    var Peter = document.body.children[1].children[1];
    var Peter = document.body.firstElementChild.nextElementSibling.children[1];

    console.log(Peter);

    var User = document.getElementById("Users");

    planet[color]
    // Exercise 2
    // change the font size, font Family, Color of the paragraph
    var text = document.getElementById("text");
    text.style.fontFamily = "Arial";
    text.style.fontSize = "10px";
    text.style.color = "red";