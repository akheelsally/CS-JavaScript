function Node(value) {
  this._value = value;
  this._next = null;
  this._previous = null;
}

function LinkedList() {
  this._length = 0
  this._head = null;
  this._tail = null;
}

LinkedList.prototype.length = function () {
  return this._length;
}

LinkedList.prototype.isEmpty = function () {
  return this._length === 0;
}

LinkedList.prototype.add = function (value, index) {
  if (index > this._length || index < 0) {
    throw new Error('index is out of bounds');
  }
  const node = new Node(value);

  if (index !== undefined && index < this._length) {
    var nextNode,
        prevNode;
    if (index === 0) {
      nextNode = this._head;
      this._head = node;
    } else {
      nextNode = this._getNode(index);
      prevNode = nextNode._previous;
      prevNode._next = node
      node._previous = prevNode;
    }
    node._next = nextNode;
    nextNode._previous = node;
  } else {
    if (!this._head) {
      this._head = node;
    }
    if (this._tail) {
      this._tail._next = node;
      node._previous = this._tail;
    }
    this._tail = node;

  }
  this._length++;
}

LinkedList.prototype.value = function (index) {
  return this._getNode(index)._value;
}


LinkedList.prototype._getNode = function (index) {
  if (index > this._length || index < 0) {
    throw new Error('index is out of bounds');
  }
  var current = this._head;
  for (var i = 1; i <= index; i++) {
    current = current._next;
  }
  return current;
}

LinkedList.prototype.deleteNode = function (index) {
  if (index > this._length || index < 0) {
    throw new Error('index is out of bounds');
  }
  const nodeToDelete = this._getNode(index);
  if (nodeToDelete === this._tail) {
    this._tail = nodeToDelete._previous;
  } else {
    nodeToDelete._next._previous = nodeToDelete._previous;
  }

  if (nodeToDelete === this._head) {
    this._head = nodeToDelete._next;
  } else {
    nodeToDelete._previous._next = nodeToDelete._next;
  }
  this._length--;

}

LinkedList.prototype.print = function () {
  if(this.isEmpty()) return "Empty";
  let current = this._head;
  let str = [];
  while (current) {
    str.push(current._value);
    current = current._next;
  }
  return str.join("-");
}

export default LinkedList;
