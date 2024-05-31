const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
let number;
const calculate = (input_value) => {

    const reference = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    const result = [];
    reference.forEach(function (arr) {
        while (input_value >= arr[1]) {
            result.push(arr[0]);
            input_value -= arr[1];
        }
    });

    output.innerHTML = `<p id="result">${result.join('')}</p>`
}

const check = (number) => {
    if (isNaN(number)) {
        result = "Please enter a valid number";
    }
    if (number < 1) {
        result = "Please enter a number greater than or equal to 1.";
    }

    else if (number > 3999) {
        result = "Please enter a number less than or equal to 3999";
    }

    else {
        return true;
    }
    output.innerHTML = `<p id="result">${result}</p>`


}

button.addEventListener("click", (e) => {
    update();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
});

const update = () => {
    let number = parseInt(input.value);
    if (check(number)) {
        calculate(number);
    }
    result = "";
};