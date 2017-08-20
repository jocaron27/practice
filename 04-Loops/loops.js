function repeat(str, num) {
    var string = '';
    for (var i = 0; i < num; i++) {
        string += str;
    }
    return string;
}

function sum(arr) {
    if (arr.length) {
    return arr.reduce((a,b) => a + b);
    } 
    return 0;
}

function join(arr, delimiter) {
    if (delimiter) {
        for (var i = 0; i < arr.length - 1; i++) {
            arr[i] += delimiter;
        }
    }
    return arr.reduce(function(a,b) { return a + b;}, '');
}

function gridGenerator(num) {
    var grid = '';
    var currentRow;
    var currentColumn;
    for (var i = 0; i < num; i++) {
        if (i % 2) {
            for (var j = 0; j < num; j++) {
                 if (j % 2) {
                     grid += '#';
                } else {
                    grid += ' ';
                }
            }
        } else {
            for (var j = 0; j < num; j++) {
                if (j % 2) {
                    grid += ' ';
               } else {
                   grid += '#';
               }
           }
        }
        grid += '\n';
    }
    return grid;
}

function paramify(obj) {
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key + '=' + obj[key]);
        }
    }
    return arr.sort().join('&');
}

function paramifyObjectKeys(obj) {
    var arr = Object.keys(obj);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + '=' + obj[arr[i]];
    }
    return arr.sort().join('&');
}

function renameFiles(array) {
    var tracker = {};
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (tracker.hasOwnProperty(array[i])) {
            var rename = array[i] + '(' + tracker[array[i]] + ')';
             while (tracker.hasOwnProperty(rename)) {
                tracker[array[i]]+=1;
            }
            newArray.push(rename);
        } else {
            tracker[array[i]] = 1;
            newArray.push(array[i]);
        }
    }
    return newArray;
}