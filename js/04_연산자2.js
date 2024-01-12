/* 두 수가 같은 지 비교 */
const cv1 = document.getElementById("compareValue1"); //input
const cv2 = document.getElementById("compareValue2"); //input
/* 입력 요소 다 얻어옴 */
const result1 = document.getElementById("result1"); //span
//결과 값도 얻어옴

function compareFn1(){
    const v1 = cv1.value;
    const v2 = cv2.value;

    result1.innerText = (v1 == v2);
    /* result1의 innerText에 둘을 비교해서 쓰겠다(문자 써도 됨) */
}

/* 좌변이 우변보다 큰지(초과인지) 비교 */
const cv3 = document.getElementById("compareValue3"); //input
const cv4 = document.getElementById("compareValue4"); //input
/* 입력 요소 다 얻어옴 */
const result2 = document.getElementById("result2"); //span
//결과 값도 얻어옴

function compareFn2(){
    const v3 = Number(cv3.value);
    const v4 = Number(cv4.value);
    //문자열 비교 시 원하는 결과가 출력되지 않음
    //->숫자로 변환해서 하면 잘 됨 (숫자로 변환 안하면 숫자도 string으로 인식)
    //같은지 비교한 것은 문자열이 똑같이 생겼는지 비교한 거여서 그대로 나왔지만
    //크기 비교는 문자열로 인식되면 제대로 수행 안됨

    console.log( v3, typeof v3, v4, typeof v4);
    result2.innerText = (v3 > v4);
    /* result1의 innerText에 둘을 비교해서 쓰겠다(문자 써도 됨) */
}

// 배수가 맞는 지 확인하기
const input3_1 = document.getElementById("input3_1");
const input3_2 = document.getElementById("input3_2");
const result3 = document.getElementById("result3");

function checkFn3(){
    const v1 = Number(input3_1.value);
    const v2 = Number(input3_2.value); /* 숫자만 얻어오고 숫자로 바꿔서 저장을 하겠다 */

    // A가 B의 배수 == A를 B로 나눴을 때 나머지가 0
    // result3.innerText = v1 +"은/는"+ v2 + "의 배수 : " + (v1 % v2 ==0);
    //이렇게 어렵게 표현하는 것 아닌 또다른 방법! 

    /* 백틱(`)을 이용한 문자열 작성하는 JS 기능 */
    // -문자열 자체를 백틱(`)으로 감싼 후
    //  변수, 연산 결과 등이 출력되는 자리에
    //  ${변수명} 또는 ${연산식}을 작성하는 방법(빈칸 뚫어놓고 거기에 들어가도록) ! 
    // "5은/는 2의 배수 : false"; : 우리가 원하는 모양
    result3.innerText = `${v1}은/는 ${v2}의 배수 : ${v1 % v2 ==0}`;
}
//입력된 값 만큼 누적/차감 연산자
let count4 = 0;
const input4 = document.getElementById("input4");
const result4 = document.getElementById("result4");

//차감
function minus4(){
    const value = Number(input4.value);
    count4 -= value;
    result4.innerText = count4;
}
//누적
function plus4(){
    const value = Number(input4.value);
    count4 += value;
    result4.innerText = count4;
}

/* 논리 연산자 확인하기 */

function checkFn5(){
    //AND
    //104는 100 이상의 수 이면서 , 짝수인가?
    const bool1 = (104 >= 100) && (104 % 2 == 0);
    console.log(`104는 100 이상의 수 이면서 , 짝수인가? ${bool1}`);

    //50은 70 이하의 수 이면서, 4의 배수인가?
    const bool2 = (50 <= 70) && ( 50 % 4 == 0)  ;
    console.log(`50은 70 이하의 수 이면서, 4의 배수인가? ${bool2}`);

    // 3은 1부터 10 사이의 수가 맞는가?
    const bool3 = (13 >= 1) && ( 13 <= 10)  ; // 1 <= 13 <= 10으로 쓰면 오류남
    console.log(`13은 1부터 10 사이의 수가 맞는가? ${bool3}`);

    //OR
    // 4는 10을 초과하거나, 짝수인가?
    const bool4 = (4 > 10) || ( 4 % 2 ==0)  ; 
    console.log(`4는 10을 초과하거나, 짝수인가? ${bool4}`);

    // 50은 0 이하 또는 40 이상인가?
    const bool5 = (50 <= 0) || ( 50 >= 40)  ; 
    console.log(`50은 0 이하 또는 40 이상인가? ${bool5}`);

    //NOT
    console.log(`!true = ${!true}`); //false
    console.log(`!false = ${!false}`); //true

    const bool6 = false;
    console.log( !(bool6 != true)); // !뒤 내용은 true 인데 앞에 !있으므로 최종적으로 false 나옴

}
/* 삼항 연산자 - 로그인하기 */
const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

// 조건식 ? true인 경우 : false인 경우
function login(){
    /* ID, PW input에 작성된 값 얻어오기 */
    const id = inputId.value; /* 이거는 문자열이니까 숫자(Number)로 바꿔줄 필요 없음 */
    const pw = inputPw.value;
    const success = "로그인 성공!";
    const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";
    //alert에 출력될 내용을 저장할 변수 message 선언

    const message = (id=='member01') &&(pw == 'pass01!') ? success : fail;
    alert(message);
}
