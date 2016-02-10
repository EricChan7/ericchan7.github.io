gulp = require 'gulp'
$  = require('gulp-load-plugins')()
requireDir = require 'require-dir'

# Require all gulp tasks, including subfolders
blog = requireDir './gulp/tasks/blog', { recurse: yes }
blogConfig = require('./gulp/tasks/blogConfig')

for name, task of blog
  task(gulp, $, blogConfig)
