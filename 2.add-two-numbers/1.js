function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var l1 = new ListNode(null)
var l2 = new ListNode(null)
var current1 = l1
var current2 = l2
const array1 = [9, 9, 9, 9, 9, 9, 9]
const array2 = [9, 9, 9, 9]

for (const element of array1) {
  current1.next = new ListNode(element, null)
  current1 = current1.next
}

for (const element of array2) {
  current2.next = new ListNode(element, null)
  current2 = current2.next
}

var addTwoNumbers = function (l1, l2) {
  var l = new ListNode()
  var current = l
  var superfluous = 0
  while (l1 || l2) {
    var newSum = 0
    if (l1) {
      newSum += l1.val
      l1 = l1.next
    }
    if (l2) {
      newSum += l2.val
      l2 = l2.next
    }
    if (superfluous) {
      newSum += superfluous
      superfluous = 0
    }
    if (newSum >= 10) {
      superfluous = 1
      newSum -= 10
    }
    current.next = new ListNode(newSum)
    current = new ListNode(newSum)
  }
  if (superfluous) {
    current.next = new ListNode(superfluous)
    current = current.next
  }
  while (l) {
    console.log(l.val)
    l = l.next
  }
  // return l.next
}
addTwoNumbers(l1.next, l2.next)
// addTwoNumbers(l1.next, l2.next)
