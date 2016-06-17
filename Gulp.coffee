gulp = require 'gulp'
$  = require('gulp-load-plugins')()
requireDir = require 'require-dir'

app = process.env.TARGET || 'home'

console.log "Building #{app}..."

# Require all gulp tasks, including subfolders
tasks = requireDir "./gulp/tasks", { recurse: yes }
config = require "./gulp/config/#{app}"

for name, task of tasks
  task(gulp, $, config)
