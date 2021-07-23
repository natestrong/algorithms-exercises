// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
    // code goes here
}

function binarySearch(id, array, offset = 0) {
    const midIndex = Math.floor(array.length / 2);
    if (array[midIndex].id === id) return array[midIndex];

    if (id < array[midIndex].id) {
        return binarySearch(id, array.slice(0, midIndex), offset);
    } else {
        return binarySearch(id, array.slice(midIndex + 1), offset + midIndex);
    }
}

test("binary search", function () {
    const lookingFor = {id: 23, name: "Brian"};
    expect(
        binarySearch(23, [
            {id: 1, name: "Sam"},
            {id: 3, name: "Sarah"},
            {id: 5, name: "John"},
            {id: 6, name: "Burke"},
            {id: 10, name: "Simona"},
            {id: 12, name: "Asim"},
            {id: 13, name: "Niki"},
            {id: 15, name: "Aysegul"},
            {id: 17, name: "Kyle"},
            {id: 18, name: "Jem"},
            {id: 19, name: "Marc"},
            {id: 21, name: "Chris"},
            lookingFor,
            {id: 24, name: "Ben"}
        ])
    ).toBe(lookingFor);
});
