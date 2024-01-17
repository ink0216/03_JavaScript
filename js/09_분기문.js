// for문 break 확인
function check1(){
    // 1부터 10까지 10바퀴 도는 것 만들기
    //1부터 10까지 1씩 증가하다가 5가 되면 멈춤(다섯 바퀴만 도는 것과 동일)
    for(let i=1 ; i<=10 ; i++){
    console.log("i :" , i);
    if(i ==5) break; //반복문 멈춤
    }
}
// 무한 반복하는 while문 break 확인
function check2(){
    let i=1; //i는 1부터 시작
    while(true){
        //조건식이 true일 때 반복 수행하는 코드
        //조건식에 true 쓰고 수행하면 무한반복됨
        console.log("i:" , i++); //i를 먼저 출력하고 1 증가시켜라(후위연산)
        if(i>10) break; //i값이 10을 초과하게 되면 반복을 멈추겠다
    }
}
//continue 확인하기
function check3(){
    // 1부터 20까지 출력할건데 단, 3의 배수는 건너 뛰고 출력하겠다
    for(let i=1 ; i<=20 ; i++){
        //3의 배수인 경우 continue해라(위 for문으로 다시 올라가서 i를 4로 올려서 진행)
        if(i %3 ==0) continue;
        console.log("i :" , i);
    }
}
//확인하기4(1부터 30까지 1씩 증가하며 출력하되 단, 홀수 또는 10의 배수는 건너뛰고 출력하기)
function check4(){
    for(let i=1 ; i<=30 ; i++){
        if( i % 2 ==1 || i % 10 ==0) continue;
        console.log("i :" , i);
    }
}
//확인하기5

// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 이거 출력하는데 각 줄에서 4의 배수는 건너뛰고 세번째 줄 출력 후 멈추겠다 
function check5(){
    for(let row=1 ; row<=5 ; row++){
        let str="";
        for(let col=0 ; col<=9 ; col++){
            if(col!=0 && col%4==0) continue; //0을 제외한 4의 배수면 아래로 가서 누적하지 말고 위로 올라가서 col 1 높여서 진행
            //continue시 continue를 가장 가까이서 감싸고 있는 안쪽 for문만 빠져나감
            str +=col;
            
        }
        //3번째 줄 출력한 후에 멈추므로 clg 뒤에 써야 함 
        console.log(str);
        if(row ==3) break;
    }
}
// 업다운 게임 만들기
// 프롬프트에 1~100 사이 숫자 입력
// 얼마 만에 끝날지 모르니까 while문 써야 함
function startGame(){
    //난수 발생 : 콘솔창 Math.random()
    //발생하는 난수 범위 : 0 <= Math.random() < 1
    // Math.floor(Math.random() *101) : 0 <= Math.random() < 101
    //1~100 사이 난수
    const randomNumber = Math.floor(Math.random()*100) +1;

    //숫자를 입력한 횟수(정답 시도 횟수)를 셀 count 0으로 초기화 
    let count = 0;

    //prompt에 작성되어질 문자열을 따로 저장해둠
    let str = "1~100 사이 숫자를 입력해 주세요";
    while(true){
        //true : 무한반복시킴

        // str이 프롬프트에 뜨고 프롬프트에 입력한 값이 input에 저장됨
        //-> 확인: 입력한 값
        //-> 취소: null
        let input = prompt(str); 

        //취소를 누른 경우 -> "게임 포기" 알림을 띄운 뒤 반복 종료(게임 종료)
        if(input == null){
            alert("게임 포기");
            break; //무한히 돌던 while문 밖으로 나감
        }

        //확인을 누른 경우 -> 프롬프트에 작성된 숫자는 문자열이므로 숫자로 변환 후 
        input = Number(input);

        //NaN(Nat a Number) : 숫자가 아니다
        //input에 abc쓰고 숫자로 변환하려고 하면 NaN이 뜸
        //input에는 입력한 숫자 또는 NaN이 대입 될것이다
        //NaN이면 잘못 입력한 것이니까 NaN인 경우에 다시 입력하게 하기
        // if(input==NaN) 이렇게 하면 안됨
        //isNaN(변수/값) : 변수/값이 NaN이면 true, 아니면 false를 반환하는 함수
        if(isNaN(input)){
            alert("숫자만 입력해 주세요.");
            continue; //다시 위의 while 구문으로 돌아가서 값을 다시 입력받게 하기
        }
        //여기까지 왔으면 정상적인 숫자 입력한 경우임
        //여기서부터 정답 시도 횟수를 1 증가시킬 것임
        count++;
        if(input==randomNumber){
            str=`정답!! ${input} / count : ${count}`;
            alert(str);
            break;
        }
        
    
        //입력한 값이 난수와 같다면 
        //"정답!! (입력한 값) /count : 정답 시도 횟수 출력"
        //알림창 출력 후 반복 종료

    
        //입력한 값이 난수보다 큰 경우
        //"[DOWN] / count : 정답 시도 횟수 출력"
        //문자열을 str에 대입 후 다음 반복으로 이동
        if(input>randomNumber){
            str=`[DOWN] / count : ${count}`;
            alert(str);
            continue;
        }

        //입력한 값이 난수보다 작은 경우
        //"[UP] / count : 정답 시도 횟수 출력"
        //문자열을 str에 대입 후 다음 반복으로 이동
        else{
            str=`[UP] / count : ${count}`;
            alert(str);
            continue;
        }
    }
    }
    // 선생님 코드
    // while(true){ // 무한 반복
    
    //     let input = prompt(str);
    
    //     if(input == null){
    //       alert("게임 포기");
    //       break;
    //     }
    
    //     input = Number(input);
    
    //     if(isNaN(input)){
    //       alert("숫자만 입력해 주세요");
    //       continue;
    //     }
    
    //     count++;
    
    //     if(input == randomNumber){
    //       alert(`정답!! (${input}) / count : ${count}`);
    //       break;
    //     }
    
    //     if(input > randomNumber) str = `[DOWN]  / count : ${count}`;
    //     else str = `[UP]  / count : ${count}`;
    //   }
    
    

    
