var footer = document.getElementsByTagName("footer")[0];
fetch("/footer.html")
 .then(response => response.text())
 .then(text => footer.innerHTML = "<div>" + text + "</div>");