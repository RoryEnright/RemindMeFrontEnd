'use strict'

const showRemindersTemplate = require('../templates//helpers/reminder-listing.handlebars')
// const store = require('../store')
// const remindEvents = require('./remind-events')
// const remindApi = require('./remind-api')

const createReminderSuccess = (data) => {
  console.log(data)
  $('#message').text('Reminder Created')
}

const createReminderFailure = () => {
  $('#message').text('Please try again')
}

const getRemindersSuccess = (response) => {
  console.log(response)
  const showRemindersHtml = showRemindersTemplate({ reminders: response.reminders })
  $('.content').append(showRemindersHtml)
}

module.exports = {
  createReminderSuccess,
  createReminderFailure,
  getRemindersSuccess
}
