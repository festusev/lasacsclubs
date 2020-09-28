(function() {
    console.log("Heyo");

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
           console.log(xhttp.responseText);
        }
    };
    xhttp.open("POST", "/demo_url", true);
    xhttp.send();
})()