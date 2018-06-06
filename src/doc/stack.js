//our nested history of match results, so we can 'zoom-in/out' of our document
class Stack {
  constructor(cache) {
    this.cache = cache;
    this.history = [];
  }
  add(arr) {
    this.history.push(arr);
    return this;
  }
  current() {
    return this.history[this.history.length - 1] || [];
  }
  pop() {
    if (this.history.length > 1) {
      this.history.pop();
    }
    return this;
  }
}
Stack.prototype.clone = function() {
  let arr = this.history.slice(0);
  return new Stack(arr);
};
module.exports = Stack;
