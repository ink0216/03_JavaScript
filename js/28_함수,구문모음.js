/* 배열.forEach()

[작성법]
배열.forEach( (현재 요소 [,index [, 현재 배열]]) => {
    반복 수행할 구문
});
*/
const numbers1 = [10,20,30,40,50];
// for(let i=0 ; i<numbers1.length ; i++){
//     console.log(numbers1[i]);
// } 모든 값 출력 이렇게 했었는데
// numbers1.forEach(item=>console.log(item));
    //item이라는 변수에 배열의 값들을 앞에서부터 하나씩 넣어서 출력해줌
    //노랑 괄호 안이 함수임
numbers1.forEach((item, index)=>{
    // 두 번째 자리에 오면 꼭 index로 이름 안지어도 index 역할 함
    console.log(index,item); //몇번 인덱스에 어떤 요소가 있는지 출력
})
// console.table(numbers1)

/* 배열.map */
const numbers2 = numbers1.map((item)=>{
    return item*2 // numbers1에 써있던 값이 하나씩 꺼내지는데 
    //2를 곱해서 하나씩 리턴한 것을 모아서 배열 만들어 numbers2에 대입한다
    
});
console.log("numbers2 :" , numbers2);

/* 배열.reduce */
//배열의 요소를 합칠 때, 요소의 합계 구하기 등의 경우에 사용

let sum1 = 0;
for (let i=0 ; i<numbers2.length ; i++){
    sum1 += numbers2[i];
} //이걸 아래에 한 줄로 할 수 있다
console.log("sum1 :", sum1);
const sum2 = numbers2.reduce((acc, item)=>{return acc+item;},0);
//acc의 초기값 = 0(맨 뒤에 있는 것) acc에 item을 더한 값을 다시 acc에 대입
//acc: 누적되는 값을 저장할 변수
console.log("sum2" , sum2);

/* 향상된 for문(for of) */
const htmlCollection = document.getElementsByClassName("test");
const nodeList = document.querySelectorAll(".test"); //같은 것을 두 방법으로 얻어와봤다
const numbers3 = [30, 60, 90, 120, 150]; //셋 다 타입이 다르지만, iterator 속성을 가지고 있다
for(let item of htmlCollection){
    // htmlCollection으로 돼있는거 하나씩 담아와서
    item.textContent = item.textContent + "입니다";
}
for(let item of nodeList){
    item.style.fontSize = "50px"; //하나하나씩 다 적용됨 
}
for(let item of numbers3){
    console.log(item);
}
//배열과 유사배열(htmlCollection, nodeList) 모두 for of 구문 잘 된다
//forEach 구문은 누구는 되고 누구는 안돼서 셋 다 가능한 for of 구문을 만듦
