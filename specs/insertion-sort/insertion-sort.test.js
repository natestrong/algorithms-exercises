/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/
function insertionSort(nums) {
    let sortedIndex = 0;
    while (sortedIndex < nums.length - 1) {
        const nextNum = nums[sortedIndex + 1];
        let compareIndex = sortedIndex;
        while (nextNum < nums[compareIndex] && compareIndex >= 0) {
            compareIndex--;
        }
        if (compareIndex !== sortedIndex) {
            nums.splice(sortedIndex + 1, 1);
            nums.splice(compareIndex + 1, 0, nextNum);
        }
        sortedIndex++;
    }
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    insertionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
