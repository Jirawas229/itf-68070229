let currenin ;
let currenout ;
let currenacc ;
let currencash ;
let bankopin ;

document.getElementById("Submitconvert").onclick = function(){
    currenin = Number(document.getElementById("in3").value) ;
    if(document.getElementById("se_2").value =="USD"){
        currenout = currenin*32.
        document.getElementById("in4").value = `${currenout.toFixed(2)} THB`
    } else {
        currenout = currenin/32.43
        document.getElementById("in4").value = `${currenout.toFixed(2)} USD`
    }
}

document.getElementById("balanceinformation").onclick = function(){
    currenacc = Number(document.getElementById("in1").value)
    currencash = Number(document.getElementById("in2").value)
    document.getElementById("preview").value += `You have changed your account balance to ${currenacc}\nand your cash balance to ${currencash}\n\n`
    document.getElementById("premon").value = `Your account balance is ${currenacc}\nYour cash balance is ${currencash}`
} 

document.getElementById("BankOp").onclick = function(){
    bankopin = Number(document.getElementById("BankOpIn").value)
    if(document.getElementById("BankOpType").value == "Deposit"){
        if(currencash < bankopin){
            window.alert("You don't have enough money to deposit")
        } else {
        currenacc += bankopin
        currencash -= bankopin
        document.getElementById("premon").value = `Your account balance is ${currenacc}\nYour cash balance is ${currencash}`}
        document.getElementById("preview").value += `You deposit ${bankopin} Baht\n`
    } else {
        if(currenacc < bankopin){
            window.alert("You don't have enough money to withdraw")
        } else {
        currenacc -= bankopin
        currencash += bankopin
        document.getElementById("premon").value = `Your account balance is ${currenacc}\nYour cash balance is ${currencash}\n`}
        document.getElementById("preview").value += `You withdraw ${bankopin} Baht\n`
    }
}