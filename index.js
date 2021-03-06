/* Your Code Here */
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(employee => {
        return createEmployeeRecord(employee)
    })
}

function createTimeInEvent(stamp) {
    this.timeInEvents.push( {
        type: "TimeIn",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(stamp) {
    this.timeOutEvents.push( {
        type: "TimeOut",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName)
}

function calculatePayroll(array) {
    return array.reduce(function(total, element) {return total + allWagesFor.call(element)}, 0)
}
