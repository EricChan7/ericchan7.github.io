gulp = require 'gulp'
$  = require('gulp-load-plugins')()
requireDir = require 'require-dir'

process.env.APP ||= process.env.app || 'home'

console.log "------->>> Building #{process.env.APP}..."

# Require all gulp tasks, including subfolders
tasks = requireDir "./gulp/tasks", { recurse: yes }
config = require "./gulp/config/#{process.env.APP}"

for name, task of tasks
  task(gulp, $, config)
