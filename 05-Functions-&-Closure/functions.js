function concatString() {
    var str = '';
    for (var i = 0; i < arguments.length; i++) {
        str += arguments[i];
    }
    return str;
}

function yourFunctionRunner() {
    var str = '';
    for (var i = 0; i < arguments.length; i++) {
        str += arguments[i]();
    }
    return str;
}

function makeAdder(num) {
    return function(otherNum) {
        return num + otherNum;
    }

}

function once(func) {
    var called = false;
    return function check() {
        if (!called) {
            called = true;
            func();
        }
    }

}

function createObjectWithClosures() {
    let value = 0;
    return {
        oneIncrementer: function() {
            value += 1;
        },
        tensIncrementer: function() {
            value += 10;
        },
        getValue: function() {
        return value;
        },
        setValue: function(num) {
        value = num;
        }
    }
}

function guestListFns(array, code) {
    var guestList = [];
    var actualCode = code;
    function helper(name) {
        guestList.push(function(attemptedCode) {
            if (attemptedCode === actualCode) {
                return name;
            } else {
                return 'Secret-Code: Invalid';
            }
        })
    }
    for (var i = 0; i < array.length; i++) {
        helper(array[i]);
    }
    return guestList;
}

function generateGuestList(array, code) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i](code));
    }
    return arr;
}