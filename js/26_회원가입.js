/* 유효성 여부를 체크해두는 객체 생성 */
const checkList = {
    //체크리스트를 객체모양으로 만들어보기
    "inputId" : false,
    "inputPw" : false,
    "inputPwCheck" : false,
    "inputName" : false
    //input태그들의 아이디
    //모두 유효성 검사 통과하면 false에서 true로 하나씩 바뀌게 됨
    //하나라도 false이면 회원가입 안되도록
};
/* 회원가입 JS 코드 작성 시 필요한 요소 모두 얻어와서 변수로 만들어놓기 */
const signupForm = document.signupForm; //name있으면 name으로 찾을 수 있었다. 
const inputId = document.querySelector("#inputId");
const inputPw = document.querySelector("#inputPw");
const inputPwCheck = document.querySelector("#inputPwCheck");
const inputName = document.querySelector("#inputName");
/* 아이디 유효성 검사 */
inputId.addEventListener("input", e=>{
    const value = e.target.value; // 입력한 값
    //메세지 출력 span 요소
    const span = e.target.nextElementSibling.nextElementSibling; // 인풋의 다음 다음 요소가 span임
    
    //입력 안 한 경우
    if(value.trim().length ==0){
        span.textContent = "영어,숫자,-,_ 6~16글자 사이";
        e.target.value = ""; //빈칸 입력 못하게 막기
        span.classList.remove("check", "error"); //두 클래스를 모두 지운다

        //유효성 여부 체크 객체에서 inputId를 false로 변경(아이디를 안 쓴 상황이므로)
        checkList['inputId'] = false;
        return;
    }
    /* 뭔가를 작성한 경우 정규식을 이용해 유효성 판별 */
    const regExp = /^[A-Za-z\d\-\_]{6,16}$/; // \-\_ :문자대로만 인식해라
    if(regExp.test(value)){
        //입력값이 정규식과 일치(부합)
        span.textContent = "유효한 아이디 형식 입니다.";
        span.classList.add("check"); //클래스 추가해서 초록색으로 바꾸겠다. 
        span.classList.remove("error"); //빨간색 나오는 클래스는 지우겠다. 

        //유효성 여부 체크 객체에서 inputId를 true로 변환
        checkList["inputId"] = true; 
    } else{
         //입력값이 정규식과 일치X(부합X)
        span.textContent = "유효하지 않은 아이디 형식 입니다.";
         span.classList.add("error"); //클래스 추가해서 빨간색으로 바꾸겠다. 
         span.classList.remove("check"); //초록색 나오는 클래스는 지우겠다. 

         //유효성 여부 체크 객체에서 inputId를 false로 변환
        checkList["inputId"] = false; 
    }
});

/* 이름 유효성 검사 */
inputName.addEventListener("input", e=>{
    const value = e.target.value;
    const span = e.target.nextElementSibling.nextElementSibling;

    //입력을 안 한 경우
    if(value.trim().length ==0){
        span.textContent = "한글 2~15(단자음, 단모음 제외)";
        span.classList.remove("check", "error"); //두 클래스를 모두 지운다
        e.target.value = ""; //빈칸 입력 못하게 막기
        

        //유효성 여부 체크 객체에서 inputId를 false로 변경(아이디를 안 쓴 상황이므로)
        checkList["inputName"] = false;
        return;

    }

    /* 정규식 검사 */
    const regExp = /^[가-힣]{2,15}$/;
    //유효한 경우
    if(regExp.test(value)){
        //입력값이 정규식과 일치(부합)
        span.textContent = "유효한 이름 형식 입니다.";
        span.classList.add("check"); //클래스 추가해서 초록색으로 바꾸겠다. 
        span.classList.remove("error"); //빨간색 나오는 클래스는 지우겠다. 

        //유효성 여부 체크 객체에서 inputId를 true로 변환
        checkList["inputName"] = true; 
    }
    //무효한 경우
    else{
        //입력값이 정규식과 일치X(부합X)
        span.textContent = "유효하지 않은 이름 형식 입니다.";
         span.classList.add("error"); //클래스 추가해서 빨간색으로 바꾸겠다. 
         span.classList.remove("check"); //초록색 나오는 클래스는 지우겠다. 

         //유효성 여부 체크 객체에서 inputId를 false로 변환
        checkList["inputName"] = false; 
    }
});


/* 비밀번호 유효성 검사 */
inputPw.addEventListener("input", e => {

    const value = e.target.value;
    const span = e.target.nextElementSibling.nextElementSibling;


    if (value.length === 0) { // 입력된 값이 없을 경우
        span.innerText = "영어,숫자,!@#$%^&* 8~20글자 사이";
        span.classList.remove("check", "error");
        checkList["inputPw"] = false;
        
        checkPwFn(); // 비밀번호, 비밀번호확인 값 일치 여부 확인 함수 호출
        return;
    }

    // 정규표현식 객체 생성
    const regExp = /^[A-Za-z\d\!\@\#\$\%\^\&\*]{8,20}$/;

    if (regExp.test(value)) { // 유효한 경우
        span.innerText = "유효한 비밀번호 형식입니다";
        span.classList.add("check");
        span.classList.remove("error");

        checkList["inputPw"] = true;

    } else {
        span.innerText = "비밀번호가 유효하지 않습니다";
        span.classList.add("error");
        span.classList.remove("check");

        checkList["inputPw"] = false;
    }

    checkPwFn();

});



  // 비밀번호, 비밀번호 확인이 같은지 체크하는 함수
function checkPwFn() {
    const span = inputPwCheck.nextElementSibling.nextElementSibling;
  //inputPwCheck의 다음다음 요소

    // 비밀번호, 비밀번호 확인 값 얻어와 변수에 저장
    const pwVal = inputPw.value.trim();
    const checkVal = inputPwCheck.value.trim();

    if (pwVal.length == 0 || checkVal.length == 0) { 
        // 비밀번호나 비밀번호 확인이나 둘중 하나라도 미입력 시
        span.innerText = "비밀번호를 먼저 입력 해주세요";
        span.classList.remove("check");
        span.classList.remove("error");

        checkList["inputPwCheck"] = false;

        return;
    }
    //앞의 if에 해당 안된 경우
    if (pwVal === checkVal) {
        span.innerText = "비밀번호 일치";
        span.classList.add("check");
        span.classList.remove("error");

        checkList["inputPwCheck"] = true;

    } else {
        span.innerText = "비밀번호 불일치";
        span.classList.add("error");
        span.classList.remove("check");

        checkList["inputPwCheck"] = false;

    }
}


  // /* 비밀번호 확인 유효성 검사 */
inputPwCheck.addEventListener('input',checkPwFn);
//비밀번호와 비밀번호확인이 일치하는 지 확인
//함수를 호출한 게(checkPwFn()) 아니고 함수 이름만 씀->함수 코드가 그대로 저 위치에 들어옴
//**************************************************************************
//함수 이름만 작성하면
//함수 이름을 작성한 부분에
//함수 정의 코드가 그대로 대입된다!!! 
//************************************************************************** */ 
/* 회원가입 버튼 눌러졌을 때 네개의 인풋이 다 적합한지 + 성별 체크했는지 확인 */
/* 회원가입 form이 제출 되었을 때 */
signupForm.addEventListener("submit", e=>{
    /* 아이디, 비밀번호, 비밀번호 확인, 이름이 
        모두 유효한지 확인 */
        //for ~ in 구문
    for(let key in checkList){
        // console.log("key :" , key); //키만 꺼내옴
        // console.log("value :",checkList[key]);
        if(checkList[key]==false){
            //key를 꺼냈는데 false인 경우
            //유효하지 않은 경우가 하나라도 존재하는 경우
            let str;
            switch(key){
                case 'inputId' : str = "아이디가"; break;
                case 'inputPw' : str = "비밀번호가"; break;
                case 'inputPwCheck' : str = "비밀번호 확인이"; break;
                case 'inputName' : str = "이름이"; break;
            }
            alert(`${str} 유효하지 않습니다.`);
            e.preventDefault(); //form 기본 이벤트(제출)을 막기
            //이 때에만 제출 못하게 하기
            //유효하지 않은 input에 초점 맞춰서 바로 작성할 수 있도록
            document.getElementById(key).focus();
            return; //하나가 잘못된 걸 알았으니 더 안해도 된다
        } // if 끝
    } // for ~ in 끝
    /* 다 잘 썼으면 성별 선택했는지 여기서 검사 */
    const gender = document.querySelector("[name = 'gender']:checked"); 
    //name이 gender인 것 두개 중, 체크된 라디오 버튼 얻어오기
    //체크된 라디오 버튼이 없다면 null이 나옴
    if(gender ==null){
        //체크 안 한 경우
        alert("성별을 선택해 주세요");
        e.preventDefault(); //form 제출 막기
    }
});
/* 객체 전용 향상된 for문 : for ~ in 구문 
    - 객체에 존재하는 key를 순서대로 하나씩 꺼내오는 반복문
    ex) checkList 객체
        (KEY)      (VALUE)
        {inputId: false, 
        inputPw: false, 
        inputPwCheck: false, 
        inputName: false}
            여기서 key만 하나씩 뽑아오기
    [작성법]
        for(let key in 객체명){
            //반복 때 마다 key를 하나씩 꺼내와서 사용할 수 있음
        }
    - */


