// const applyBtn = document.querySelector("#applyBtn");


// // const content = document.querySelector("#content").value;
// //이 코드가 실행될 때의 값을 가져와서 저장하므로 계속 빈칸임

// /* 적용하기 버튼 클릭 시 */
// applyBtn.addEventListener("click", ()=>{
//     //버튼이 클릭됐을 시점의 적힌 input의 내용을 얻어와야함
//     //-> 전역변수로 선언하면 안됨 계속 빈칸으로 얻어와짐
//     /* 특정 시점의 요소/값을 얻어와야 되는데
//     전역, 지역 변수 중 어떤걸로 선언할 지 모르겠으면
//     일단 다 지역변수로 선언해라 */
//     const box = document.querySelector("#box"); //지역변수로 해도 됨
//     const content = document.querySelector("#content");
//     //출력 문자열에 작성된 값 #box의 내용으로 대입
//     box.textContent = content.value;
//     const boxWidth = document.querySelector("#box-width");
//     const boxHeight = document.querySelector("#box-height");
//     //너비에 작성된 값 #box의 너비로 대입
//     box.style.width = boxWidth.value + "px";
//     //높이에 작성된 값 #box의 높이로 대입
//     box.style.height = boxHeight.value + "px";
// });
const applyBtn = document.querySelector("#apply-btn");
const box     = document.querySelector("#box");

/* 적용하기 버튼 클릭 시 */
applyBtn.addEventListener("click", ()=>{

/* 특정 시점에 요소/값을 얻어와야 되는데
    전역, 지역 변수 어떤걸로 선언할지 모르겠으면
    일단 다 지역 변수로 선언해라!!
    지역변수로 선언해야 하는데 전역변수로 잘못 선언하면
    버튼이 클릭될 당시에 적혀있던 값이 들어가야 하는데
    전역변수가 읽힌 시점에 적혀있던 값이 들어가서 항상 빈칸으로 들어가게 됨
  */


const content = document.querySelector("#content");
const boxWidth = document.querySelector("#box-width");
const boxHeight = document.querySelector("#box-height");
const fs = document.querySelector("#fs");
const fontColor = document.querySelector("#box-font-color");
const bgColor = document.querySelector("#box-bg-color");

// 체크된 요소만 얻어오기(체크된게 없으면 null나옴)
const fw = document.querySelector("[name='fw']:checked");
const row = document.querySelector("[name='align-row']:checked");
const col = document.querySelector("[name='align-col']:checked");
//------------------------------------------------------------------------


  // 너비에 작성된 값 #box의 너비로 대입
box.style.width = boxWidth.value + "px";

  // 높이에 작성된 값 #box의 높이로 대입
box.style.height = boxHeight.value + "px";


  // 글자크기에 작성된 값 #box의 글자크기로 대입
box.style.fontSize = fs.value + "px";

// 글자색에 작성된 값 #box의 글자색으로 대입
box.style.color = fontColor.value;

// 배경색에 작성된 값 #box의 배경색으로 대입
box.style.backgroundColor = bgColor.value;

//굵기 radio 버튼이 체크되어 있을 경우
if(fw !=null){
    //굵기에 작성된 값을 #box의 굵기로 대입
    box.style.fontWeight = fw.value;
}
//가로정렬 radio 버튼이 체크되어 있을 경우
if(row !=null){
    //가로정렬에 작성된 값을 #box의 정렬로 대입
    box.style.justifyContent = row.value;
}
//세로정렬 radio 버튼이 체크되어 있을 경우
if(col !=null){
    //가로정렬에 작성된 값을 #box의 정렬로 대입
    box.style.alignItems = col.value;
}


  // 출력 문자열에 작성된 값 #box에 내용으로 대입
box.textContent = content.value;

});

