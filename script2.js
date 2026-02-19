const display = document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        } 
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            if (value === "×") {
                display.value += "*";
            } 
            else if (value === "÷") {
                display.value += "/";
            }
            else if (value === "−") {
                display.value += "-";
            }
            else {
                display.value += value;
            }
        }

    });
});
