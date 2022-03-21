function askMyName() {
    const name = prompt("Please enter your name", "Ezra Piyachanokwong");// เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("header-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("header-name").innerHTML// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message +' '+ 'กาแฟยังใส่นม ถึงหน้าไม่คมแต่ใส่ใจ')
 }

 function calAge() {
    const year = prompt("Please enter year of birth", 1996);
    if (year != null) {
        const calYear = 2022 - year;
        console.log(calYear);
        alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${calYear} ปีแล้ว`);
    }
 }

 function loadProfile() {
     const personName = "Ezra Piyachanokwong";
     document.getElementById("my-name").innerHTML = personName;

     const province = "Samut Prakan";
     document.getElementById("my-province").innerHTML = province;
     console.log(`${personName} ${province}`);
 }