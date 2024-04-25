/*
1. dom에서 제어할 노드 가져오기
2. 버튼이 눌러지면 
 [확인버튼]
    - 랜덤수 생성 > 단, 다시 시작하기 전까지 생성되면 안된다.
    - input 박스 값이 없으면 '값을 입력하세요 메시지' 출력
    - input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
    - input 박스 값이 랜덤수 보다 작으면 up이미지
    - input 박스 값이 랜덤수 보다 크면 down이미지
    - input 박스 값이 랜덤수와 같으면 good이미지
        > input이 보이지 않아야 함
          버튼의 캡션을 '숫자를 생성해주세요'로 변경
    ['숫자를 생성해주세요' 버튼]
     - 초기화 : 랜덤수 새로 생성, input 박스 보이기...
 */

//input 박스와 확인 버튼에 form 태그 사용시 다시호출 되지 않도록
/*document.addEventListener('DOMContentLoaded', (e)=>{
 e.preventDefault(); ...*/

 const btCreate = (bt, idTxt, captionNode, parentNode)=>{
    bt.setAttribute("id", idTxt); // 버튼 속성만듬
    bt.appendChild(captionNode); //자식노드 붙임
    btDiv4.append(bt);
}

document.addEventListener('DOMContentLoaded', ()=>{
    const updownimg = document.querySelector('#updownimg');
    const input = document.querySelector('#txt1');
    const bt = document.querySelector('#bt');
    const bt2 = document.createElement('button');
    const bt2Txt = document.createTextNode("숫자를 생성해주세요.");

    
    
    //랜덤수
    let n;
    let flag = false;

    bt.addEventListener('click', ()=>{
        if(!flag){ // flag 가 false라면 의미로 !을 사용
            flag = true  // flag가 true로 바뀌고 밑의 랜덤수 생성, 그리고 flag는 true값을 계속 유지 so, 버튼 계속 눌러도 번호 생성안됨.
            n = Math.floor(Math.random()*100)+1; //1~100
            console.log('n=',n);
        }
        //입력값 체크
        if(input.value == ''){
            alert('값을 입력하세요.');
            input.focus();
            return;
        }
        if(input.value > 100){
            alert('입력오류');
            input.focus();
            input.value = '';
            return;
        }
        
        if(input.value > n){
            updownimg.setAttribute('src', `./img/down.png`);
        }
        else if(input.value < n){
            updownimg.setAttribute('src', `./img/up.png`);
        }
        else{
            updownimg.setAttribute('src', `./img/good.png`);
            bt.style.display ='none';
            input.style.display ='none';
            btCreate(bt2, "숫자를 생성해주세요", bt2Txt, btDiv4);
            bt2.addEventListener('click', ()=>{
                updownimg.setAttribute('src', `./img/start.png`);
                bt2.style.display = 'none';
                bt.style.display = 'block';
                input.style.display = 'block';
                input.value = "";
            });   
        }
        

        
    });
    
});
