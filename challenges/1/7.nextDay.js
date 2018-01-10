function nextDay(yyyy, month, day) {
    let currentDate = new Date(yyyy, month - 1, day)    
    let nextDay = currentDate.getDate() + 1
    let nextDayDate = new Date(yyyy, month - 1, nextDay)
    let nextDateStr = `${nextDayDate.getFullYear()}-${nextDayDate.getMonth() + 1}-${nextDayDate.getDate()}`
    return nextDateStr
}

console.log(nextDay(2016, 9, 30))

