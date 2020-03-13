module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(i = 0; i < str.length; i++){
    for(j = 0; j < bracketsConfig.length; j++){
      if(str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]){
        if (str[i] == stack[stack.length - 1]) {
          stack.pop();
        } 
        else 
          stack.push(str[i]);
        break;
      }

      if(str[i] == bracketsConfig[j][0]){
        stack.push(str[i]);
        console.log(stack);
      }

      if(str[i] == bracketsConfig[j][1]){
        if(stack[stack.length - 1] == bracketsConfig[j][0]){
          stack.pop();
        }
        else 
          return false;
      }
    }   
  }
  return stack.length == 0;
}
