// 📘 Data types - Malumot turlari
// JavaScriptda asosan 7 ta ma’lumot turi mavjud, ular 2 guruhga bo‘linadi:
// Primitive (oddiy) va Non-primitive (murakkab).


// Bugungi dars
// JavaScript Primitive Data Types (Oddiy ma’lumot turlari)
// Primitive data types – bu JavaScriptdagi eng oddiy, o‘zgarmas (immutable) ma’lumot turlari.
// Ya’ni ular bevosita qiymatni saqlaydi, va object kabi murakkab tuzilmalarga ega emas.
// JavaScriptda 6 ta primitive data type mavjud:


// 1. String (matn)
// String matnlarni saqlash uchun ishlatiladi
// " " va ' ' ichida yoziladi
// Template literals uchun ` ` ishlatiladi (bilmaganlar uchun ` ` backtick esc tugmani tagida)
// Misollar
let ism = "Ali"; // qo'shtirnoq bilan
console.log(ism); // Ali

let greeting = 'Salom' // bir tirnoq bilan
console.log(greeting); // Salom

let welcome = `Xush kelibsiz` // backtick bilan
console.log(welcome); // Xush kelibsiz


// Qisqa eslatma:
// Stringlar immutable – ya’ni ularni o‘zgartirishning bevosita usuli yo‘q
// faqat yangi string yaratish mumkin.


// 2. Number (raqam)
// Butun va o‘nlik raqamlarni saqlaydi.
// Arifmetik amallarni bajarish mumkin (+, -, *, /).
let yosh = 25;       // butun
let baho = 98.5;    // o'nlik

console.log(yosh + 5);   // 30
console.log(baho / 2);   // 49.25


// Qisqa eslatma:
// JSda number turi butun va o‘nlikni ajratmaydi. Hammasi Number turiga kiradi


// 3. Boolean (Mantiqiy qiymat)
// Faqat true yoki false qiymatni oladi.
// Ko‘pincha shartlarni tekshirishda ishlatiladi.
// Misollar
let talaba = true;
let ishchi = false;

console.log(talaba); // true
console.log(ishchi); // false

// Shart bilan ishlash
if(talaba){
    console.log("Siz talabasiz!");
}

// Shartlar bilan ishlashni keyingi dars ko'rib chiqamiz


// 4. Undefined (Qiymatsiz)
// O‘zgaruvchi yaratilgan, lekin unga qiymat berilmagan bo‘lsa, u undefined bo‘ladi.
// Misollar
let x;
console.log(x); // undefined

let y = undefined;
console.log(y); // undefined
// O'zgaruvchiga qiymat berilmagan
// Qisqa eslatma:
// Undefined bilan null aralashtirmang. undefined – qiymat berilmagan, null – maqsadli bo‘sh qiymat.


// 5. Null (Bo'sh qiymat)
// Bo‘sh qiymat degani.
// Odatda ma’lumot yo‘qligini qo‘lda belgilash uchun ishlatiladi.
// Misollar
let z = null;
console.log(z); // null

// Misol: foydalanuvchi ma’lumot topilmadi
let user = null;
console.log(user); // null


// 6. Symbol (Unikal identifikator)
// Unikal qiymat yaratadi, har doim boshqa symbol bilan teng bo‘lmaydi.
// Odatda object property uchun ishlatiladi.
// Misollar
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false – har doim unikal

// Objectda ishlatish
let user2 = {
    [id1]: "Abdullatif"
};
console.log(user[id1]); // Abdullatif
// Qisqa eslatma:
// Symbolni oddiy console.log bilan ko‘rish qiyin, lekin u unikal identifikator sifatida ishlatiladi.


// 7. typeof operatori bilan tekshirish
// JSda har bir primitive turni tekshirish uchun typeof operatoridan foydalanamiz:
let ism2 = "Ali";              // string
let yosh2 = 25;                // number
let talaba2 = true;            // boolean
let m;                         // undefined
let n = null;                  // object (bu JSdagi g‘alati holat)
let id = Symbol("id");         // symbol

console.log(typeof ism2);      // string
console.log(typeof yosh2);     // number
console.log(typeof talaba2);   // boolean
console.log(typeof m);         // undefined
console.log(typeof n);         // object
console.log(typeof id);        // symbol
// 💡 Eslatma: typeof null – bu JSdagi tarixiy xato. U object qaytaradi, lekin null primitive hisoblanadi.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Primitive    \
// 1.String      \
// 2.Number       \
// 3.Boolean        - Primitive: immutable, to‘g‘ridan-to‘g‘ri qiymatni saqlaydi.
// 4.Undefined    /
// 5.Null        /
// 6.Symbole    /

// Non-primitive (Object): mutable, reference orqali saqlanadi.