'use strict'

const showRemindersTemplate = require('../templates/reminder-listing.handlebars')
const updateRemindersTemplate = require('../templates/reminder-update.handlebars')
const reminderApi = require('./remind-api')
const getFormFields = require('../../../lib/get-form-fields.js')
// const reminderEvents = require('./remind-events.js')

const createReminderSuccess = (data) => {
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
    .then(deleteRemindersuccess)
    .catch(deleteReminderFailure)
}

const deleteRemindersuccess = (data) => {
  $('#message').text('Reminder has been deleted')
}

const deleteReminderFailure = () => {
  $('#message').text('Please try again')
}

const onUpdateReminder = (event) => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  console.log(event.target)
  // const id = $(event.target).attr('data-id')
  const id = $('.update-reminder').prev().attr('data-id')
  console.log(id)
  reminderApi.updateReminder(data, id)
    .then(updateReminderSuccess)
    .catch(updateReminderFailure)
}

// const onGetReminders = (event) => {
//   event.preventDefault()
//   reminderApi.getReminders()
//     .then(getRemindersSuccess)
//     .catch(getRemindersfailure)
// }

const updateReminderSuccess = (data) => {
  $('#message').text('Reminder has been updated')
  $()
}

const updateReminderFailure = () => {
  $('#message').text('Please try again')
}

const getRemindersSuccess = (response) => {
  console.log(response)
  const showRemindersHtml = showRemindersTemplate({ reminders: response.reminders })
  $('.content').empty()
  $('.content').append(showRemindersHtml)
  $('.remove').on('click', onDeleteReminder)
  $('.update').on('click', updateForm)
}

const updateForm = (event) => {
  const updateReminderHtml = updateRemindersTemplate
  $(event.target).after(updateReminderHtml)
  $('.update').off()
  $('.update-reminder').on('submit', onUpdateReminder)
}

const getRemindersfailure = () => {
  $('#message').text('Please try again')
}

module.exports = {
  createReminderSuccess,
  createReminderFailure,
  getRemindersSuccess,
  getRemindersfailure,
  updateReminderSuccess,
  updateReminderFailure,
  onUpdateReminder,
  onDeleteReminder
}
