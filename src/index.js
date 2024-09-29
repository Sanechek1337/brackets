module.exports = function check(str, bracketsConfig) {
  const bracketsMap = new Map(bracketsConfig);

  const openStack = [];

  for (let char of str) {
    if (bracketsMap.has(char)) {
      if (bracketsMap.get(char) === char) {
        if (openStack[openStack.length - 1] === char) {
          openStack.pop();
        } else {
          openStack.push(char);
        }
      } else {
        openStack.push(char);
      }
    } else {
      const lastOpen = openStack.pop();
      if (bracketsMap.get(lastOpen) !== char) {
        return false;
      }
    }
  }

  return openStack.length === 0;
};
