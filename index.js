// Your code here
function mapToNegativize(array) {
    let mapArray = []
     for (let i = 0; i < array.length; i++) {
       mapArray.push(array[i] * -1)
    }
    return mapArray
}

function mapToNoChange(array) {
    let mapArray = []
    for (let i = 0; i < array.length; i++) {
        mapArray.push(array[i])
    }
    return mapArray
}

function mapToDouble(array) {
    let mapArray = []
    for (let i = 0; i < array.length; i++) {
        mapArray.push(array[i] * 2)
    }
    return mapArray
}

function mapToSquare(array) {
    let mapArray = []
    for (let i = 0; i < array.length; i++) {
        mapArray.push(array[i]**2)
    }
    return mapArray
}

function reduceToTotal(array, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false 
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false
}

