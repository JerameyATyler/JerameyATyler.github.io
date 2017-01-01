var template = {
    problem: [],

    correct_count: 0,

    getProblem : function(){

        $('#sb_span').text(this.correct_count);

        if(mf.getBoolean()){
            this.problem = this.getFractionPartProblem();
        }else{
            this.problem = this.getFractionTypeProblem();
        }

        $('.problem_view').append('<input type="text" name="answer" class="problem"><br>');
        $('.problem_view').append('<button onclick="definitions.solutionResponses()" id="submit" class="button problem">Submit</button>');
    },

    getFractionPartProblem : function () {
        var f = fraction.getProperFraction();
        var numerator = f['numerator'];
        var denominator = f['denominator'];
        var solution;

        if(mf.getBoolean()){
            $('.problem_view').append("<h3 class='problem'>Enter the number that corresponds to the numerator:</h3>");
            solution = numerator;
        }
        else{
            $('.problem_view').append("<h3 class='problem'>Enter the number that corresponds to the denominator:</h3>");
            solution = denominator;
        }
        $('.problem_view').append(fraction.fractionToHtml(f));

        return solution;
    },

    getFractionTypeProblem : function(){
        var solution;
        var f;

        if(mf.getBoolean()){
            f = fraction.getProperFraction();
            if(mf.getBoolean()){
                solution = 'proper';
            } else{
                f['numerator'] += mf.getRandomIntExclusive(2, 10) * f['denominator'];
                solution = 'mixed';
            }
        } else{
            f = fraction.getImproperFraction();
            solution = 'improper';
        }

        $('.problem_view').append("<h3 class='problem'>Is the following a proper fraction, improper fraction, or mixed number?</h3>");
        $('.problem_view').append(fraction.fractionToHtml(f));

        return solution;
    },

    checkSolution : function(solution){
        return (this.problem == solution);
    },

    solutionResponses : function(){
        var val = $('input').val();
        $('.problem').remove();
        if(this.checkSolution(val)){
            $(".problem_view").append('<h3 class="problem">Correct!</h3>');

            this.correct_count++;
        }
        else{
            switch (this.problem){
                case 'proper':
                    $(".problem_view").append('<h3 class="problem">Incorrect! Hint: If the numerator of a fraction is less than the denominator, the ' +
                        'fraction is a proper fraction</h3>');
                    break;
                case 'improper':
                    $(".problem_view").append('<h3 class="problem">Incorrect! Hint: If the numerator of a fraction is greater than or equal to the ' +
                        'denominator, then the fraction is an improper fraction</h3>');
                    break;
                case 'mixed':
                    $(".problem_view").append('<h3 class="problem">Incorrect! Hint: A mixed number is a whole number added to a proper fraction.</h3>');
                    break;
                default:
                    $(".problem_view").append('<h3 class="problem">Incorrect! Hint: The numerator is on top and the denominator is on the bottom.</h3>');
                    break;
            }
        }

        $('.problem_view').append('<button onclick="definitions.reset()" id="reset" class="button problem">Reset</button>');
    },

    reset : function(){
        $('.problem').remove();
        $('br').remove();
        this.getProblem();
    }
};

template.getProblem();
