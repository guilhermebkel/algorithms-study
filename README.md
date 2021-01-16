# algorithms-and-data-structures-study
:hammer: A deep study about algorithms and data structures with help of Javascript

## Data Structures

These are the most famous data structures used in lot of applications to help solving many issues related to dealing with data.

- [**Bags:**](./data-structures/bags/Bag.js) A bag is a collection where removing items is not supported. Its purpose is to provide clients the ability to collect items and then to iterate through them. The order of iteration is unspecified and should be immaterial to the client.

- [**FIFO Queue:**](./data-structures/queues/FIFOQueue.js) A FIFO queue is a collection based on the first-in-first-out (FIFO) policy. So, it means we use it to do tasks in the same order that they arrive.

- [**Pushdown Stack:**](./data-structures/stacks/PushdownStack.js) A pushdown stack is a collection that is based on the last-in-first-out (LIFO) policy. So, it means we use it to do tasks taking always the top item of the collection.

- [**Fixed-capacity Stack:**](./data-structures/stacks/FixedCapacityStack.js) A fixed-capacity stack is a pushdown stack with items limiting.

- [**Linked List:**](./data-structures/lists/LinkedList.js) A linked list is a recursive data structure that is either empty or a reference to a node having a generic item and a reference to a linked list (a node is any kind of data that refers another node recursively).

## Sorting

Below you can see some of the famous methods of sorting values.

### Elementary Sorts

The elementary sorts are the basic ones that work by the idea of going from left to right on the array while sorting it.

- [**Selection Sort:**](./algorithms/sorting/elementary-sorts/SelectionSort.js) Selection sort works as follows: First, find the smallest item in the array and exchange it with the first entry, then, find the next smallest item and exchange it with the second entry and continue doing that till the entire array is sorted.

- [**Insertion Sort:**](./algorithms/sorting/elementary-sorts/InsertionSort.js) Insertion sort goes from the left side array to the right, that way the left side is being sorted and the array gets fully sorted when we get to the last array item.

### Mergesort

The merge sorts are the ones with the idea of breaking the array down into multiple sub-arrays while sorting it.

- [**Top-down Mergesort:**](./algorithms/sorting/mergesort/TopDownMergesort.js) Top-down mergesort is a recursive implementation that turn an array into sub-arrays (recursively), then order all the sub-arrays and finally merge them to the final ordered array.

- [**Bottom-up Mergesort:**](./algorithms/sorting/mergesort/BottomUpMergesort.js) Bottom-up mergesort works with recursive calls as follows: First, start by doing a pass of 1-by-1 merges, then a pass of 2-by-2 merges and keep doing that till the array is fully sorted.

### Quicksort

The quicksort is a popular implementation of sorting since it is easy to do, fast and works well for the most kinds of input data.

- [**Quicksort:**](./algorithms/sorting/quicksort/QuickSort.js) The basic idea of quicksort is to breakdown the array into 2 arrays while sorting them independently in a recursive way (by putting a value in the correct position among all the other values).

### Priority Queues

Many applications require processing items on demand by taking the one with the largest key per example (without getting all the items sorted at once). In order to do that, we can assign priority to events always choosing to process next the highest-priority event.

- [**Priority Queue:**](./algorithms/sorting/queues/PriorityQueue.js) There are too many ways to implement this ordered based queue, the most basic one is to maintain the queue ordered during the insertions, so that way you just need to remove the first item (with highest priority) in order to process it.

### Heapsort

With help of binary tree heap data structure used to build the heap priority queue, we are able to create a sort method from it as well.

- [**Heapsort:**](./algorithms/sorting/heap/HeapSort.js) The heapsort consists into two actions: first we reorganize the initial array into a heap and after we sortdown, that is when we pull the items out of the heap in decreasing order to build the sorted result.

## TODO

### 1. Finishing the following topics

Data Structures -> Binary Tree

Analysis of Algorithms

Sorting -> Heapsort -> Sortdown

Sorting -> Applications -> Pointer sorting

Sorting -> Applications -> Alternate orderings

Sorting -> Priority Queues -> Heap Priority Queue

### 2. Adding the following information

Adding complexity order for all algorithms

Finishing Heapsort algorithm implementation
