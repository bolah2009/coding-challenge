// Queue operations may involve initializing or defining the queue,
// utilizing it, and then completely erasing it from the memory.
// Here we shall try to understand the basic operations associated with queues −

// enqueue() − add (store) an item to the queue.
// dequeue() − remove (access) an item from the queue.
// peek() − Gets the element at the front of the queue without removing it.
// isfull() − Checks if the queue is full.
// isempty() − Checks if the queue is empty.

// Implement a Queue using two stacks.
// You may only use the standard enqueue(), dequeue(), and peek() operations traditionally available to stacks.
// You do not need to implement the stack yourself (i.e. an array can be used to simulate a stack).

const Queue = (size = 10) => {
  const store = [];

  // isFull() − Checks if the queue is full.
  const isFull = () => store.length >= size;

  // isEmpty() − Checks if the queue is empty.
  const isEmpty = () => store.length === 0;
  // enqueue() − add (store) an item to the queue.
  const enqueue = item => store.push(item);

  // dequeue() − remove (access) an item from the queue.
  const dequeue = () => store.shift();

  // peek() − Gets the element at the front of the queue without removing it.
  const peek = () => store[0];

  return {
    isFull,
    isEmpty,
    enqueue,
    dequeue,
    peek,
  };
};

// const queue = Queue(5);

// console.log(queue.isFull());
// console.log(queue.isEmpty());
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// // 2,3,4,5,6
// console.log(queue.isFull());
// console.log(queue.isEmpty());

// console.log(queue.dequeue());
// console.log(queue.peek());
// // 3

// console.log(queue.isFull());
// console.log(queue.isEmpty());

export default Queue;
