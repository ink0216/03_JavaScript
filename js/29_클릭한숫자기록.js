// const numbers = document.getElementsByClassName("numbers");
// const result = document.querySelector("#result");
// const btn1 = document.querySelector("#btn1");
// for(let item of numbers){
//     item.addEventListener("click", e=>{
//         if(result.textContent.length==10) return; //여기서 나가므로 아래내용안나옴
//         // console.log(e.target.textContent);
//         //클릭이벤트가 발생한 e.target의 안의 내용(textContent)가 콘솔에 나옴
//         result.textContent += e.target.textContent;
//     });
// }
// /* 초기화 버튼 눌렀을 때 */
// btn1.addEventListener("click", ()=>{
//     result.textContent = "";
// });
//============================================================================================
const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");

for(let item of numbers){
item.addEventListener("click", e => {

    if(result.textContent.length == 10){
        alert("10글자 까지만 입력 가능합니다.");
        return;}

    console.log(e.target.textContent);
    result.textContent += e.target.textContent;

}); 
}
/* 초기화 버튼  */
document.querySelector("#resetBtn").addEventListener("click", ()=>{
    result.textContent="";
});
