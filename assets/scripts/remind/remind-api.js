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
  .then((response) => {
    console.log(response)
    store.reminder.id = response.reminder.id
  })
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
  .then((response) => { // this will run if the DELETE request is successful
    $("ul[data-id='" + data + "']").remove() // remove the UL element with jQuery
  })
}

module.exports = {
  createReminder,
  getReminders,
  deleteReminder
}
