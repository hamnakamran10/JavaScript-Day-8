let text = document.getElementById('text');
let para = "Hi! My name is hamna"
let text2 = document.getElementById('text2')
let para2 = "I love programming!"
let x = 1;

setInterval(write, 115);

function write() {
    text.innerText = para.slice(0, x);
    text2.innerText = para2.slice(0, x);
    x++;
    if (x > para.length) {
        x = 1;
    }

}


