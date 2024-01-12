/* if- 양수인지 검사 */
const input1 = document.getElementById("input1");
function check1(){
    const  value = Number(input1.value);
    if(value > 0){
        //value(입력 받은 값)가 0보다 큰 것이 true인 경우 실행할 코드 적기
        alert("양수 입니다.");
    }

    if(value <= 0){
        // value가 0 이하인 것이 true인 경우 = value가 양수가 아닌 경우 실행할 코드 적기 
        alert("양수가 아닙니다.");
    }

}
/* if-else 0 -> 홀/짝 판별하기 */
function check2(){
    //난수 발생 : 콘솔창 Math.randon()
    //발생하는 난수 범위 : 0 <= Math.randon() < 1
    // Math.floor(Math.random() *101) : 0 <= Math.randon() < 101
    // 0~100 범위의 난수
    const randomNumber = Math.floor(Math.random() *101);
    if(randomNumber % 2 != 0){
        // randomNumber를 2로 나눴을 때 0이 아니라면 실행할 코드 적기
        alert(`${randomNumber}은/는 홀수 입니다.`);

    }
    else{
        alert(`${randomNumber}은/는 짝수 입니다.`);
    }

}