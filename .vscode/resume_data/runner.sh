#!/bin/bash
 
# Declare a string array with type
# declare -a StringArray=("ace""actual" "apage" "autumn" "caffeine" "class" "classy" "cora" "dave" "elegant" "elite" "eloquent" "even" "flat" "flat-fr" "full" "github" "jacrys" "kards" "keloran" "kendall" "kwan" "kwan-linkedin" "latex" "macchiato" "mantra" "mocha-responsive" "modern" "msresume" "onepage" "onepageresume" "orbit" "paper" "paper-plus-plus" "papirus" "pumpkin" "rocketspacer" "short" "simple-red" "slick" "spartan" "srt" "stackoverflow" "standard-resume" "tachyons-clean" "tan-responsive" "techlead" "verbum" "wraypro" )
declare -a StringArray=("ace""actual" "apage")
 
# Read the array values with space
for val in "${StringArray[@]}"; do
  echo "Andrew Cudworth-"$val
  resume export $val --format pdf --theme $val --resume .vscode/resume_data/atc_resume.json 

done

# resume export ace --format pdf --theme ace --resume .vscode/resume_data/atc_resume.json 
