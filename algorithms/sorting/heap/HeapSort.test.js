const assert = require("assert")
const HeapSort = require("./HeapSort.js")

const heapSort = new HeapSort()

const unorderedValues = [1, 4, 2, 3]

heapSort.sort(unorderedValues)
console.log(unorderedValues)
assert.deepEqual(unorderedValues[0], 1)
assert.deepEqual(unorderedValues[1], 2)
assert.deepEqual(unorderedValues[2], 3)
assert.deepEqual(unorderedValues[3], 4)

