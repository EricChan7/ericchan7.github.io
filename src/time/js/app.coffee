window.$ = window.jQuery = require 'jquery'
# noSleep = require 'nosleep'
Clock = require 'clock'

# enabledSleepLock = false

# enableNoSleep = () ->
#   noSleep.enable()
#   document.removeEventListener('touchstart', enableNoSleep, false)

$ ->
  $('.refresh').click (evt) ->
    evt.preventDefault()
    Clock.reset()
    clock = new Clock
    clock.colorHands()
    clock.start()
    false
  .trigger 'click'

  # $('body').click ->
  #   if enabledSleepLock
  #     noSleep.disable()
  #   else
  #     document.addEventListener('touchstart', enableNoSleep, false)
  #   enabledSleepLock = !enabledSleepLock
