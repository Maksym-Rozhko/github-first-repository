//1.Создать массив, длину и элементы которого задаёт пользователь.
// Затем отсортировать массив по возрастанию.
// Затем, удалить элементы из массива с 2 по 4 (включительно!).
// По мере изменений, выводить содержимое массива на страницу.

let digitElement, userDigit, arr = [];

function compareDigit(a, b) {
    if (a > b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
}

do {
    userDigit = parseInt(prompt('Set array length'));
}while ( userDigit <= 0);


for (let i = 0; i < userDigit; i++) {
    digitElement = prompt('Enter digit #' + (i + 1));
    arr.push(digitElement);
}
document.write('<p/>' + arr + '<p/>');
arr.sort(compareDigit);
document.write('<p/>' + arr + '<p/>');
let arrPart = arr.splice(1,3);
document.write('<p/>' + arr + '<p/>');
document.write('<p/>' + arrPart + '<p/>');
