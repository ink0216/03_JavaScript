/* <main class="container">
<div class="btnBox">
<button id="createBtn">추가</button>
<button id="calculateBtn">계산</button>
</div>
<div class="inputBox"></div> 
</main>*/
const createBtn = document.querySelector("#createBtn");
const container = document.querySelector(".container");
createBtn.addEventListener("click", ()=>{
    const inputBox = document.createElement("div");
    inputBox.classList.add("inputBox");
    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("input");
    container.append(inputBox);
    inputBox.append(input);
    const btnX = document.createElement("btnX");
    btnX.classList.add("btnX");
    inputBox.append(btnX);
    
    
});
// 큰박스: 생성->클래스 추가
//자식 : 
// createBox.addEventListener("click", ()=>{
//     /* 1. div 요소 생성 */
//     const box = document.createElement("div");
//     console.log(box); //만들어졌지만, 화면에는 안보임(바디태그 밖에 생겨서)
//     /* 2. 만들어진 div 요소에 "box" 클래스 추가하기*/
//     box.classList.add("box");
//     /* 3. container의 마지막 자식으로 div 요소를 추가하기 */
//     container.append(box);
//     /* 4. input 요소 생성 */
//     const input = document.createElement("input");
//     input.type = "text"; //type ="text" 지정
//     console.log(input);
//     /* 5. 생성된 input을 box의 마지막 자식으로 추가 */
//     box.append(input);

// });
