var a = prompt('Podaj A trójkąta.');
var h = prompt('Podaj H trójkąta.');

function getTriangleArea(a,h) {
  if (a <= 0 || h <= 0) {
    console.log('Nieprawidłowe dane, >0.');
    return NaN;
  }
  return (a*h)/2;
}
console.log(getTriangleArea(a,h));
