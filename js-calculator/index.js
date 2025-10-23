let operation = prompt("What operation do you want to perform? (add/subtract/divide/multiply)")
operation = operation.toLowerCase()

let numOfNum = Number(prompt("How many numbers do you want to calculate?"))

let numbers = []

let j = 1
let i = 0

while (i < numOfNum) {
    num = Number(prompt(`Enter the ${j++}th number`))
    numbers.push(num)
    i++
}

let addResult = null
for(let i of numbers) {
    addResult += i;
}

let subtractResult = numbers[0]
for(let i = 1; i < numbers.length; i++) {
    subtractResult -= numbers[i];
}

let divideResult = numbers[0]
for(let i = 1; i < numbers.length; i++) {
    divideResult /= numbers[i];
}

let multiplyResult = numbers[0]
for(let i = 1; i < numbers.length; i++) {
    multiplyResult *= numbers[i];
}

if (operation == "add"){
    alert(addResult)
} else if (operation == "subtract"){
    alert(subtractResult)
} else if (operation == "divide"){
    alert(divideResult)
} else {
    alert(multiplyResult)
}