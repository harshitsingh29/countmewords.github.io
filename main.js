function countWordsAndChars() {
    var text = document.getElementById("words").value;
    var words = text.trim().split(/\s+/); // split words by whitespace characters
    var numWords = words.length;
    var numChars = text.length;
    if(numChars == 0) {
        numWords = 0;
    }
    document.getElementById("showwordcount").innerText = "Word Count: " + numWords;
    document.getElementById("showcharcount").innerText = "Character Count: " + numChars;
}

const cleartext = () => {
    document.getElementById('words').value = '';
    document.getElementById('showcharcount').innerHTML = "Character Count: " + 0;
    document.getElementById('showwordcount').innerHTML = "Word Count: " + 0;
}

function savetext() {
    var textToSave = document.getElementById("words").value;
    if (!textToSave) {
        alert("Nothing to Save 🙄");
        return;
    }
    var blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "myFile.txt");
}

function saveAs(blob, fileName) {
    var downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}