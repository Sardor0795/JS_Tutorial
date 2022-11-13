// Task 1 --------------------------------------------------------

// let a = 1, b = 1;

// let c = ++a // c == 2 (c ning qiymati 2 ga teng bo'ladi -> sababi ++a birinchi qiymatini 1 ga oshiradi va uni c ga beradi)
// let d = b++ // d == 1 (d ning qiymati 1 ga teng bo'ladi -> sababi a++ birinchi o'zidagi qiymatni c ga beradi keyin 1 ga oshadi)

// console.log(c); // 2
// console.log(d); // 1
// console.log(d); // 1


// Task 2 --------------------------------------------------------


// let a = 2;

// let x = 1 + (a *= 2); // 5 (Javob 5 chiqadi sababi -> (a *= 2) (a = a * 2) ga teng)


// Task 3 --------------------------------------------------------

"" + 1 + 0       // natija 10 (string) chiqadi sababi "" dan keyingi xammasi string tipiga o'tip ketadi

"" - 1 + 0       // natija -1 (number) chiqadi sababi "" dan keyin stringga o'tgani blan - dan keyin kelgan string raqamlar number tipiga o'tib ketadi

true + false     // natija 1 (number) chiqadi sababi true 1 ga false 0 ga teng

6 / '3'          // natija 2 (number) chiqadi sababi (/) stringni numberga o'tkazip oladi

'2' * '2'        // natija 4 (number) chiqadi sababi (*) ikkala stringni ham numberga o'tkazip oladi

4 + 5 + "px"     // natija 9px (string) chiqadi. Birinchi 4 va 5 matematik qo'shilip 9 bo'ladi va oxiridan "px" (string) qo'shilip 9px (string) bo'ladi va tipixam stringga o'zgaradi

"$" + 4 + 5      // natija $45 (string) chiqadi sababi string o'zidan boshlab qolgan xammasini string tipiga o'tqazvoradi

"4px" - 2        // natija NaN chiqadi sababi (-) 'px' ni raqamga aylantira olmaydi

"  -9  " + 5     // (  -9  5) (string) chiqadi. String ichidagi bo'sh joylar xisobga olinadi va o'zidan keyingi 5(number) nixam string tipiga o'tkazvoradi

"  -9  " - 5     // javob -14 (number) chiqadi sababi (-) string ichidagi bo'sh joylarni o'chiradi va string -9 ni numberga o'tqazip undan -5 (number) ni ayiradi natijada -14 xosil bo'ladi

null + 1         // natija 1 (number) chiqadi sababi null 0 ga teng

undefined + 1    // natija NaN chiqadi sababi undefined xech qanday raqamga teng emas va u raqamlarga umuman aloqasi yo'q (undefined faqat == bilan null ga taqqoslaganda teng va boshqa xech narsaga teng emas)

" \t \n " - 2    // natija -2 (number) chiqadi sababi (-) tab va new line dagi barcha bo'sh joylarni kesip tashaydi va 2 number tipida - ga o'tib faqat o'zi qoladi