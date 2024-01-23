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
/* 팝업창 */
/* 팝업창 열기1 */
const openPopup1 = document.querySelector("#openPopup1");
openPopup1.addEventListener("click", ()=>{
    window.open("23_스톱워치.html"); //새 탭에서 스톱워치.html을 열어라(팝업창X)

    // == <a href="23_스톱워치.html" target="_blank">스톱워치</a>  (in HTML)
});
/* 팝업창 열기2(진짜 팝업으로 열기) */
const openPopup2 = document.querySelector("#openPopup2");
openPopup2.addEventListener("click", ()=>{
    window.open("23_스톱워치.html", "_blank", "popup"); //비어있는 팝업창에 스톱워치.html을 열어라
});
/* 팝업창 열기3(팝업창 + 옵션) */
const openPopup3 = document.querySelector("#openPopup3");
openPopup3.addEventListener("click", ()=>{
    let options = []; //비어있는 배열
    options.push("width=400");
    options.push("height=600");

    /* 팝업창 띄우는 위치 지정 */
    //단, 메인 모니터에서만 적용 됨
    options.push("left=500"); //팝업이 왼쪽 화면으로부터 얼만큼 떨어진 위치에 나왔으면 좋겠는지
    options.push("top=100"); //팝업이 윗쪽 화면으로부터 얼만큼 떨어진 위치에 나왔으면 좋겠는지
    
    /* 배열명.toString() : "요소, 요소, 요소" */
    // -> 배열 내 요소를 ,를 구분자로 한 하나의 문자열로 변환
    // [1,2,3].toString() : 배열을 문자열로 바꿔라, 객체도 앞에 쓰면 객체도 문자열로 바꿀 수 있음
    window.open("23_스톱워치.html", "_blank", options.toString()); 
});
/* 팝업창(자식)이 부모창의 값을 읽고/쓰기 */
const openPopup4 = document.querySelector("#openPopup4");
openPopup4.addEventListener("click", ()=>{
    const options = [];
    options.push("width=600");
    options.push("height=600");
    options.push("left=500");
    options.push("top=100");
    window.open("22_팝업창.html", "_blank", options.toString());
});