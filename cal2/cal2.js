let output = document.getElementById("console");

function calculate() {
     document.getElementById("answer").value =""+eval(output.value);
}


output.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("ent").click();
       
    }
    }

);
addEventListener("keypress", function (event) {
    if (event.key === "c" || event.key === "C") {
        event.preventDefault();
        document.getElementById("dele").click();
        
    }

});
function del() {
    output.value = "";
    document.getElementById("answer").value = ""
}
