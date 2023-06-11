var count = document.getElementById('counter')
var countValue = Number(localStorage.getItem('count') || 0);
count.innerHTML = countValue;
var carts = document.querySelectorAll('.cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function () {
        count.value = Number(count.value||0);
        count.value += 1;
        count.innerHTML = count.value;
        countValue = count.value
        var img = carts[i].parentNode.parentNode.childNodes[1].childNodes[1].src
        var price = carts[i].parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1].innerHTML
        localStorage.setItem("count", countValue)
        console.log(count.value)
        console.log(countValue)
    });
}
