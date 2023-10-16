
function left() {
    document.getElementById('1').style.width = '98%';
    document.getElementById('2').style.width = '70%';
    document.getElementById('3').style.width = '2%';
    document.getElementById('4').style.display = 'none';
    document.getElementById('2').style.display = 'block';
}
function defult() {
    document.getElementById('1').style.width = '50%';
    document.getElementById('2').style.width = '100%';
    document.getElementById('3').style.width = '50%';
    document.getElementById('4').style.width = '100%';
    document.getElementById('4').style.display = 'block';
    document.getElementById('2').style.display = 'block';
}
function right() {
    document.getElementById('1').style.width = '2%';
    document.getElementById('3').style.width = '98%';
    document.getElementById('4').style.width = '70%';
    document.getElementById('2').style.display = 'none';
    document.getElementById('4').style.display = 'block';
}



