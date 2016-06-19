gulp = require 'gulp'
$  = require('gulp-load-plugins')()
requireDir = require 'require-dir'

process.env.TARGET ||= 'home'

console.log "------->>> Building #{process.env.TARGET}..."

# Require all gulp tasks, including subfolders
tasks = requireDir "./gulp/tasks", { recurse: yes }
config = require "./gulp/config/#{process.env.TARGET}"

for name, task of tasks
  task(gulp, $, config)
