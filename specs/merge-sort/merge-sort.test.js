/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/
const mergeSort = (nums) => {
    if (nums.length <= 1) return nums;

    const midIndex = Math.floor(nums.length / 2);
    const left = nums.slice(0, midIndex);
    const right = nums.slice(midIndex);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (sortedArray1, sortedArray2) => {
    console.log(sortedArray1, sortedArray2);
    const result = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < sortedArray1.length || pointer2 < sortedArray2.length) {
        if (pointer1 >= sortedArray1.length || sortedArray1[pointer1] > sortedArray2[pointer2]) {
            result.push(sortedArray2[pointer2]);
            pointer2++;
        } else {
            result.push(sortedArray1[pointer1]);
            pointer1++;
        }
    }
    return result;
};

// unit tests
// do not modify the below code
test("merge sort", function () {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const ans = mergeSort(nums);
    expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
