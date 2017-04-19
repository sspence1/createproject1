function validPounds(x) {
var length = x.length;
    if (length <= 3) {
        return true
    }
    else {
        return false
    }
}



function calculate() {
        var x = document.getElementById("first").value;
        var y = document.getElementById("second").value;
           result = x/y;
        alert(result)}
