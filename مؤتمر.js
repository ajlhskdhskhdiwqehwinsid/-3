let myName = "معلومات عن البيئة و التغيرات المناخية         "

let index = 1;

function writeText() {
    document.querySelector("p").textContent = myName.slice(0,index);
    index++

    if(index > myName.length) {
        index = 1;
    }
}


setInterval(function(){
    
    writeText();

}, 100)