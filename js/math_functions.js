var mf = {
    getRandom: function () {
        return Math.random();
    },

    getRandomArbitrary: function (min, max) {
        return Math.random() * (max - min) + min;
    },

    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },

    getRandomIntInclusive: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getGCD: function (a, b) {
        while (b > 0) {
            temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
