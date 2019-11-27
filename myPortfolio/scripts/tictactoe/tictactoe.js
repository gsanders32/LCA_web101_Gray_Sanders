//alert("Loaded");
var gameMarker = ""; //set player to empty

function changeMarkerToX() { // set player
    console.log("The X button was clicked!");
    gameMarker = "X"; //set player to X
    document.getElementById("markerO").style.display = "none"; //hide player O 
}

function changeMarkerToO() { //set player
    console.log("The O button was clicked!");
    gameMarker = "O"; //set player to X
    document.getElementById("markerX").style.display = "none"; // hide player X
}

function resetBoard() { //reset game
    console.log("Reset");
    gameMarker = ""; //set player to empty string
    var removeItem = document.getElementsByClassName("played"); // find all played boxes
    while(removeItem.length > 0){ //loop through all boxes that are marked played
        removeItem[0].parentNode.setAttribute("onclick", "placeMarker(this.id)"); // add onclick listener
        removeItem[0].parentNode.removeChild(removeItem[0]); // remove played class
    };
    document.getElementById("markerX").style.display = "inline"; //show player X
    document.getElementById("markerO").style.display = "inline"; // show player O
}

function placeMarker(selectedBox) { //add X or O to board
    console.log(gameMarker)
    if (gameMarker != "") { //check if player is selected
        console.log("Player Selected: " + gameMarker);
        var selected = document.getElementById(selectedBox); //get clicked box
        console.log("Selected Element: "+selected);
        
        var para = document.createElement("p"); //create a <p> tag
        var addMarker = document.createTextNode(gameMarker); //get current player
        para.appendChild(addMarker); //add player to <p> tag eg. X
        if (gameMarker === "X"){ // check if player is X
            para.className += "redMarker played"; // add class player and the color
            gameMarker = "O"; //change player to O
            document.getElementById("markerX").style.display = "none"; // hide player X
            document.getElementById("markerO").style.display = "inline"; // show player O
        }else{ // player is O
            para.className += "blueMarker played"; // add class player and the color
            gameMarker = "X"; //change player to X
            document.getElementById("markerO").style.display = "none"; // hide player O
            document.getElementById("markerX").style.display = "inline"; // show player X
        }
        selected.removeAttribute('onclick'); //remove onclick listener
        selected.appendChild(para); // add <p> tag with player to board

    }
    else
    {
        alert("Do you want to play as X or O"); // alert that not player has been selected
    }
}
