const display = document.querySelector("#display");
const list = document.querySelectorAll("#display>span") //자식 span 태그들 다 모아오기
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

//start버튼 클릭 시 10ms 마다 display(시간)을 증가
let count=0; //1/100초 마다 1씩 증가한 값을 저장할 전역변수
//1/100초 자리 : count%100
//1초 자리 : count/100%60 ->Math.floor로 소수 없앰
//1분 자리 : count/100/60 ->Math.floor로 소수 없앰
let currInterval; //인터벌 저장 변수
startBtn.addEventListener("click", e=>{
    //클릭한 버튼에 작성된 내용이 "PAUSE"(일시정지)인 경우
    if(e.target.textContent == "PAUSE"){
        e.target.textContent = "START"; //버튼 내용 스타트로 바꾸겠다
        window.clearInterval(currInterval); //그리고 인터벌 멈추겠다
        return;
    }
    //클릭한 버튼에 작성된 내용이 "START"인 경우
    currInterval = window.setInterval(()=>{
        count++; //0.01초마다 카운트를 1 증가
        //document.querySelectorAll("#display>span")[2].innerText = count;
        output(); //output 함수 호출(화면에 시간을 출력)
    }, 10); //10ms마다 실행하는 것을 저장 //비동기로 수행
    // e.target.disabled = true; //임시
    // e.target :클릭이라는 이벤트가 발생한 버튼
    e.target.textContent = "PAUSE"; //pause로 글자 내용을 바꿔보자


});

/* 시계 출력 함수 */
function output(){
    let minute = Math.floor(count/100/60); //분
    let second = Math.floor(count/100%60); //초
    let ms = count%100; //마지막 자리?
    //0붙여서 문자열로 변환해서 반환
    minute = attachZero(minute);
    second = attachZero(second);
    ms = attachZero(ms);
    // console.log(minute, second, ms);
    // minute의 값과 화면에 출력된 분이 다를 경우에만 출력(효율을 위해서)
    if(list[0].innerText !=minute) list[0].innerText = minute;
    // second의 값과 화면에 출력된 초가 다를 경우에만 출력
    if(list[1].innerText !=second) list[1].innerText = second;
    list[2].innerText = ms;


}
/* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attachZero(num){
    if(num <10){
        //한 자리 수인 경우
        return "0" + num;
    }
    return ""+num; //2자리 이면 그냥 문자열로 바꿔주기
    //비어있는 문자열에 숫자 더하면 문자열됨
}
/* RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", ()=>{
    //currInterval 제거
    window.clearInterval(currInterval);//더이상 시간 늘어나지 않도록 하겠다(일시정지, pause)
    //count, 출력된 시간 숫자 모두 0으로 바꾸기
    count = 0;
    output(); //output(): 화면을 출력하는 것 ->0을 기준으로 화면 출력해라
    //start 버튼 활성화 ==비활성화 안함
    // startBtn.disabled = false;
    //START 버튼의 내용을 "START"로 변경
    startBtn.textContent = "START";

    //#recordContainer의 내용을 모두 삭제(==빈 문자열로 만들어서 없애기)
    recordContainer.innerHTML = ""; //innerText로 해도 똑같음
});
/* recordBtn 버튼 클릭 시 li요소를 생성해서 
li의 내용으로 #display의 시간을 얻어와 대입
    그 후 #recondContainer의 첫 번째 자식으로 매번 추가하겠다 */
recordBtn.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.textContent = display.innerText; 
    //대입하는 곳에 어떻게 대입할 지는 둘이 차이가 없는데, 
    //대입할 내용을 가져올 때에는 둘이 차이가 있음
    //디스플레이에 보이는 그대로 가져오기 위해 innerText로 함
    //앞은 innerText로 해도 동일하지만 뒤는 textContent로 하면 안됨
    recordContainer.prepend(li); // 맨 첫번째 자식으로 추가해라
});





/* 요소.textContent와 요소.innerText의 차이점 */
//textContent를 이용해 요소에 작성된 내용 얻어오기
// -> HTML 파일에 작성된 애용 형태(태그만 뺀 공백 포함 그대로) 그대로 얻어옴
//        (띄어쓰기, 엔터 모두 포함)
//innerText를 이용해 요소에 작성된 내용 얻어오기
//  ->브라우저(화면)에 보이는 형태 (태그 빼고) 그대로 얻어옴



