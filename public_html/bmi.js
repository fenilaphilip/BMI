/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function calculate() {
  let weight = document.getElementById("weight").value; /* kg */
  let height = document.getElementById("height").value; /* cm */
  let bmi = Math.round((weight / Math.pow(height, 2)) * 10000);
  document.getElementById("bmi").innerHTML = "BMI = " + bmi;
}
