# algorithms-and-data-structures-study
:hammer: A deep study about algorithms and data structures with help of Javascript

## Data Structures

These are the most famous data structures used in lot of applications to help solving many issues related to dealing with data.

- [**Bags:**](./data-structures/bags/Bag.js) A bag is a collection where removing items is not supported. Its purpose is to provide clients the ability to collect items and then to iterate through them. The order of iteration is unspecified and should be immaterial to the client.

- [**FIFO Queue:**](./data-structures/queues/FIFOQueue.js) A FIFO queue is a collection based on the first-in-first-out (FIFO) policy. So, it means we use it to do tasks in the same order that they arrive.

- [**Pushdown Stack:**](./data-structures/stacks/PushdownStack.js) A pushdown stack is a collection that is based on the last-in-first-out (LIFO) policy. So, it means we use it to do tasks taking always the top item of the collection.

- [**Fixed-capacity Stack:**](./data-structures/stacks/FixedCapacityStack.js) A fixed-capacity stack is a pushdown stack with items limiting.

- [**Linked List:**](./data-structures/lists/LinkedList.js) A linked list is a recursive data structure that is either empty or a reference to a node having a generic item and a reference to a linked list (a node is any kind of data that refers another node recursively).

- [**Binary Heap:**](./data-structures/binary-tree/BinaryHeap.js) A binary heap is a heap constructed with help of a binary tree structure, which can maintain all the values sorted during its insert and remove actions.

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

## Searching

Below you can see some of the structures focused on searching. 

### Symbol Tables

Usually these structures have the pattern of associating a value with a key. That key is used later to get the item you have inserted.

- [**Sequential Search:**](./algorithms/searching/symbol-table/SequentialSearch.js) It is a kind of Symbol Table, which we use a linked list structure to keep all items ordered and so to sequentially search them.

- [**Binary Search:**](./algorithms/searching/symbol-table/BinarySearch.js) It is a kind of Symbol Table, that during searches, we divide the keys in two parts and so, we determine if we will search on the right part or the left one, instead of searching sequentially all the array keys.

### Binary Search Trees

These searching algorithms use the data structure called binary tree (it is basically a recursive data structure like a linked list that points at two nodes at the same time).

- [**Binary Search Tree:**](./algorithms/searching/symbol-table/BinarySearchTree.js) It is a symbol table that uses the binary tree data structure to handle all searching process. So, each node in the tree has a key that is larger than the keys in all node's left subtree and smaller than the keys in all nodes in that node's right subtree.

- [**Red Black Binary Search Tree:**](./algorithms/searching/balanced-search-tree/RedBlackBinarySearchTree.js) It is a binary search tree (actually the one with 2-3 nodes) with an optimization that helps keeping the path to a value almost the same for all entries. So, we can call it to be a balanced search tree method, since it is able to search values with same distance between the root of the tree to any value you want.

### Hash Tables

These ones use a key-value structure in which the key corresponds to an index on an array. So, it means that the given key must refer a unique index on the array that is storing it (we must avoid key/index collisions). 

- [**Separate Chaining Hash:**](./algorithms/searching/hash-table/SeparateChainingHash.js) It is a hash table that converts the key into indexes to store the data inside an array of sequential searches.

- [**Linear Probing Hash:**](./algorithms/searching/hash-table/LinearProbingHash.js) It is a hash table which we store keys and values in separated arrays in order to get an easy search match later.

## String

String is necessary for almost all kind of communication, we deal with it in information processing, genomics, communication systems and programming systems. Being minded about that, we have the following algorithms:

### Sorting

We have some sorting methods for string that take advantage of special properties of strings to develop sorts for string keys that are more efficient than the general-purpose sorts that we have seen above.

- [**LSD String Sort:**](./algorithms/string/sorting/LSDStringSort.js) It is known as least-significant-digit string sort. It sorts an array of strings from left word letter to right using a key-indexed count array (so it means that it only sort fixed-length strings).

- [**MSD String Sort:**](./algorithms/string/sorting/MSDStringSort.js) It is known as most-significant-digit string sort. We use key-indexed counting to sort the strings according to their first character, then, recursively sort the sub-arrays corresponding to each character. It is similar to LSD string sort, but, it can be done without a fixed-word length.

- [**Three-way String Quicksort:**](./algorithms/string/sorting/ThreeWayStringQuickSort.js) It is an implementation of quicksort for strings, so it deals with partitioning the string array into sub-arrays while sorting it.

### Searching

We can implement some search methods that can take benefits of using it into a string. Some of them are shown below:

- [**Trie Symbol Table:**](./algorithms/string/searching/TrieSymbolTable.js) It is a basic symbol table that creates a search tree using the characters of the string keys that allow us to use the characters of the search key to guide the search.

## TODO

### Topics

- Analysis of Algorithms

- Graphs

### Refactors

- Adding complexity order for all algorithms

### Algorithms

- **Data Structures:**
  - Applications -> Dijkstra’s Two-Stack Algorithm for Expression Evaluation

- **Analysis of Algorithms:**
  - Case Study -> Union-find implementation (ALGORITHM 1.5)

- **Sorting:**
  - Priority Queues -> Heap priority queue (ALGORITHM 2.6)
  - Quicksort -> Quicksort with 3-way partitioning
  - Quicksort -> Quicksort partitioning
  - Elementary Sorts -> Shellsort (ALGORITHM 2.3)

- **Searching:**
  - Applications -> Sparse vector with dot product
  - Applications -> File indexing
  - Applications -> Index (and inverted index) lookup
  - Applications -> Dictionary lookup

- **String:**
  - Sort -> LSD (ALGORITHM 5.1)
  - Sort -> MSD (ALGORITHM 5.2)
  - Searching -> TST (ALGORITHM 5.5)
  - Searching -> Knuth-Morris-Pratt substring search (ALGORITHM 5.6)
  - Regular Expressions -> Regular expression pattern matching (grep) (ALGORITHM 5.9)
  - Data Compression -> Huffman compression (ALGORITHM 5.10)
  - Data Compression -> LZW compression (ALGORITHM 5.11)
