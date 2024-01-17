/* 배열 선언 및 기초 사용법 */
function check1(){
    //배열 선언 방법 확인
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "바나나", "딸기"];

    console.log(arr1, arr2, arr3, arr4);
    //배열 순서(index, 각 칸에 번호 매겨줌)는 10진수로 표현(0부터 시작~9)
    // 배열명.length : 배열의 길이(배열의 칸 수 또는 저장된 데이터의 수)
    console.log(arr1.length, arr2.length, arr3.length, arr4.length);

    //배열의 index(색인, 번호)
    // -배열의 각 칸을 구분하는 번호
    // -0부터 시작한다
    // -중간에 번호를 건너뛸 수 없다(항상 연속적인 수로 나옴)
    // -마지막 index 숫자 == 배열 길이 - 1 (항상 성립, 0부터 시작하므로)


    //배열명[index] ->배열의 해당 인덱스에 존재하는 데이터를 반환
    console.log('arr4[0] :', arr4[0]);
    console.log('arr4[1] :', arr4[1]);
    console.log('arr4[2] :', arr4[2]);

    //배열명[index] = 값; ->해당 인덱스에 지정된 값을 새로 대입할 수 있다
    //비어있는 arr2에 값 채워보기
    arr2[0] = 100;
    arr2[1] = "눈온다";
    arr2[2] = true;
    //하나의 배열 arr2에 자료형이 다른 세 변수를 같이 저장할 수 있긴 한데 비추

    console.log("arr2 :" , arr2);
    //----------------------------------------------------이제부터어려워짐--------------

    //JS 배열 특징을 이용한 사용법(JS에서만 가능)

    arr1[0] = "가";
    console.log("arr1 :", arr1); 
    //1. JS는 길이의 제한이 없음->배열에 언제든지 값을 마음대로 추가할 수 있다
    //arr1의 길이는 0이었는데 대입하니까 알아서 1칸으로 늘어남
    arr1[1] = "나";
    arr1[2] = "다";
    console.log("arr1 :", arr1);

    //2. 원하는 index에 값을 마음대로 추가할 수 있다
    arr1[5] = "마";
    console.log("arr1:", arr1);
    //index에 3,4가 비어있어서 index가 5로 건너뛴 것처럼 보이지만 존재하기는 함
    //중간에 건너뛴 index는 빈칸으로 채워진다

}
// 배열 X for문 1 (초기화)
function check2(){
    //for 문을 이용해서 배열 요소 초기화 하기
    //index : 배열 요소(칸)을 구분하기 위한 숫자 
    //배열 요소 : 배열을 이루는 하나하나의 칸
    //초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것 (initialization, 초기값을 집어넣음)
    //초기화(reset)과 다름

    // for문 사용 안한 것
    const arr1 = []; //비어있는 배열
    arr1[0] = '김밥';
    arr1[1] = '라면';
    arr1[2] = '떡볶이';
    arr1[3] = '볶음밥';


    //for문 사용한 것
    const arr2 = []; //비어있는 배열
    for(let i=0; i<=3 ; i++){
    //i=index
    arr2[i] = i *10; //i에 i*10한 수를 집어넣겠다
    }
    console.log("arr1 :", arr1);
    console.log("arr2 :", arr2);


}
//배열 X for문 2 (배열에 저장된 값 하나씩 순서대로 출력하기)
//->for문을 이용해서 배열의 모든 요소에 접근하기
// = 순차 접근 = 반복 접근 = 모든 index에 모두 방문
function check3(){
    const arr = [10,20,50,100,500,1000]; //4번째 선언 방법
    //배열의 index는 0부터 배열길이 -1 까지 1씩 증가하는 규칙성이 있다
    //( i <= arr.length - 1 ) == ( i < arr.length ) ==마지막 index까지
    for(let i=0 ; i<=arr.length-1; i++){
        console.log(`arr[${i}] == ${arr[i]}`); //모든 index요소에 접근할 수 있다
    }
}
//배열 X for문 3
//for문을 이용해서 배열을 순서대로 초기화 한 후 
//다른 for문을 이용해서 배열 요소를 하나씩 모두 출력하기 (앞의 두개 합치기)
function check4(){
    const arr = new Array(5); // 내용이 모두 비어있는 5칸짜리 배열 만들어짐

    //1. 배열을 순서대로 초기화
    for(let i=0 ; i<arr.length ; i++){
        //프롬프트에서 취소 안누르고 숫자만 입력한다는 가정 하에
        arr[i] = Number(prompt(`${i}번째 숫자 입력`)); //5칸이니까 5번 뜰 것임
    }

    //2. 배열 요소를 하나씩 모두 출력 + sum
    let sum = 0; //
    for(let i=0 ; i<arr.length ; i++){
        console.log(`arr[${i}] : ${arr[i]}`);
        sum += arr[i]; //array의 i번째 요소를 꺼내와서 누적시키겠다
        // console.log("sum :", sum); 
        //여기다 쓰면 sum이 5번 출력됨
    }
    console.log("sum :", sum);
    console.log("평균 : ", sum/arr.length);
    //배열의 길이는 언제든지 바뀔 수 있어서 평균 구할 때 분모가 자동으로 바뀌게 하려고 


}

//점심 메뉴 뽑기
function selectMenu(){
    //결과 출력 span태그 먼저 얻어오기
    const menuResult = document.getElementById("menuResult");

    //점심 메뉴로 초기화된 배열 생성
    const menus = ["굶기", "김밥", "제육볶음", "돈까스", "파스타", 
                    "샐러드", "라면", "햄버거", "순대국밥", "닭갈비"];
    
    //menus 배열 index 범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random()*menus.length);

    //menus의 난수 번째 index 요소 값을 화면에 출력
    menuResult.innerText = menus[randomNumber];
}
/* 주문하기 프로그램 */
/* -주문하기 버튼 클릭 시 prompt를 이용해서 메뉴명, 수량을 입력받기
    -메뉴명 입력 중 취소를 클릭하면 break;
    -수량 입력 중 취소를 클릭하면 해당 메뉴 주문만 취소*/
function orderFn(){
    const tbody = document.getElementById("tbody");
    const total = document.getElementById("total");

    //메뉴 배열
    const menus = ["라면", "김밥", "샌드위치", "우동"]; //앞에서부터 0,1,2,3으로 인덱스 지정됨
    //가격 배열
    const prices = [4000, 3000, 5000, 6000]; //같은 인덱스 번호로 묶음

    //주문한 메뉴 카운트하는 배열
    //메뉴 개수 만큼의 크기를 가지고 모든 칸이 비어있는 배열
    const counts = new Array(menus.length);

    //비어있는 칸을 모두 0으로 채우기
    //1번방법 : for문 이용
    // for(let i=0 ; i<counts.length ; i++){
    //     counts[i] = 0; //모든 i번째 인덱스에 0을 대입하겠다
    // }

    //두 번째 방법
    counts.fill(0);

    while(true){
        //true -> 무한 반복
        const selectMenu = prompt("주문할 메뉴명을 입력 하세요(주문 완료 시 취소 누르기)");

        if (selectMenu ==null){
            //메뉴명 입력 시 취소를 클릭한 경우
            break;
        }
        //입력한 메뉴가 menus의 몇번째 인덱스에 존재하는가? 찾기 방법 2가지
        //->배열 검색
         // 1. for문 사용 2. JS 제공 함수 사용
        //1. for문 사용
        // let idx = -1; //idx : 일치하는 메뉴의 인덱스를 저장할 변수
        //               //(못찾은 경우 -1을 쓰도록 초기화)
        // for(let i=0 ; i<menus.length ; i++){
        //     //입력 받은 메뉴(selectMenu)와
        //     //menus[i] 값이 같다면 idx에 i값을 저장하겠다
        //     if(selectMenu == menus[i]){
        //         idx = i;
        //         break; 
        //         /* 1번 index에서 같은 메뉴를 찾은 경우 더이상의 검색 불필요(성능 개선)  */

        //     }
        // }

        // 2. 배열명.indexOf("값") : JS 배열에서 제공해주는 method(함수)
        //-배열 내에 "값"이 존재하는 index번호를 반환해줌
        //-없다면 -1을 반환해줌
        let idx = menus.indexOf(selectMenu);
        // selectMenu가 indexOf의 몇 번째 index에 있느냐

        //잘못 주문한 경우(idx ==-1) -> 다시 처음으로 가서 메뉴명 다시 입력받아라
        if(idx ==-1) {
            alert("없는 메뉴입니다. 다시 입력하세요.")
            continue;
        }

        //메뉴 입력
        //----------------------------------------------------------------
        //수량(input) 입력 시작
        let input = prompt("수량을 입력해 주세요");
        if(input ==null){
            //수량 입력 취소 -> 다시 메뉴 입력으로 올라가야함
            continue;
        }

        //수량을 입력하지 않았거나(길이=0) , 숫자를 입력하지 않은 경우
        if(input.length ==0 || isNaN(Number(input))){
            alert("잘못 입력하셨습니다. 다시 주문해주세요");
            continue; //처음부터 다시 주문해! 
        }
        input = Number(input); //숫자로 변환하여 전환하기
        //수량 입력 끝
        //-------------------------------------------------------
        //counts 배열에 값 변경하기 시작 

        //idx : 선택한 메뉴가 존재하는 index 번호
        //input : 입력한 수량(number 자료형)

        counts[idx] += input;
        //         0   1       2       3
        // menus 라면 김밥 샌드위치 우동
        // prices 4000 3000 5000 6000
        // counts0 0 0 0




    } //while 종료
    //중간 확인
    console.log(menus);
    console.log(prices);
    console.log(counts);

    //-----------------------------------------
    //화면 출력하기 + 합계(total계산) 시작

    //tbody의 이전 내용 지우기
    tbody.innerHTML = "";

    let sum = 0; //합계 구하기 변수
    for(let i=0 ; i<counts.length ; i++){
        if(counts[i] ==0){
            //count의 i번째가 0이라면, 해당 메뉴를 주문하지 않은 경우
            continue; //그건 넘어가라
        }
        //한 줄 만들기
        let tr = "<tr>"
        tr += `<td>${menus[i]}</td>`;
        tr += `<td>${prices[i]}</td>`;
        tr += `<td>${counts[i]}</td>`;
        tr += "</tr>"

        //화면에 tr 출력하기
        tbody.innerHTML +=tr;
        
        //합계 누적하기
        sum += prices[i] *counts[i];
    } //for문 끝
    total.innerText = sum; //합계 화면에 출력



}
/* 2차원 배열 확인 1 */
function check5(){
    const arr = [[1,2,3,4],
                [5,6,7,8],
                [9,10,11,12]];
    
    //1차원 배열 선언
    const arr1 = [100, 200, 300, 400];
    const arr2 = [900, 800, 700, 600];
    console.log(arr);
    //이 배열들을 2차원 배열의 3,4번 인덱스에 집어넣겠다
    arr[3] = arr1;
    arr[4] = arr2;
    console.log(arr);

    //2차원 배열 요소 조회하는 방법
    //배열명[행][열]
    console.log(arr[1][3]); //8
    console.log(arr[4][3]); //600
    console.log(arr[0][0]); //1



}
/* 2차원 배열 확인 2 */
//2부터 2씩 증가하는 수를
// 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
function check6(){
// 2중for문 , 2차원배열,  count 이용
let count = 2;
const arr = []; //2차원 배열(요소로 1차원 배열을 대입할 것)
for(let row=0 ; row<5 ; row++){ 
    //행을 제어하는 for문

    //1차원 배열을 만들어 arr[i]에 대입하겠다는 코드
    arr[row]=[]; //비어있는 배열 만듦
    for(let col=0 ; col<5 ; col++){ 
        //열을 제어하는 for문
        arr[row][col] = count; //row행 col열에 count 대입하고
        count +=2; //count를 2 증가시키기
        //row가 0일때 col이 0,1,2,3,4 바뀌고
        //row가 1일때 col이 0,1,2,3,4 바뀌고 반복
    }
}
console.log(arr);

//2차원 배열 arr의 요소를 거꾸로 한 줄씩 출력하기
// 50 48 46 44 42
// 40 38 36 34 32
console.log(arr.length);
//row -> 4,3,2,1,0 줄어듦
for(let row = arr.length-1 ; row>=0 ; row--){

    let str = "";
    //col -> 4,3,2,1,0 줄어듦
    for(let col = arr[row].length-1 ; col>=0 ; col--){
        str += arr[row][col] + " "; //거꾸로 하나씩 꺼낸다

    }
    console.log(str);
}
}