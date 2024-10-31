'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//参加者の登録
function entryMenber() {
    const nameINput = document.getElementById("nameInput").value;
    const feelInput = document.getElementById("feelInput").value;

    if (nameINput && feelInput){
        const spaseDiv = document.querySelector(".space");
        const newElement =document.createElement("div");
        newElement.textContent = `参加者: ${nameINput}, 会費: ${feelInput}`;
        spaseDiv.appendChild(newElement);
        document.getElementById("nameInput").value = "";
        
    }}