const assert = require("assert")
const Bag = require("./Bag.js")

const bag = new Bag()

bag.add(1)

assert.deepEqual(bag.size(), 1)

for(const item of bag) {
	assert.deepEqual(item, 1)
}
