/* console.log(값) :  */
//브라우저 콘솔 창에 괄호 내부의 값을 출력(기록) 
//log(항해 일지 기록)

console.log(1234);
console.log("문자열은 괄호 내부 양쪽에 쌍따옴표를 작성해야 한다! ");
// console.log(문자열인데용) 이렇게 쌍따옴표 안적으면 오류남
//대부분의 프로그래밍 언어에서 ""의 의미 : 문자열 

console.log('JS는 홑따옴표도 문자열로 취급한다');
//자바스크립트만 ""와 ''모두 문자열로 인식

//--------------------------------------------------------------------------

/* 변수 선언 */
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 : 변수종류 변수명;

var number1;  /* 변수 선언(빈 집 만든 것이고 아직 내용은 안들어있음) */

/* 만들어 놓은 변수에 값 대입 */
// 선언된 변수에 값을 대입하는 것
// 작성법 : 변수명 = 값;

//프로그래밍 언어에서 =은 같다는 등호 아니고 대입 연산자임
//A = B : B라는 값을 A 변수에 대입(오른쪽 값을 왼쪽 변수에 대입)
// 프로그래밍 언어에서 같다는 것은 ==(비교 연산자)로 표시
number1 = 10;

/* 브라우저에서 콘솔 들어가서 변수 치는것 말고 콘솔에 자동으로 number1 값 출력하기 */
console.log(number1);

/* 변수 선언과 대입을 한꺼번에 하기 */

var number2 = 20;
console.log(number2);

/* number1, number2의 합 출력하기 */
console.log(number1 + number2);

/* 변수에 대입한 값 변경하기 */
number1 = 300; /* 기존에 number1 있던 10을 300으로 덮어쓰기 함(10지워짐) */
number2 = 400;

/* 변경된 두 변수의 값 출력 */
/* 1. 문자열 + 문자열/숫자/변수 == 이어쓰기 됨(덧셈으로 되지 않음)*/
console.log("number1의 값 : " +number1); /* 무슨 값인지 같이 나타남 */
console.log("number2의 값 : " +number2); /* 무슨 값인지 같이 나타남 */

/* 2. 괄호 내부에 ,를 작성해 각각의 값을 독립적으로 출력하기(많이 씀)  */
console.log("number1 :", number1, "/number2 :", number2); 

//---------------------------------------------------------------------------
/* var, let const의 차이점 */

// 1. var (변수 선언 시 중복되는 변수명으로 선언이 가능한 변수)
//    ->먼저 선언된 변수가 나중에 선언된 변수로 덮어 씌워짐
var menu = "삼겹살";
console.log("menu : ", menu);
/*console.log == clg  */

var menu = "초밥"; /* 이 값이 삼겹살 지우고 덮어씌워짐 */
console.log("menu : ", menu); /* 근데 굳이 var 안써도 됨 */
/* var는 변수명이 중복되어 덮어쓰기가 돼서 이전에 선언해놓은 변수가 지워진다는 게 문제임 */
/* 나중에 쓸려고 했는데 실수로 다른 것으로 바꿔서 나도 모르게 지워버렸네? */
/* 이 문제를 해결하기 위해서 let이 나옴 */
// ------------------------------------------------------------

// 2. let (변수, var의 변수명 중복 문제를 해결)
let number3 = 25;

// let number3 = 500; 
// 변수명 중복 오류 발생!! 실수로 또 쓰더라도 중복되지 않도록 막아놓음 

//기존 number3를 새로운 값으로 바꾸고 싶으면
number3 = 500;
console.log("number3 :", number3);

// 3. const (상수, constant 항상 변하지 않는 수)
// 한 번 값이 대입되면 변하지 않으므로 새로운 값을 대입할 수 없음

const PI = 3.141592; /* pi = 원주율 */

// PI = 1.23 ; 
//Assignment to constant variable : 상수에 값을 대입해서 type error가 났다!
//변수가 아닌 상수에는 값 대입을 못하는데 상수로 선언된 곳에 값이 대입되었다

console.log("PI :",PI);
//-----------------------------------------------------------------------------
/* JS 자료형 확인하기 */

/* typeof 연산자 : 변수 / 값의 자료형을 출력하는 연산자 */

/* undefined : 정의되지 않은 변수. 
값이 아직 대입되지 않아서 타입을 정의할 수 없음*/
let undef; // 변수 선언, 값을 저장할 공간 만들어 놓음 
console.log("undef : ", undef, typeof undef);

/* string(문자열) : "" 또는 '' 내부에 작성된 값 */
const name = "홍길동"; //쌍따옴표
console.log("name:" ,name, typeof name); //삭제선 생겨도 실행에 문제없음
// name의 값, name의 타입

const phone = '01012341234'; //홑따옴표
console.log("phone:", phone, typeof phone);
//"" , '' 모두 문자열을 나타내는 것이다

const gender = 'M';
/* 문자열은 한 글자만 있으면 안되고 2자 이상 있어야만 문자열일까? -> NO ! */
// 단, java에서는 2자 이상 있어야 문자열이고, 한 글자이면 '문자'임
console.log("gender:", gender, typeof gender);

/* number(실수 전체) : 허수는 저장할 수 없음 */
const age = 25;
const height = 178.9;
console.log("age:", age, typeof age);
console.log("height:", height, typeof height);

/* boolean( 논리값 ture / false ) */
const isTrue = true;
const isFalse = false;
/* 카멜 표기법 isTrue */
console.log("isTrue:", isTrue, typeof isTrue);
console.log("isFalse:", isFalse, typeof isFalse);
/* object(객체) */
//(쉬운 버전 설명)
// 값을 여러 개 저장할 수 있는 형태

// 1) 배열(array) : 여러 값이 나열되어 있는 것의 묶음
// arr = numbers
const numbers = [10, 20, 30];  /* 대괄호로 안 묶으면 안됨 */
//numbers 라는 한 곳에 세 값이 한번에 저장됨
console.log("numbers:", numbers, typeof numbers);
//우리는 1부터 순서 세지만, 컴퓨터는 0부터 셈
console.log("numbers 배열 값 중 0번째 :", numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 1번째 :", numbers[1], typeof numbers[1]);
console.log("numbers 배열 값 중 2번째 :", numbers[2], typeof numbers[2]);

//0,1,2번째가 아니라, []에 쓰는 각 칸에 이름을 넣고 싶다면? -> K:V !
/* num1=10, num2=20, num3=30 이렇게.. */

// 2) JS 객체(Object)
// 값을 K:V (Map)  형식으로 여러 개 저장하는 형태
// -> {K:V, K:V, K:V, ... } 무한히 저장할 수 있음. 뭐는 뭐고 뭐는 뭐고...
// K (Key) : 값을 구분하는 이름(변수명과 비슷)
// V (Value) : K에 대응되는 값(변수에 대입되는 값과 비슷)
// key 와 value를 합쳐서 map이라고 부름(장소(K): 중구 남대문로 120(V))

const user = {id:"user01", pw:"user11", userName:"김길동" };
//id, pw, userName이라는 변수를 만들어서 값을 대입함

console.log("user:", user, typeof user); 
/* 몇 번째인지로 나오지 않고 우리가 지정한 이름으로 나옴 */

// 객체에 존재하는 값 하나씩 얻어오는 방법

// 방법 1: 변수명['key'] 
//key도 문자열이기 때문에 ''써야함, ""는 다른 ""와 중복돼서 사용 불가
console.log("user['id'] :" , user['id'], typeof user['id']);
console.log("user['pw'] :" , user['pw'], typeof user['pw']);
console.log("user['userName'] :" , user['userName'], typeof user['userName']);

// 방법2: 변수명.key
console.log(user.id , user.pw , user.userName);

/* 함수(function) */
//[작성법]
//const 변수명 = function(){}; 이렇게 쓰는게 트렌드!
// 변수명 == 함수명 
// function internalFn(){}에서의 이름은 inernalFn이었음
const sumFn = function(a,b){return a+b;}
// return = 돌려보낸다
console.log( typeof sumFn ); //function
console.log( sumFn(3,5) ); // 함수 호출(기능 수행) 
// a, b 순서대로 대입되고 8로 되어 sumFn(3,5)자리로 돌아와 출력됨



