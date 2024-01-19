const boxList = document.querySelectorAll(".box");
/* 일치하는 요소들을 모두 배열(여러개니까)로 담아와서 boxList에 저장하기 */
const inputList = document.querySelectorAll(".color-input");
/* 요소를 한번에 여러개 얻어오면 배열 형태로 저장됨 */
/* 얻어온 요소를 사용하려면 배열(묶음)의 index별 요소를 하나씩 꺼내서 */
/* 사용해야 한다 !!! */
//ex) boxList.style.color = "red";  ->배열의 글자색을 red로 변경한다는 말도안되는 소리임
//boxList[0].style.color = "blue";  ->이렇게 하나씩 꺼내서 써야 맞음!!!(배열의 0번 인덱스에게..)
// document.querySelectorAll쓰면 해당하는 게 한개여도 배열로 얻어와짐

document.querySelector("#changeButton").addEventListener("click", function(){
    for(let i=0 ; i<boxList.length ; i++){
        boxList[i].style.backgroundColor = inputList[i].value; 
        //i번째 요소의 배경색을 i번째 인풋의 값으로 변경하겠다
    }
});
//아이디가 저거인 요소를 얻어와서 
//거기에 이벤트 리스너를 추가해서 클릭하면 리스너가 감지하고 함수(이벤트 핸들러) 실행되게
