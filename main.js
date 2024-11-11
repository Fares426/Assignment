// ================1========================
// var num=+window.prompt("Enter a Number")
// console.log(num);



// ================2========================
// var num=+window.prompt("Enter a Number")
// if (num%3==0 && num%4==0) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }



// ================3========================
// var num1=+window.prompt("Enter the First Number")
// var num2=+window.prompt("Enter the Second Number")
// if (num1>num2) {
//     console.log(num1);
// }
// else {
//     console.log(num2);
// }



// ================4========================
// var num=+window.prompt("Enter a Number")
// if (num>0) {
//     console.log("Positive");
// }
// else if (num==0) {
//     console.log("Zero");
// }
// else {
//     console.log("Negative");
// }



// ================5========================
// var num1=+window.prompt("Enter the First Number")
// var num2=+window.prompt("Enter the Second Number")
// var num3=+window.prompt("Enter the Third Number")
// if (num1>num2 && num1>num3) {
//     console.log(num1);
// }
// else if (num2>num1 && num2>num3) {
//     console.log(num2);
// }
// else {
//     console.log(num3);
// }



// ================6========================
// var num=+window.prompt("Enter a Number")
// if (num%2==0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }



// ================8========================
// var letter=window.prompt("Enter a Letter")
// if (letter=='a'|| letter=='e'|| letter=='i'|| letter=='o'|| letter=='u'|| letter=='A'|| letter=='E'|| letter=='I'|| letter=='O'|| letter=='U') {
//     console.log("Vowel");
// }
// else {
//     console.log("Consonant");
// }



// ================9========================
// var num=+window.prompt("Enter a Number")
// for (i=1 ; i<=num ; i++) {
//     console.log(i);
// }



// ================10========================
// var num=+window.prompt("Enter a Number")
// for (i=1 ; i<=12 ; i++) {
//     console.log(i*num);
// }



// ================11========================
// var num=+window.prompt("Enter a Number")
// for (i=2 ; i<=num ; i+=2) {
//     console.log(i);
// }



// ================12========================
// var num1=+window.prompt("Enter a Number")
// var num2=+window.prompt("Enter the Power")
// var power = num1**num2
// console.log(power);



// ================13========================
// var subject1=+window.prompt("Enter Subject 1 Mark")
// var subject2=+window.prompt("Enter Subject 2 Mark")
// var subject3=+window.prompt("Enter Subject 3 Mark")
// var subject4=+window.prompt("Enter Subject 4 Mark")
// var subject5=+window.prompt("Enter Subject 5 Mark")
// var total=subject1+subject2+subject3+subject4+subject5
// var average=total/5
// var percentage= (total/500)*100
// console.log("Total Marks: ",total);
// console.log(" Average Marks: ",average);
// console.log("Percentage: ",percentage);



// ================14========================
// var month=+window.prompt("Enter the Number of the Month")
// if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 ||month==12) {
//     console.log(31);
// }
// else if (month==4 || month==6 || month==9 || month==11) {
//     console.log(30);
// }
// else {
//     console.log(28);
// }



// ================15========================
// var physics=+window.prompt("Enter Physics Mark")
// var chemistry=+window.prompt("Enter Chemistry Mark")
// var biology=+window.prompt("Enter Biology Mark")
// var math=+window.prompt("Enter Mathematics Mark")
// var computer=+window.prompt("Enter Computer Mark")
// total=physics+chemistry+biology+math+computer
// percentage=(total/500)*100
// if (percentage>=90) {
//     console.log("Grade A");
// }
// else if (percentage>=80 && percentage<90) {
//     console.log("Grade B");
// }
// else if (percentage>=70 && percentage<80) {
//     console.log("Grade C");
// }
// else if (percentage>=60 && percentage<70) {
//     console.log("Grade D");
// }
// else if (percentage>=40 && percentage<60) {
//     console.log("Grade E");
// }
// else {
//     console.log("Grade F");
// }



// ================Using switch case========================



// ================16========================
// var month=+window.prompt("Enter the Number of the Month")
// switch (month) {
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30");
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31");
//         break;

//     default:
//         console.log("28");
//         break;
// }



// ================17========================
// var letter=window.prompt("Enter a Letter")
// switch (letter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonant");
//         break;
// }



// ================18========================
// var num1=+window.prompt("Enter the First Number")
// var num2=+window.prompt("Enter the Second Number")
// switch (true) {
//     case (num1 > num2):
//         console.log(num1);
//         break;
    
//     case (num2 > num1): 
//         console.log(num2);
//         break;

//     default:
//         console.log("They are Equal");
        
//         break;
// }



// ================19========================
// var number=+window.prompt("Enter a Number")
// switch (number%2) {
//     case 0:
//         console.log("Even");
//         break;

//     default:
//         console.log("Odd");
//         break;
// }



// ================20========================
// var num=+window.prompt("Enter a Number")
// switch (true) {
//     case (num>0):
//         console.log("Positive");
//         break;

//     case (num<0):
//         console.log("Negative");
//         break;

//     default:
//         console.log("Zero");
//         break;
// }



// ================21========================
// var num1=+window.prompt("Enter The First Number")
// var symbol=window.prompt("Enter the Operation Desired")
// var num2=+window.prompt("Enter The Second Number")
// var result
// switch (symbol) {
//     case '+':
//         result=num1+num2
//         console.log(result);
//         break;

//     case '-':
//         result=num1-num2
//         console.log(result);
//         break;

//     case '*':
//         result=num1*num2
//         console.log(result);
//         break;

//     case '/':
//         result=num1/num2
//         console.log(result);
//         break;

//     default:
//         break;
// }