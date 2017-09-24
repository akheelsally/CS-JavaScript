const LinkedList = require('./Doubly_Linked_List');

function Queue() {
    this._elements = new LinkedList();
    Object.defineProperty(this,'length',{
        get:function() {
            return this._elements._length;
        }
    });
}

Queue.prototype.isEmpty  = function() {
    this._elements.isEmpty()
}

Queue.prototype.push  = function(value) {
    this._elements.add(value)
}

Queue.prototype.pop  = function() {
    if(this._elements.isEmpty()) {
        throw new Error('Queue is empty');
    }
    var item = this._elements._head;
    this._elements.deleteNode(0);
    return item;
}

Queue.prototype.peek  = function() {
    if(this._elements.isEmpty()) {
        throw new Error('Queue is empty');
    }
    return this._elements._head;;
}


var q = new Queue();
q.push(1)
q.push(2)
q.push(3)
q.push(4)
console.log(q.peek())
console.log(q.pop());
console.log(q.length)
console.log(q.peek())
