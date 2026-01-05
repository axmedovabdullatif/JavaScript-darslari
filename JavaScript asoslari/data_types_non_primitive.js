// 📘 JavaScript – Non-Primitive Data Types (Murakkab ma’lumot turlari)

// Non-Primitive turlar – bu oddiy qiymat emas, balki reference (manzil) orqali saqlanadigan ma’lumotlar.
// Murakkabligi shundaki, ular bir nechta qiymat yoki funksiyani bitta ob’ekt ostida saqlashi mumkin.
// O‘zgaruvchiga tayinlaganingda, asl qiymat emas, reference (manzil) beriladi.

// JavaScriptda 3 ta non-primitive data type mavjud:


// 1 Object (Ob’ekt)
// Ob’ekt – bu kalit-qiymat (key-value) juftliklari to‘plami.
// Har bir qiymatga object.property yoki object["property"] orqali murojaat qilamiz.
// Sintaksis:
let odam = {
    ism: "Ali",
    yosh: 25,
    talaba: true
};

console.log(odam.ism);      // Ali
console.log(odam["yosh"]);  // 25
console.log(odam.talaba);   // true

// Objectga yangi property qo‘shish:
odam.shahar = "Andijon";
console.log(odam.shahar); // Andijon

// Objectga yangi property qo‘shish:
odam.yosh = 26;
console.log(odam.yosh); // 26


// 2 Array (Massiv)
// Array – bu tartiblangan qiymatlar ro‘yxati, index yordamida murojaat qilinadi.
// JSda array ham object turiga kiradi, lekin uni indekslar orqali ishlatamiz.
let raqamlar = [10, 20, 30, 40];
console.log(raqamlar[0]); // 10
console.log(raqamlar.length); // 4 – elementlar soni

// Element qo‘shish
raqamlar.push(50);
console.log(raqamlar); // [10, 20, 30, 40, 50]

// Element o‘zgartirish
raqamlar[1] = 25;
console.log(raqamlar); // [10, 25, 30, 40, 50]


// 3 Function (Funksiya)
// Function ham non-primitive turga kiradi.
// Funksiya – bu amalni bajaradigan kod bloki, uni o‘zgaruvchiga tayinlash mumkin.
function salomBer(ism) {
    return 'Salom, ${ism}!';
}

console.log(salomBer("Ali")); // Salom, Ali!

// Funksiyani o‘zgaruvchiga tayinlash
let greet = function(ism) {
    return 'Salom, ${ism}!';
};
console.log(greet("Vali")); // Salom, Vali!


// Reference vs Primitive
// Primitive – qiymatni to‘g‘ridan-to‘g‘ri saqlaydi, copy qilinsa qiymat nusxalanadi.
// Non-Primitive – reference (manzil) saqlaydi, copy qilinsa shu ob’ektga ulanadi.
// Misollar
let a = 10
let b = a; // copy
b = 20;
console.log(a); // primitive da a o'zgarmaydi

let obj1 = {ism:"Ali"};
let obj2 = obj1; // reference
obj2.ism = "Vali";
console.log(obj1.ism); // Vali - original o'zgardi

// Xulosa: Non-primitive qiymatlar o‘zgartirilsa, ularning reference orqali bog‘langan barcha o‘zgaruvchilar ham o‘zgaradi.

// Non-primitive asosiy turlari
// 1. Object - Kalit-qiymat juftligi
// 2. Array - Tartiblangan elementlar ro'yxati
// 3. Function - Amallarni bajaruvchi kod bloki

// Eslatma: JSda yana Date, Map, Set, RegExp kabi murakkab turlar ham object kategoriyasiga kiradi.


// Amaliy mashqlar
// Object bilan ishlash
let kitob = {
    nomi: "JavaScript Asoslari",
    muallif: "Abdullatif",
    yil: 2026
};

console.log(kitob.nomi); // JavaScript Asoslari
kitob.sahifalar = 300; 
console.log(kitob.sahifalar); // 300


// Array bilan ishlash
let mevalar = ["Olma", "Banan", "Apelsin"];
mevalar.push("Anor");
console.log(mevalar); // ["Olma", "Banan", "Apelsin", "Anor"]
mevalar[1] = "Nok";
console.log(mevalar); // ["Olma", "Nok", "Apelsin", "Anor"]


// Function bilan ishlash
function yigindi(a, b) {
    return a + b;
}
console.log(yigindi(5, 7)); // 12

let kopaytir = function(a, b) {
    return a * b;
};
console.log(kopaytir(5, 7)); // 35


// Reference vs Primitive
let prim1 = 10;
let prim2 = prim1;
prim2 = 20;
console.log(prim1); // 10

let objA = { ism: "Ali" };
let objB = objA;
objB.ism = "Vali";
console.log(objA.ism); // Vali