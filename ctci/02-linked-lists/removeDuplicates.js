// Write code to remove duplicates from an unsorted linked list

/*
approach: keep track of the duplicates in a cache
*/

function removeDupes(LinkedList) {
  let noDupes = new LinkedList(0)
  let current = LinkedList

  let cache = {}

  while (current.next) {
    let prev = current
    // if there is a value in the cache, we'll need to set the prev node to point to the current's next node
    // we'll also need to go into the cache to change that previous node to point to the the next node
    if (!cache[current.next.value]) { // if the next number isn't in the cache, add it
      cache[current.next.value] = current.next
      noDupes.next = current.next
      current = current.next
    } else {
      cache[current.next.value].push({ prev: prev, node: current.next })
      noDupes.next = current.next.next
      current = current.next.next
    }
  }
  return noDupes
}

// solution

function removeDupes(node) {
  let cache = {}
  let prev = null

  while (node) {
    if (cache[node.value]) {
      prev.next = node.next
    } else {
      cache[node.value] = node
      prev = node
    }
    node = node.next
  }
}
