
// __________
// | ________ |
// ||12345678||
// |""""""""""|
// |[M|#|C][-]|
// |[7|8|9][+]|
// |[4|5|6][x]|
// |[1|2|3][%]|
// |[.|O|:][=]|
// "----------" 

welcome= alert('h-Hi! Thi- this is a calculator or som- something just use it and let me do my... hu-man things...alone! cause Im definitely not a computer!');
  questions();

while (calculator == "" || calculator == null || numberone == "" || numberone == null || numbertwo == "" || numbertwo == null) {
  alert('SyntaxError'+'\n PRESS "ok"');
  questions()
}
do {
switch (calculator) {
  case "+":
    alert(numberone + '+' + numbertwo + '=' + plus(numberone,numbertwo) + '\nPress "OK" to restart');
    break;
    case "-":
      alert(numberone + '-' + numbertwo + '=' + minus(numberone,numbertwo) + '\nPress "OK" to restart');
      break;
  case "/":
    alert(numberone + '/' + numbertwo + '=' + divide(numberone,numbertwo) + '\nPress "OK" to restart');
    break;
  case "*":
    alert(numberone + '*' + numbertwo + '=' + times(numberone,numbertwo) + '\nPress "OK" to restart');
    break;
}
} while(welcome == 1) {
  questions();
};
function questions() {
  numberone= parseInt(prompt('first number'));
  calculator= prompt(' choose between \n + ' + '\n - ' + '\n /' + '\n * ');
  numbertwo= parseInt(prompt('second number'));
}
function plus(numberone,numbertwo) {
  return numberone+numbertwo
}
function minus(numberone,numbertwo) {
  return numberone-numbertwo
}
function times(numberone,numbertwo) {
  return numberone*numbertwo
}
function divide(numberone,numbertwo) {
  return numberone/numbertwo
} 
