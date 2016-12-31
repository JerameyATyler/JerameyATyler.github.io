var factorization = {
    init : function(){
        var problem = factorization.getFactorizationProblem();

        $('.problem_view').append('<input type="text" name="answer" placeholder="e.g. 2,2,3"><br>');
        $('.problem_view').append('<div id="submit" class="button">Submit</div>');

        $('#submit').click(function(){
            if(factorization.checkSolution($('input').val(), problem)){
                alert("Correct!");
            }
            else{
                alert("Incorrect! Hint: You should have a list of 2-4 prime numbers.")
            }
        });
    },

    getFactorizationProblem : function(){
        var primes = [2,3,5,7];
        var fp = [];

        for(var i = 0; i < mf.getRandomIntInclusive(2,4); i++){
            fp.push(mf.getRandomFromList(primes));
        }

        var val = 1;

        for(var i = 0; i < fp.length; i++){
            val *= fp[i];
        }

        $('.problem_view').append("<h3>What is the prime factorization of " + val + "? Enter your solution separated by commas:</h3>");

        return fp;
    },

    checkSolution : function(sol, fp){
        sol = sol.split(',');

          for(var i =0; i < sol.length; i++){
              sol[i] = sol[i].trim();
          }

        fp.sort();
        sol.sort();

        if(sol.length != fp.length) return false;
        for(var i = 0; i < sol.length; i++){
            if(fp[i] != sol[i]) return false;
        }

        return true;
    }
}

factorization.init();

