var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var vali = 0;
var elParent = document.getElementById("elParent");

elParent.addEventListener("click", changeClass);

function changeClass(evt) {
    vali = vali + 1;
    var blankSquare = evt.target;

    if (vali % 2 === 1) {
        blankSquare.className = "x-style";
    } else {
        blankSquare.className = "o-style";
    }
    check();
}


function check() {
    setTimeout(function () {
        if (
            (a1.className === "x-style")
            && (a1.className === a2.className)
            && (a1.className === a3.className)
            && (a2.className === a3.className)) {
            alert("X wins!");
        } if (
            (a1.className === "o-style")
            && (a1.className === a2.className)
            && (a1.className === a3.className)
            && (a2.className === a3.className)) {
            alert("O wins!");
        } if (
            (b1.className === "x-style")
            && (b1.className === b2.className)
            && (b1.className === b3.className)
            && (b2.className === b3.className)) {
            alert("X wins!");
        } if (
            (b1.className === "o-style")
            && (b1.className === b2.className)
            && (b1.className === b3.className)
            && (b2.className === b3.className)) {
            alert("O wins!");
        } if (
            (c1.className === "x-style")
            && (c1.className === c2.className)
            && (c1.className === c3.className)
            && (c2.className === c3.className)) {
            alert("X wins!");
        } if (
            (c1.className === "o-style")
            && (c1.className === c2.className)
            && (c1.className === c3.className)
            && (c2.className === c3.className)) {
            alert("O wins!");
        } if (
            (a1.className === "x-style")
            && (a1.className === b1.className)
            && (a1.className === c1.className)
            && (b1.className === c1.className)) {
            alert("X wins!");
        } if (
            (a1.className === "o-style")
            && (a1.className === b1.className)
            && (a1.className === c1.className)
            && (b1.className === c1.className)) {
            alert("O wins!");
        } if (
            (a2.className === "x-style")
            && (a2.className === b2.className)
            && (a2.className === c2.className)
            && (b2.className === c2.className)) {
            alert("X wins!");
        } if (
            (a2.className === "o-style")
            && (a2.className === b2.className)
            && (a2.className === c2.className)
            && (b2.className === c2.className)) {
            alert("O wins!");
        } if (
            (a3.className === "x-style")
            && (a3.className === b3.className)
            && (a3.className === c3.className)
            && (b3.className === c3.className)) {
            alert("X wins!");
        } if (
            (a3.className === "o-style")
            && (a3.className === b3.className)
            && (a3.className === c3.className)
            && (b3.className === c3.className)) {
            alert("O wins!");
        } if (
            (a1.className === "x-style")
            && (a1.className === b2.className)
            && (a1.className === c3.className)
            && (b2.className === c3.className)) {
            alert("X wins!");
        } if (
            (a1.className === "o-style")
            && (a1.className === b2.className)
            && (a1.className === c3.className)
            && (b2.className === c3.className)) {
            alert("O wins!");

        } if (
            (a3.className === "x-style")
            && (a3.className === b2.className)
            && (a3.className === c1.className)
            && (b2.className === c1.className)) {
            alert("X wins!");
        } if (
            (a3.className === "o-style")
            && (a3.className === b2.className)
            && (a3.className === c1.className)
            && (b2.className === c1.className)) {
            alert("O wins!");
        }
    }, 100)
}


