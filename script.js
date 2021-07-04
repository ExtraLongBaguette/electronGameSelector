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

function newElement() {
    gameList = document.getElementById("gameList");
    var li = document.createElement("li");
    var textInput = document.getElementById("textInput").value;
    if(textInput === "") {
        return;
    }
    else 
    {
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
            div.style.display = "none";
            }
        }

    }
}