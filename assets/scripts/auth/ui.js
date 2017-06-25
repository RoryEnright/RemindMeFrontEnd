'use strict'

const signUpSuccess = (data) => {
  $('#sign-up').hide('slow')
  $('#message').text('Thanks for signing up!  Please sign in')
}

const signUpFailure = () => {
  $('#message').text('Email already taken or check that passwords match')
}

const signInSuccess = (data) => {
  $('#sign-up').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#sign-in').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#change-password').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#sign-out').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#reminders-body').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#message').text('Manage your Reminders!')
}

const signInFailure = () => {
  $('#message').text('Please check email and password or sign up again')
  $('#sign-up').show('slow')
}

const signOutSuccess = (data) => {
  $('#sign-in').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#sign-up').show('slow')
  $('#sign-up').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#sign-out').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#change-password').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#reminders-body').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#message').text('Please sign up or sign in')
}

const signOutFailure = () => {
  $('#message').text('Try signing out again')
}

const changePasswordSuccess = (data) => {
  $('#message').text('Password has been updated')
}

const changePasswordFailure = () => {
  $('#message').text('Make sure your passwords match and try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
