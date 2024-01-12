/* if- 양수인지 검사 */
const input1 = document.getElementById("input1");
function check1(){
    const  value = Number(input1.value);
    if(value > 0){
        //value(입력 받은 값)가 0보다 큰 것이 true인 경우 실행할 코드 적기
        alert("양수 입니다.");
    }

    if(value <= 0){
        // value가 0 이하인 것이 true인 경우 = value가 양수가 아닌 경우 실행할 코드 적기 
        alert("양수가 아닙니다.");
    }

}
// 난수 발생 범위
// 0 <= Math.randon() < 1 
// 양 변에 N 곱하면 0<=Math.randon()*N<N
// 양 변에 K를 더하거나 빼면 0 쁠마 K<=Math.randon()*N 쁠마 K<N 쁠마 K

/* if-else 0 -> 홀/짝 판별하기 */
function check2(){
    //난수 발생 : 콘솔창 Math.randon()
    //발생하는 난수 범위 : 0 <= Math.randon() < 1
    // Math.floor(Math.random() *101) : 0 <= Math.randon() < 101
    // 0~100 범위의 난수
    const randomNumber = Math.floor(Math.random() *101);
    if(randomNumber % 2 != 0){
        // randomNumber를 2로 나눴을 때 나머지가 0이 아니라면 실행할 코드 적기
        alert(`${randomNumber}은/는 홀수 입니다.`);

    }
    else{
        alert(`${randomNumber}은/는 짝수 입니다.`);
    }

}

/* -3 ~ 3 사이 난수를 발생시켜 양수, 음수, 0 판별하기 */
function check3(){
    const randomNumber = Math.floor( Math.random()*7) -3;
    let message = randomNumber + "  은/는";

    if(randomNumber == 0){
        // message = message + "0 입니다";
        message +="  0입니다"; //복합 대입 연산자 활용
    }

    else if(randomNumber > 0){
        message +="  양수입니다";
    }

    else{ //0도, 양수도 아닌 경우
        message +="  음수입니다";
    }

    alert(message); /* 완성된 message를 출력 */
}
// 어린이, 청소년, 성인 구분하기
const inputAge = document.getElementById("inputAge");
function check4(){
    //입력한 나이 값만 string이 아닌 숫자로 얻어오기
    const age = Number(inputAge.value);
    console.log("age : ", age);

    /* 빈 문자열("" , '') : 내용이 없는 문자열 (내용이 없을 뿐 문자열이 있기는 있는 것임) */
    // if(inputAge.value == ''){alert("입력 안함");} : 안되는 경우도 있어서
    // '문자열'.length : 문자열의 길이(글자 수)가 나오는 것을 이용하자!
    //입력된 나이의 길이가 0인 경우 == 입력을 안 한 경우
    if(inputAge.value.length == 0){
        alert("미입력");
    } else{ //입력을 무언가 한 경우 -> 이때 어린이, 청소년, 성인 검사를 하겠다
        // 중첩 if 문 : 안 쓰는 게 좋긴 함
    // 미입력했는데 중간 확인 코드로 내려가는지 확인
    alert("중간 확인")
    if(!(age>=0 && age<=150)){
        alert("잘못 입력하셨습니다"); //이 경우는 0~150 사이가 아닌 경우임
        //!(age>=0 && age<=150) 또는 [age<0 || age>150]
    }
    //어린이
    else if(age >=0 && age <=13){
        alert("어린이");
    } else if(age >=14 && age<=19){
        alert("청소년");
    } else{
        alert("성인");
    } //앞의 if / else if 범위에 안들어가면 그 범위는 배제하고 생각하므로 
    //어린이, 청소년, 성인에서 시작지점(age가 어떤 수 이상인지)은 굳이 안써도 된다
}
}
/* switch문을 이용한 계산기 만들기 */
const number1 = document.getElementById("number1"); //input
const number2 = document.getElementById("number2"); //input
const calcResult = document.getElementById("calcResult"); //span 태그
function calc(op){
    //매개 변수(Parameter) op (꼭 op안해도 되고 aaaa처럼 다른 걸로 맘대로 해도 됨) 
    // -함수 호출 시 전달되는 값을 저장하는 변수 
    //함수 호출 시 버튼의 onclick에 괄호 안에 있는 기호가 들어옴 
    // ex) calc('+') //함수 호출
    //     -> '+'값이 op라는 변수에 저장되어짐
    //console.log("op : ", op);
    console.log("op : ", op);

    const v1 = Number(number1.value);
    const v2 = Number(number2.value);

    /* switch 버전 */
    /* if문의 괄호 안에는 true나 false가 나오는 조건식이 들어가야 하지만 */
    /* switch(식)에서*/
    /* "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식 가능 */
    let result; // 결과를 저장할 변수를 선언
    switch(op){
        /* op 값에 따른 처리 case 작성 */
        /* break(멈추다) : 더 이상의 switch문을 멈춤 
                            ->case에 break를 작성하지 않으면 
                            멈추지 않고 다음 case로 넘어가진다
                            case'+'에 있는 break;를 지우면 result값에 더한 값이 들어갔다가 
                            break가 없으므로 자동으로 다음 케이스로 넘어가져서 뺸 값으로 다시 덮어씌워짐*/
        case '+' : result = v1 + v2; break; // op값을 봤더니 +인 case에는 두 값을 더한 값을 result에 넣고 멈출거다(break)
        case '-' : result = v1 - v2; break; // op값을 봤더니 +인 case에는 두 값을 뺀 값을 result에 넣고 멈출거다(break)
        case '*' : result = v1 * v2; break; // op값을 봤더니 *인 case에는 두 값을 곱한 값을 result에 넣고 멈출거다(break)
        case '/' : result = v1 / v2; break; // op값을 봤더니 /인 case에는 두 값을 나눈 몫을 result에 넣고 멈출거다(break)
        case '%' : result = v1 % v2; break; // op값을 봤더니 %인 case에는 두 값을 나눈 나머지를 result에 넣고 멈출거다(break)
        // 맞는 케이스 찾아서 적용하겠다
        case '@':
            if(v1 > v2){ result = 1;}
            else{ result = 2;}
            break; //이렇게 case 안에도 여러 문장으로 쓸 수 있음
        // default : 맞는 case가 없을 경우에 적용할 기본값(else) 지정 가능
        default : result = "잘못된 연산자"; break;
    }
    calcResult.innerText = result;












    // if 문 버전
    //op가 '+'인 경우
    // if( op == '+'){
    //     calcResult.innerText = v1 + v2; /* span태그에 두 값의 합을 쓸거다 */
    // }
    // else if( op == '-'){
    //     calcResult.innerText = v1 - v2; /* span태그에 두 값의 차를 쓸거다 */
    // }
    // else if( op == '*'){
    //     calcResult.innerText = v1 * v2; /* span태그에 두 값의 곱을 쓸거다 */
    // }
    // else if( op == '/'){
    //     calcResult.innerText = v1 / v2; /* span태그에 두 값의 나눈 몫을 쓸거다 */
    // }
    // else if( op == '%'){
    //     calcResult.innerText = v1 % v2; /* span태그에 두 값의 나눈 나머지를 쓸거다 */
    // }
    // else{
    //     calcResult.innerText = "잘못된 연산자";
    // }
    
}
