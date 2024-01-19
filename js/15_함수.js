/* 매개 변수, 전달 인자 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");
// 요소를 변수에 저장

function print1(num, str){
    //두개의 값을 순서대로 전달받아 출력하는 함수
    //매개변수가 두개! 
    console.log(`${num}은/는 ${str} 입니다.`);
}

/* #btn1 클릭 시 #input1의 값을 얻어와 print1()함수 호출 리스너 추가 */
btn1.addEventListener("click", function(){
    const value = input1.value; //값 얻어와

    //input1에 아무것도 입력 안했거나 빈칸만 입력된 경우
    if(value.trim().length ==0){
        //trim(양쪽 공백 제거)한 후의 길이가 0인 경우
        console.log("숫자를 입력해 주세요.");
        return; //함수 종료 (+ 호출한 곳으로 돌아감)
    }

    //값을 적었으면 그 값이 양수인지 음수, 0인지 판별하기
    let result;
    
    if(Number(value) ==0) result ="0";
    else if(Number(value) >0) result = "양수";
    else                        result = "음수";

    /* 함수 호출(값을 전달해줌) */
    /*[중요!!!] 전달되는 값의 순서가 중요하다!!!꼬이면 안됨!!!!! */
    print1(value, result);
    print1(result, value);
    //result에는 세 값 중 하나가 들어가있음


});
/* 매개 변수로 배열 전달하기 */
function arrayTest(arr){
//전달 받은 배열의 모든 요소 출력하기
//아직은 arr에 어떤 배열이 들어올 지 모름
for(let i=0 ; i<arr.length ; i++){
    //뭐가 들어올 진 모르겠지만 그 길이 미만까지
    if(arr[i] == '멜론') arr[i] = '딸기'; //멜론이면 딸기로 바꿔라
    console.log(`${i}번 인덱스 값 :`, arr[i]);
    //그 값은 뭐였다

}
} //함수 선언 완료

/* #btn2a가 클릭되었을 때 arrayTest()함수 호출 */
document.querySelector("#btn2a").addEventListener("click", function(){
    // 아이디가 저거인거에 클릭이벤트 추가
    const arr1 = [10, 20, 30];
    const arr2 = ['사과', '바나나', '멜론', '수박'];
    const temp = 100;
    /* 참조란?
        -객체 지향 언어(JS 등등)에서 
            배열, 객체 등 object는 값을 여러개를 가지고 있는 자료형인데
            변수는 값을 1개만 저장할 수 있기 때문에
            object를 메모리 다른 곳에 저장하고 
            저장된 곳의 주소를 변수에 저장해서
            필요할 때마다 해당 주소를 찾아가
            원하는 값을 얻어오거나 수정할 수 있게 하는 것.
            이 때, 메모리 주소를 찾아 가는 것을 참조라고 한다. */
    arrayTest(arr1);
    arrayTest(arr2);
    //배열 뭉텅이를 한번에 보내서 위에서 출력
    console.log("arr2[2] :",arr2[2]); //멜론이 나와야 할 것 같은데 딸기로 바뀜!!!!!
    //왜 멜론이 아니라 딸기가 출력되는가?
    // -> arrayTest(arr2)호출 시 arr2배열을 통째로 복사해서 전달하는 것이 아닌
    //      arr2이 저장돼있는 메모리의 주소만 보내서 함수를 수행했기 때문에
    //      참조하고 있던 배열의 2번 인덱스 내용이 "딸기"로 변경되었다.
    
    //      arrayTest()함수에서 arr2와 같은 배열을 참조해서 수정
    //      ->함수 수행 후 돌아와서도 
    //          참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음

    //변수는 값을 하나씩밖에 저장 못함
    // arr2에 저 배열을 저장한 게 아니고 배열을 창고같은 곳(메모리)에 두고 그 주소를 arr2에 저장
    //매개변수에 보내지는 것도 배열이 아닌 배열이 저장된 창고의 주소임
    //함수 정의 시에도 배열을 참조(창고에서 찾아다 씀)
    //주소만 복사 : 얕은 복사
    //함수 정의 시에 창고에 가서 누군가 멜론을 딸기로 바꿔놔서 나중에 창고 가서 꺼내봤을 때 딸기로 바껴있음 

});

/* 매개 변수로 요소 전달 */
function btn2bFn(el){
    // JS코드에서 this쓰면 위치에 따라 뜻이 다 달라져서 쓰면 안됨
    // 보통 element를 줄인 el로 많이 씀
    // 매개 변수 el(element) : 이벤트가 발생한 요소(HTML에서 this, 버튼요소)가 여기로 전달돼 담김
    el.style.backgroundColor = "blue";
    el.style.color = "white";
    el.style.fontWeight = "bold";
    //매개변수로 버튼요소가 전달돼서 옴. 그 요소의 배경색을 파랑으로 바꾸겠다
}
/* 매개변수로 함수 전달하기 */
function print2(otherFn){
    //출력하는 함수
    //다른 함수(otherFn)를 전달 받아오겠다
    //매개변수로 sumFn을 보내줘서 받아왔는데 이름을 otherFn으로 바꾸기만 함
    //otherFn == sumFn 같은 건데 변수 이름만 바뀐거임
    console.log(`3 + 4 = ${otherFn(3,4)}`);
    //여기서 otherFn을 호출해서 출력한다

}
const btn2c = document.querySelector("#btn2c");

btn2c.addEventListener("click", function(){
    //함수도 변수에 저장이 가능하다! 
    const sumFn = function(a,b){
        //이 함수는 두 매개변수를 전달받아와서
        return a + b; //함수를 끝냄 + 값(a+b)을 가지고 호출한 곳으로 돌아감
    }; //이런 함수를 변수에 저장해 놓음

    // print2함수의 매개변수로 sumFn 함수를 전달
    print2(sumFn);
});
// addEventListener(); : 이것도 함수임(매개변수 두개 씀)

/* return 확인하기 1 */
function sumFn(arr){
    //배열을 전달받아 배열 요소들의 합을 반환하는 함수
    let sum =0;
    for(let i=0 ; i<arr.length ; i++){
        sum += arr[i]; //누적
    }
    return sum;
}
/* 전달받은 수(num)을 x제곱하여 반환하는 함수 만들기 */
function pow(num,x){
    let result = 1; //곱했을 때 결과에 영향을 주지 않기 위해 1로 초기화함! 
    for(let i=0 ; i<x ; i++){
        result*= num;
    } //num, x에 각각 숫자 생각해서 생각해보기
    return result;
}
const btn3a = document.querySelector("#btn3a");
btn3a.addEventListener("click", function(){
    const numbers = []; //비어있는 배열 생성
    /* 배열.push(값) : 배열의 마지막 요소로 값을 추가하겠다 */
    numbers.push(30); //비어있던 배열의 마지막 요소에 30이 자동으로 들어감
    numbers.push(50); //요소 30 바로 뒤에 마지막 요소로 50이 자동으로 들어감
    numbers.push(400);
    numbers.push(pow(2,5)); // == numbers.push(32)
    //pow(): 제곱하는 함수가 2의 5제곱을 만들어서 값을 가지고 돌아와서 마지막 요소에 32로 들어감
    console.log("합계 : ", sumFn(numbers));
    //함수들 모아놓은 게 라이브러리, API
    //pow()함수와 sumFn()함수를 밖에다 써서 이 부분 코드를 간단히 할 수 있다! 
});
/* 화살표 함수 기본 형태 */
const arrowList = document.querySelectorAll(".arrow");
// class가 arrow인 요소들을 모두 얻어와서 배열 형태로 저장


/* 화살표 함수 기본 형태 */
// 그 배열 중 index가 0번인 애한테 이벤트 부여하기
arrowList[0].addEventListener("click", ()=>{
    alert("화살표 함수 기본 형태 연습"); //잘 실행됨
});

/* 매개 변수가 1개인 경우 */
// 매개 변수가 1개면 소괄호를 생략할 수 있다! 
arrowList[1].addEventListener("click", e=>{
    // e : 이벤트 객체(모든 이벤트 관련 정보가 다 담겨있는 객체)
    // 언제 어디서 클릭 등 이벤트가 일어났는지 등등 
    // e.target : 이벤트가 발생한 요소
    e.target.style.backgroundColor = "hotpink";
    e.target.style.color = "white";
    e.target.style.fontWeight = "bold";

    print3( arr=>{
        let result = 1;
        for(let i=0 ; i<arr.length ; i++){
            result *=arr[i];
            
        }
        return result;
    }); //매개변수 소괄호 안의 전체 함수를 print3의 매개변수로 전달
});
/* 배열의 요소를 다 곱한 값을 반환하는 함수 만들기 */
function print3(otherFn){
    const numbers = [1,2,3,4];
    console.log(otherFn(numbers));
}
/* return 한 줄만 작성된 경우 */
arrowList[2].addEventListener("click", ()=>{
    twoNumberPlus((a,b)=> a+b)
});
function twoNumberPlus(otherFn){
    //다른 함수 반환받았음
    const input1 = Number(prompt("첫 번째 값"));
    //프롬프트로 숫자 받아서 숫자로 바꿔서 input1에 저장
    const input2 = Number(prompt("두 번째 값"));

    alert(otherFn(input1, input2)); 

}
//중괄호 옆에는 ;안써도 되고 소괄호 옆에는 쓰기

/* return 한 줄인데 object를 반환하는 경우 생략불가 확인하기 */
arrowList[3].addEventListener("click", ()=>{
    printObject((name, age)=>{
        return {"name" : name, "age" : age};

        //JS 객체 {K:V , K:V} 형태
        //const obj = {"a" : 10, "b" : 30} 하면
        //obj라는 객체 안에 변수 이름과 값 두쌍이 한꺼번에 들어있음
        //obj.a , obj.a=45해서 새 값 넣을 수도 있음
        //객체 : 여러 변수의 이름과 값을 한번에 저장한 것
    }); //클릭하면 함수 호출
});
function printObject(otherFn){
    const obj = otherFn("홍길동", 20);
    console.log("obj.name :" , obj.name);
    console.log("obj.age :" , obj.age);
}
/* 즉시 실행 함수 확인 */
(()=>{
    console.log("즉시 실행 함수 입니다.");
    console.log("함수 모양이 좀 어렵죠? 넹!!!!");
})(); //이게 즉시 실행 함수 모양!