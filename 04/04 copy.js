// 1. dom에서 이미지와 버튼 들고오기
// 2. 버튼 click 이벤트를 만들기
// 3. 버튼에 맞춰서 user 값이 나오게 하기
// 4. 해당 값에 맞춰 user주사위 이미지를 이미지 src속성에 넣기
// 5. 3-4 작업이 끝나면 computer 주사위 용 랜덤수 생성 Math.floor(Math.random()*6)+1
// 6. 랜덤수에 해당하는 computer 주사위 이미지를 이미지 src속성에 넣기.



document.addEventListener("DOMContentLoaded", ()=>{
    

    const msg = document.querySelector("#msg");
    const imgc = document.querySelector("#i1 > img");
    const imgu = document.querySelector("#i2 > img");
    const  bt1 = document.querySelector("#b1");
    const  bt2 = document.querySelector("#b2");
    const  bt3 = document.querySelector("#b3");
    const  bt4 = document.querySelector("#b4");
    const  bt5 = document.querySelector("#b5");
    const  bt6 = document.querySelector("#b6");


    bt.addEventListener("click", (bt2)=>{

        
        imgu.setAttribute("src", `./img/${bt2}.png`); 
        imgu.setAttribute("alt", `${bt2}`);
        


    });

    
});