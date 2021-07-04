var  gameList = null;

window.onload = function() {
    gameList = document.getElementById("gameList");
    
    var textInput = document.getElementById("textInput");
  
    textInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            newElement();
        }
    })

    const electron = require('electron');
    const ipc = electron.ipcRenderer;
    document.getElementById("ghLink").addEventListener('click', () => {
        const reply = ipc.send('openGithub', 'Sent from main Window')
    })
}
function showAlert(text) {
    var alerts = document.getElementsByClassName("alertClose");
    var i;
    
    for (i = 0; i < alerts.length; i++) {
        alerts[i].parentElement.remove();
    }


    var alert = document.createElement("div");
    alert.append(document.createTextNode(text));
    alert.className = "alert";

    var span = document.createElement("SPAN");
    var t = document.createTextNode("\u00D7");
    span.className = "alertClose";
    span.append(t);
    alert.appendChild(span);
    
    var mainContainer = document.getElementsByClassName("mainContainer")[0];
    mainContainer.appendChild(alert);

    var close = document.getElementsByClassName("alertClose");
        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.remove();
            }
        }
}

function newElement() {
    gameList = document.getElementById("gameList");
    var li = document.createElement("li");
    var textInput = document.getElementById("textInput").value;
    if(textInput === "") {
        showAlert("Please enter a name!");
        return;
    }
    else 
    {
        var gameCount = document.querySelectorAll("#gameList li").length;
        if(gameCount > 7) {
            showAlert("There can only be 8 games!");
            return;
        }
        document.getElementById("textInput").value = "";
        //li.append(document.createTextNode(textInput));

        var text = document.createElement("div");
        text.append(document.createTextNode(textInput));

        var span = document.createElement("SPAN");
        var t = document.createTextNode("\u00D7");
        span.className = "close";

        text.className = "listContent";

        li.appendChild(text);

        span.appendChild(t);
        li.appendChild(span);
        gameList.append(li);

        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.remove();
            }
        }

    }
}

function rollGame() {   
    gameList = document.getElementById("gameList");
    var gameDivs = document.querySelectorAll("#gameList li .listContent");
    var gameCount = document.querySelectorAll("#gameList li").length;
    if(gameCount < 2) {
        showAlert("Please add at least two games!");
        return;
    }

    var i;
    var games = [];
    for(i = 0; i < gameCount; i++) {
        games.push(gameDivs[i].innerHTML);
    }
    var choice = games[Math.floor(Math.random()*gameCount)];
    
    var mainContainer = document.getElementsByClassName("mainContainer")[0];
    var overlay = document.createElement("div");
    
    overlay.className = "overlay";
    overlay.onclick = function() {
        removePopup();
    }
    mainContainer.appendChild(overlay);
    
    var popup = document.createElement("div");

    popup.className = "popup";

    var h3 = document.createElement("h3");
    h3.append(document.createTextNode(choice));
    h3.className = "popupTitle";

    popup.appendChild(h3);

    
    var button = document.createElement("button");
    button.append(document.createTextNode("Okay"));
    button.className = "popupButton";
    button.setAttribute("onclick", "removePopup()");
    popup.appendChild(button);
    
    
    mainContainer.appendChild(popup);

}

function removePopup() {
    var overlays = document.getElementsByClassName("overlay");
    overlays[0].remove();
    var popups = document.getElementsByClassName("popup");
    popups[0].remove();
    return;
}
