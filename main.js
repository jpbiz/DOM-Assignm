document.getElementById("main-heading").innerHTML = "New DOM Layout";

document.getElementById("page-header").classList = "bg-success"

document.getElementById("para1").innerHTML = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."

document.getElementById("para2").innerHTML =  "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

document.getElementById("btn").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("para4").innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
} 

document.getElementById("red").classList = "bg-danger"

document.getElementById("blue").classList = "bg-primary"

document.getElementById("yellow").classList = "bg-warning"

document.getElementById("green").classList = "bg-success"

document.getElementById("black").classList = "bg-dark"