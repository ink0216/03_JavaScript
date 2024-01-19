/* 클래스 접근 테스트 */

 // .cls-test 요소 모두 얻어오기
  // -> 해당 class 요소들이 HTMLCollection으로 얻어와짐
  //(==유사배열 : 배열이긴 한데 배열 전용 메서드(함수)가 적용되지 않음)
  //(fill,indexOf 등)
  // 유사배열이란?
  //배열처럼 index, length를 가지고 있으나
  //배열 전용 기능(메서드)이 제공되지 않음

function classTest(){
    //.cls-test 요소 모두 얻어오기
    const divs = document.getElementsByClassName("cls-test");
    console.log(divs);
    divs[0].style.backgroundColor = "rgb(114,203,80)";
    divs[1].style.backgroundColor = "rgb(40,255,255)";
    divs[2].style.backgroundColor = "rgb(150,90,210)";

    for(let i=0 ; i<divs.length ; i++){
        divs[i].innerText = `${i}번째 div 입니다`;
    }
    
}
// input에 입력된 숫자를 모두 얻어와 합계 구하기-class이용
function classTest2(){
    //배열 얻어올때는 여러 개이므로 복수형(-s)이나 리스트로 이름짓기
    const inputList = document.getElementsByClassName("cls-test2");
    //클래스가 cls-test2인 요소를 모두 얻어오겠다
    //->HTML Collection(유사 배열) 형태로 얻어와짐(반환됨)
    //inputlist는 요소가 아닌 배열임. 그 안에 여러 요소들이 들어있는 것임
    //요소가 아니므로 배열의 값을 얻어오거나, 배열에 style을 주는 것 불가능
    
    /* (중요)
        요소들을 한 번에 얻어오게 되면 배열 형태로 반환된다! 
        ->요소로서 다루고 싶으면 index를 이용해서 배열 요소를
        하나씩 꺼내서 각자 style을 주든 값을 얻어오든 해야한다 */
        // taglist.style.backgroundColor = red; 이렇게 배열에 스타일 줄 수 없음
        let sum = 0;
        for(let i=0; i<inputList.length ; i++){
            
            // inputList 배열의 i번째 요소의 값을 얻어와서 넘버로 변환
            const value = Number(inputList[i].value);
            console.log(i, value); //문자열로 인식돼서 ''나옴 
            sum += value; //값 누적
        }
        alert(`합계 : ${sum}`);


}
//태그명으로 요소 접근하기
function tagNameTest(){
    // HTML 문서 전체에 존재하는, 태그명이 li인 것들을 
    //배열로 묶어서 다 얻어오기
    const tagList = document.getElementsByTagName("li");

    for(let i=0 ; i<tagList.length ; i++){
        //순차 접근
        console.log(tagList[i].innerText);
        //tagList의 i번째 요소의 innerText로 작성된 내용을 얻어오기

        //tagList[i].innerText         : 작성된 내용 얻어오기
        //tagList[i].innerText = "abc" : 내용으로 "abc"대입하기

        //for문 반복 중 현재 선택된 요소의 배경색을
        //작성된 내용과 똑같은 색으로 변경하기
        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
}
/* name으로 요소 접근하기 */
function nameTest(){
    //name 속성 값이 "hobby"인 요소를 모두 얻어와
    //hobbyList에 저장
    const hobbyList = document.getElementsByName("hobby");
    let str=""; //체크된 값 누적
    let count = 0; //체크된 수를 카운트
    for(let i=0 ; i<hobbyList.length ; i++){
        //순차 접근

        /* checkbox, radio 전용 속성 .checked   */
        //input요소.checked 

        // ->요소가 체크되어 있으면 true, 아니면 false로 얻어옴

        //input요소.checked = true
        // ->해당 요소를 체크

        //input요소.checked = false
        // ->해당 요소 체크를 해제시킴
        //checkbox와 radio는 값을 못 적어서 value값으로 적어놓음

        //체크박스의 값, 체크여부 출력
        console.log(hobbyList[i].value, hobbyList[i].checked);
        //콘솔에 나오는 글씨가 label태그의 innerText가 아닌, 
        //각 input의 value 속성이다. 
        
        //체크 여부를 검사해서 체크가 되어 있다면
        //체크된 요소의 값을 str 변수에 누적
        //+count 변수 값을 1 증가시켜 몇 개를 체크했는지 세겠다
        if(hobbyList[i].checked){
            //i번째 요소가 체크되어 있어서 true나온다면 실행할 코드
            count++;
            str += hobbyList[i].value + ", ";
        } 


    } //for문 끝
    //#name-div요소에 내용으로 결과 출력(id가 name-div인 것)
    //변수에 저장 안하고도 바로바로 쓸 수 있다
    document.getElementById("name-div").innerHTML
    =`${str}<br><br>선택된 취미 개수 : ${count}`; 

}
/* CSS 선택자로 요소 접근하기 */
function cssTest(){

    // 1) document.querySelector("CSS 선택자");
    //            ->요소 1개만 반환
    //         -> 선택자가 선택한 요소 중 첫 번째 요소 하나만을 반환
    //query : 질의(질문하겠다). 
    //옆에 작성한 선택자와 일치하는 게 있으면 선택해줘

    // 2) document.querySelectorAll("CSS 선택자");
     //            ->요소 N개 반환
    //         -> 선택한 요소 모두를 배열(NodeList, 유사배열) 형태로 반환

    //target-div 속성 값이 css-div인 요소에 접근해서 
    //그 요소의 테두리를 변경
    const container = document.querySelector('[target-div="css-div"]'); //안에 쌍따옴표 쓸거니까 밖은 홑따옴표 쓴다 둘이 바꿔 써도 됨
    container.style.border = "10px solid red";

    // //첫 번째 div만 선택하는 방법 1(test1)
    // const div1 = document.querySelector('[target-div="css-div"] > div:first-child'); 
    // console.log(div1);

    //첫 번째 div만 선택하는 방법 2(test1)
    const div1 = document.querySelector('[target-div="css-div"] > div'); 
    //이렇게 쓰면 div두개 선택될 것 같지만
    //querySelector는 무조건 맨 앞에 있는 하나만 선택하기 때문에
    //이렇게 써도 됨
    console.log(div1);
    div1.innerText ="JS에서 CSS 선택자로 선택해서 값 변경됨"

    //두 번째 자식 div 선택
    const div2 = document.querySelector('[target-div="css-div"]>div:last-child');
    div2.innerText = "첫 번째 요소가 아니면, 하나만 택하는 querySelector()의 특징을 활용 못해서 다 써야함";

    /* 모든 자식 div 한 번에 선택하기 -> 배열 형태 */
    const divList = document.querySelectorAll('[target-div = "css-div"] > div');
    console.log(divList);

    //index를 이용해서 요소 하나씩 접근
    divList[0].style.fontFamily = "궁서체";
    divList[1].style.fontSize = "20px";

    for(let i=0 ; i<divList.length ; i++){
        //순차 접근
        divList[i].onclick = function(){alert(`${i}번째 인덱스 요소입니다.`);}
        //함수를 변수에 저장할 수 있다
        //divList의 i번째 요소를 클릭했을 때 alert띄우는 함수를 실행하겠다

        
    }
}
/* 카카오톡 모양의 채팅 화면 만들기 */
function readValue(){
    const bg = document.querySelector("#chatting-bg");
    /* id가 chatting-bg인 애를 얻어오겠다 */

    const input = document.querySelector("#user-input");
    /* 채팅 내용 입력받은 input태그 */

    // input.value : 입력한 내용
    
    // console.log(input.value);

    //입력된 값이 없을 경우
    //-1. 진짜 아무것도 안 적음
    //-2. 공백만 적음(스페이스바)
    //이 두가지를 if문 하나로 다 커버하기

    /* 문자열.trim() : 문자열 좌우에 있는 공백을 제거 */
    if(input.value.trim().length ==0){
        //작성한 값에 trim해서 공백 없앤 후 length를 쟀는데 0인 경우
        alert("채팅 내용을 입력해 주세요.");
        input.value = ""; //input창에 값으로 빈칸을 넣어서 //이전에 input에 작성된 값 삭제
        input.focus(); //이상하게 써서 창 뜬 후에 커서 자동으로 활성화됨
        //focus : 집중 ->HTML에서의 focus : input에 커서를 활성화
        return; // 즉시 현재 수행중인 함수(readValue())를 종료(그 밑 코드는 실행 안됨) + 호출한 곳으로 돌아감
    }
    //채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    // bg.scrollHeight; : bg의 스크롤 전체 높이(쓴 내용 전체)
    //  bg.scrollTop : 스크롤 바 윗부분의 위치
    //  bg.scrollTop = 값 : 스크롤 바 윗부분의 위치를 값 위치로 이동시킨다
    // 값이 scrollHeight 보다 크면 제일 밑으로 이동
    bg.scrollTop = bg.scrollHeight;
    input.value = ""; //이전에 인풋에 쓴 내용 지워지도록
    input.focus();  //연속으로 입력할 수 있게 자동 포커스
}
/* 아이디가 user-input인 요소에서 
    키가 올라오는 동작이 발생했을 때(감지되었을 때)
    올라온 키가 "Enter"키 이면 readValue()함수를 호출 */

    /* keydown : 키보드의 키가 눌러졌을 때 (+ 꾹 누르고 있으면 계속 인식됨)(연속적으로 인식됨)
        keypress : 키가 눌러지고 있을 때 (연속적으로 인식됨)
        keyup : 눌러지고 있던 키가 떼어져서 위로 올라왔을 때(1회만 인식)*/
document.querySelector("#user-input").addEventListener("keyup", function(e){
    //e : 이벤트 객체(발생한 이벤트 정보를 담고있는 객체)
    //e.key : 입력한 키를 반환(e의 key부분의 값 가져옴)
    console.log(e);
    if(e.key == "Enter"){
        //엔터가 눌러지면 Enter라고 콘솔에 나왔었음
        readValue(); //채팅창 출력 함수 호출
    }
});
//문자열 하나랑 함수 하나를 적을 수 있다
//문자열 자리에 어떤 동작을 했을 때 감지를 할 것인지를 적음
//
