// 19. Remove Nth Node From End of List
// Medium

// 2964

// 218

// Add to List

// Share
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
const removeNthFromEnd = function removeNthFromEnd(head, n) {
  let temp = head;

  let findLength = 1;
  let node = head.next;
  while (node) {
    findLength += 1;
    node = node.next;
  }

  if (n === findLength) return temp.next;

  let i = n;
  while (i < findLength - 1) {
    temp = temp.next;
    if (!temp) break;

    i += 1;
  }

  const storeNext = temp.next.next;

  temp.next = null;
  temp.next = storeNext;

  return head;
};

export default removeNthFromEnd;
