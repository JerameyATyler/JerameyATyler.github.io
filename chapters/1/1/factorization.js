var factorization = {
    problem: [],

    correct_count: 0,

    getProblem: function () {

        $('#sb_span').text(this.correct_count);

        this.problem = this.getFactorizationProblem();

        $('.problem_view').append('<input type="text" name="answer" class="problem"><br>');
        $('.problem_view').append('<button onclick="factorization.solutionResponses()" id="submit" class="button problem">Submit</button>');
    },

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

        $('.problem_view').append("<h3 class='problem'>What is the prime factorization of " + val + "? Enter your solution separated by commas:</h3>");

        return fp;
    },

    checkSolution : function(sol){
        sol = sol.split(',');

          for(var i =0; i < sol.length; i++){
              sol[i] = sol[i].trim();
          }
        var fp = this.problem;
        fp.sort();
        sol.sort();

        if(sol.length != fp.length) return false;
        for(var i = 0; i < sol.length; i++){
            if(fp[i] != sol[i]) return false;
        }

        return true;
    },

    solutionResponses : function(){
        var val = $('input').val();
        $('.problem').remove();
        if(this.checkSolution(val)){
            $(".problem_view").append('<h3 class="problem">Correct!</h3>');

            this.correct_count++;
        }
        else{
            $(".problem_view").append('<h3 class="problem">Incorrect! Hint: You should have a list of 2-4 prime numbers.</h3>');
        }

        $('.problem_view').append('<button onclick="factorization.reset()" id="reset" class="button problem">Reset</button>');
    },

    reset : function(){
        $('.problem').remove();
        $('br').remove();
        this.getProblem();
    }
}

factorization.getProblem();

