function createCalculator() {
    return {
        sum: 0,
        value: function() {
            return this.sum; 
        },
        add: function(num) {
            this.sum += num;
        },
        subtract: function(num) {
            this.sum -= num;
        },
        clear: function() {
            this.sum = 0;
        }
    }
}