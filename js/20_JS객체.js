/* 
    -{K:V ,K:V, K:V , ...}
    -(중요) Key는 무조건 문자열(string)!!!
        ->"Key", 'key', key 가능
        ->문자열 나타내는 "",''안써도 자동으로 string으로 인식
    -key는 알파벳 오름차순으로 정렬된다 (우리가 제어 불가)
        (객체에서 key의 배열 순서는 중요하지 않음)*/

/* {} 객체 생성 + 다루기 */ 
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
    //1. 객체 생성하기(product = 상품)
    //const product = {}; //비어있는 객체 생성
    const product = {
        "productName" : "갤럭시북4프로",
        'brand' : "samsung",
        price : 2000000
    };
    console.log(product); //쓴 순서로 안나오고 알파벳 순서대로 정렬됨(순서는 우리가 제어 불가)

    //------------------------------------------------------------------------------------
    //2. 객체 내 key 값을 이용해 원하는 value 얻어오기 2가지 방법
    // -1. 객체명.key
    console.log(product.productName, product.brand, product.price);
    // -2. 객체명["key"] : ""대신 ''써도 됨
    console.log(product["productName"], product["brand"], product['price']);

    //------------------------------------------------------------------------------------
    //3. 객체에 K:V 추가하기
    //원하는 key를 생각해 두고 
    //객체명.key = value; //대괄호 써도 됨
    
    product.color = ["black", "silver", "red"];
    console.log(product);
    //red만 보고 싶으면?
    console.log(product.color[2]); //2번 인덱스이므로

    //또는 
    //객체명["key"] = value;
    product["storage"] = ["256GB", "512GB", "1TB" ];
    console.log(product);

    //------------------------------------------------------------------------------------
    //4. 특정 key의 value 수정하기 -> 덮어쓰기 됨
    product.price = 1800000;
    console.log(product);

    //------------------------------------------------------------------------------------
    //5. 원하는 K:V 삭제하기(delete 연산자 사용)
    // - delete 객체명.key // 대괄호 써도 됨
    delete product.productName; //productName 삭제
    console.log("delete 후 product : ", product);
});

/* method(메서드) */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", ()=>{
    const smartPhone = {}; //비어있는 객체 생성

    smartPhone.modelName = "아이폰15프로맥스";
    smartPhone.price = 1700000;

    //메서드(객체의 기능(함수)) 추가하기
    //객체 안에 작성된 함수 == 메서드
    smartPhone.information = function(){
        // console.log("정상 수행 확인");
        const brand = "사과";
        //this : 참조 변수
        //-작성되는 위치에 따라서 의미가 다르다
        // ex) <button onclick=testFn(this)> </button>
            //    -이때의 this == 클릭된 요소(버튼)

        // ex) 객체명.메서드명 = function(){
        //    this.변수명 = "값";
        //}
            //    -이때의 this == 메서드가 작성된 객체

        //여기서의 this == smartPhone
        //->smartPhone의 모델네임을 얻어오겠다
        console.log("모델명 : " , this.modelName);
        console.log("가격 : " , this.price);
        console.log("브랜드 : " , this.brand); // smartPhone.brand한 것과 동일한 것! 
        console.log("브랜드 : " , brand);
    } //값 대신 함수가 대입된 것! 

    //메서드 수행해보기
    smartPhone.information();

    //----------------------------------------------------------------------------

    //매개변수가 존재하는 메서드 만들어보기
    //스마트폰에 전화하는 기능 만들어주기
    //메서드는 화살표 함수 말고 function(){}으로 하는게 좋음
    smartPhone.call = function(phoneNumber){
        console.log(`${phoneNumber}로 전화를 거는 중...`);
    }
    //매개변수가 존재하는 메서드 호출하기
    smartPhone.call("010-1234-1234"); //call에 매개변수를 전달하면 ${}안에 들어가서 호출됨
    
    //(참고) 메서드 생성 시 화살표 함수 + this 사용
    //      ->화살표 함수 내에서 this는 Window 객체를 나타냄
    //      ->객체 메서드 작성 시 화살표 함수가 아닌, function(){}구문으로 작성하는 게 좋다! 
    smartPhone.test1 = function(){
        
        console.log(this); //smartPhone 객체 출력
    }
    smartPhone.test1();

    //화살표 함수 이용
    smartPhone.test2 = ()=>{
        console.log(this); //window 객체 나옴 ->화살표 함수에서는 this 사용 불가!!!
    }
    smartPhone.test2();
});
//-------------------------------------------------------------------------------------------------
/* 생성자 함수 */
// 1. 생성자 함수 선언 + 정의
// (중요) 생성자 함수의 이름은 무조건 대문자로 시작해야 한다!!!!!!
/* 학생 객체 생성자 함수 */
function Student(name, grade, ban, number, score){
    //다섯개의 매개변수(이름, 학년, 반, 번호, 점수)
    //속성//
    //(전달받은 값(매개변수)을 현재 객체(this)의 속성으로 추가하기)
    this.name=name;
    this.grade=grade;
    this.ban = ban;
    this.number = number;
    this.score = score;

    //기능(메서드)//
    this.introduce = function(){
        //자기소개하는 함수를 대입
        console.log(`${this.grade}학년 ${this.ban}반 ${this.number}번 `+
                        `${this.name} ${this.score}점 입니다. `);          
    }

}
//생성자 함수 호출하기
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", ()=>{
    //첫 번째 학생
    const student1 = new Student("홍길동", 3, 5, 17, 80); //홍길동 객체 생성
    console.log(student1);
    const student2 = new Student("김철수", 1, 2, 13, 100); //김철수 객체 생성
    console.log(student2);//재사용성 증가
     // const student1 = {
  //   name : "홍길동",
  //   grade : 3,
  //   ban : 5,
  //   number : 14,
  //   score : 80
  // };

  // const student2 = {
  //   name : "김길동",
  //   grade : 2,
  //   ban : 6,
  //   number : 2,
  //   score : 90
  // }; 이렇게 안써도 됨! 

    /* 객체 배열(배열에 저장된 모든 요소가 객체인 배열) */
    const studentList = []; //빈 배열 생성

    // 배열명.push(값) : 값을 배열의 마지막 요소로 추가한다.
    studentList.push(student1); 
    studentList.push(student2); 
    //생성자 함수 Student를 이용해서 객체 생성 후
    //바로 studentList에 push해서 추가
    studentList.push(new Student("김미영", 2, 8, 4, 90)); 
    studentList.push(new Student("신짱구", 3, 1, 12, 30)); 

    console.log(studentList);

    // 모든 학생의 introduce 메서드 호출(모든 학생의 자기소개 콘솔 출력)
    for(i=0 ; i<studentList.length ; i++){
        studentList[i].introduce();//리스트의 요소들의 introduce함수 호출
    } //생성자 함수로 Student 객체 4개 생성 후 배열에 추가(객체 배열)
        // 반복문(for문) 이용해서 객체 배열에 저장된 모든 요소의 introduce() 메서드 호출

});
/* JS에서 제공하는 JSON 내장 객체 */
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", ()=>{
    //JS 객체 생성
    const obj = {"id":"test01" , "pw" : "1234", "number" : 9999}; 

    //JS 객체 -> JSON 문자열로 변환
    const str = JSON.stringify(obj);
    console.log("obj :", obj);
    console.log("str :", str);

    //JSON 문자열 -> JS 객체로 변환
    const str2 = '{"memberId":"user01","memberPw":"pass01","age":20}';
    const obj2 = JSON.parse(str2);

    console.log("str2 :", str2);
    console.log("obj2 :", obj2);

    //서버 데이터 비동기 요청

    fetch('https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10')
    .then(response =>response.json())
    .then(result =>console.log(result.response.body.items[0].informGrade));
    //fetch : 내려받다, 가져오다
    //이 주소에 있는 데이터를 가져와서 JSON->JS로 바꿔서 result에 담아서 콘솔로 출력
});