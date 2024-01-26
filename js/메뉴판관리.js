//상단 가게이름 클릭 시
const resDisplay = document.querySelector(".resDisplay");
const resInput = document.querySelector(".resInput");
resDisplay.addEventListener("click", e=>{
    resInput.textContent = e.target.textContent;
    e.target.classList.add("none");
    resInput.classList.add("block");
});
resDisplay.addEventListener("blur", e=>{
    e.target.textContent = resInput.textContent;
    e.target.classList.add("block");
    resInput.classList.add("none");
    
});

//수정 버튼 클릭 시 추가 삭제 종료
const editBtn = document.querySelector(".editBtn");
editBtn.addEventListener("click", ()=>{
    const footer = document.querySelector(".footer");
    editBtn.remove();
    const addBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    const endBtn = document.createElement("button");
    addBtn.textContent = "추가";
    removeBtn.textContent = "삭제";
    endBtn.textContent = "종료";
    footer.append(endBtn);
    footer.append(removeBtn);
    footer.append(addBtn);
    //추가 버튼 클릭 시 체크박스, input 2개 생성
    let count=0;
    addBtn.addEventListener("click", ()=>{
        count++
        if(count<16){
            
            const ul = document.querySelector(".menu-container");
            const li = document.createElement("li");
            li.classList.add("menu");
            const checkBox = document.createElement("input");
            const menuName = document.createElement("input");
            const menuPrice = document.createElement("input");
            checkBox.type = "checkbox";
            menuName.type = "text";
            menuPrice.type = "text";
            menuName.placeholder = "메뉴명"
            menuPrice.placeholder = "가격"
            checkBox.classList.add("checkBox");
            menuName.classList.add("menuName");
            menuPrice.classList.add("menuPrice");
            //조립
            li.append(checkBox);
            li.append(menuName);
            li.append(menuPrice);
            ul.append(li);

            //종료 버튼 클릭 시 
        endBtn.addEventListener("click", ()=>{
        checkBox.classList.add("none");
        
        
        if(menuPrice.value.trim().length ==0){
            menuDisplay.textContent=checked[i].nextElementSibling.textContent;
        priceDisplay.textContent="0원";
        } else{
            li.textContent = "";
            const menuDisplay = document.createElement("span");
        const priceDisplay = document.createElement("span");
        menuDisplay.textContent=checked[i].nextElementSibling.textContent;
        priceDisplay.textContent=checked[i].nextElementSibling.nextElementSibling.textContent;
        
        }
        //조립
        li.append(menuDisplay);
        li.append(priceDisplay);
    
        
        
    });

        } else{
            alert("더 이상 선택할 수 없습니다.");
        }
    //삭제 버튼 클릭 시 체크박스의 부모요소 삭제(==li)
    removeBtn.addEventListener("click", ()=>{
        const checked = document.querySelectorAll(".checkBox:checked");
        for(let i=0 ; i<checked.length ; i++){
            checked[i].parentElement.remove();
        }
    });
    
    
        
        
        
    });
});
