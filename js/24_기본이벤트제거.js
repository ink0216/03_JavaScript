/* a 태그 기본 이벤트 제거 */
document.querySelector("#move").addEventListener("click", e=>{
    //요소를 찾아서 클릭 이벤트리스너 추가
    // e : 이벤트 객체
    e.preventDefault(); // == 메서드(함수) : 객체 안에 있는 함수
    // e.preventDefault(); == 이벤트객체가 갖고있는 기본적인 것을 못하게 막기
    //                     ==요소의 기본 이벤트 막기(제거)
    // prevent : ~를 하지 못하게 막다
    //default : 기본/기본값
});
/* form 기본 이벤트 제거 방법 3가지 */

/* 방법 1 : e.preventDefault()를 이용하는 방법 */
//네 개의 input 중 하나라도 작성되지 않은 경우 제출 못하게 막기
//inputForm이라는 name줬었음 -> 이걸로 접근 가능
document.inputForm.addEventListener("submit", e=>{
    //submit inputForm 안에서 이벤트 발생 시 동작
    const inputList = document.querySelectorAll("#form>input");
    //#form의 자식 input태그들만 배열로 얻어오겠다
    for(i=0 ; i<inputList.length ; i++){
        if(inputList[i].value.trim().length ==0){
            e.preventDefault();
            //작성 안된 input이 하나라도 있으면 제출 막기
            alert("작성되지 않은 input이 존재합니다");
            inputList[i].focus(); //초점 자동으로 맞춰서 바로 쓸 수 있게 
            return; //작성 안된 input찾았으면 그 뒤에 것 검사할 필요 없음
        }
    }
    
});
/*방법 2 : onsubmit = "return false"를 이용한 방법 */
const onsubmitTest = ()=>{
    //함수를 변수에 대입
    const radio = document.querySelector("[name='submitRadio']:checked");
    //submitRadio가 name인 게 두개일 텐데 그 중 체크된 것만 선택해라
    //체크된 라디오 버튼이 없을 경우
    if(radio ==null) return false;
    //제출 O 선택
    if(radio.value == "O") return true;
    //제출 X 선택
    return false; //O가 아닌 경우
}; 
/* 방법 3 : 일반 버튼 클릭 시 form 태그 제출/ 제출막기  */
document.querySelector("#btn3").addEventListener("click", ()=>{
    const input = document.querySelector("#inputTest");
    if(input.value.trim().length >0){
        //뭔가 값을 작성한 경우

        //form 태그를 제출시켜버리기
        //기본이 제출이 막혀있는 버튼인데
        //조건 맞으면 (뭔가를 쓰면) 제출이 되도록 만들기 
        document.inputForm3.submit();
    }
});