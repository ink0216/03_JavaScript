/* Node 확인하기 */
document.querySelector("#btn1").addEventListener("click", ()=>{
    const test = document.querySelector("#test"); //ul 태그

    // #test의 모든 자식 노드 얻어오기(요소.childNodes 구문)->배열로 얻어와짐
    const list = test.childNodes; //자식은 여럿일 수 있어 s붙음
    console.log(list);

    // 자식 노드 중 첫 번째 li 요소만 찾아서 변수에 저장하기
    const li1 = list[3]; 
    console.log(li1);

    // 1. 부모 노드 찾기(요소.parentNode)
    // li의 부모 노드 찾기 // HTML 에서 부모는 하나임
    //부모 노드 배경색 변경하기. 부모 노드를 찾아서 탐색할 수 있는가?
    li1.parentNode.style.backgroundColor = "skyblue";

    // 2. 첫 번째 자식 노드 찾기(요소.firstChild)
    // ->#test(ul태그)의 첫 번째 자식 노드 찾기
    console.log(test.firstChild);

    // 3. 마지막 자식 노드 찾기(요소.lastChild)
    // ->#test(ul태그)의 마지막 자식 노드 찾기
    console.log(test.lastChild);

    // 4. 원하는 위치(index)에 존재하는 자식 노드 찾기
    //    (요소.childNodes[index])
    //#test의 자식 노드 중 3번째 li태그를 찾아서
    //배경색 pink 지정하기
    test.childNodes[9].style.backgroundColor = "pink";
    // 노랑이었는데 핑크로 됐다

    // 5. 이전/ 다음 형제 노드 찾기
    // (이전 형제 노드 : 요소.previousSibling)
    // sibling = 형제 자매 남매

    // (다음 형제 노드 : 요소.nextSibling)

    // ->탐색용 코드는 연달아서 작성 가능하다!!! 

    //  test.childNodes[9]의 다음 다음 형제 노드 선택해보기 == test.childNodes[11]
    console.log( test.childNodes[9].nextSibling.nextSibling); 

    // #test의 마지막 자식 노드의 이전 형제 노드 선택
    console.log(test.lastChild.previousSibling);

    /* Node 추가 */
    // 1. 마지막 자식 노드로 추가( appendChild(노드) )
    // -> list[11]의 마지막 자식으로 "ZZZ"라는 텍스트 노드를 추가(a태그 뒤에)
    list[11].appendChild(document.createTextNode("ZZZ"));
    //텍스트노드를 만들어서 list 11번째의 마지막 자식 요소로 추가

    // 2. 마지막 자식으로 추가( append("내용" 또는 노드 또는 요소 *n ) )
    // 여러개 쓸 수 있음
    list[11].append("12345", "abcd", "가나다라");
    // list 11번째의 마지막 자식으로 세 개를 추가

    // 3. 첫 번째 자식으로 추가( prepend("내용" 또는 노드 또는 요소) )
    list[11].prepend("아", "집에", "가고싶다");
    list[11].prepend("Hello"); //이게 제일 맨 앞으로 추가됨

    // 4. 이전/다음 형제로 추가( before/after("내용" 또는 노드 또는 요소) )
    // #test 전/후에 내용 추가
    test.before("이전 입니다.");
    test.after("이후 입니다.");

});
// 이게 클릭되었을 때 클릭을 인식해서 함수 실행

//----------------------------------------------------------------------------
/* 요소(Element) 탐색 */
// children : 자식 요소만 모두 선택
//         parentElement : 부모 요소 찾기

//         firstElementChild : 첫 번째 자식 요소 선택
//         lastElementChild  : 마지막 자식 요소 선택

//         previousElementSibling : 이전 형제 요소 선택
//         nextElementSibling     : 다음 형제 요소 선택
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", ()=>{
    /* #test2(ul태그) 얻어오기 */
    const test2 = document.querySelector("#test2") // ul 태그
    //#test2의 모든 자식 요소만 찾기 요소만 네개가 나옴
    console.log(test2.children);
    //#test2의 부모요소
    console.log(test2.parentElement);
    //#test2의 첫 번째 자식요소
    console.log(test2.firstElementChild);
    //#test2의 마지막 자식요소
    console.log(test2.lastElementChild);
    //#test2의 이전 형제 요소
    console.log(test2.previousElementSibling);
    //#test2의 다음 형제 요소
    console.log(test2.nextElementSibling);
});