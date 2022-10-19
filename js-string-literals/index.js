const background = '202020';
const color = 'red';
const isAuthorized = true;


const button = document.createElement("button");
button.innerText = "click me"
button.style = `background: ${isAuthorized ? 'blue' : 'red'}; color: ${color};`


button.addEventListener("click", () => {
    if(isAuthorized){
        return alert ("Esta Autorizado");
    }
    alert("no Autorizado")
});

document.body.append(button);
