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
//var maleNames = ['Mateusz', 'Józef'];
//var femaleNames = ['Aleksandra', 'Agnieszka'];
//
//var allNames = maleNames.concat(femaleNames);
//newName = prompt('Podaj nowe imię do dodania!');
//
//if (allNames.indexOf(newName) === -1 ) {
//  allNames.push(newName);
//} else {
//  console.log('Imię już istnieje w bazie szefie.');
//}
//
//zadanie 9.3
//var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
//var dinosaur = 'triceratops';
//
//var wordUppercased = dinosaur.toUpperCase();
//var wordReplacedInArray = text.replace( 'Velociraptor', wordUppercased );
//var halfText = ( wordReplacedInArray.length )/2;
//console.log( wordReplacedInArray.slice ( 0, halfText ) );
//
//zadanie 9.4
var treelevel = prompt('Jak bardzo chcesz utrudnić pracę drwalom? (podaj odpowiedź w liczbie rzeczywistej.)');
var chunk = '';

function drawTree ( treelevel ) {
  for ( var i = 0; i < treelevel; i++ ) {
    console.log( chunk += '*' );
  }
}
drawTree(treelevel);
