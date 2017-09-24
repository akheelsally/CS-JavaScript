const LinkedList = require('./Doubly_Linked_List');

function Queue(capacity) {
    this._elements = new LinkedList();
    Object.defineProperty(this,'length',{
        get:function() {
            return this._elements._length;
        }
    });
    Object.defineProperty(this,'_cap',{
        get:function() {
            return capacity;
        }
    });
}

Queue.prototype.isEmpty  = function() {
    this._elements.isEmpty()
}

Queue.prototype.push  = function(value) {
    if(this.length < this._cap ) {
        this._elements.add(value);
        return this.length;
    } 
    return -1;
    
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

