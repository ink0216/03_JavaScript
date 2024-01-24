/* 버튼 클릭 시 이전 것 지우고 새 로또판 생겨야 한다 */
const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");

/* #createBtn 버튼 클릭 시
    #lottoBoard에 div.number 요소 45개 생성해서 추가하기 */
createBtn.addEventListener("click", ()=>{

    // #lottoBoard 이전 내용 삭제
    lottoBoard.innerHTML=""; //빈칸을 넣어서 지우기


    //div.number 만들어서 추가
    for(let i=1 ; i<46 ; i++){
        const number = document.createElement("div");
        //45개 div 만들어짐
        number.classList.add("number"); //만들어진 div에 number 클래스 있어야 함
        number.textContent = i;
        //화면에 추가하기 전에 할 거 다 하고 추가하기
        //만들어진 div.number에 클릭이벤트 추가(색 바꾸기)
        number.addEventListener("click", e=>{
            // console.log(e.target.textContent); 
            //클릭이 발생한, 만들어진 요소 자체의 숫자를 얻어와 출력해라

            
            const count = document.querySelectorAll(".active").length;
            //화면에 선택된 요소가 몇개인지 셀것임
            // console.log(count);

            /* 클릭 전에 화면에 선택된 요소가 5개 이하일 경우
                또는 클릭한 요소에 active 클래스가 있을 경우에만(그게 이미 선택된 요소일 때) 
                클릭 되도록 */
            
        if(count<=5 || e.target.classList.contains("active")){
            //active 클래스 없으면 ->추가해주고
            //있으면 제거
            // 두 방법 -1. 요소.classList.contains(클래스명)
            //            : 요소에 클래스명이 존재하면 true, 아니면 false 
            // if(e.target.classList.contains("active")){
            //     e.target.classList.remove("active");
            // } else{
            //     e.target.classList.add("active");
            // }
            //         -2. 요소.classList.toggle(클래스명)
            //              : 요소에 클래스명에 있으면 제거, 없으면 추가
            //                  toggle : on/off(한 버튼의 두 동작이 있는 것)
                e.target.classList.toggle("active"); //이미 클래스 있는 애는 클래스 지워져서 색 사라짐
            }  
            else{
                alert("6개까지만 선택할 수 있습니다.");
            }
        });
        lottoBoard.append(number); //#lottoBoard의 마지막 자식으로 추가해라
    }
});


