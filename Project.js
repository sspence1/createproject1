function getGender()
    var gender


function getCoCode(phoneNum) {
    var CoCode;
    try {
        CoCode = between(phoneNum, ")", "-");
        CoCode = CoCode.trim();
        if (CoCode.length == 3 && Number(CoCode)) {
            return CoCode;
        }
        else {
            throw new Error("Invalid cocode: " + CoCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Displays the co code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @return {string} output1Id; Displays the co code to user
 */
function displayCoCode(inputId, output1Id) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var CoCode = getCoCode(phoneNum);
        outputText = "Your co code is " + CoCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(output1Id).innerHTML = outputText;
}

function listFactorials(n) {
    //CONTAINS A BUG!!!
    var x;
    var result = [];
    for (var i = 1; i <= n; i++) {
        x = 1;
        for (var j = i; j > 0; j--) {
            x = x * j;
        }
        result.push(x);
    }
    return result;
}
