gulp = require 'gulp'
$  = require('gulp-load-plugins')()
requireDir = require 'require-dir'

app = process.env.TARGET || 'home'

# Require all gulp tasks, including subfolders
tasks = requireDir "./gulp/tasks/#{app}", { recurse: yes }
config = require "./gulp/config/#{app}"

for name, task of tasks
  task(gulp, $, config)
