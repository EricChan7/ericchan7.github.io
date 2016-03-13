$ = jQuery = require 'jquery'

$ ->
  console.log 'Ready'
  $menu = $ '.menu'
  $modal = $ '.modal'
  $close = $ '.close-button'

  $menu.on 'click', (evt) ->
    evt.preventDefault()
    $modal.addClass 'open'
    $('#main-container').addClass 'overlay-open'

  $close.on 'click', (evt) ->
    evt.preventDefault()
    $modal.removeClass 'open'
    $('#main-container').removeClass 'overlay-open'
