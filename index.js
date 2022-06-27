// Kintamuju inicijavimas

//    node index.js

const a = 10;
console.log(a);

const b = 8;
console.log(b);

const c = 4;
console.log(c);

const at = 'at';
console.log(at);

const bt = 'bt';
console.log(bt);

const ct = 'ct';
console.log(ct);
 
const skaiciai1 = [1, 3, 5, 7, 9];
console.log(skaiciai1);

const skaiciai2 = [2, 4, 6, 8, 10];
console.log(skaiciai2);

const skaiciai3 = [2, 3, 0, -4, 23];
console.log(skaiciai3);

const text1 = ['sukurti', 'kintamuosius', 'su', 'teksto', 'reiksmemis'];
console.log(text1);

const text2 = ['sukurti', 'kintamuosius', 'su ', 'penkiomis', 'reiksmemis']
console.log(text2);

const text3 = ['po', 'kiekvieno', 'ju', 'inicijavimo', 'isvesti'];
console.log(text3);

// Veiksmai su kintamaisiais

console.log(a + b + c);

console.log(at +  ' ' + bt + ' ' + ct);

const sum1 = skaiciai1.map(i => x += i, x=0).reverse()[0];
console.log(sum1);

const sum2 = skaiciai2.map(i => x += i, x=0).reverse()[0];
console.log(sum2);

const sum3 = skaiciai3.map(i => x += i, x=0).reverse()[0];
console.log(sum3);

let suma1 = 0;
for (let index = 0; index < skaiciai1.length; index++) {
    const element = skaiciai1[index];
    if(index % 2=== 0 || index === 0){
        suma1 += element
    } else {
        suma1 -= element
    }
}
console.log(suma1)

let suma2 = 0;
for (let index = 0; index < skaiciai2.length; index++) {
    const element = skaiciai2[index];
    if(index % 2=== 0 || index === 0){
        suma2 += element
    } else {
        suma2 -= element
    }
}
console.log(suma2)

let suma3 = 0;
for (let index = 0; index < skaiciai3.length; index++) {
    const element = skaiciai3[index];
    if(index % 2=== 0 || index === 0){
        suma3 += element
    } else {
        suma3 -= element
    }
}
console.log(suma3)
/*
function ats(x)
return ats[skaiciai1] x[0] ;
*/

// console.log([text3] + [text2])

console.log(text3.reverse(1).join(', ') + text2.reverse(1) + ', ' + text1.reverse(1));

// Kintamųjų palyginimas

if (a > b){
console.log('P0midoras');}
else {
console.log('Bandykite kita karta');}
//=== 1 nelygu '1'
if (a === b){
console.log('lygus')}
else{
console.log('nelygus')}

    // node index.js