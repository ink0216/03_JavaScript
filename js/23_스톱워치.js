const display = document.querySelector("#display");
const list = document.querySelectorAll("#display>span") //자식 span 태그들 다 모아오기
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");
//start버튼 클릭 시 10ms 마다 display(시간)을 증가
let count=0; //1/100초 마다 1씩 증가한 값을 저장할 전역변수
//1/100초 자리 : count%100
//1초 자리 : count/100%60
//1분 자리 : count/100/60
let currInterval; //인터벌 저장 변수
startBtn.addEventListener("click", e=>{
    currInterval = window.setInterval(()=>{
        count++; //0.01초마다 카운트를 1 증가
        //document.querySelectorAll("#display>span")[2].innerText = count;
        output(); //output 함수 호출(화면에 시간을 출력)
    }, 10); //10ms마다 실행하는 것을 저장
    e.target.disabled = true; //임시

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
    // minute의 값과 화면에 출력된 분이 다를 경우에만 출력
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
    return ""+num; //비어있는 문자열에 숫자 더하면 문자열됨
}
/* RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", ()=>{
    //currInterval 제거
    window.clearInterval(currInterval);//더이상 시간 늘어나지 않도록 하겠다(일시정지, pause)
    //count, 출력된 시간 숫자 모두 0으로 바꾸기
    count = 0;
    output(); //output(): 화면을 출력하는 것 ->0을 기준으로 화면 출력해라
    //start 버튼 활성화 ==비활성화 안함
    startBtn.disabled = false;
});
