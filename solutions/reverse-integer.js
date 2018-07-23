var reverse = function(x) {
    let num = Math.abs(x);
    let res = '';
    let pow = Math.pow(2, 31) * Math.sign(x);
    
    while(num !== 0){
       res += num % 10
       num = Math.floor(num / 10)
    }
    
    res = parseInt(res) * Math.sign(x)
    const pos = res > 0 && pow > res ? res : 0;
    return res < 0 && pow < res ? res : pos

};