var latexMath = $('#editable-math'), latexSource = $('#latex-source'), result = $('#result'), parsedLatex;



$(function() {
	latexMath.bind('keydown keypress', function() {
		setTimeout(function()
		{
			var latex = latexMath.mathquill('latex');
			latexSource.val(latex);
			try { 
				parsedLatex = latexParser.parse(latex).toString();
				result.mathquill().mathquill('latex',parsedLatex);
			}
			catch(error) { 
				console.log(error);
				result.mathquill('latex', '');
			}
		});
	}).keydown().focus();

	latexSource.bind('keydown keypress', function()
	{
		var oldtext = latexSource.val();
		setTimeout(function() {
			var newtext = latexSource.val();
			if(newtext !== oldtext)
			{
				latexMath.mathquill('latex', newtext);
				
				try {
					parsedLatex = latexParser.parse(newtext).toString();
					result.mathquill('latex',parsedLatex);
				}
				catch(error) { 
						console.log(error);
						result.mathquill().appendTo('body').mathquill('latex', '');
				}
			}
		});
	});

	if(location.hash && location.hash.length > 1)
		latexMath.mathquill('latex', decodeURIComponent(location.hash.slice(1))).focus();
});
