const btCreate = (bt, idTxt, captionNode, parentNode)=>{
    bt.setAttribute("id", idTxt); // 버튼 속성만듬
    bt.appendChild(captionNode); //자식노드 붙임
    btDiv.append(bt);
}

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM 완성");

    const msg = document.getElementById("msg");
    const btDiv = document.getElementById("btDiv");
    const bt1 = document.createElement("button");
    const bt1Txt = document.createTextNode("버튼11");
    const bt2 = document.createElement("button");
    const bt2Txt = document.createTextNode("버튼21");
    
    btCreate(bt1, "bt11", bt1Txt, btDiv);
    btCreate(bt2, "bt21", bt2Txt, btDiv);

    // bt1.setAttribute("id", "bt11"); // 버튼 속성만듬
    // bt1.appendChild(bt1Txt); //자식노드 붙임
    // btDiv.append(bt1);

    bt1.addEventListener("click", ()=>{
        // 이 버튼만 누를경우 값이 없으면 글이 나오고 있으면 글이 없어지는 함수
        // if(msg.innerHTML == "")
        //     msg.innerHTML = '<h1>안녕하세요!!</h1>';
        // else            
        //     msg.innerHTML == ""
        msg.innerHTML = '<h1>안녕하세요!!</h1>';

    });

    bt2.addEventListener("click", ()=>{
            msg.innerHTML = '';
    });


   
});


    
 
