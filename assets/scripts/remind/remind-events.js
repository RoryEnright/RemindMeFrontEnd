'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const reminderApi = require('./remind-api')
const reminderUi = require('./remind-ui')

const onCreateReminder = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  reminderApi.createReminder(data)
  .then(reminderUi.createReminderSuccess)
  .catch(reminderUi.createReminderFailure)
}

const onGetReminders = (event) => {
  event.preventDefault()
  reminderApi.getReminders()
    .then(reminderUi.getRemindersSuccess)
    .catch(reminderUi.getRemindersfailure)
}

const onDeleteReminder = (event) => {
  event.preventDefault()
  const id = $(event.target).attr('data-id')
  reminderApi.deleteReminder(id)
    .then(reminderUi.deleteRemindersuccess)
    .catch(reminderUi.deleteReminderFailure)
}

const onUpdateReminder = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).attr('data-id')
  reminderApi.updateReminder(data, id)
    .then(reminderUi.updateReminderSuccess)
    .catch(reminderUi.updateReminderFailure)
}

// const emptyX = () => {
//   const x = $('content-reminder').value
//   if (x === '') {
//     $('#message').text('Please enter valid Reminder')
//     return false
//   }
// }
//
// const emptyY = () => {
//   const y = $('date-reminder').value
//   if (y === '') {
//     $('#message').text('Please enter valid Date')
//     return false
//   }
// }
//
// const emptyZ = () => {
//   const z = $('time-reminder').value
//   if (z === '') {
//     $('#message').text('Please enter valid Time')
//     return false
//   }
// }

const addHandlers = () => {
  $('#getRemindersButton').on('click', onGetReminders)
  $('#set-reminder').on('submit', onCreateReminder)
}

module.exports = {
  onCreateReminder,
  onGetReminders,
  onDeleteReminder,
  addHandlers,
  onUpdateReminder
  // emptyX,
  // emptyY,
  // emptyZ
}
