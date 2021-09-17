const getRandomNum = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const moveItemInArray = (arr, srcIdx, targetIdx) => {
    const newArr = [...arr]
    const movingItem = newArr.splice(srcIdx, 1)
    newArr.splice(targetIdx, 0, movingItem[0])
    return newArr
}

export const utilsService = {
    getRandomNum,
    moveItemInArray
}