// Exercicio 1
// function verticalText(str){
//     // let str = "frontend";
//     for(let i =0; i < str.length; i++){
//         console.log(str[i]);
//     }
// }
// verticalText("Frontend");

// Exercicio 2
// function incrementText(str){
//     // let str = "backend";
//     let string = "";
//     for(let i = 0; i< str.length; i++){
//         string += str[i];
//         console.log(string);
//     }
// }
// incrementText("Backend");

// Exercicio 3
// function incrementTextBackwards(str){
//     let stringBack = str;
//     let stringRev = "";
//     let string = "";
//     for(let i = 0; i < str.length; i++){
//         stringRev = stringBack.split("").reverse().join("");
//         string = stringRev[i] + string;
//         console.log(string)
//     }
// }
// incrementTextBackwards("Fullstack")

// Exercicio 4
// function padEnd(str,rep,caRep){
//     let conca = "";
//     for(i = 0; i < rep; i++){
//         conca += caRep;
//     }
//     console.log(`${str}${conca}`);
// }
// padEnd("Kenzie", 5, "Foo");

// Exercicio 5
// function subString(str,init,final){
//     let stringMid = "";
//     let strSlice = str;
//     stringMid = strSlice.slice(init,final);
//     console.log(stringMid);
// }
// subString("Chrome",3,6);

// Exercicio 6
// function stringRepeater(str, rep){
//     let repTime = "";
//     for(i = 0; i < rep; i++){
//         repTime += str;
        
//     }
//     console.log(`${repTime}`);

// }
// stringRepeater("Repetindo", 3);

// Exercicio 7
// function stringCentralizer(str,qnt,repEle){
//     let conca = "";
//     for(i = 0; i < qnt; i++){
//         conca += repEle;
//     }
//     console.log(`${conca} ${str} ${conca}`)
// }
// stringCentralizer("Fullstack", 10,"=")