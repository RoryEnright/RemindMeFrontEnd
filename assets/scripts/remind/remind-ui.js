'use strict'

const showRemindersTemplate = require('../templates/reminder-listing.handlebars')
// const showDeleteTemplate = require('../templates/reminder-delete.handlebars')
const reminderApi = require('./remind-api')
const getFormFields = require('../../../lib/get-form-fields.js')

const createReminderSuccess = (data) => {
  console.log(data)
  $('#message').text('Reminder Created')
  // $('#set-reminder').reset()
}

const createReminderFailure = () => {
  $('#message').text('Please try again')
}

const onDeleteReminder = (event) => {
  event.preventDefault()
  const id = $(event.target).attr('data-id')
  reminderApi.deleteReminder(id)
    // .then(reminderUi.deleteRemindersuccess)
    // .catch(reminderUi.deleteReminderFailure)
}

const onUpdateReminder = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).attr('data-id')
  console.log($(event.target).attr('data-id'))
  console.log(id)
  reminderApi.updateReminder(data, id)
    .then(updateReminderSuccess)
    .catch(updateReminderFailure)
}

const updateReminderSuccess = (data) => {
  console.log('is updated!')
  $('#message').text('Reminder has been updated')
}

const updateReminderFailure = (error) => {
  console.log(error)
}

const getRemindersSuccess = (response) => {
  console.log(response)
  const showRemindersHtml = showRemindersTemplate({ reminders: response.reminders })
  $('.content').empty()
  $('.content').append(showRemindersHtml)
  $('.remove').on('click', onDeleteReminder)
  // $('.update-form').click(function () {
  //   $('.update-handlebars').removeClass('hidden')
  // })
  $('.update-reminder').on('submit', onUpdateReminder)
}

module.exports = {
  createReminderSuccess,
  createReminderFailure,
  getRemindersSuccess,
  onUpdateReminder
}
