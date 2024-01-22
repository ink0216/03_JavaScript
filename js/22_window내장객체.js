/* setTimeout(함수, 지연시간(ms))확인 */
/* 1000ms = 1s */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
    window.setTimeout(()=>{
        console.log("3초 후에 출력된 문자열"); //클릭 후 3초 후 나옴
    }, 3000); //3초 지연(3초 후 함수 실행)

    window.setTimeout(()=>{
        console.log("2초"); //클릭 후 2초 후 나옴
    }, 2000);
    
    window.console.log("바로 출력");//클릭하자마자 바로 나옴
    //비동기여서 뒤의 코드가 앞의 코드 수행되는 것을 기다리지 않고 바로 수행
    //앞의 코드가 수행되는 것을 기다렸다가 끝난 후에 다음 코드 수행하는 것 == 동기
    //앞의 둘은 비동기니까 너의 일 하고있어봐! 시키고 뒤 코드로 넘어감
});
/* (window.)setInterval(함수, 지연시간(ms))확인 */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e)=>{
    window.setInterval(()=>{
        const span=document.querySelector("#box2>span");
        //이전 내용 + 1한 숫자를 다시 내용으로 대입
        span.innerText = Number(span.innerText) +1;
    }, 1000); //1초마다 수행
    //한번 클릭된 버튼을 비활성화 시키기 (여러번 누르면 카운트가 점점 빨라져서)
    // e.target : 버튼 자체
    e.target.disabled = true;
});
/* clearInterval(Interval) */
const target3 = document.querySelector("#target3");
const start3 = document.querySelector("#start3");
const stop3 = document.querySelector("#stop3");

let currInterval; //현재 인터벌 저장

//시작 버튼 클릭 시 0.1초마다 target의 내용을 1씩 증가시키기
start3.addEventListener("click", e=>{

    currInterval = setInterval(()=>{
        target3.innerText = Number(target3.innerText)+1;
    }, 100); //0.1초
    e.target.disabled = true;
    //한번만 클릭할 수 있게 하기
});

//멈춤 버튼 클릭 시 
stop3.addEventListener("click", ()=>{
    //setInterval()을 제거
    window.clearInterval(currInterval); //인터벌을 클리어하겠다
    start3.disabled = false; //다시 활성화 시킴(비활성화하지 않음)
});