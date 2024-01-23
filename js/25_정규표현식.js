/* 입력 받은 이름이 한글 2~5글자 사이가 맞는지 확인 */
/* inputName에 입력이 될 때마다 */
const inputName = document.querySelector("#inputName");
const nameResult = document.querySelector("#nameResult");
//inputName이 입력 되었을 경우
//키보드 이벤트 : keyup keydown keypress mouse paste(붙여넣기) =>모두 input 이벤트
inputName.addEventListener("input", e=>{
    /* input 이벤트
        -> 입력과 관련된 모든 행동 (keyup keydown keypress mouse paste(붙여넣기))
            (단, 어떤 키로 입력했는지는 e.key로 알 수 없음)*/

    //입력된 값 얻어오기
    const value = e.target.value;
    //값을 입력할 때마다 키가 올라오므로 이벤트가 발생
    // console.log(value);

    //아무것도 입력하지 않은 경우
    if(value.trim().length ==0){
        nameResult.textContent ="";

        return;
    }
    /* 조건에 맞는 정규 표현식 객체 생성 */
    const regExp = /^[가-힣]{2,5}$/; //처음부터 끝까지 한글이 맞고 2-5글자 사이가 맞느냐

    /* 정규식객체.test(문자열) :
        - 문자열이 정규식에 일치하면 true   
            아니면 false */
    if(regExp.test(value)){
        //일치하면
        nameResult.textContent = "유효한 이름 형식입니다.";
        nameResult.style.color = "green";
    } else{
        nameResult.textContent = "이름 형식이 유효하지 않습니다.";
        nameResult.style.color = "red";
    }
});
/* 입력 받은 값이 휴대전화 번호가 맞는지 확인 */
const inputPhone = document.querySelector("#inputPhone");
const phoneResult = document.querySelector("#phoneResult");
inputPhone.addEventListener("input", e=>{
    // 키보드든 마우스든 인풋 관련 이벤트가 발생했을 때
    const value = e.target.value; //값 꺼내오기
    //입력한 값이 없을 경우
    if(value.trim().length ==0){
        phoneResult.textContent = ""; //출력 내용 삭제
        phoneResult.classList.remove("check", "uncheck"); //두개의 클래스를 한번에 지울 수 있음
        e.target.value = ""; //값으로 빈칸 대입해서 띄어쓰기 해도 빈칸으로 돌아옴
        return;
    }
    /* 정규식을 이용한 검사 */
    const regExp = /^01[01679]-\d{3,4}-\d{4}$/;
    // \d ==[0-9] 사이의 아무 숫자 하나
    if(regExp.test(value)){
        // 입력받은 값이 정규식에 부합한다면
        phoneResult.textContent = "유효한 번호 형식입니다.";

        phoneResult.classList.add("check"); //check 클래스 추가
        phoneResult.classList.remove("uncheck"); //uncheck 클래스 제거
    } else{
        //정규식에 부합하지 않으면
        phoneResult.textContent = "번호가 유효하지 않습니다.";

        phoneResult.classList.add("uncheck"); //uncheck 클래스 추가
        phoneResult.classList.remove("check"); //check 클래스 제거
    }

});