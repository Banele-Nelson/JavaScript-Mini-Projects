const input = document.getElementById('input');

function check() {
    const value = input.value;
    const reversed = value.split('').reverse().join('');
    if (value === reversed) {
        alert(`${value} is a palindrome`);
    } else {
        alert(`${value} is not a palindrome`);
    }
}