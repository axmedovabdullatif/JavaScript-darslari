// 📘 Variables - o'zgaruvchilar

// O'zgaruvchi - bu ma'lumotni vaqtincha saqlash uchun joy
// masalan: ism, yosh yoki natijani saqlash


// JS (JavaScript) - 3ta o'zgaruvchi yaratishni 3 asosiy usuli bor:
// 1. var
// bu var eski usul, hozir kam ishlatiladi, qiyinchilik
// baz'zi bir kamchiliklar kelib chiqishi mumkin
var ism = "Ali"
console.log(ism); // Ali


// 2. let
// let o'zgaruvchi zamonaviy va ko'p ishlatiladi
// Block scope – ya’ni faqat o‘zini o‘rab turgan {} ichida ishlaydi.
let yosh = 20;
console.log(yosh); // 20


// 3. const
// Doimiy o‘zgaruvchi, qiymati o‘zgarmaydi.
// Doimiy ma’lumotlarni saqlash uchun ishlatiladi.
const tugilganYil = 2004;
console.log(tugilganYil); // 2004


// QOIDALAR
// O‘zgaruvchi nomi harf bilan boshlanishi kerak.
// Bo‘sh joy ishlatilmaydi, maxsus belgilar: _ va $ ishlasa bo‘ladi.
// Nom ma’noli bo‘lishi kerak.
let shahar = "Andijon";
let $sum = 100;
let _son = 50;