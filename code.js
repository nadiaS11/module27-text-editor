
const textarea = document.getElementById("textarea");

function fontBold(e){
    if(textarea.style.fontWeight == "bold")
    {
        textarea.style.fontWeight = "normal"
        e.classList.remove("active")
    }else{
        textarea.style.fontWeight = "bold"
        e.classList.add("active")

    }
}

function fontSizes(e){
    let value = e.value;
  textarea.style.fontSize = value + "px";
}

function fonItalic(e){
    if ( textarea.style.fontStyle == "italic")
        {
            textarea.style.fontStyle = "normal"
            e.classList.remove("active")
        }else{
            textarea.style.fontStyle = "italic"
            e.classList.add("active")
        }
    
}
function fontUnderline(e){
    if ( textarea.style.textDecoration == "underline")
        {
            textarea.style.textDecoration = "normal";
            e.classList.remove("active")
        }else{
            textarea.style.textDecoration = "underline";
            e.classList.add("active")
        }    
}
function colorPicker(e){
    let value=e.value
    textarea.style.color = value;
}

function leftAlign(e){
    textarea.style.textAlign = "left";
}
function rightAlign(e){
    textarea.style.textAlign = "right";
}
function centerAlign(e){
    textarea.style.textAlign = "center";
}

function textSlash(e){
    if ( textarea.style.textDecoration == "strikethrough")
        {
            textarea.style.textDecoration = "normal"
        }else{
            textarea.style.textDecoration = "underline"
        } 
}
 