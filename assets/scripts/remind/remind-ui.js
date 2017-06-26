'use strict'

const showRemindersTemplate = require('../templates/reminder-listing.handlebars')
const updateRemindersTemplate = require('../templates/reminder-update.handlebars')
const deleteRemindersTemplate = require('../templates/reminder-delete.handlebars')
const reminderApi = require('./remind-api')
const getFormFields = require('../../../lib/get-form-fields.js')
// const reminderEvents = require('./remind-events.js')

const createReminderSuccess = (data) => {
  $('#message').text('Reminder Created')
  reminderApi.getReminders()
    .then(getRemindersSuccess)
    .catch(getRemindersfailure)
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
  reminderApi.getReminders()
    .then(getRemindersSuccess)
    .catch(getRemindersfailure)
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
  reminderApi.getReminders()
    .then(getRemindersSuccess)
    .catch(getRemindersfailure)
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
  $('.set-reminder-field').val('')
}

const deleteForm = (event) => {
  const deleteReminderHtml = deleteRemindersTemplate
  $(event.target).after(deleteReminderHtml)
  $('.remove').off()
  $('.remove-reminder').on('click', onDeleteReminder)
  $('.hide-check').on('click', function () {
    // $('.delete-reminder').hide()
    reminderApi.getReminders()
      .then(getRemindersSuccess)
      .catch(getRemindersfailure)
  })
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
