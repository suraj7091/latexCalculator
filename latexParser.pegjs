start =
    additive

additive =
    left:subtractive "+" right:additive
        { return left+right; }
  / subtractive

subtractive =
    left:multiplicative "-" right:subtractive
        { return left-right; }
  / multiplicative

multiplicative =
    left:frac "\\cdot" right:multiplicative
        { return left*right; }
  / frac

frac
    = "\\frac{" nominator:additive "}{" denominator:additive "}"
    {
        if (denominator === 0) {
            if (nominator < 0) {
                return Number.POSITIVE_INFINITY;
            } else {
                return Number.NEGATIVE_INFINITY;
            }
        } else {
            return nominator / denominator;
        }
    }
  / power


power
    = left:primary "^" right:power { return Math.pow(left, right); }
  / left:primary "^" "{" right:additive "}" { return Math.pow(left, right); }
  / primary


primary =
    float
  / "(" additive:additive ")"
      { return additive; }

float "float"
    = left:[0-9]+ "." right:[0-9]+ { return parseFloat(left.join("") + "." + right.join("")); }
  / "-" left:[0-9]+ "." right:[0-9]+ { return parseFloat("-" + left.join("") + "." + right.join("")); }
  / integer

integer =
    digits:[0-9]+
        { return parseInt(digits.join(""), 10); }
  / "-" digits:[0-9]+
        { return parseInt("-" + digits.join(""), 10); }
