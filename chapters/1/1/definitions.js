var definitions = {

    init: function(){
        var solution;
        if(mf.getBoolean()){
            solution = definitions.getFractionPartProblem();
        }else{
            solution = definitions.getFractionTypeProblem();
        }

        $('.problem_view').append('<input type="text" name="answer"><br>');
        $('.problem_view').append('<div id="submit" class="button">Submit</div>');

        $('#submit').click(function(){
            if($('input').val() == solution){
                alert("Correct!");
            }
            else{
                switch (solution){
                    case 'proper':
                        alert('Incorrect! Hint: If the numerator of a fraction is less than the denominator, the ' +
                            'fraction is a proper fraction');
                        break;
                    case 'improper':
                        alert('Incorrect! Hint: If the numerator of a fraction is greater than or equal to the ' +
                            'denominator, then the fraction is an improper fraction');
                        break;
                    case 'mixed':
                        alert('Incorrect! Hint: A mixed number is a whole number added to a proper fraction.');
                        break;
                    default:
                        alert('Incorrect! Hint: The numerator is on top and the denominator is on the bottom');
                        break;
                }
            }
        });
    },

    getFractionPartProblem : function () {
        var f = fraction.getProperFraction();
        var numerator = f['numerator'];
        var denominator = f['denominator'];
        var solution;

        if(mf.getBoolean()){
            $('.problem_view').append("<h3>Enter the number that corresponds to the numerator:</h3>");
            solution = numerator;
        }
        else{
            $('.problem_view').append("<h3>Enter the number that corresponds to the denominator:</h3>");
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

        $('.problem_view').append("<h3>Is the following a proper fraction, improper fraction, or mixed number?</h3><br>");
        $('.problem_view').append(fraction.fractionToHtml(f));

        return solution;
    }
};

definitions.init();