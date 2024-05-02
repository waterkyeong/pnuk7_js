document.addEventListener('DOMContentLoaded', ()=>{
    const txt1 = document.querySelector('#txt1');
    const bt81 = document.querySelectorAll('.bt81');
    const bt82 = document.querySelectorAll('.bt82');
    const bt83 = document.querySelectorAll('.bt83');

    let arr = [];    
    let obj ={
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉',
        '당근' : '🥕',
        '아보카도' : '🥑',
        '브로콜리' : '🥦',
        '복숭아' : '🍑',
        
    }
    //배열추가
    for(let bt of bt81){
        console.log(bt);

        bt.addEventListener('click',(e)=>{
            e.preventDefault()
            console.log(bt.textContent)

            // if(bt.textContent == '사과')arr.push('🍎');
            // else if(bt.textContent == '바나나')arr.push('🍌');
            // else if(bt.textContent == '오렌지')arr.push('🍊');
            // else if(bt.textContent == '수박')arr.push('🍉');

            arr.push(obj[bt.textContent]);
            txt1.value = arr.join(' ');
        });
         
    }

    //배열삭제
    for(let bt of bt82){
        bt.addEventListener('click', (e)=>{
            e.preventDefault();

            console.log(arr)
            console.log(obj[bt.textContent.replace('삭제','')])

            //배열 필터
            const k = obj[bt.textContent.replace('삭제','')];
            // arr = arr.filter((item)=>{return item != k});
            arr = arr.filter(item=>item != k); // 기본 콜백함수가 되어있고. 콜백함수 defalut는 retrun, 리턴문 홀로 쓸땐 중괄호 다 없어도 적용된다.(이거 다시 공부해서 정립하기.)

            txt1.value = arr.join(' ');
        })
    }

    //배열변환
    for(let bt of bt83){
        bt.addEventListener('click',(e)=>{
            e.preventDefault();

            let tm = bt.textContent.split('→')
            console.log(tm);

            arr = arr.map(item=> item == obj[tm[0]] ? obj[tm[1]] : item)

            txt1.value = arr.join(' ');
        });
    }
});