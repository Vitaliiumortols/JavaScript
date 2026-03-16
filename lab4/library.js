    const Library = {
        /** 
         * Undefined elements are ignored during sorting and moved to the end of the array
         * @param {number[]} arr - Array of numbers
         * @param {boolean} sortType true - sorted by asc, false - sorted by desc
        */
        bubbleSort(arr, sortType) {
            console.log("bubbleSort:");
            let size = arr.length;
            let swapped;
            let comparison = 0;
            let swaps = 0;

            size = moveEmpty(arr)

            for (let i = 0; i < size - 1; i++) {
                swapped = false;
                for (let j = 0; j < size - i - 1; j++) {
                    comparison++;
                    if (sortType) {
                        if (arr[j] > arr[j + 1]) {
                            swap(arr, j, j + 1)
                            swaps++;
                            swapped = true;
                        }
                    } else {
                        if (arr[j] < arr[j + 1]) {
                            swap(arr, j, j + 1)
                            swaps++;
                            swapped = true;
                        }
                    }

                }
                if (!swapped) {
                    break;
                }
            }

            if (sortType) {
                console.log("sorted by asc");
            } else {
                console.log("sorted by desc");

            }

            console.log("sorted array:" + arr);
            console.log("swaps:" + swaps);
            console.log("comparison:" + comparison);

            return arr;
        },

        /** 
         * Undefined elements are ignored during sorting and moved to the end of the array
         * @param {number[]} arr - Array of numbers
         * @param {boolean} sortType true - sorted by asc, false - sorted by desc
        */
        selectionSort(arr, sortType) {
            console.log("selectionSort:");
            let size = arr.length;
            let comparison = 0;
            let swaps = 0;
            let swapIndex = 0;
            size = moveEmpty(arr)
            let min = Infinity;
            let max = -Infinity;


            if (sortType) {
                for (let i = 0; i < size; i++) {
                    for (let j = i; j < size; j++) {
                        comparison++;
                        if (min > arr[j]) {
                            min = arr[j];
                            swapIndex = j;
                        }
                    }
                    if (i !== swapIndex) {
                        swap(arr, i, swapIndex);
                        swaps++;
                    }
                    min = Infinity;
                    swapIndex = 0;
                }
            } else {
                for (let i = 0; i < size; i++) {
                    for (let j = i; j < size; j++) {
                        comparison++;
                        if (max < arr[j]) {
                            max = arr[j];
                            swapIndex = j;
                        }
                    }
                    if (i !== swapIndex) {
                        swap(arr, i, swapIndex);
                        swaps++;
                    }
                    max = -Infinity;
                    swapIndex = 0;
                }
            }

            if (sortType) {
                console.log("sorted by asc");
            } else {
                console.log("sorted by desc");

            }

            console.log("sorted array:" + arr);
            console.log("swaps:" + swaps);
            console.log("comparison:" + comparison);

            return arr;
        },

        /** 
         * Undefined elements are ignored during sorting and moved to the end of the array
         * @param {number[]} arr - Array of numbers
         * @param {boolean} sortType true - sorted by asc, false - sorted by desc
        */
        insertionSort(arr, sortType) {
            console.log("insertionSort:");
            let size = arr.length;
            let comparison = 0;
            let swaps = 0;
            size = moveEmpty(arr)

            if (sortType) {
                for (let i = 1; i < size; i++) {
                    for (let j = i - 1; j > -1; j--) {
                        let temp = arr[i];
                        comparison++;
                        if (temp < arr[j]) {
                            arr[i] = arr[j];
                            i--;
                            arr[j] = temp;
                            swaps++;
                        }
                    }
                }
            } else {
                for (let i = 1; i < size; i++) {
                    for (let j = i - 1; j > -1; j--) {
                        let temp = arr[i];
                        comparison++;
                        if (temp > arr[j]) {
                            arr[i] = arr[j];
                            i--;
                            arr[j] = temp;
                            swaps++;
                        }
                    }
                }
            }

            if (sortType) {
                console.log("sorted by asc");
            } else {
                console.log("sorted by desc");
            }

            console.log("sorted array:" + arr);
            console.log("swaps:" + swaps);
            console.log("comparison:" + comparison);

            return arr;
        },

        /** 
         * Undefined elements are ignored during sorting and moved to the end of the array
         * @param {number[]} arr - Array of numbers
         * @param {boolean} sortType true - sorted by asc, false - sorted by desc
        */
        shellSort(arr, sortType) {
            console.log("shellSort:");
            let size = moveEmpty(arr);
            let gap = Math.floor(size / 2);
            let comparison = 0;
            let swaps = 0;
            let temp;

            if (sortType) {
                while (gap > 0) {
                    for (let i = gap; i < size; i++) {
                        temp = arr[i];
                        let j = i;
                        comparison++;
                        while (j >= gap && arr[j - gap] > temp) {
                            arr[j] = arr[j - gap];
                            j -= gap;
                        }
                        arr[j] = temp;
                        swaps++;

                    }
                    gap = Math.floor(gap / 2);
                }
            } else {
                while (gap > 0) {
                    for (let i = gap; i < size; i++) {
                        temp = arr[i];
                        let j = i;
                        comparison++;
                        while (j >= gap && arr[j - gap] < temp) {
                            arr[j] = arr[j - gap];
                            j -= gap;
                        }
                        arr[j] = temp;
                        swaps++;

                    }
                    gap = Math.floor(gap / 2);
                }
            }

            if (sortType) {
                console.log("sorted by asc");
            } else {
                console.log("sorted by desc");
            }

            console.log("sorted array:" + arr);
            console.log("swaps:" + swaps);
            console.log("comparison:" + comparison);

            return arr;
        },

        /** 
         * Undefined elements are ignored during sorting and moved to the end of the array
         * @param {number[]} arr - Array of numbers
         * @param {boolean} sortType true - sorted by asc, false - sorted by desc
        */
        quickSort(arr, sortType) {
            console.log("quickSort:");
            let stats = {
                comparison: 0,
                moves: 0
            };

            let result = sort(arr, sortType);

            if (sortType) {
                console.log("sorted by asc");
            } else {
                console.log("sorted by desc");
            }

            moveEmpty(result);

            console.log("sorted array:", result);
            console.log("comparison:", stats.comparison);
            console.log("moves:", stats.moves);

            return result;

            function sort(arr, sortType) {
                if (arr.length <= 1) {
                    return arr;
                }

                let start = arr[Math.floor(arr.length / 2)];
                if(start === undefined) {
                    let i = 1;
                    let mid = Math.floor(arr.length / 2);
                    while(mid + i < arr.length && start === undefined){
                        start = arr[Math.floor(arr.length / 2)+i];
                        i++;
                    }
                }
                let left = [];
                let right = [];
                let equals = [];

                for (let i of arr) {
                    stats.comparison++;

                    if (i === start) {
                        equals.push(i);
                    } else if (sortType) {
                        if (i < start) {
                            left.push(i);
                            stats.moves++;
                        } else {
                            right.push(i);
                            stats.moves++;
                        }
                    } else {
                        if (i > start) {
                            left.push(i);
                            stats.moves++;
                        } else {
                            right.push(i);
                            stats.moves++;
                        }
                    }
                }

                return [
                    ...sort(left, sortType),
                    ...equals,
                    ...sort(right, sortType)
                ];
            }
        }
    }

    function moveEmpty(arr) {
        let validSize = arr.length;
        for (let index = 0; index < validSize; index++) {
            if (arr[index] === undefined) {
                for (let j = index; j < validSize; j++) {
                    arr[j] = arr[j + 1];
                }
                arr[validSize - 1] = undefined;
                index--;
                validSize--;
            }
        }
        return validSize;
    }

    function swap(arr, element1, element2) {
        let temp = arr[element1];
        arr[element1] = arr[element2];
        arr[element2] = temp;
    }

 

