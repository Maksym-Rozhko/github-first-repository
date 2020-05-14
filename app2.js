const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveNumbersSum = 0, positiveNumbersElements = [], // a.
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
    }
    if(arr[i] <= minElement) {
        minElement = arr[i];
        minElementIndexNumber = i;
    }
}

document.write('<p>' + 'Cуммa' + ' ' + positiveNumbersSum + '<p/>');
document.write('<p>' + 'Количество положительных элементов' + ' ' + positiveNumbersElements.length + '</p>');
document.write('<p>' + 'Минимальный элемент массива' + ' ' + minElement + '<p/>');
document.write('<p>' + 'Порядковый номер минимального элемента массива' + ' ' + minElementIndexNumber + '<p/>');