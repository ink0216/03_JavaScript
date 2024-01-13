    /* .js 파일 내부를 script 태그 내부라고 생각하면 됨 */
    /* css 파일 내부는 style 태그 내부였음 */
    function externalFn(){
        alert("외부 파일에 작성된 externalFn() 함수가 호출되었습니다");
    }
    /* ---------------------------------------------------------------------------- */
    /* JS 맛보기 */
    /* 버튼 클릭 시 body 태그 안의 글자 색과 배경색을 변경하는 코드 */
    const body = document.querySelector("body");
    /* document.querySelector("body"); : body 태그 선택 */

    /* 실행되면 다크모드로 바꾸는 함수(기능) */
    function darkMode(){
        body.style.color = "white"; // style에 글자색을 화이트로 바꾸겠다
        body.style.backgroundColor = "black"; /* style에 배경색을 검정으로 바꾸겠다 */
    }

    /* 실행되면 라이트모드로 바꾸는 함수(기능) */
    function lightMode(){
        body.style.color = "black"; // style에 글자색을 검정으로 바꾸겠다
        body.style.backgroundColor = "white"; /* style에 배경색을 흰색으로 바꾸겠다 */
    }

    /* 실행되면 오렌지모드로 바꾸는 함수(기능) */
    function orangeMode(){
        body.style.color = "orangered"; // style에 글자색을 오렌지색으로 바꾸겠다
        body.style.backgroundColor = "yellow"; /* style에 배경색을 노란색으로 바꾸겠다 */
    }
