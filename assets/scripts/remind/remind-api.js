'use strict'

const config = require('../config')
const store = require('../store')

const createReminder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reminders/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
  // .then((response) => {
  //   console.log(response)
  //   store.reminder.id = response.reminder.id
  // })
}

const getReminders = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reminders',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}

const deleteReminder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reminders/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then((response) => {
    $("ul[data-id='" + data + "']").remove()
  })
}

const updateReminder = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/reminders/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

module.exports = {
  createReminder,
  getReminders,
  deleteReminder,
  updateReminder
}
