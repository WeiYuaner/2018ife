window.onload = function (){
    const decVal = document.getElementById("dec-number");
    const binVal = document.getElementById('bin-bit');
    const transBtn = document.getElementById("trans-btn");
    const resultLabel = document.getElementById('result');
    const play3game = document.getElementById("s3game");

    function dec2bin(decNumber){
        let result = [];
        if(decNumber == NaN || decNumber < 0){
            return false;
        }else{
            let divider = decNumber;
            while(divider / 2 > 0){
                result.push(divider % 2 + '');
                divider = parseInt(divider / 2);
            }
            if(result === [])  result = ['0'];
            return result; 
        }
    }

    transBtn.onclick = function(){
        let transVal = dec2bin(decVal.valueAsNumber);
        decVal.removeAttribute('class');
        resultLabel.removeAttribute('class');
        if(!transVal || !transVal.validity.valid){
            resultLable.innerText = '运算结果： 请输入非负正整数';
            decVal.setAttribute('class','invalid');
            resultLabel.setAttribute('class','invalidText');
        }else{
            let length = transVal.length;
            if(length < binVal.valueAsNumber){
                for(let i = 0;i < binVal.valueAsNumber - length;i++){
                    transVal.push("0");
                }
            }

            resultLabel.innerText = `运算结果：${tranVal.reduce((p,c) => c + p,'')}`;
        }
        
    }

    play3game.onClick = function(){
        let result = [];
        for(let i = 0;i < 101;i++){
            if(i % 3 === 0 || (i + '').includes('3')){
                result.push("PA");
                console.log("PA");
            }else {
                result.push(i+'');
                console.log(i);
            }
        }
        result.join();
    }

}