const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveNumbersSum = 0, positiveNumbersElements = [],
    minElement = 0, minElementIndexNumber, 
    maxElement = 0, maxElementIndexNumber, 
    negativeNumbersElements = [], 
    positiveNumbersElementsOdd = [], 
    positiveNumbersElementsEven = [], 
    sumEvenPositive = 0,
    sumOddPositive = 0,
    productOfPositiveNumbers = 1,
    nullifyNumbers; 


document.write(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveNumbersElements.push(arr[i]);
        positiveNumbersSum += arr[i];
        if (arr[i] % 2 === 0) {
            positiveNumbersElementsEven.push(arr[i]);
            sumEvenPositive += arr[i];
        } else if (arr[i] % 2) {
            positiveNumbersElementsOdd.push(arr[i]);
            sumOddPositive += arr[i]; 
        }
    }
    if(arr[i] <= minElement) {
        minElement = arr[i];
        minElementIndexNumber = i + 1;
    }
    if(arr[i] >= maxElement) {
        maxElement = arr[i];
        maxElementIndexNumber = i + 1;
    }
    if (arr[i] < 0) {
        negativeNumbersElements.push(arr[i]);
    }
    if (arr[i] > 0) {
        productOfPositiveNumbers *= arr[i];
    }
    if (arr[i] >= maxElement) {
        maxElement = arr[i];
        arr[nullifyNumbers] = 0;
        nullifyNumbers = i;
    } else {
        arr[i] = 0;
    }
}

document.write('<p>' + 'Cуммa' + ' ' + positiveNumbersSum + '<p/>');
document.write('<p>' + 'Количество положительных элементов' + ' ' + positiveNumbersElements.length + '</p>');
document.write('<p>' + 'Минимальный элемент массива' + ' ' + minElement + '<p/>');
document.write('<p>' + 'Порядковый номер минимального элемента массива' + ' ' + minElementIndexNumber + '<p/>');
document.write('<p>' + 'Максимальный элемент массива' + ' ' + maxElement + '<p/>');
document.write('<p>' + 'Порядковый номер максимального элемента массива' + ' ' + maxElementIndexNumber + '<p/>');
document.write('<p>' + 'Количество отрицательных элементов' + ' ' + negativeNumbersElements.length + '</p>');
document.write('<p>' + 'Количество нечетных положительных элементов' + ' ' + positiveNumbersElementsOdd.length + '</p>');
document.write('<p>' + 'Количество четных положительных элементов' + ' ' + positiveNumbersElementsEven.length + '</p>');
document.write('<p>' + 'Сумма четных положительных элементов' + ' ' + sumEvenPositive + '<p/>');
document.write('<p>' + 'Сумма нечетных положительных элементов' + ' ' + sumOddPositive + '<p/>');
document.write('<p>' + 'Произведение положительных элементов' + ' ' + productOfPositiveNumbers + '<p/>');
document.write('<p>' + 'Обнуление' + ' ' +  arr + '</p>');