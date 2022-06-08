// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let count = 0;
        if (this.head === null){return count}
        let current = this.head;

        count ++
        while(current.next) {
            count++;
            current = current.next;
        }
        return count;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        if (!this.head){
            return sum
        }
        let current = this.head
        while (current){
            sum = sum + current.value
            current = current.next
        }
        return sum

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {

        if (!this.head) return 0;
        return this.sumOfNodes() / this.listLength();
        // Returns the average value of all the nodes

            // another way:
        // let sum = 0;
        // let count = 0;

        // if(!this.head) return sum;

        // let current = this.head;
        // while (current) {
        //     sum = sum + current.value;
        //     count = count + 1;
        //     current = current.next;
        // }
        // return sum / count;

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let current = this.head
        let count = n
        while(current && count > 0){
            current = current.next
            count --
        }
        if (count === 0 && current){
            return current}


        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        let current = this.head
        let middle = Math.floor(this.listLength() / 2)
        let count = 0
        while (count < middle && current){
            if (count < 0)return null;
            current = current.next
            count++
        }
        if (true)return current;
        return null;

    }
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        //     How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here


    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
