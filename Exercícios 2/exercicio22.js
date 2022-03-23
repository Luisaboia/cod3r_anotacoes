function raffleNumber(n){
    let number = Math.floor(Math.random() * 10) + 1;
    if(number === n){
        console.log(`Parabéns, o número ${number} era o correto!`);	
    } else {
        console.log(`O número ${n} não é o correto. Tente novamente!`);
    }
}

raffleNumber(5);
raffleNumber(8);
raffleNumber(7);
raffleNumber(2);
raffleNumber(4);
raffleNumber(9);
raffleNumber(1);
raffleNumber(3);
raffleNumber(6);
raffleNumber(10);