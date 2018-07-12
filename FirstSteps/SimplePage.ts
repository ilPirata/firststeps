function displayDate() {
    var currentDate: Date = new Date();
    document.getElementById("txtDemo").innerHTML = currentDate.toUTCString();
}
