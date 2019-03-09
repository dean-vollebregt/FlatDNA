const toBeColored = document.querySelectorAll('#difference');

function updateColor(){

    toBeColored.forEach(function(differenceId){
        if(differenceId.innerText.includes("-")){
            differenceId.style.color = "green";
        }else {
            differenceId.style.color = "red";
        }
    });
}

updateColor();


function updateClass(){
    for (let i = 0; i < document.links.length; i++) {
        if (document.links[i].href == document.URL) {
            document.links[i].className = 'active';
        }
    }
}

updateClass();


