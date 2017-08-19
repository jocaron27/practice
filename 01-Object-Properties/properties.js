function setPropsOnObj(obj) {
    obj.x = 7;
    obj['y'] = 8;
    obj.onePlus = function(num) {
        return num + 1;
    }
}

function setPropsOnArr (array) {
  array.hello = function() {
      return 'Hello!';
  }
  array['full'] = 'stack';
  array['twoTimes'] = function(num) {
      return num*2;
  }
  array[0] = 5;
}

function setPropsOnFunc(func) {
    func.year = '20??';
    func.divideByTwo = function(num) {
        return num/2;
    };
    func.prototype.helloWorld = function() {
        return 'Hello World';
    };
}