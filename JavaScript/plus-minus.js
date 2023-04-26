let multiple = 1;
let counter = 0;

function increment() {
    if (multiple > 0) {
        counter += multiple;
        document.getElementById('counter').value = counter;
    }
}

function decrement() {
    if (counter >= multiple) {
        counter -= multiple;
        document.getElementById('counter').value = counter;
    }
}
function reset() {
    counter = 0;
    document.getElementById('counter').value = counter;
}

document.getElementById('multiple').addEventListener('change', (d) => {
    multiple = parseInt(d.target.value);
});