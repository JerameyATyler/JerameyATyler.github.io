var factorization = {
    init : function(){

    },
    getFactorizationProblem : function(){
        var num1 = mf.getRandomIntInclusive(1, 10);
        var num2 = mf.getRandomIntInclusive(1, 10);
        while(mf.getGCD(num1, num2) > 1){
            num2 = mf.getRandomIntInclusive(1, 10);
        }
        var num3 = 2;

        var fp = new Object();

        fp.num1 = num1;
        fp.num2 = num2;
        fp.num3 = num3;

        return fp;
    }
}


