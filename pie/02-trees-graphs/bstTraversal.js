/*

preorder traversal: node is visited first before the left and right children
approach: use recursion!
print node
recurse on left children
recurse on right children

Each of these traversals are O(n) because each node is visited once.

*/

function preorderBST (node) {
  if (node === null) return
  console.log(node.value)
  preorderBST(node.left)
  preorderBST(node.right)
}

function inorderBST (node) {
  if (node === null) return
  inorderBST(node.left)
  console.log(node.value)
  inorderBST(node.right)
}

function postorderBST (node) {
  if (node === null) return
  postorderBST(node.left)
  postorderBST(node.right)
  console.log(node.value)
}