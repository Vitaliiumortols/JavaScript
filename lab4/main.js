let normalArray = [
    42, 17, 89, 3, 56, 24, 71, 90, 12, 38,
    65, 8, 44, 27, 99, 14, 53, 6, 81, 31,
    47, 19, 73, 2, 58, 36, 84, 11, 69, 25,
    92, 5, 40, 63, 18, 77, 29, 50, 96, 13,
    34, 60, 7, 88, 22, 54, 1, 79, 33, 46,
    67, 15, 91, 28, 57, 10, 74, 21, 48, 86,
    4, 61, 16, 82, 30, 55, 9, 70, 26, 94,
    37, 64, 20, 83, 32, 59, 98, 23, 45, 72,
    6, 87, 35, 52, 97, 41, 66, 18, 80, 27,
    49, 93, 14, 62, 39, 75, 7, 85, 51, 100
];

let sparseArray = [
    42, 17, 89, 3, 56, 24, 71, 90, 12, 38,
    65, 8, 44, , , 27, 99, 14, 53, 6, 81, 31,
    47, 19, 73, 2, 58, 36, 84, 11, 69, 25,
    92, 5, 40, 63, 18, , , 77, 29, 50, 96, 13,
    34, 60, 7, 88, 22, 54, 1, 79, 33, 46,
    67, 15, 91, , , 28, 57, 10, 74, 21, 48, 86,
    4, 61, 16, 82, 30, , 55, 9, 70, 26, 94,
    37, 64, 20, 83, 32, 59, 98, 23, 45, 72,
    6, 87, 35, , , ,  52, 97, 41, 66, 18, 80, 27,
    49, 93, 14, 62, 39, , 75, 7, 85, 51, 100
];

console.log("normal array:" + normalArray);
console.log("sparse array:" +sparseArray);

console.log("normal sort:");
Library.bubbleSort(normalArray, true)
Library.selectionSort(normalArray, false)
Library.insertionSort(normalArray, true)
Library.shellSort(normalArray, true)
Library.quickSort(normalArray, false)

console.log("sparse sort:");
Library.bubbleSort(sparseArray, true)
Library.selectionSort(sparseArray, false)
Library.insertionSort(sparseArray, true)
Library.shellSort(sparseArray, true)
Library.quickSort(sparseArray, false)


