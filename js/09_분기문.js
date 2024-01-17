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