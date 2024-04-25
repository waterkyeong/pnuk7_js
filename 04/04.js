/* 
1. DOM에서 제어할 노드를 가져오기
2. 6개 버튼 클릭을 확인
3. 버튼 클릭이 되면 
    - 해당되는 버튼의 숫자를 추출 > 사용사 선택 숫자(user) > 이미지 변경
    - 랜덤수를 생성 > 컴퓨터 숫자(com) > 이미지 변경
    - 사용자 선택수(user)와 컴퓨터 선택수 (com)을 비교
    - 결과 출력
*/
document.addEventListener('DOMContentLoaded', ()=>{
    
    //1. DOM에서 제어할 노드를 가져오기
    const comImg = document.querySelector('#com'); //querySelector와 getElementById는 같은 효과를 가진다.
    const userImg = document.getElementById('user');
    const msg = document.querySelector('#msg');

    const bts = document.querySelectorAll('section > button')
    //const bts = document.querySelctorAll(.bt4) 이거는 버튼이 많은 경우 일부의 버튼만 가지고 오고싶을때 그 일부에 "같은"클래스를 부여 후 클래스들고오기로.
    // console.log(bts);

    //반복문1
    console.log('**반복문1**')
    for(let i = 0; i < bts.length; i++){ // 바뀔때는 let, 안바뀔때는 const
        console.log(bts[i]);
    }

    //반복문2
    console.log('**반복문2**')
    for (let i in bts) {
        console.log(bts[i])
    }
            
    //반복문3
    console.log('**반복문3**');
    bts.forEach(bt=>{
        console.log(bt)
    })

    //반복문4
    console.log('**반복문4**');
    for (let bt of bts){
        console.log(bt)
    }
    for(let[i,bt] of bts.entries()){
        console.log(i,bt)
    }

    //2. 6개 버튼 클릭을 확인
    //bts[0].addEventListener('click', ()=> {}); 이거로하면 6개 다 만들어야함
    for(let bt of bts){  //bts에서 하나씩 가져오며 이름을 bt로 단다.
        bt.addEventListener('click', ()=>{
    // 3. 버튼 클릭이 되면 
    // - 해당되는 버튼의 숫자를 추출 > 사용사 선택 숫자(user) > 이미지 변경
    // - 랜덤수를 생성 > 컴퓨터 숫자(com) > 이미지 변경
    // - 사용자 선택수(user)와 컴퓨터 선택수 (com)을 비교
    // - 결과 출력
    
        const user = parseInt(bt.textContent.slice(0,1));

        const com = Math.floor(Math.random() * 6)+1;

        comImg.setAttribute("src", `./img/${com}.png`);
        comImg.setAttribute("alt", `${com}`);

        userImg.setAttribute("src", `./img/${user}.png`);
        userImg.setAttribute("src", `./img/${user}.png`);
        });
    }


});