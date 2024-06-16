const btn = document.querySelector('#btn');
const text = document.querySelector('.text');
const list = document.querySelector('.list');
const item = document.querySelector('#add-items');
const ul = document.querySelector('.unlst');
const edited = document.querySelector('.edited');

btn.onclick = function () {
    if (text.value === '') {
        alert("You must write something !");
    }
    else {
        let div = document.createElement("div");
        div.classList.add("li");
        div.innerHTML = text.value;
        ul.appendChild(div);

        var anchor1 = document.createElement("a");
        anchor1.innerHTML = `<img src="icons/edit.png" alt="" id="edit">`;
        div.appendChild(anchor1);

        var anchor2 = document.createElement("a");
        anchor2.innerHTML = `<img src="icons/trash.png" alt="" id="remove">`;
        div.appendChild(anchor2);

        anchor1.addEventListener('click', function () {
            anchor1.parentNode.removeChild(anchor1);
            anchor2.parentNode.removeChild(anchor2);
            text.value = div.innerHTML;
            div.remove();
        })
        anchor2.addEventListener('click', function () {
            anchor2.parentElement.remove();
        })
    }
    text.value = "";
}