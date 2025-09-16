const divNodes = document.querySelectorAll("div");

for (let i = 0; i < divNodes.length; i++) {
    divNodes[i].addEventListener("click", function (){
        alert("Hiciste clic en: " + divNodes[i].childNodes[3].innerHTML)
    });
}