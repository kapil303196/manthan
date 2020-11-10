let myForm = document.getElementById("myForm");
let textInput = document.getElementById("text_input");
let errorDiv = document.getElementById("error");
let myUl = document.getElementById("results");
let frmLabel = document.getElementById("formLabel");

function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

//Equation modified from http://www.geeksforgeeks.org/check-number-fibonacci-number/
function isFibonacci(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    let prevPrev = 0;
    let prev = 1;
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = prev + prevPrev;
        prevPrev = prev;
        prev = result;
    }
    return result;
}
function test_prime(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

if (myForm) {
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (textInput.value.trim()) {
            textInput.classList.remove("inputClass");
            errorDiv.hidden = true;
            frmLabel.classList.remove("error");
            let li = document.createElement("li");
            let isPrime = test_prime(isFibonacci(textInput.value.trim()));
            if (isPrime) {
                // li.style.color = "green";
                li.classList.add("is-prime");
            } else {
                // li.style.color = "red";
                li.classList.add("not-prime");
            }
            li.innerHTML =
                "The Fibonacci of " +
                textInput.value.trim() +
                " is " +
                isFibonacci(textInput.value.trim()) +
                ". ";
            myUl.appendChild(li);
            myForm.reset();
            textInput.focus();
        } else {
            textInput.value = "";
            errorDiv.hidden = false;
            errorDiv.innerHTML = "You must enter a value";
            frmLabel.className = "error";
            textInput.focus();
            textInput.className = "inputClass";
        }
    });
}
