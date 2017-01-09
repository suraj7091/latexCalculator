var MQ = MathQuill.getInterface(2);

var editableMath = document.getElementById('editable-math');
var latexSource = document.getElementById('latex-source');
var result = document.getElementById('result');

resultField = MQ.StaticMath(result);
resultField.latex(3.2);

var parsedLatex;

var editableMathField = MQ.MathField(editableMath, {
    handlers: {
      edit: function() {
        var enteredMath = editableMathField.latex(); // Get entered math in LaTeX format
		parsedLatex = latexParser.parse(enteredMath).toString();
		latexSource.value = enteredMath;
		resultField.latex(parsedLatex);
      }
    }
  });

editableMathField.focus();

function onButtonClicked(value)
{
	editableMathField.typedText(value);
	editableMathField.focus();
}

function onSpecialButtonClicked(value)
{
	editableMathField.keystroke(value);
	editableMathField.focus();
}

// even if user clicks away the mathfield will still be focused
$(document).click(function(e) { editableMathField.focus(); });