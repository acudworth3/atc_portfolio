#!/bin/bash
 
# Declare a string array with type
declare -a StringArray=("ace""actual" "apage" "autumn" "caffeine" "class" "classy" "cora" "dave" "elegant" "elite" "eloquent" "even" "flat" "flat-fr" "full" "github" "jacrys" "kards" "keloran" "kendall" "kwan" "kwan-linkedin" "latex" "macchiato" "mantra" "mocha-responsive" "modern" "msresume" "onepage" "onepageresume" "orbit" "paper" "paper-plus-plus" "papirus" "pumpkin" "rocketspacer" "short" "simple-red" "slick" "spartan" "srt" "stackoverflow" "standard-resume" "tachyons-clean" "tan-responsive" "techlead" "verbum" "wraypro" )
 
# Read the array values with space
for val in "${StringArray[@]}"; do
  echo $val
done