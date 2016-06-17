window.$ = window.jQuery = require 'jquery'
require 'velocity.min'
noSleep = require 'nosleep'

enabledSleepLock = false
colorPool = ['#F44336', '#EF9A9A', '#C62828', '#EC407A', '#880E4F', '#CE93D8', '#F3E5F5', '#9C27B0', '#6A1B9A', '#9575CD', '#512DA8', '#9FA8DA', '#3F51B5', '#1A237E', '#64B5F6', '#81D4FA', '#80DEEA', '#00ACC1', '#00838F', '#26A69A', '#00695C', '#43A047', '#DCE775', '#EEFF41', '#FFFF00', '#FFC107', '#F57C00', '#FFA726', '#FF8A65', '#FF5722', '#E64A19']

enableNoSleep = () ->
  noSleep.enable()
  document.removeEventListener('touchstart', enableNoSleep, false)

$ ->
  $clock = $ '#clock'
  $dot = $('<div>').addClass 'dot'
  $hour = $ '.hour'
  $minute = $ '.minute'
  $second = $ '.second'

  $dot.clone().appendTo $hour for [1..3]
  $dot.clone().appendTo $minute for [1..5]
  $dot.clone().appendTo $second for [1..7]

  $('body').click ->
    if enabledSleepLock
      noSleep.disable()
    else
      document.addEventListener('touchstart', enableNoSleep, false)
    enabledSleepLock = !enabledSleepLock

  rand = (x) ->
    Math.floor(Math.random() * x)

  colorHand = ($elem) ->
    $.each $('.dot', $elem), (i, v) ->
      $(v).css
        'background-color': colorPool[rand(colorPool.length)]

  colorHands = ->
    colorHand $hour
    colorHand $minute
    colorHand $second

  updateHand = ($elem, x) ->
    $elem.velocity
      rotateZ: "#{x*360}deg"
      translateY: '-100%'
      translateX: '-50%'
    , duration: 0

    if x == 0
      colorHands()

  updateClock = ->
    now = new Date()
    s = now.getSeconds()
    m = now.getMinutes() + s/60
    h = now.getHours() + m/60
    updateHand $second, s/60
    updateHand $minute, m/60
    updateHand $hour, h/24

  initFace = () ->
    $face = $ '.face'
    syms =
      0: 'XII'
      1: ''
      2: ''
      3: 'III'
      4: ''
      5: ''
      6: 'IV'
      7: ''
      8: ''
      9: 'IX'
      10: ''
      11: ''

    for i, s of syms
      $('<span>').text(s).appendTo $face

    $syms = $ 'span', $face
    r = $face.width() / 2 - 16
    $.each $syms, (i, s) ->
      $(s).css
        left: (r + 8) + r * Math.sin(i*Math.PI/6)
        top: (r + 8) - r * Math.cos(i*Math.PI/6)

  setInterval ->
    updateClock()
  , 1000

  initFace()
  colorHands()
  updateClock()
  $clock.show()
