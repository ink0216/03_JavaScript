    function check1(){
        // for(초기식;조건식;증감식){
        //     조건식이 true인 경우 반복 수행할 코드;
        // }
        let result=""   ; // 내용이 하나도 없는 빈 문자열(string)
        for(let num=1 ; num<=5 ; num++ ){
            //num의 초기값이 1이다가, 1씩 증가하다가, 5이하일때까지만 반복
            result += num; //복합 대입 연산자
            //result = result + num
            // ""+1 =   1 (string) ->result="1"(String)
            //"1" +2 = "12"(string)
            //마지막에는 "12345"로 이어서 써짐
            console.log("result :" , result, typeof result);
        }
    }

    function check2(){
        // 1부터 10까지 출력하기
        for(let num=1 ; num<=10 ;num++){
            console.log("num : ", num , typeof num);
        }
        
    }

    function check3(){
        //1부터 20까지 출력하기
        for(let num=1 ; num<=20 ;num++){
            console.log("num : ", num , typeof num);
        }
    }

    function check4(){
        //5부터 15까지 출력하기
        for(let num=5 ; num<=15 ;num++){
            console.log("num : ", num , typeof num);
        }
    }

    function check5(){
        //1부터 30까지 2씩 증가
        for(let num=1 ; num<=30 ; num+=2){
            console.log("num : ", num , typeof num);
        }
    }

    function check6(){
        // 1부터 10까지 모든 정수의 합 구하기
        let sum = 0; //합계를 저장하기 위한 변수
                    //초기값으로 0으로 설정한 이유
                    //: 0에 어떤 수를 더해도 아무런 영향이 없기 때문에
        for(let num=1 ; num<=10 ; num++){
            // num이 이제 1부터 10까지로 변할 거다
            sum += num; //sum에 num값(1~10) 누적
            console.log("sum : ", sum , typeof sum);
        }
        //check1처럼 문자열 타입을 더하면 이어써지는데, 숫자 타입이면 더해짐
    }

    /* 입력 받은 범위 내의 모든 정수의 합 구하기 */
    function sumFn(){
        // input에 작성된 값을 얻어와 저장
        const start = Number(document.getElementById("inputNumber1-1").value);
        //문서에서 id가 inputNumber1-1인 것의 
        //값만 얻어와서 string을 number로 바꿔서 start에 저장하겠다
        const end = Number(document.getElementById("inputNumber1-2").value);
        
        // 결과를 출력하기 위한 요소(span#result1)(span태그)를 얻어와 저장 
        const result1 = document.getElementById("result1");

        //합계를 저장할 변수
        let sum = 0;

        for(let num = start ; num<=end ; num++){
            //num이 start부터 end까지 1씩 증가하는 for문
            sum += num;
            result1.innerText = sum;

        }
    }
    /* 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기 */
    function executeFn2(){
        const start = Number(document.getElementById("inputNumber2-1").value);

        const end = Number(document.getElementById("inputNumber2-2").value);

        //val : 증가값
        const val = Number(document.getElementById("inputNumber2-3").value);

        //결과를 출력할 ul 요소
        const ul = document.getElementById("result2");

        ul.innerHTML = ""; //ul에 작성된 이전 내용을 모두 삭제(빈칸을 대입해 없앰)
        for(let num=start ; num<=end ; num += val){
            //start부터 end까지 val씩 증가
            ul.innerHTML += `<li>${num}</li>`;
            //ul 요소 내부에 li요소를 누적. 그냥 =만 쓰면 앞 내용이 덮어씌워짐
        }
    }
    //요소.innerText = "문자열";
    //== 요소의 내용으로 문자열을 대입해서 화면에 보이게 해라
    //->문자열 자리에 html 태그 넣으면 그 태그 적용되지 않고 글자 그대로 출력
    //->근데 해석해서 적용됐으면 좋겠으면 
    //요소.innerHTML = "<h2>문자열</h2>"
    //-> 요소의 내용으로 문자열을 대입하는 것은 같지만 
    //  HTML태그를 해석해서 화면에 출력

    /* 콘솔에 구구단 2단 출력하기 */
    function check7(){
        // num(2에 곱해지는 수)이 1부터 9까지 1씩 증가
        for(let num =1; num<=9 ; num++){
            console.log(`2 x ${num} = ${2*num}`);
        }
    }
    /* 입력 받은 구구단 출력하기 */
    function executeFn3(){
        const input = Number(document.getElementById("input3").value);
        //결과를 출력할 요소 ul
        const ul =document.getElementById("result3");

        

        ul.innerHTML = ""; //이전 내용 삭제

        //for문이 수행되기 전에 
        /* 입력 받은 단이 2~9사이가 아닐 경우 
        "2~9 사이만 입력해주세요" 알림창 띄우기 */
        if(!(input>=2 && input<=9)){
            //조건식이 true인 경우에 수행
            //2~9사이가 아닐 때 수행할 코드
            //조건식에 input<2 || input>9로 해도 똑같음
            alert("2~9 사이만 입력해주세요");
            return; //함수를 종료하고 호출한 곳으로 돌아감
           // (지금은 함수 종료 정도로만 인식)
        }


        for(let num=1; num<=9 ; num++){
            ul.innerHTML += `<li> ${input} x ${num} = ${input*num} </li>`;
        }

    }
    function executeFn4(){
        //배수
        const input = Number(document.getElementById("input4").value);
        //모양
        const output = document.getElementById("output4").value;
        //출력할 div
        const result = document.getElementById("result4");

        // 출력할 문자열을 저장할 변수
        let str = "";

        for(let x = 1 ; x<=50 ; x++){
            if( x % input ==0){ 
                // x가 input의 배수인 경우
                //str에 x 대신 출력할 문자인 output을 대입한다
                str += output + " ";
            }
            else{
                str += x + " ";
            //x는 1부터 50까지의 숫자
            //x쓰고 그 옆에다가 띄어쓰기 한 칸 넣어라
            //숫자들이 다닥다닥 안 붙어있도록
            }
            //10의 배수마다 str에 br 태그를 추가하는 코드
            if( x% 10 ==0){
                str += "<br>";
            }
            
        
            
        }
        result.innerHTML = str;
    }

    // 콘솔에 12345 네 줄 출력하기
function check8(){
    //네 바퀴 반복하는 for문
    for(let y = 1; y<=4 ; y++){
        //네 바퀴 반복하는 for문
        let str="";
    for(let x = 1; x<=5 ; x++){
        str += x;
    }
    console.log(str, typeof str);
    console.log("");
    
}

    
}
/* 다음 모양 출력하기
1
12
123
1234
12345 */
function check9(){
    for(let y=1 ; y<=5 ; y++){
        //다섯 줄 출력
        let str = "";
        for( let x=1 ; x<=y ; x++){
            str += x;
        }
        console.log(str, typeof str);
        console.log("");
    }
}
//감소하는 for문
function check10(){
    for(let num=5 ; num>=-5 ; num-=2 ){
        //5 4 3 2 1로 감소하면서 출력
        //num-- : 1씩 줄어듦
        //num++ : 1씩 늘어남
        console.log(num, typeof num);
    }
}
//이거 만들기
// 12345
// 1234
// 123
// 12
// 1
function check11(){
    for(let row=5 ; row>=1 ; row--){
        let str = "";
        for(let col=1 ; col<=row ; col++){
            str += col;
        }
        console.log(str, typeof str);
    
    }
}
//이거 만들기
// 1
// 12
// 123
// 1234
// 123
// 12
// 1
function check12(){
    // if, for문 {} 내에 코드가 한 줄만 있다면 {}생략 가능
    //윗쪽 삼각형
    for(let row=1 ; row<=3 ; row++){
        let str ="";
        for(let col=1 ; col<=row ; col++) str +=col;
            
            console.log(str, typeof str);
        
    }
    //아랫쪽 삼각형
    for(let row=4 ; row>=1 ; row--){
        let str ="";
        for(let col=1 ; col<=row ; col++) str +=col;
            
            console.log(str, typeof str);
    }

    console.log("---------------------------------");
    //2중 for문을 한 번만 사용해서
    //이거 만들기
    // 1
    // 12
    // 123
    // 1234
    // 123
    // 12
    // 1
    for(let row=1 ; row<=7 ; row++){
        let end = 0;
        if(row<=4) end=row;
        else end= 8 - row;
        let str = "";
    for(let col =1; col<=end; col++) str +=col;
        
        
        
        
        console.log(str, typeof str);
    }
}
/* 카운트를 이용해 출력하기 */
    // 1 2 3 4 
    // 1 2 3 4 
    // 1 2 3 4 
                    
function check13(){
    let count = 1; //카운트(세기)를 위한 변수를 선언
for(let row=1 ; row<=3 ; row++){
    let str="";
    for(let col=1 ; col<=4 ; col++){
        str +=count + " ";
        count++; //count 값을 1 증가
    }
    console.log(str, typeof str);
}
}
/* 1부터 100 사이에 입력된 수의 배수가 몇 개 있는지 count */
function check14(){
    //입력된 배수
    const input = Number(document.getElementById("input14").value)
    //결과 출력할 span
    const result = Number(document.getElementById("result14").value)
    //세기 위한 변수 선언
    let count = 0; //아직 세어 보지 않았으므로 0개부터 셈
    for(let num=1 ; num<=100; num++){
        //1~100 반복
        if(num % input ==0){
            //num이 input의 배수가 맞는 경우
            count++; //count를 1 증가시킴

        }
    }
    result.innerText = `${input}의 배수 : ${count}개`;
    //3의 배수: 33개 꼴 
    //이거 다시 체크!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
/* count를 이용해서 다음 모양 출력 */
    // 1
    // 12
    // 123
    // 1234
    // 123
    // 12
    // 1
function check15(){
    let count=0;
    for(let row=1 ; row<=7 ; row++){
        if(row<=4) count++ ; //4행 이하일 경우 count를 1 증가시킴
        else count--; //4행 초과일 경우 count를 1 감소시킴
        let str = "";
        for(let col=1 ; col<=count ; col++){
            str +=col;
        }
        console.log(str);
    }
}
/* while문 확인*/
function check16(){
    let val; //변수를 선언만 하기(undefined)
    //취소를 누르기 전 까지 반복하겠다.
    //==취소를 누르면 반복하지 않겠다. 

    while(val !==null){
        /* 동일 비교 연산자 */
        // !== : 값, 자료형이 모두 다른 경우 true
        // === : 값, 자료형이 모두 같은 경우 true

        //val이 null이 아닐 때
    val = prompt("입력 후 확인"); //변수에 prompt 값 대입
    //확인->입력한 값
    //취소->null
    console.log(val);
    }
}
/* 메뉴 주문하기 */
function check17(){
    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000; 
    //몇 개씩 주문했는지 count
    let gCount = 0; //김밥
    let rCount = 0; //라면    
    let dCount = 0; //돈까스

    //prompt로 입력한 값을 저장할 변수 선언
    let input; //처음엔 undefined 상태
    while(input !==null){
        //같지 않을 때에는, 취소 누르기 전에는 반복
        input=prompt("메뉴 번호를 입력하세요");
        //그 메뉴 번호가 input에 저장됨
        //prompt 설정하면 값이 나오거나 null이 나오거나
        //둘중 하나
        
        switch(input){
            case '1' : gCount++; break;
            case '2' : rCount++; break;
            case '3' : dCount++; break;
            case null : alert("주문 완료!"); break;
            //default : 위의 케이스 아닌 경우의 기본값
            default : alert("메뉴에 작성된 번호만 입력해 주세요."); break;
        }
    }
        alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount} `);
        let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
        alert(`총 가격: ${sum}원`);

}
/* while문을 for문처럼 사용하기 */
function check18(){
    //1부터 10까지 출력
    // for(let num=1 ; num<=10 ; num++){
    //     console.log(num);
    // }
    //위의 for문과 해석 순서 같도록 while문으로 고친 것
    let num=1 ; //조건식보다 먼저 실행됨
    while( num<=10){
        console.log(num);
        num++;
    }
    console.log("------------------------------");
    /* 10부터 1까지 1씩 감소하는 것을 while문으로 써보기 */
    let x = 10;
    while( x >=1){
        //1 이상일 때까지만 반복
        console.log(x);
        x--;

    }


}