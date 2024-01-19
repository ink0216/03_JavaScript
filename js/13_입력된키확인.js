//화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");
//클래스가 key인 애들을 몽땅 다 얻어오겠다

//이 문서 전체에서 키가 눌러지는 것을 감지해라
//특정 요소가 아닌 HTML문서 화면 전체에서 키가 눌러지는 걸 감지(keydown)
document.addEventListener("keydown", function(e){
    //e :이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
    //e.key : 입력된 키
    console.log(e.key);
    let idx; //인덱스 값을 저장할 변수
    //문자열.toLowerCase() : 영어를 모두 소문자로 변경
    //문자열.toUpperCase() : 영어를 모두 대문자로 변경
    //둘중 하나 쓰면 대소문자 신경안쓸 수 있다

    //입력된 키를 모두 소문자로 바꿔서 일치하는 case를 실행
    //Q를 썼어도 q를 썼어도 다 q로 바껴서 같은 경우가 됨
    switch(e.key.toLowerCase()){
        case'q' : idx=0; break; 
        case'w' : idx=1; break; 
        case'e' : idx=2; break; 
        case'r' : idx=3; break; 

        case'u' : idx=4; break; 
        case'i' : idx=5; break; 
        case'o' : idx=6; break; 
        case'p' : idx=7; break; 
        default : return; //함수(function) 종료
        //(default : 위의 네 케이스 이외의 경우의 기본값)

    }
    //idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경하기
    keys[idx].style.backgroundColor = "green";

});
/* 키를 떼면 배경색 원래대로 되돌리기 */
document.addEventListener("keyup", function(e){
    let idx;
    switch(e.key.toLowerCase()){
        case'q' : idx=0; break; 
        case'w' : idx=1; break; 
        case'e' : idx=2; break; 
        case'r' : idx=3; break; 

        case'u' : idx=4; break; 
        case'i' : idx=5; break; 
        case'o' : idx=6; break; 
        case'p' : idx=7; break; 
        default : return; //함수(function) 종료
        //(default : 위의 네 케이스 이외의 경우의 기본값)

    }
    keys[idx].style.backgroundColor = "lightgreen";
});