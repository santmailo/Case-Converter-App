let textArea = document.getElementById("text-area");
let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let saveTextFile = document.getElementById('save-text-file');

upperCase.addEventListener("click",function(){
    textArea.value = textArea.value.toUpperCase();
});

lowerCase.addEventListener("click", function (){
    textArea.value = textArea.value.toLowerCase();
});

properCase.addEventListener("click", function (){
    let string = textArea.value;
    let arrayOfString = string.split(" ");
    for(let i=0; i<arrayOfString.length; i++){
        arrayOfString[i] = arrayOfString[i][0].toUpperCase() + arrayOfString[i].slice(1).toLowerCase();
    }
    textArea.value = arrayOfString.join(" ");
    console.log(1);
});

sentenceCase.addEventListener("click", function (){
   let value = textArea.value;
   let arrayOfSentence = value.split(". ");

   for(let i=0; i<arrayOfSentence.length; i++){
       arrayOfSentence[i] = arrayOfSentence[i][0].toUpperCase() + arrayOfSentence[i].slice(1).toLowerCase();
   }
   textArea.value = arrayOfSentence.join(". ");
});

saveTextFile.addEventListener("click", function (){
    download("text.txt",textArea.value);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
