const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const check = (input_value) =>{
    console.log(input_value);
    let result = "";
    if(input_value < 1){
        result = "Please enter a number greater than or equal to 1.";
    }

    else{
        switch (input_value){
            case input_value % 5 != 0:
                result += 'I'.repeat(input_value % 5);
                break;
        }
    }
    output.innerHTML = `<p id="result">${result}</p>`
}

button.addEventListener("click", (e) =>{
    e.preventDefault();
    check(input.value);
    input.value = '';
});

button.addEventListener("keydown", (e) =>{
    e.preventDefault();
    if(e === "Enter"){
        check(input.value);
        input.value = '';
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    check(input.value);
    input.value = '';
});