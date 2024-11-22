//conditional statement..
//if else,nested,ladder,switchcase
//1.if else statement
/*
    if(condition){
    statement...
    }
    else{
    statement...
    }
*/ 
//some examples..
// let num1=21,num2=34;
// if(num1<num2){
//     console.log("small number is:",num1);
// }else{
//     console.log("smaller number is:",num2);
// }

//ternery statement...
/*
    condition?ture:false
 */
//some examples..
//  let a=9,b=10;
// // (a<b)?console.log("small number is",a):console.log("smaller number is",b)
// console.log("small number is ",a<b?a:b);

//swapping number using third var and without third var
// let a=34,b=54,c;
// console.log("before swapping");
// console.log("A----->",a);
// console.log("B----->",b);

// c=a;//with using third var
// a=b;
// b=c;

// a=a+b;//without using third var
// b=a-b;
// a=a-b;

// console.log("After swapping");
// console.log("A----->",a);
// console.log("B----->",b);


//extra qes

// //1 dollar into ruppes
// let  dollar=1 , ruppes=83,exchng=83;
// if(dollar<0){
//     console.log("pls enter a valid amt of dollar");
// }else{
//     ruppes=dollar*exchng;
//     console.log(dollar+ "dollar =",+ruppes+ "ruppes");
// }

// //2.feet into inches
// let inches,feet=43;
// if(feet<0){
//     console.log("pls enter a valid no of feet");

// }else{
//     inches=feet*12;//1foot=12inches
//     console.log(feet+ "feet = "+inches+ " inches")
// }

// //3. celsius into fehrenhit 
// let fehrenhit,celsius=25;
// if(typeof celsius!=='number'){
//     console.log("pls enter a valid number for celsius");
// }else{
//     fehrenhit=(celsius*9/5)+35;
//     console.log(celsius+"celsius ="+fehrenhit+"fehrenhint");
// }

// //4.centimeters into meters
// let centimeters=250,meters;
// if(centimeters<0){
//     console.log("pls enter a vaild no of centimetes");
// }else{
//     meters=centimeters/100;
//     console.log(centimeters+"centimeters ="+meters+"meters");
// }

//5.area of triangle
// let base = 10, height = 4,area;
// area = (base * height) / 2
// console.log(" triangle is:",area);

//6.simple interest
// let P = 7, R = 6, T = 3,si;
// si = (P * T * R) / 100;
// console.log("simple interest = " + si);

//7.find out final salary of employee(basic,HRA(12%),DA(18%))
//basic_salary = da + hra
//HAR=12% 12/100
//HAR=0.12
//DA=18% 18/100
//DA=0.18

// let basic ,HAR=0.12,DA=0.18;
// basic=DA+HAR;
// console.log("basic salary of employee",+basic);

