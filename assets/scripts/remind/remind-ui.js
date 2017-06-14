'use strict'

const showRemindersTemplate = require('../templates/reminder-listing.handlebars')
const updateRemindersTemplate = require('../templates/reminder-update.handlebars')
const deleteRemindersTemplate = require('../templates/reminder-delete.handlebars')
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
  const id = $('.delete-reminder').prev().attr('data-id')
  // $('.remove').on('click', function () {
  //   $('.delete-update').hide()
  // })
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
  const data = getFormFields(event.target)
  const id = $('.update-reminder').prev().attr('data-id')
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
  $('update').on()
}

const updateReminderFailure = () => {
  $('#message').text('Please try again')
}

const getRemindersSuccess = (response) => {
  const showRemindersHtml = showRemindersTemplate({ reminders: response.reminders })
  $('.content').empty()
  $('.content').append(showRemindersHtml)
  $('.remove').on('click', deleteForm)
  $('.update').on('click', updateForm)
  $('#message').text('Manage your Reminders!')
}

const deleteForm = (event) => {
  const deleteReminderHtml = deleteRemindersTemplate
  $(event.target).after(deleteReminderHtml)
  $('.remove-reminder').on('click', onDeleteReminder)
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
