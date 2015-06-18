# latexCalculator
This is a calculator that formats mathmatical expressions in the way you would normally write them down with pen and paper. </br>
So instead of having to type lame stuff like: </br>
`((2+33)/114)*sqrt(25)` </br>
You would **elegantly** type: </br>
![Alt text](/latexMath.png?raw=true "Latex Math")
</br>

## Latex Parser
That's the part of the project that parses the latex source code to get a result out of it. </br>
I'm using the [PEG.js](http://pegjs.org/) parser generator, go ahead and develop along with me [here](http://peg.arcanis.fr/1eni3A/).

This project is based on the beautiful [MathQuill](https://github.com/mathquill/mathquill) library. </br>
The latex parser is based on that cool [GIST](https://gist.github.com/karoltarasiuk/9c73df20ca44686fb32d). </br>
## TODO:
* [ ] Complete the Latex Parser that would parse the latex code and produce a result accordingly (In Progress).
* [ ] Create the UI, the buttons and all.
* [ ] Find a suitable framework to port it to desktop. ex: AppJS, electron... etc.
