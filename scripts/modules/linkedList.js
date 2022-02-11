class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  // size
  size() {
    return this._length;
  }

  // print
  print() {
    let current = this.head,
      arr = [];

    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  // push
  push(value) {
    let current = this.head,
      node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this._length++;
      return;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this._length++;
  }

  // unshift
  unshift(value) {
    let node = new Node(value),
      current = this.head;

    if (!current) {
      this.head = node;
      this._length++;
      return;
    }

    this.head = node;
    this.head.next = current;
    this._length++;
  }

  // pop
  pop() {
    if (this.head === null) return null;

    if (this.head.next === null) {
      this.head = null;
      this._length--;
      return;
    }

    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
    this._length--;
  }

  // shift
  shift() {
    let current = this.head;

    if (this.head === null) return null;

    current = this.head.next;
    this.head = current;
    this._length--;
  }

  // searching
  search(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value.task.search(value) >= 0) {
        return current.value;
      }
      current = current.next;
    }

    return false;
  }
}

export { Node, LinkedList };
