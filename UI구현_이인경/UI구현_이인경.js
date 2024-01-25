const outputNum = document.querySelector("#outputNum");
const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");
const number = document.querySelectorAll(".number");

/* 숫자 버튼 클릭 시 */
for(i=0 ; i<number.length ; i++){
number[i].addEventListener("click", e=>{
    
    outputNum.textContent += e.target.textContent;
}
)};
resetBtn.addEventListener("click", ()=>{
    outputNum.textContent = "";
});

/* 추가 버튼 클릭 시 */
addBtn.addEventListener("click", ()=>{
    const record = document.querySelector(".record");

    //recordBox 생성
    const recordBox = document.createElement("div");
    recordBox.classList.add("recordBox");

    //즐겨찾기 번호 추가
    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = outputNum.textContent;

    const iconBox = document.createElement("div");
    iconBox.classList.add("iconBox");

    // star 만들기 (즐겨찾기)
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = "&star;";

    // span 만들기(X버튼)
    const span = document.createElement("span");
    span.classList.add("span");
    // 내용으로 &times; 추가(innerHTML 사용)
    span.innerHTML = "&times;";

    // 클릭된 x버튼의 부모의 부모 요소를 제거
    // 만들어지는 X버튼(span)에 이벤트 리스너 추가
    span.addEventListener("click", e => {
        // 현재 이벤트가 발생한 요소(클릭된 X버튼)의
        //      부모의 부모 요소를 선택(탐색)
        const parent = e.target.parentElement.parentElement; 
        // 부모의 부모 요소를 제거
        parent.remove(); //==recordBox
    });

    // --- 조립 시작.... ---

    iconBox.append(star);
    iconBox.append(span);
    
    recordBox.append(result);
    recordBox.append(iconBox);
    
    record.append(recordBox);
    //&star;
    outputNum.innerHTML="";

    //----------------------------------------
    star.addEventListener("click", e=>{
        if(e.target.style.color =="orange"){
            e.target.innerHTML = "&star;";
            e.target.style.color = "black";
            result.style.color = "black";
        } else{
        e.target.innerHTML = "&starf;"
        e.target.style.color = "orange";
        result.style.color = "red";
        }
        
    });
});




