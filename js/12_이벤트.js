/* 인라인 이벤트 모델 확인 */
function check1(btn){
    //매개 변수 : 함수 호출 시 ()내부에 작성된 값을
    //              전달 받아 저장하는 변수
    //함수가 실행될 때 this가 넘어와서 btn에 저장됨
    //매개 변수 btn == 클릭한 버튼(this) 같아짐
    console.log(btn);

    //버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;

    //처음에는 inline-style로 지정된 배경색이 없어서 ""(빈칸)
    //inline-style : HTML요소에 직접 스타일 쓰는 것
    console.log(bgColor);

    //버튼이 클릭 될 때마다 pink <->yellow 계속 변경하기
    if(bgColor == "yellow"){
        btn.style.backgroundColor = "pink";
    } else{
        btn.style.backgroundColor = "yellow";
    }
}
//---------------------------------------------------------------
/* 고전 이벤트 모델 확인 */
//아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1-1");
/* ***********고전 이벤트 모델 작성법**************** */
// 요소.이벤트리스너 = 이벤트 핸들러
/* ************************************************** */
test1a.onclick = function(){
    alert("고전 이벤트 모델 확인 버튼 클릭됨");
}
// test1a가 onclick이라는 변수를 가지고 있다
// function(){}: 익명 함수

/* 고전 이벤트 모델 제거 */
//#test1-2 버튼 클릭 시 
//#test1-1의 onclick 이벤트 리스너의 이벤트 핸들러를 제거하기
document.querySelector("#test1-2").onclick = function(){
    document.querySelector("#test1-1").onclick = null;
    alert("이벤트 제거됨");
}
// 아이디가 test1-2인 요소를 클릭했을 때(onclick) 그걸 감지해서 함수 실행
//근데 그 함수는 아이디가 test1-1인 애를 찾아서 이벤트를 없애기
// 기존 onclick의 이벤트 핸들러를 null로 덮어 씌움(이벤트 제거)
// 원래 확인 누르면 alert뜨는데 제거 버튼 누르면 확인 눌러도 alert안뜸

/* 고전 이벤트 모델 단점 */
//#test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");
//#test1-3 요소가 클릭 되었을 때 
//배경색을 red로 변경하겠다
test1c.onclick = function(){
    test1c.style.backgroundColor = "red";

}
///.......6개월 후....test1c.onclick 변수에 배경색 함수 있는거 까먹고 또쓰면?
// #test1-3이 클릭되었을 때 글자색을 "white"로 변경
test1c.onclick = function(){
    test1c.style.color = "white";
    // test1c.onclick에 저장된 값이 새 함수로 덮어씌워지면서
    //이전 코드(배경색 red)가 사라지는 문제가 발생!! ->표준 이벤트 모델로 해결
}

//---------------------------------------------------------------------------------
/* 표준 이벤트 모델 확인 */
/* 클릭할수록 투명해지게 만들기 + 클릭한 횟수 count하기 */
const test2 = document.querySelector("#test2");
/* 표준 이벤트 모델 작성법 */
// 요소.addEventListener("이벤트종류", 이벤트핸들러(함수));
test2.addEventListener("click", function(){
    //현재 #test2의 투명도(opacity) 확인하기
    // test2.style.opacity = 0.3 : 1에서 0으로 갈 수록 투명해짐

    //투명도 1(불투명)->0(투명) 으로 한번 클릭 당 0.01씩 줄이기
    let curr = test2.style.opacity;
    //현재(current)의 투명도 얻어옴
    //맨 처음에는 투명도가 빈칸임 ('') ->1대입하기
    if(curr == ''){
        test2.style.opacity = 1;
        curr = 1;
    }

    //투명도 0.01씩 줄이기
    test2.style.opacity = curr-0.01;

    if(test2.style.opacity <0){
        //완전히 투명해 졌다면
        test2.style.opacity =1; //다시 불투명하게
    }
} );
/* #test2 요소를 클릭하면 클릭 횟수를 카운트하기 */
let count = 0;
test2.addEventListener("click", function(){
    count++; //카운트를 1 증가시키기

    /* 표준 이벤트 모델의 이벤트 핸들러 안에서 
    this == 이벤트가 발생한 요소 */
    console.log(this);
    this.innerText = count; //증가한 카운트 값을 test2 의 내용으로 대입
    //클릭했을 때 다른 효과 또 나왔으면 좋겠으면
    //추가하는 대로 다 적용됨
    //클릭했을 때 나타났으면 하는 여러 효과들을 한 곳에 다 안쓰고 나눠서 써도 된다
});

/* 입력한 색상으로 배경색 변경하기( 표준 이벤트 모델 사용) */
const box3 = document.querySelector("#box3");
const input3 = document.querySelector("#input3");
const btn3 = document.querySelector("#btn3");

/* #btn3를 클릭했을 때 */
btn3.addEventListener("click", function(){
    box3.style.backgroundColor = input3.value;
    //입력받은 값으로 백그라운드컬러 하겠다
});
/* #input3에서 엔터 입력 시(key관련 이벤트) 배경색 변경하려면 */
input3.addEventListener("keyup", function(e){
    //keyup: 키가 위로 올라왔을 때
    //e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    console.log(e.key);
    if(e.key == "Enter"){
        box3.style.backgroundColor = input3.value;
    }
});
/* #box3를 클릭하면 현재 배경색을 alert로 출력 */
box3.addEventListener("click", function(e){
    // e : 이벤트 객체(이 안에 별의 별 정보 다 들어있음)
    // e.target : 이벤트가 발생한 대상 요소(이벤트 발생 요소)
    //
    alert(`배경색 : ${e.target.style.backgroundColor}`);
    // e.target -> 이벤트가 발생한 대상 box3의 배경색을 출력하겠다
    //this 보다 e.target을 매우 많이 사용!!!
});


