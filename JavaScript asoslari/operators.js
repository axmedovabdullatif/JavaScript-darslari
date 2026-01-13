// 📘 1.Operators - bu ma'lumotlar ustida amal bajaradigan belgi
let a = 5 + 3;
// + bu operator
// 5 va 3 operandlar
// a natija saqlanadi


// Arifmetik operatorlar
// + qo'shish        5 + 2 = 7
// - ayrish          5 - 2 = 3
// * ko'paytirish    5 * 2 = 10
// / bo'lish         10 / 2 = 5
// ** daraja         2 ** 3 = 8
// % qoldiq          7 % 2 = 1 (faqat qoldiq qolgan son chiqadi)


let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(5 + 7); // 12
console.log(10 - 7); // 3
console.log(7 * 8); // 56
console.log(10 / 2); // 5
console.log(5 ** 5); // 3125
console.log(6 % 4); // 2

console.log(10 + 7); // 17
console.log(28 - 11); // 17
console.log(7 * 19); // 126
console.log(39 / 13); // 3
console.log(4 ** 4); // 256
console.log(72 % 7); // 2
console.log(22 / 7); // 3.14

console.log(10 / 0); // infinity

// <=================================================================>

// 2.Assignment Operators (O'zlashtirish)
// o'zgaruvchi qiymatini o'zgartiradi
// =       x = 5        qiymat berish
// +=      x += 3       x = x + 3
// -=      x -= 2       x = x - 2
// *=      x *= 2       x = x * 2
// /=      x /= 2       x = x / 2

let num = 22

console.log(num += 3); // 25
console.log(num -= 5); // 20
console.log(num /= 4); // 5
console.log(num *= 10); // 50

console.log(num += 8); // 58
console.log(num -= 6); // 52
console.log(num /= 2); //26
console.log(num *= 4); // 104

let score = 10;
score += 5;
score *= 2;

console.log(score); // 30

// <=================================================================>

//3. Comparison operators - taqqoslash operatori
// Natija xar doim true yoki false
// ==     -->  teng (type yo'q)
// ===    -->  qat'iy teng
// !=     -->  teng emas
// !===   -->  qat'iy teng emas
// >      -->  katta
// <      -->  kichk
// >=     -->  katta yoki teng
// <=     -->  kichik yoki teng

console.log(30 > 40); // false
console.log(30 < 40); // true
console.log(30 >= 30); // true
console.log(40 <= 30); // false

console.log(50 == "50"); // true
console.log(50 === "50"); // false
console.log(20 != 20); // false
console.log(30 != "28"); // true
console.log(20 !== 20); // false

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// <==================================================>

// 4. Logical Operators - mantiqiy operator
// && - va
// || - yoki

console.log(true && true && false); // false
console.log(true || true || false); // true

console.log(false && true && true && true); // false
console.log(true || false || false || false); // true

console.log(true && true && true); // true
console.log(true && false && true); // false
console.log(false || true || false); // true

console.log(true && false); // false
console.log(true || false); // true
console.log(false || true); // true

let tshirt = true
let suit = false

let school1 = tshirt && suit
let school31 = tshirt || suit

console.log('school1', school1); // false
console.log('school31', school31); // true

let age = 20;
let = hasID = true;
console.log(age >= 18 && hasID); // true

console.log(!true); // false

// <==================================================>

    // Oddiy
let age2 = 18;
if (age2 >= 18) {
    console.log("Kirish mumkin");
}else{
    console.log("Kirish mumkin emas");
}

    // Ternary bilan
let age3 = 18;
let result = age >= 18 ? "Kirish mumkin" : "Kirish mumkin emas";
console.log(result);

// Tuzilishi
// condition ? truevalue : false value
// 📌 condition → true yoki false bo‘ladi
// 📌 ? dan keyingi → true bo‘lsa
// 📌 : dan keyingi → false bo‘lsa

let name = "Abdullatif";
let age4 = 20;

console.log(`Ism: ${name}, Yosh: ${age}`);


// Operatorlar turini tekshirish
console.log(typeof 5);       // "number"
console.log(typeof "hi");    // "string"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"     JS xatosi

// To‘g‘ri tekshirish:
let data = null;

if (data === null) {
  console.log("Bu null");
}


let res1 = '10' + 20
console.log(typeof res1); // string

let res2 = 100 - '5'
console.log(typeof res2); // number

// ++ 1taga oshirish
let n1 = 10
n1++
console.log(n1); // 11

// -- 1taga kamaytirish
let n2 = 9

console.log(n2--); // 9
console.log(n2); // 8

console.log(++n1); // 12
console.log(--n2);  // 7

// <======================================================================>

    let num3 = 35
    let num4 = 12
    console.log(num3 > num4 && num4 > num3);
    console.log(num3 == num4 && num3 < num4);
    console.log(num3 === num4 && num3 == num4);
    console.log(num3 > num4 && num4 <num3);