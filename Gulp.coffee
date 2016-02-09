gulp = require 'gulp'
$  = require('gulp-load-plugins')()
requireDir = require 'require-dir'
config = require('./gulp/config')

# Require all gulp tasks, including subfolders
blog = requireDir './gulp/tasks/blog', { recurse: yes }

for name, task of blog
  task(gulp, $, config)
