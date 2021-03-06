/*
The height of a tree (binary or not) is defined to be the maximum distance from the root node to any leaf node. The tree in fig 5-2, for example, has a height of 4 because the path from A to F, G, or H involves four nodes. Write a function to calculate the height of an arbitrary binary tree.
*/

/*
Approach: Do a recursive depth-first search and keep a count of the left and right nodes that I've reached. When I get back to the root node, return the max count between left and right branches.
*/

// function Node (val, left, right) {
//   this.value = val
//   this.left = left || null
//   this.right = right || null
// }

// function treeHeight(tree) {
//   let leftCount = 0
//   let rightCount = 0

//   let current = tree

//   while (current.left !== null && current.right !== null) {
//     if (current.left) {
//       leftCount += treeHeight(current.left)
//     } else {
//       rightCount += treeHeight(current.right)
//     }
//   }
//   return 1 + Math.max(leftCount, rightCount)
// }

// Working solution O(n)

function treeHeight(tree) {
  if (tree === null) return 0
  let left = treeHeight(tree.left)
  let right = treeHeight(tree.right)
  return Math.max(left, right) + 1
}

/*

example

let bst = {
  value: 'A',
  left: {
    value: 'B',
    left: null,
    right: null
  },
  right: {
    value: 'C',
    left: {
      value: 'D',
      left: {
        value: 'F',
        left: null,
        right: null
      },
      right: {
        value: 'G',
        left: null,
        right: null
      }
    },
    right: {
      value: 'E',
      left: null,
      right: {
        value: 'H',
        left: null,
        right: null
      }
    }
  }
}

treeHeight(bst);

*/