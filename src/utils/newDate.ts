const getCurrentMonth = () => {
    let months, newDate, month

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December' ]
    newDate = new Date()
    month = newDate.getMonth()

    return months[month]
}

export default getCurrentMonth