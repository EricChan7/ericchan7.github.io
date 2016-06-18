window.$ = window.jQuery = require 'jquery'
# noSleep = require 'nosleep'
Clock = require 'clock'
Pressure = require 'pressure'

# enabledSleepLock = false

# enableNoSleep = () ->
#   noSleep.enable()
#   document.removeEventListener('touchstart', enableNoSleep, false)

$ ->
  $('#menu .refresh').click (evt) ->
    evt.preventDefault()
    Clock.reset()
    clock = new Clock
    clock.colorHands()
    clock.start()
    false
  .trigger 'click'

  $('#menu .finish').click (evt) ->
    evt.preventDefault()
    $('#menu').hide()

  Pressure.set '#clock',
    end: ->
      $(this).css
        transform: 'scale(1)'
    change: (force, event) ->
      $(this).css
        transform: "scale(#{1-force})"
    startDeepPress: ->
      $('#menu').show()
    unsupported: ->
      $('#menu').show()

  # $('body').click ->
  #   if enabledSleepLock
  #     noSleep.disable()
  #   else
  #     document.addEventListener('touchstart', enableNoSleep, false)
  #   enabledSleepLock = !enabledSleepLock
