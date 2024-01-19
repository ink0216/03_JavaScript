const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container"); //첫 번째 하나만 얻어와진다 배열로 넘어오지 않음
/* createBox 버튼 클릭 시 div.box를 생성하여
container에 마지막 자식으로 추가하기 */
createBox.addEventListener("click", ()=>{
    /* 1. div 요소 생성 */
    const box = document.createElement("div");
    console.log(box); //만들어졌지만, 화면에는 안보임(바디태그 밖에 생겨서)
    /* 2. 만들어진 div 요소에 "box" 클래스 추가하기*/
    box.classList.add("box");
    /* 3. container의 마지막 자식으로 div 요소를 추가하기 */
    container.append(box);
    /* 4. input 요소 생성 */
    const input = document.createElement("input");
    input.type = "text"; //type ="text" 지정
    console.log(input);
    /* 5. 생성된 input을 box의 마지막 자식으로 추가 */
    box.append(input);

});
/* 요소.classList : 요소의 클래스 목록
    -> 이를 이용해서 클래스 존재 여부, 추가, 제거 등을 할 수 있음
    요소.classList ->요소에 부여된 클래스 목록이 배열 형식으로 반환 
    요소.classList.contains("클래스명") -> 해당 클래스가 요소에 있으면 true, 아니면 false를 반환
    요소.classList.add("클래스명") -> 클래스 추가
    요소.classList.remove("클래스명") -> 클래스 제거*/

/* innerHTML로 요소 추가하기 */
const innerHTMLBox = document.querySelector("#innerHTMLBox");
innerHTMLBox.addEventListener("click", ()=>{
    /* container의 이전 내용에 
    "<div class="box"></div>" 라는 문자열을 누적 + HTML 해석 */
    container.innerHTML += "<div class='box'><input type='text'></div>";
    //+= 복합대입연산자  
    //오른쪽 것을 왼쪽에 대입하되, 기존의 것을 다 지우기 ->이전 내용 지워져서 비효율적!

});