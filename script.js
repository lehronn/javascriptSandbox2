//zadanie 9.1
//var a = prompt('Podaj A trójkąta.');
//var h = prompt('Podaj H trójkąta.');
//
//function getTriangleArea(a,h) {
//  if (a <= 0 || h <= 0) {
//    console.log('Nieprawidłowe dane, >0.');
//    return NaN;
//  }
//  return (a*h)/2;
//}
//console.log(getTriangleArea(a,h));

// zadanie 9.2
var maleNames = ['Mateusz', 'Józef'];
var femaleNames = ['Aleksandra', 'Agnieszka'];

var allNames = maleNames.concat(femaleNames);
newName = prompt('Podaj nowe imię do dodania!');

if (allNames.indexOf(newName) === -1 ) {
  allNames.push(newName);
} else {
  console.log('Imię już istnieje w bazie szefie.');
}
