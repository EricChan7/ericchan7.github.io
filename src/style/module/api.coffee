request = require 'superagent'

basic_encode = (a, b) ->
  'Basic ' + btoa("#{a}:#{b}")

errorHandle = (reject) ->
  if err.status == 401
    localStorage.setItem 'email', undefined
    localStorage.setItem 'token', undefined
    self.email = localStorage.getItem 'email'
    self.token = localStorage.getItem 'token'

module.exports = class Api
  constructor: (url, version) ->
    @api = "#{url}/#{version}"
    @request = request
    @email = localStorage.getItem 'email'
    @token = localStorage.getItem 'token'

  is_logged_in: ->
    @token?

  login: (email, password) ->
    self = @
    new Promise (resolve, reject) ->
      self.request.post "#{self.api}/login"
        .send
          user:
            email: email
            password: password
        .end (err, res) ->
          if !err && res.body.token?
            localStorage.setItem 'email', email
            localStorage.setItem 'token', res.body.token
            self.email = localStorage.getItem 'email'
            self.token = localStorage.getItem 'token'
            resolve(res)
          else
            reject(err)

  register: (email, password) ->
    self = @
    new Promise (resolve, reject) ->
      self.request.post "#{self.api}/signup"
        .send
          user:
            email: email
            password: password
        .end (err, res) ->
          if !err && res.body.token?
            localStorage.setItem 'email', email
            localStorage.setItem 'token', res.body.token
            self.email = localStorage.getItem 'email'
            self.token = localStorage.getItem 'token'
            resolve(res)
          else
            reject(err)

  logout: () ->
    self = @
    new Promise (resolve, reject) ->
      self.request.del "#{self.api}/logout"
        .set
          Authorization: basic_encode(self.email, self.token)
        .end (err, res) ->
          if !err
            localStorage.setItem 'email', undefined
            localStorage.setItem 'token', undefined
            self.email = localStorage.getItem 'email'
            self.token = localStorage.getItem 'token'
            resolve(res)
          else
            reject(err)

  getGalleries: () ->
    self = @
    new Promise (resolve, reject) ->
      self.request.get "#{self.api}/galleries"
        .set
          Authorization: basic_encode(self.email, self.token)
        .end (err, res) ->
          if !err
            resolve(res)
          else
            errorHandle()
            reject(err)

  randomGalleries: (n) ->
    self = @
    new Promise (resolve, reject) ->
      self.request.get "#{self.api}/galleries/random/#{n}"
        .set
          Authorization: basic_encode(self.email, self.token)
        .end (err, res) ->
          if !err
            resolve(res)
          else
            errorHandle()
            reject(err)

  updateGalleries: (name) ->
    self = @
    new Promise (resolve, reject) ->
      self.request.put "#{self.api}/galleries/#{name}"
        .set
          Authorization: basic_encode(self.email, self.token)
        .end (err, res) ->
          if !err
            resolve(res)
          else
            errorHandle()
            reject(err)
