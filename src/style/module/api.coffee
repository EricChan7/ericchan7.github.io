request = require 'superagent'

basic_encode = (a, b) ->
  'Basic ' + btoa("#{a}:#{b}")

module.exports = class Api
  constructor: (url, version) ->
    @api = "#{url}/#{version}"
    @request = request
    @email = localStorage.getItem 'email'
    @token = localStorage.getItem 'token'

  login: (email, password) ->
    self = @
    new Promise (resolve, reject) ->
      self.request.post "#{self.api}/login"
        .send
          user:
            email: email
            password: password
        .end (err, res) ->
          if !err
            localStorage.setItem 'email', email
            localStorage.setItem 'token', res.body.token
            self.email = localStorage.getItem 'email'
            self.token = localStorage.getItem 'token'
          if !err then resolve(res) else reject(err)

  register: (email, password) ->
    self = @
    new Promise (resolve, reject) ->
      self.request.post "#{self.api}/signup"
        .send
          user:
            email: email
            password: password
        .end (err, res) ->
          if !err
            localStorage.setItem 'email', email
            localStorage.setItem 'token', res.body.token
            self.email = localStorage.getItem 'email'
            self.token = localStorage.getItem 'token'
          if !err then resolve(res) else reject(err)

  getGalleries: () ->
    self = @
    new Promise (resolve, reject) ->
      self.request.get "#{self.api}/galleries"
        .set
          Authorization: basic_encode(self.email, self.token)
        .end (err, res) ->
          if !err then resolve(res) else reject(err)

  updateGalleries: (name) ->
    self = @
    new Promise (resolve, reject) ->
      self.request.put "#{self.api}/galleries/#{name}"
        .set
          Authorization: basic_encode(self.email, self.token)
        .end (err, res) ->
          if !err then resolve(res) else reject(err)
