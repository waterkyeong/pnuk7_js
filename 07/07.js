document.addEventListener('DOMContentLoaded', ()=>{

    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');
    const bts = document.querySelectorAll('.bt7');

    console.log(bts);
    //회문
    bts[0].addEventListener('click', (e)=>{
        e.preventDefault();
        // let t1 = txt1.value.split('');
        // let t1 = [...txt1.value];
        // let t2 = [];

        // for(let i = t1.length-1; i <=0; i--){
        //     t2.push(t1[i])
        // }

        //비교
        // for(let i = 0; i < t1.length; i++){
        //     if(t1[i] != t2[i]){
        //         txt2.value = '회문이 아닙니다.';
        //         break;
        //     }else{
        //         txt2.value = '회문입니다.';
        //     }
        // }

        //비교:문자열
        let t1 = txt1.value.replace(' ','').split().join();
        let t2 = txt1.value.replace(' ','').split().reverse().join();
        console.log(t1,t2);
       
        if(t1 == t2) txt2.value = '회문입니다.'
        else txt2.value = '회문이 아닙니다.'

        let n1 = txt1.value
    


    });

    //문자열 숫자 확인
    bts[1].addEventListener('click', (e)=>{
        e.preventDefault();
        // for(let i =0; i < txt1.value.length; i++){
        //     console.log(txt1.value[i]);
        // }
        let total = 0;
        for(let c of txt1.value){
            console.log(c);
            //숫자 구분
            // 
            if(!isNaN(c)){
                total = total + parseInt(c);
            }
        }

        txt2.value = total;

    });
});