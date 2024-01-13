                /* prompt 사용 연습용 출금 */
                function test(){
                    const password = prompt("비밀번호를 입력하세요");
                    // 확인 버튼 누르면 입력한 문자열 나옴
                    // 취소 버튼 누르면 null이 나옴

                    if(password == null){
                        //입력을 안 하고 취소한 경우
                        alert("취소");
                    } else{
                        //확인
                        //입력한 비밀번호가 '1234'가 맞는 지 확인하는 if문을 또 쓰면 된다
                        if(password == '1234'){ 
                            //문자열로의 1234 이므로 홑따옴표 써야 함
                            alert("비밀번호 일치");

                        } else{
                            alert("비밀번호가 일치하지 않습니다.");
                        }
                    }
                }
                /* 시작! */

                // 
                //     * 비밀번호가 일치할 경우
                //         1) 출금할 금액이 잔액(balance) 보다 큰 경우 
                //         -> alert("출금 금액이 잔액보다 클 수 없습니다") 출력
                        
                //         2) 출금할 금액이 잔액(balance) 보다 작거나 같은 경우
                //         -> 잔액(balance)에서 출금 금액만큼 감소 시킨 후
                //         alert("OOO원이 출금 되었습니다. 남은 잔액 : OOO원") 출력

                //     * 비밀번호가 일치하지 않을 경우
                //         -> alert("비밀번호가 일치하지 않습니다") 출력
                let balance1 = 10000;
                const amount = document.getElementById("amount");
                const balance = document.getElementById("balance");


                function deposit(){
                    const amount1 = Number(amount.value);
                    balance1 += amount1;
                    balance.innerText = balance1;
                }
                // * 비밀번호가 일치할 경우
                //         1) 출금할 금액이 잔액(balance) 보다 큰 경우 
                //         -> alert("출금 금액이 잔액보다 클 수 없습니다") 출력
                        
                //         2) 출금할 금액이 잔액(balance) 보다 작거나 같은 경우
                //         -> 잔액(balance)에서 출금 금액만큼 감소 시킨 후
                //         alert("OOO원이 출금 되었습니다. 남은 잔액 : OOO원") 출력

                function withdrawal(){
                    
                
                    
                    const password = prompt("비밀번호를 입력하세요.");
                    if(password == null){
                        alert("취소");
                    } else{ // 비밀번호를 쓰긴 쓴 경우
                        
                    if(password == '1234'){
                        if(input1 > balance1){
                            const amount1 = Number(amount.value);
                            alert("출금 금액이 잔액보다 클 수 없습니다.");
                        }
                        else{
                            const amount1 = Number(amount.value);
                            balance1 -= amount1;
                            balance.innerText = balance1;
                    alert(`${amount1}원이 출금 되었습니다. 남은 잔액 : ${balance1}원`);
                        }

        } else{
                        alert("비밀번호가 일치하지 않습니다.");

                    }
                }

                    
                }