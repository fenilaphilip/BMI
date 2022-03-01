/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function calculate(){
    let weight= document.getElementById("wt").value ; /* kg */
    let height= document.getElementById("ht").value; /* cm */
    let bmi = ((weight/(height* height))*10000)
    document.getElementById("bmi").innerHTML= "BMI =" + bmi;
}


