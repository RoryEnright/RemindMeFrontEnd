'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')
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

// const onDeleteReminder = (event) => {
//   event.preventDefault()
//   const id = $(event.target).attr('data-id')
//   console.log(id)
//   reminderApi.deleteReminder(id)
//     // .then(reminderUi.deleteRemindersuccess)
//     // .catch(reminderUi.deleteReminderFailure)
// }

// const onUpdateReminder = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   reminderApi.updateReminder(data)
//     // .then(reminderUi.updateReminderSuccess)
//     // .catch(reminderUi.updateReminderFailure)
// }

const addHandlers = () => {
  $('#getRemindersButton').on('click', onGetReminders)
  $('#set-reminder').on('submit', onCreateReminder)
}

module.exports = {
  onCreateReminder,
  onGetReminders,
  // onDeleteReminder,
  addHandlers
  // onUpdateReminder
}
