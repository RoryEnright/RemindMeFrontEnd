'use strict'

const showRemindersTemplate = require('../templates/reminder-listing.handlebars')
// const showDeleteTemplate = require('../templates/reminder-delete.handlebars')
// const store = require('../store')
// const remindEvents = require('./remind-events')
const reminderApi = require('./remind-api')

const createReminderSuccess = (data) => {
  console.log(data)
  $('#message').text('Reminder Created')
  $('#set-reminder').reset()
}

const createReminderFailure = () => {
  $('#message').text('Please try again')
}

const onDeleteReminder = (event) => {
  event.preventDefault()
  console.log(event)
  const id = $(event.target).attr('data-id')
  console.log(id)
  reminderApi.deleteReminder(id)
    // .then(reminderUi.deleteRemindersuccess)
    // .catch(reminderUi.deleteReminderFailure)
}

const getRemindersSuccess = (response) => {
  console.log(response)
  const showRemindersHtml = showRemindersTemplate({ reminders: response.reminders })
  $('.content').empty()
  $('.content').append(showRemindersHtml)
  $('.remove').on('click', onDeleteReminder)
}

module.exports = {
  createReminderSuccess,
  createReminderFailure,
  getRemindersSuccess
}
