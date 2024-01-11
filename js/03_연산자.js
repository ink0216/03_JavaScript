//변수 선언
const number1 = document.getElementById("input1");
// 변수에 html 요소를 대입
//document(HTML 문서) : HTML 문서(파일) 내에서
//get : 얻다
//element : HTML 요소(시작태그부터 종료태그까지의 전체)
//ById: 아이디가 일치하는 
//->HTML 문서 내에서 아이디가 일치하는 요소를 얻어오겠다
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");
// result는 id가 calcResult인 것을 가져와라
//span 태그 가운데에  있는 글자 : innerText
/* 두 수를 더해서 화면에 출력하는 함수(기능) */
function plusFn(){
    /* value= 읽어온 값 */

    /* input 요소.value : input 요소(브라우저빈칸)에 작성된 값 얻어오기 */
    const value1 = number1.value;
    const value2 = number2.value;
    console.log(value1, value2);
    console.log("두 수의 합 :" , value1 + value2);
    //input 요소에 작성된 값은 숫자이더라도 무조건 문자열(string)로 인식해서
    //더했을 때 이어쓰기로 나오는 문제가 발생한다.
    //[해결 방법]
    // 문자열(string)을 더할 수 있게 숫자(number)로 변경하는 코드를 수행하기
    // =데이터 파싱(data parsing): 데이터의 종류를 바꿔주는 것
    /* 숫자만 작성된 문자열("123")을 
        진짜 숫자(123)로 바꾸는 방법 !! 
        -> Number("123")라고 쓰면 -> 123(진짜 숫자) 으로 바뀜
        넘버라고 하는 js 내장 함수가 있음*/
        console.log("두 수의 합 :" , Number(value1) + Number(value2));
        

    /* 두 수의 합을 아이디가 calcResult인 요소의 
    내부 글자(HTML 요소 내용, innerText)로 대입하기 */

    result.innerText=Number(value1) + Number(value2);
}   
/* 빼기 함수 */
function minusFn(){
    const value1 = Number(number1.value); // 처음엔 string타입으로 가져온 값을 바로 number로 변환하여 변수에 대입
    const value2 = Number(number2.value); // 처음엔 string타입으로 가져온 값을 바로 number로 변환하여 변수에 대입
    console.log("value1 :" , value1, typeof value1);
    console.log("value2 :" , value2, typeof value2);
    result.innerText = value1-value2;
    
    };
    /* 곱하기 함수 */
function multiFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    
    result.innerText = value1 * value2;
}
/* 나누기 함수 */
function divFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    
    result.innerText = value1 / value2;
}
/* 나머지 연산 함수 */
function modFn(){
    /* 나머지 연산(%)은 나누기 계산 시 몫이 정수인 부분까지만 계산하고
    남은 나머지 값을 출력한다 */

    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 % value2;

}
/* (응용)세개의 숫자 더하기 */
//변수 선언. 일단 세 인풋 얻어와서 상수 num에 저장하겠다
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");

function threeFn(){
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const value3 = Number(num3.value);
    
    total.innerText = value1 + value2 + value3;
}
//--------------------------------------------------------------------------------------
/* 증가 / 감소 연산자(++,--) */

//증가, 감소할 수를 저장할 변수 선언
let count = 0; //(주의) const로 선언하면 상수이기 때문에 값을 증가 / 감소 시킬 수 없다. let으로 해야만 한다

//문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");
//변수에 대입. 문서 내에서 id가 "result2"인 요소를 얻어와

/* 1 증가 함수 */
function increase(){
    count++; // 또는 ++count해도 됨 ->count 값이 1 증가

    // 증가한 count 값을 result2의 내용으로 대입해라
    result2.innerText = count;
}

/* 1 감소 함수 */
function decrease(){
    count--; //또는 --count해도 됨 ->count 값이 1 감소
    result2.innerText = count;
}
//------------------------------------------------------------------
/* 전위, 후위 연산 확인하기 */
function check1(){
    //함수 밖과 안은 구분되는 공간이라고 생각하면 된다
    //함수 밖에 작성한 count 변수와 함수 안에 작성한 count 변수는 서로 다른 변수이다(이름만 같고 다른 동명이인)
    let count = 100;
    
    //컴퓨터에게 연산이란 사칙연산 뿐만 아니라 
    //코드를 한 줄 한 줄 실행하는 것들이 다 연산이다! 

    // 전위 연산(++count, --count) 확인
    // -> 다른 연산보다 먼저 수행된다
    // -> count 값이 먼저 증가, 감소된 후 console에 출력이 된다
    console.log("++count :", ++count); //101
    console.log("++count :", ++count); //102
    console.log("++count :", ++count); //103
    console.log("---------------------------------");
    console.log("--count :", --count); //102
    console.log("--count :", --count); //101
    console.log("--count :", --count); //100

    // 후위 연산(count++, count--) 확인
    // -> 다른 연산이 다 끝나고 마지막에 수행된다
    count = 50;
    console.log("---------------------------------");
    console.log("count++", count++); //51이 나올까? ->No. 50 출력 후 51로 증가
    console.log("후위 연산 후 count :" , count); //51

    console.log("count--", count--); //일단 51을 먼저 출력 후
    console.log("후위 연산 후count :", count); //이제 50으로 출력

    console.log("---------------------------------");
    let a = 10;
    let b = 5;
    let c = ++a * b--;
    //최종적으로 a, b, c에 저장된 값은 얼마?
    // a == 11 (먼저 하니까 11 됨)
    // b == 4 (연산 전에는 5로 c에 들어갔다가 연산 후에는 4로 된다)
    // c == 55
    console.log(a,b,c);

}