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
  // .then((response) => {
}

module.exports = {
  createReminder,
  getReminders
}
