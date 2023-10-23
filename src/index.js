module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let pairsMap = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    let openBracket = bracketsConfig[i][0];
    let closeBracket = bracketsConfig[i][1];
    pairsMap[openBracket] = closeBracket;
  }
  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      if (!(str[i] in pairsMap)) {
        return false;
      } //not open bracket
      stack.push(str[i]);
    } else {
      let onTopStack = stack[stack.length - 1];
      if (str[i] === pairsMap[onTopStack]) {
        // if pair, then delete 1 element on top
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
    //
  }
  if (stack.length === 0) return true;
  return false;
};
