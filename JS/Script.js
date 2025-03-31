const convertBtn=document.getElementById("convert-btn");
const inputEl=document.getElementById("input-el");
const lengthResult=document.getElementById("length-result");
const volumeResult=document.getElementById("volume-result");
const massResult=document.getElementById("mass-result");
convertBtn.addEventListener("click", function() {
    const inputValue=parseFloat(inputEl.value);
    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }
    lengthResult.innerHTML=`${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters`;
    volumeResult.innerHTML=`${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} liters`;
    massResult.innerHTML=`${inputValue} kilos = ${(inputValue*2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/2.204).toFixed(3)} kilos`;
    inputEl.value="";
});