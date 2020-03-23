// Create a class instance to represent a node.
// The node should have two properties, ‘data’ and ‘next’. Accept both of these as arguments to the ‘Node’ constructor, then assign them to the instance as properties, then default it's value to be ‘null’. 

class Node {
    constructor(data, next) {
        this.data = data || null;
        this.next = next || null;
    }
}

let node1 = new Node('there');
console.log(node1.data) // ‘there’
console.log(node1.next) // null
let node2 = new Node('hi', node1);
console.log(node2.next) // return node1
