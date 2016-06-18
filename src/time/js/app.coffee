window.$ = window.jQuery = require 'jquery'
# NoSleep = require 'nosleep'
Clock = require 'clock'
Pressure = require 'pressure'

wakeLockEnabled = false

$ ->
  noSleep = new NoSleep()
  $('#menu .refresh').click (evt) ->
    evt.preventDefault()
    Clock.reset()
    clock = new Clock
    clock.colorHands()
    clock.start()
  .trigger 'click'

  $('#menu .finish').click (evt) ->
    evt.preventDefault()
    $('#menu').hide()

  $('#menu .wake').click (evt) ->
    evt.preventDefault()
    $this = $ this
    if wakeLockEnabled
      noSleep.disable()
      wakeLockEnabled = false
      $this.text 'Wake Lock'
    else
      noSleep.enable()
      wakeLockEnabled = true
      $this.text 'Wake Unlock'

  Pressure.set 'body',
    end: ->
      $('#clock').css
        transform: 'scale(1)'
    change: (force, event) ->
      $('#clock').css
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
