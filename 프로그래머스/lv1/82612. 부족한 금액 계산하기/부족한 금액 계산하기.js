function solution(price, money, count) {
    for(let i = 1; i <= count; i++){
        money -= i * price;        
    }
    return money <= 0 ? Math.abs(money) : 0;
}