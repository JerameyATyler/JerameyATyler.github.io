var fraction = {
    getProperFraction : function () {
        var num1 = mf.getRandomIntExclusive(1, 10);
        var num2 = mf.getRandomIntExclusive(1, 10);

        var pFraction = new Object();

        if (num1 > num2) {
            pFraction.numerator = num2;
            pFraction.denominator = num1;
        }
        else if (num1 < num2) {
            pFraction.numerator = num1;
            pFraction.denominator = num2;
        } else {
            pFraction.numerator = num1;
            pFraction.denominator = num2 + 1;
        }

        pFraction = fraction.reduce(pFraction);

        return pFraction;
    },

    getImproperFraction : function () {
        var num1 = mf.getRandomIntExclusive(1, 10);
        var num2 = mf.getRandomIntExclusive(1, 10);

        var pFraction = new Object();

        if (num1 < num2 || num1 == num2) {
            pFraction.numerator = num2;
            pFraction.denominator = num1;
        }
        else if (num1 > num2) {
            pFraction.numerator = num1;
            pFraction.denominator = num2;
        }

        pFraction = fraction.reduce(pFraction);

        return pFraction;
    },

    reduce : function (f) {
        var gcd = mf.getGCD(f['numerator'], f['denominator']);
        while(gcd != 1){
            f['numerator'] /= gcd;
            f['denominator'] /= gcd;

            gcd = mf.getGCD(f['numerator'], f['denominator']);
        }

        return f;
    },

    fractionToHtml : function(f){
        return '<p class="problem"><span class="frac problem"><sup class="problem">' + f['numerator'] +
            '</sup><span class="problem">/</span><sub class="problem">' + f['denominator'] + '</sub></span></p>';
    }
}