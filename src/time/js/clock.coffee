require 'velocity.min'

rand = (x) ->
  Math.floor(Math.random() * x)

colorPool = ['#F44336', '#EF9A9A', '#C62828', '#EC407A', '#880E4F',
            '#CE93D8', '#F3E5F5', '#9C27B0', '#6A1B9A', '#9575CD',
            '#512DA8', '#9FA8DA', '#3F51B5', '#1A237E', '#64B5F6',
            '#81D4FA', '#80DEEA', '#00ACC1', '#00838F', '#26A69A',
            '#00695C', '#43A047', '#DCE775', '#EEFF41', '#FFFF00',
            '#FFC107', '#F57C00', '#FFA726', '#FF8A65', '#FF5722',
            '#E64A19']

syms =
  0: 'XII', 1: '', 2: ''
  3: 'III', 4: '', 5: ''
  6: 'IV', 7: '', 8: ''
  9: 'IX', 10: '', 11: ''

class Clock
  constructor: ->
    @$clock = $ '#clock'
    @$hour = $ '.hour', @$clock
    @$minute = $ '.minute', @$clock
    @$second = $ '.second', @$clock
    @$face = $ '.face', @$clock
    @$brand = $ '.brand', @$face
    @$dHour = $ '.d-hour', @$brand
    @$dMinute = $ '.d-minute', @$brand
    @$semicolon = $ '.semicolon', @brand
    $dot = $('<div>').addClass 'dot'

    r = @$face.width() / 2 - 20
    for i, s of syms
      $('<span>').text s
        .css
          left: "#{(r + 8) + r * Math.sin(i*Math.PI/6)}px"
          top: "#{(r + 8) - r * Math.cos(i*Math.PI/6)}px"
        .appendTo @$face

    $dot.clone().appendTo @$hour for [1..3]
    $dot.clone().appendTo @$minute for [1..5]
    $dot.clone().appendTo @$second for [1..7]
    @$clock.show()
    $(document).trigger 'clockReady'

  @colorHand: ($elem) ->
    $.each $('.dot', $elem), (i, v) ->
      $(v).css
        'background-color': colorPool[rand(colorPool.length)]

  colorHands: ->
    Clock.colorHand @$hour
    Clock.colorHand @$minute
    Clock.colorHand @$second

  @updateHand: ($elem, x) ->
    $elem.velocity
      rotateZ: "#{x*360}deg"
      translateY: '-100%'
      translateX: '-50%'
    , duration: 0

  start: ->
    self = this

    padZero = (n) ->
      if n < 10
        r = "0#{n}"
      else
        r = "#{n}"

    updateClock = ->
      now = new Date()
      s = now.getSeconds()
      m = now.getMinutes() + s/60
      h = now.getHours() + m/60
      if h < 12
        self.am = true
      else
        self.am = false
        h -= 12
      Clock.updateHand self.$second, s/60
      Clock.updateHand self.$minute, m/60
      Clock.updateHand self.$hour, h/12
      self.$dHour.text padZero now.getHours()
      self.$dMinute.text padZero now.getMinutes()

      if s == 0
        Clock.colorHand self.$clock

    setInterval ->
      updateClock()
    , 1000

    @$semicolon.velocity
      opacity: 0
    , loop: true, duration: 500

    updateClock()

module.exports = Clock
