
require("./../rur.js");
require("./../programming_ui/exceptions.js");
require("./utils_namespace.js");

_is_integer = function(n) {
    return typeof n==='number' && (n%1)===0;
};

RUR.utils.is_integer = _is_integer;


RUR.utils.is_valid_position = function(x, y) {
    return (_is_integer(x) && _is_integer(y) && 
           x >= 1 && x <= RUR.CURRENT_WORLD.cols &&
           y >= 1 && y <= RUR.CURRENT_WORLD.rows);
};


/* filterInt taken from
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseInt

It is a stricter way than parseInt to extract integer values, and supports
Infinity as a valid integer.

See tests/unit_tests/utils/filterint.tests.js for tests illustrating sample
uses.
*/
RUR.utils.filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)){
    return Number(value);
  }
  return undefined;
};
