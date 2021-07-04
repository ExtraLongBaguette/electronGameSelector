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

    console.log(gameCount);
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