function askMyName() {
    const name = prompt("Please enter your name", "Ezra Piyachanokwong");// เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("header-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("header-name").innerHTML// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + 'กาแฟยังใส่นม ถึงหน้าไม่คมแต่ใส่ใจ')
 }