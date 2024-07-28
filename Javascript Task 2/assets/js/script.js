
// 1.	Array elementlərinin cəmini / hasilini tapın



// var arr=[20,50,10,80,60,30,90]
// console.log(arr);

// let cem= 0, hasil= 1;
// for (let i = 0; i < arr.length-1; i++) {
//     console.log(arr[i]);
//     cem+=arr[i]
//     hasil*=arr[i]
// }
// console.log(cem);
// console.log(hasil);



// 2.	Array elementlərinin içində təkrarlanan elementləri silin



// var arr=[80,30,10,90,80,50,70,30,90,]
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     for (let j =i+1; j < arr.length; j++) {
//         if (arr[i]==arr[j]) {
//             arr.splice(j,1)
//             j--
//         }
//     }
// }
// console.log(arr);



// 3.	Array elementlərində ədəd olmayan elementləri silin



// var arr=["Nigar",35,true,"Sevil",21,undefined,0,null,-14,false]
// console.log(typeof arr);

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]!="number") {
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(arr);



// 4.	Array elementlərindən maksimum/minimum olanı tapın.



// let arr=[-20,70,-44,777,54]

// let max=arr[0]
// let min=arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max=arr[i]
//     }
//     if (min > arr[i]) {
//         max=arr[i]
//     }
// }
// console.log(max);
// console.log(min);



// 5.	Daxil edilən cumlədəki simvol sayını çıxarın.



// let cumle= "Eh bu dunya";
// let simvolSayi= cumle.length;
// console.log(simvolSayi);



// 6.	Array elementlerini 2-yə vurub yeni bir array kimi çap edin.



// let arr=[99,-46,701,-14,67]
// console.log(arr);

// let newarr=arr.map((value,index,arr)=>value*2)
// console.log(newarr);



// 7.	Array elementlərini tərsinə çap edin.



// let arr=[61,24,87,53,14,7,123,]
// let reversArr= [];

// for (let i = arr.length - 1; i >=0; i--) {
//     reversArr.push(arr[i]);
// }
// console.log(reversArr);



// 8.	Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan JavaScript proqramı yazın.(Massivlərin uzunluqları mütləq eyni olmalıdı) 
// Nümunə :  massiv1 = [1,0,2,3,4];  massiv2 = [3,5,6,7,8,13];

// Gözlənilən Nəticə: [4, 5, 8, 10, 12, 13]



// let arr1=[1,0,2,3,4]      !!!!!!!!!
// let arr2=[3,5,6,7,8,13]
// let newArr= []

// if (arr1.length==arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i]+arr2[i])
//     }
// }else{
//     console.log("ferqli uzunluqda");
// }
// console.log(newArr);



// 9.	Sözü tərsinə çevirən program yazın.



// function tersSoz(metin) {
//     return metin.split('').reverse().join('');
// }

// var yazilanMetin= prompt("Bir metin daxil edin")
// var tersSoz= tersSoz(yazilanMetin);
// console.log("Tersine cevirilen metin: " + tersSoz);



// 10.	Cümlədəki sözlərin yerini tərsinə çevirən program yazın. (salam mənim adım leyladır 🡺 leyladır adım mənim salam)



// let cumle="salam menim adim Nigardir"
// let split_cumle=cumle.split(" ")
// console.log(split_cumle);

// let reverse= "";
// for (let i = split_cumle.length - 1; i >= 0; i--) {
//     reverse+= split_cumle[i]+" ";
// }
// console.log(reverse);



// 11.	Daxil edilmiş ədədi sözlə yazan funskiya (Məs🡪input:1, output : Bir)



// let teklikler=["sifir","bir","iki","uc","dord","bes","alti","yeddi","sekkiz","doqquz"]
// let onluqlar=["on","iyirmi","otuz","qirx","elli","altmish","yetmish","seksen","doqsan"]

// let eded=+prompt("eded daxil edin: ")
// if (eded>= 0 && eded< 10) {
//     alert(teklikler[eded]);
    
// }else if (eded>= 10 && eded< 100) {
//     let onluq=Math.floor(eded/ 10)
//     let teklik=eded%10
//     if (teklik==0) {
//         alert(onluqlar[unluq-1])
//     }else{
//         alert(onluqlar[onluq-1]+ " " + teklikler[teklik])
//     }
// }



// 12.	Verilmiş mətndə sözlərin sayını tapın.



// let metin= "Burada yazilan sozlerin hec bir menasi yoxdur..."
// let sozler= metin.split(" ");
// let sozlerSayi= sozler.length;
// console.log(sozlerSayi);



// 13.	Verilmiş cümlədə artıq boşluq simvollarını silin



// let cumle="   Esas       ureydi "
// let trimCumle= cumle.trim()
// let splitCumle= trimCumle.split(" ")

// let newCumle= "";
// for (let i = 0; i < splitCumle.length; i++) {
//     if (splitCumle[i]!="") {
//         newCumle+= splitCumle[i]+" ";
//     }
// }
// console.log(newCumle.trim());



// 14.	Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın



// let metn= "yazilan bu metinde birin herif boyuk olmalidir"
// let tezeMetin= birinciHerifBoyuk(metn);

// function birinciHerifBoyuk(metn) {
//     let cumleler= metn.split();
//     let tezeMetin= "";
//     for (let i = 0; i < cumleler.length; i++) {
//         if (i%2===0) {
//         tezeMetin+= cumleler[i] .trim() .charAt(0) .toUpperCase()+ cumleler[i] .slice(1) .trim();
//         }else{
//             tezeMetin+= cumleler[i];
//         }
//     }
//     return tezeMetin;
// }
// console.log(tezeMetin);



// 15.	 İki arrayın eyniliyini yoxlayın. 



// let array1= [1,2,3,4,5,6]
// let array2= [6,5,4,3,2,1]

// if (array1.length!= array2.length) {
//     console.log("arraylar beraber deyil");
// }else{
//     array1.sort()
//     array2.sort()
//     let count=0
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i]== array2[i]) {
//            count++
//         } 
//     }
//     if (count==array1.length) {
//         console.log("arraylar beraberdir");
//     }else{
//         console.log("arraylar beraber deyil");
//     }
// }



// 16.	Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın (bubble sort)



// let reqemler= [99, 21, 14, 7, 64, 73, 42];
// function bubbleSort(arr, order= 'artma') {
//     let a= arr.length;
//     for (let i= 0; i< a- 1; i++) {
//         for (let j= 0; j < a- 1- i; j++) {
//             if ((order=== 'artma' && arr[j] > arr[j+ 1]) || (order=== 'azalma' && arr[j] < arr[j+ 1])) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+ 1];
//                 arr[j+ 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(reqemler, 'artma'));
// console.log(bubbleSort(reqemler, 'azalma'));



// 17.	İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.  Məs: Giriş: 3456 Çıxış: 3 4 5 6



// const num= prompt("ededi daxil edin:")
// const numDigits= num.split(''). join(' ');
// console.log(numDigits);



// 18.	Verilmiş mətndə təkrarlana sözlərin sayını tapın



// let cumle= "Yagish yagir yagir inanmiram yarim yarim gozleyer meni meni"
// let obj= {}
// let cumleSplit= cumle.split(" ")
// console.log(cumleSplit);

// for (let i = 0; i < cumleSplit.length; i++) {
//     let soz= cumleSplit[i]
//     if (obj[soz]==undefined) {
//         obj[soz]=1
//     }else{
//         obj[soz]++
//     }
// }
// console.log(obj);



// 19.	Tələbələrin məlumatlarını özündə saxlayan object yaradın. İmtahandan keçməyən tələbələri objectdən silin.



// let telebeler=[
//     {
//     ad:"Nigar",
//     girish_bali:35,
//     final_bali:21
//     },
//     {
//     ad:"Gunel",
//     girish_bali:44,
//     final_bali:16
//     },
//     {
//     ad:"Rasim",
//     girish_bali:34,
//     final_bali:14
//     },
//     {
//     ad:"Nermin",
//     girish_bali:30,
//     final_bali:27
//     },
//     {
//     ad:"Ramin",
//     girish_bali:51,
//     final_bali:35
//     },
// ]

// for (let i = 0; i < telebeler.length; i++) {
//     console.log(telebeler[i]);
//     if (telebeler[i] .girish_bali+ telebeler[i] .final_bali< 51 || telebeler[i] .final_bali< 17) {
//         telebeler. splice(i,1)
//         i--
//     }
// }
// console.log(telebeler);



// 20.	Verilmiş 2mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən)



// let esas_cumle= "Salam menim adim Leyladir. Man ADNSU mezunuyam. Menim 23 yashim var"
// let oxshar_cumle= "Salam menim adim Leyladir. Man BDU mezunuyam. Menim 21 yashim var"

// let metin_split= oxshar_cumle.split(" ")
// let say= 0;

// for (let i = 0; i < metin_split.length; i++) {
//     if (i< metin_split.length- 2) {
//         let text=metin_split[i]+ " " + metin_split[i+ 1]+ " " + metin_split[i+ 2]
//     if (esas_cumle .includes(text)) {
//         say++
//     }
//     }
// }

// let faiz= (metin_split.length-2)*0.2;
// if (faiz< say) {
//     console.log("plagiat");
// }else{
//     console.log("plagiat deyil");
// }

// console.log(say);
// console.log(faiz);



// 21.	İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçünproqram yazın. Həftəlik 40 saatdan artıq olan iş saatları üçün əmək haqqı 2 qat hesablansın



// let saat=50;
// let saat_haqqi=20;
// let maas=0;

// if (saat> 40) {
//     maas= 40* saat_haqqi+ (saat- 40)* 2* saat_haqqi;
// }else{
//     maas= saat* saat_haqqi
// }
// console.log(maas* 4);



// 22.	Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.



// let metn= "Mənim BDU -da bir dostum oxuyur. Men bugun onu gormek ucun BDU -ya gedacam.";

// let splitMetin=metn.split(" ");
// for (let i = 0; i < splitMetin.length; i++) {
//     if (splitMetin[i]=== "BDU" ) {
//         splitMetin[i]= "ADNSU";
//     }
// }
// let tezeMetin= splitMetin.join(" ");
// console.log(tezeMetin);



// 23.	3 rəqəmli ədədin rəqəmləri cəmini tapın.



// let eded= 721;
// let ededString= eded.toString();
// let cem= 0;

// for (let i = 0; i < ededString.length; i++) {
//     cem+= (+ ededString[i]);
// }
// console.log(cem);



// 24.	Array daxilində tək yerdə duran elementləri ekrana verin



// let arr= [29,7,14,83,5,91,4,6,87,42]
// tekyerdeDuran(arr);

// function tekyerdeDuran(arr) {
//     for (let i = 1; i < arr.length; i += 2) {
//         console.log(arr[i]);
//     }
// }



// 25.	Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin



// let reqemler= [65,5,83,14,55,21,75,90,30,45]

// function besheBolunenler(arr) {
//     let count= 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5=== 0) {
//             count++
//         }
//     }
//     return count;
// }
// let result= besheBolunenler(reqemler);
// console.log(result);



// 26.	Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.



// let arr= [14,21,77,43,99,68]

// function yeddininSonReqemi(arr) {
//     let axirinciEded= null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]% 7=== 0) {
//             axirinciEded= arr[i];
//         }
//     }
//     return axirinciEded;
// }

// let result= yeddininSonReqemi(arr);
// if (result !== null) {
//     console.log(result);
// }else{
//     console.log("7-ye bolunen eded yoxdur");
// }



// 27.	Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin



// let reqemler= [1,3,6,2,7,4,9]
// console.log(reqemler);

// function yerDeyishenler(arr) {
//     if (arr.lenght< 2) return arr;
//         let minI= 0;
//         let maxI= 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minI]) {
//             minI= i;
//         }
//         if (arr[i] > arr[maxI]) {
//             maxI= i;
//         }
//     }
//     let temp= arr[minI];
//     arr[minI]= arr[maxI];
//     arr[maxI]= temp;
//     return arr;    
// }
// let resultArray= yerDeyishenler(reqemler);
// console.log(resultArray);



// 28.	Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran proqram tərtib edin



// let arr = [8, 4, 2, 6, 9, 3, 5, 1, 7];
// function randomReqem(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     const randomI = Math.floor(Math.random() * arr.length);
//     return arr[randomI];
// }
// let randomElement = randomReqem(arr);
// console.log(randomElement);



// 29.	1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin



// function tekliyiBir() {
//     for (let i = 1; i <= 100; i++) {
//       if (i.toString().includes('1')) {
//         console.log(i);
//       }
//     }
//   }
//   tekliyiBir();
  


// 30.	Daxil olunmuş ifadənin polindrom olduğunu yoxlayın.   (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)



// function palindrome(str) {
//     str= str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     const reversedStr= str.split('').reverse().join('');
//     return str=== reversedStr;
// }
// console.log(palindrome("utu"));
// console.log(palindrome("121"));
// console.log(palindrome("1331"));
// console.log(palindrome("4554"));
// console.log(palindrome("salam"));



// 31.	Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və   s.)


// function anagramYoxlama(sozBir, sozIki) {

//     sozBir = sozBir.toLowerCase();
//     sozIki = sozIki.toLowerCase();
    
//     function hərfləriSiralama(soz) {
//         return soz.split('').sort().join('');
//     }
//     return hərfləriSiralama(sozBir) === hərfləriSiralama(sozIki);
// }

// console.log(anagramYoxlama("oslo", "solo"));
// console.log(anagramYoxlama("alma", "lama"));
// console.log(anagramYoxlama("film", "mlif"));
// console.log(anagramYoxlama("dil", "led"));
// console.log(anagramYoxlama("kitab", "bitak"));
// console.log(anagramYoxlama("salam", "meles"));

  

// 32.	Daxil olunmuş mətndə saitləri silən proqram yaradın 



// function saitSilen(text) {
//     const vowels = /[aeiouAEIOU]/g;
//     return text.replace(vowels, '');
// }
// const inputText = "Saitleri silen bir proqram";
// const result = saitSilen(inputText);
// console.log(result);



// function saitleriSilme(metn) {
//     const saitler= ['a', 'e', 'i', 'o', 'u'];
//     let netice= '';
//     for (let herf of metn.toLowerCase()) {
//         if (!saitler.includes(herf)) {
//             netice+= herf;
//         }
//     }
//     return netice;
// }

// console.log(saitleriSilme("Hello World"));
// console.log(saitleriSilme("Javascript proqramlashdirma dilidir"));
// console.log(saitleriSilme("Memento mori"));
// console.log(saitleriSilme("Kitab oxumaq gozel bir verdishdir."));



// 33.	İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət string ifadə yaradın (məsələn input:5   output: qeg8d)



// function randomStringyazma(length) {
//     const karakterler= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result= '';
//     for (let i= 0; i< length; i++) {
//         const randomIndex= Math.floor(Math.random()* karakterler.length);
//         result+= karakterler[randomIndex];
//     }
//     return result;
// }
// const inputLength= parseInt(prompt("Random simvol sayini sec"), 10);

// if (!isNaN(inputLength) && inputLength> 0) {
//     const randomString= randomStringyazma(inputLength);
//     console.log(`Random stringler: ${randomString}`);
// }else {
//     console.log("Duzgun eded daxil edin");
// }



// 34.	Daxil olunmuş sözdə neçə sait və samit olduğunu tapın



// function sozdeSaitveSamitler(text) {
//     const saitler= 'aeiouAEIOU';
//     let saitsayi= 0;
//     let samitsayi= 0;
//     for (let char of text) {
//         if (saitler.includes(char)) {
//             saitsayi++;
//         } else if (/[a-zA-Z]/.test(char)) {
//             samitsayi++;
//         }
//     }
//     return { saitsayi, samitsayi };
// }
// const inputText= prompt("Sozu duzqun daxil edil");

// const result= sozdeSaitveSamitler(inputText);
// console.log(`Saitler: ${result.saitsayi}`);
// console.log(`Samitler: ${result.samitsayi}`);



// 35.	Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3;  28=1+2+4+7+14)



// let eded=+ prompt("eded daxil edin: ")
// let sum= 0
// for (let i= 1; i< eded; i++){
//     if (eded% i== 0){
//     sum+= i
//     }
// }
//     if (sum== eded){
//         console.log("mukemmel eded");
//     }else {
//         console.log("mukemmel eded deyil");
// }



// 36.	Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın



// function reqemlerinCemi(reqem) {
//     let sum= 0;
//     let num= Math.abs(reqem);
//     while (num> 0) {
//         sum+= num% 10;
//         num= Math.floor(num/ 10); 
//     }
//     return sum;
// }
// const reqemDaxili= parseInt(prompt("Bir eded daxil edin:"), 10);
// if (!isNaN(reqemDaxili)) {
//     const reqemCemi = reqemlerinCemi(reqemDaxili);
//     console.log(`${reqemDaxili} ededin reqemler cemi: ${reqemCemi}`);
// } else {
//     console.log("Duzqun eded daxil edin.");
// }


