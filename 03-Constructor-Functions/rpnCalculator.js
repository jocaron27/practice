var RPNCalculator = function() {
    this.array = [];
}

RPNCalculator.prototype.total = 0;
RPNCalculator.prototype.value = function() {
    return this.total;
};
RPNCalculator.prototype.push = function(num) {
    this.array.push(num);
};


RPNCalculator.prototype.plus = function() {
    if (this.array.length < 2) {
        throw 'rpnCalculatorInstance is empty';
    }
    var newArr = [];
    newArr.push(this.array.pop());
    newArr.push(this.array.pop());
    console.log(newArr);
    
    this.push(newArr.reduce(function(a,b) {return a + b}));
    this.total = this.array[this.array.length - 1];
}
    
RPNCalculator.prototype.minus = function() {
    if (this.array.length < 2) {
        throw 'rpnCalculatorInstance is empty';
    }
    var newArr = [];
    newArr.push(this.array.pop());
    newArr.push(this.array.pop());
    this.push(newArr[1] - newArr[0]);
    this.total = this.array[this.array.length - 1];
}

RPNCalculator.prototype.divide = function() {
    if (this.array.length < 2) {
        throw 'rpnCalculatorInstance is empty';
    }
    var newArr = [];
    newArr.push(this.array.pop());
    newArr.push(this.array.pop());
    this.push(newArr[1] / newArr[0]);
    this.total = this.array[this.array.length - 1];
}

RPNCalculator.prototype.times = function() {
    if (this.array.length < 2) {
        throw 'rpnCalculatorInstance is empty';
    }
    var newArr = [];
    newArr.push(this.array.pop());
    newArr.push(this.array.pop());
    this.push(newArr[1] * newArr[0]);
    this.total = this.array[this.array.length - 1];
}