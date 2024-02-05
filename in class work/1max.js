function maxOf(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1
    }
    else if (n2 > n1 && n2 > n3) {
        return n2
    }
    else {
        return n3
    }
}

const num1 = 25
const num2 = 46
const num3 = 54

const bigNum = maxOf(num1, num2, num3)
console.log(bigNum);