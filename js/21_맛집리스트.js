/* Restaurant생성자 함수 만들기 */
function Restaurant(resName, resAddress , resMenu){
    //세 개를 전달받아서

    //속성(변수, 필드)
    //생성자 함수 안에서 this : 만들어지는 하나하나의 식당 객체 자체 (이 객체)
    this.resName = resName; //만들어지는 객체의 resName에 전달받은 값을 넣을 거다
    this.resAddress = resAddress;
    //메뉴 ("메뉴1, 메뉴2, 메뉴3" -> 배열로 만들기)
    // "메뉴1, 메뉴2, 메뉴3".split(", ")
    // 문자열.split("구분자")
    // 문자열을 "구분자" 기준으로 쪼개서 배열로 반환
    
    this.resMenu = resMenu.split(", "); //배열로 바꿔서 저장

    //기능(메서드)
    this.information = function(){
        //함수를 끝내고 호출한 곳으로 돌아가기
        return `${this.resName} / [${this.resMenu}] / ${this.resAddress}`;
    }

    
}

/* 전역 변수로 식당 목록을 저장할 배열을 선언 */
const resList = []; //비어있는 배열
//샘플 식당 데이터 추가
resList.push(new Restaurant("김밥천국", "김밥, 라면", "서울시 중구 어딘가"));
resList.push(new Restaurant("왕가탕후루", "샤인머스캣, 딸기, 통귤", "서울시 서대문구 어딘가"));

/* 화면에 존재하는 요소들 얻어오기( button, input태그) */
const resName = document.querySelector("#resName");
const resAddress = document.querySelector("#resAddress");
const resMenu = document.querySelector("#resMenu");
const addBtn = document.querySelector("#addBtn");
const selectBtn = document.querySelector("#selectBtn");

/* addBtn 클릭 시 input에 입력된 값을 모두 얻어와 resList에 추가하기 */
addBtn.addEventListener("click" , ()=>{
    /* 유효성 검사  */
    // 전달된 데이터가 형식, 크기, 작성법 등이 맞는지 검사하는 것
    // ex) 입력된 값이 없거나 그 범위가 옳지 않을 경우, 비밀번호 형식이 맞지 않을 경우
    //우리는 빈칸 검사만 할 것
    if(resName.value.trim().length ==0){
        //아무것도 안 쓴 경우
        alert("식당명을 입력해 주세요.");
        resName.focus(); //바로 쓸 수 있게 포커스 해주기
        return; //함수를 종료시켜 아래 구문 수행 못하게 하기
    }
    if(resAddress.value.trim().length ==0){
        //아무것도 안 쓴 경우
        alert("주소를 입력해 주세요.");
        resAddress.focus(); //바로 쓸 수 있게 포커스 해주기
        return; //함수를 종료시켜 아래 구문 수행 못하게 하기
    }
    if(resMenu.value.trim().length ==0){
        //아무것도 안 쓴 경우
        alert("메뉴를 입력해 주세요.");
        resMenu.focus(); //바로 쓸 수 있게 포커스 해주기
        return; //함수를 종료시켜 아래 구문 수행 못하게 하기
    }

    //resList 에 식당 객체 추가
    resList.push(new Restaurant(resName.value, resAddress.value, resMenu.value));

    //이전 input 에 작성된 내용을 삭제
    resName.value ="";
    resAddress.value ="";
    resMenu.value =""; //빈 문자열을 대입

    alert("추가 성공!");
    //가게명 input 요소에 focus 맞추기
    resName.focus(); //
});
/* 조회 버튼 클릭 시 #printList의 이전 내용을 모두 삭제하고
    resList의 요소를 이용해 li요소를 만들어 화면에 추가 */
    const printList = document.querySelector("#printList");
    selectBtn.addEventListener("click", ()=>{
        //#printList의 이전 내용을 삭제
        printList.innerHTML = ""; //시작 태그와 종료 태그 사이에 아무것도 없게 만들어라

        //resList의 요소를 이용해 li요소를 만들어 추가
        for(let i=0 ; i<resList.length ; i++ ){
            //resList[i]

            //li 요소 만들기
            const li = document.createElement("li"); //요소를 만들어서 존재하지만 화면에는 안보임

            //만들어진 li에 resList[i]의 내용으로 information()메서드 반환 값을 대입
            li.innerText = resList[i].information(); //이러면 li요소 만들어짐

            //li 요소를 #printList의 마지막 자식으로 추가
            printList.append(li);

            

        }
    });