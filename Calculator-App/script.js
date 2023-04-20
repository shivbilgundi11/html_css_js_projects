const display = document.getElementById('display');

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.onclick = () => {
        if (btn.id == "C") {
          display.innerHTML = "";
        } else if (btn.id == "<") {
          let string = display.innerHTML.toString();
          display.innerHTML = string.substr(0, string.length - 1);
        } else if (display.innerHTML != "" && btn.id == "=") {
          display.innerHTML = eval(display.innerHTML);
        } else if (display.innerText == "" && btn.id == "=") {
            display.innerHTML = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
          display.innerHTML += btn.id;
        }
    }
});