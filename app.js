const calcTip = function (billAmt) {
    if(billAmt <= 300 && billAmt >=50){
       return (15 / 100) * billAmt;
    }else{
        return (20 / 100) * billAmt;
    }
    
}

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2] ];
console.log(total);