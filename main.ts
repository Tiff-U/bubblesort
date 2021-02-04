function bubbleSort () {
    for (let i = 0; i <= arrayLength - 1; i++) {
        for (let j = 0; j <= arrayLength - (i - 1); j++) {
            if (list[j] > list[j + 1]) {
                tempHold = list[j]
                list[j] = list[j + 1]
                list[j + 1] = tempHold
                counter += 1
            }
        }
    }
    basic.showNumber(counter)
}
let tempHold = 0
let counter = 0
let arrayLength = 0
let list: number[] = []
list = [4, 3, 2, 1]
arrayLength = list.length
counter = 0
bubbleSort()
basic.forever(function () {
	
})
