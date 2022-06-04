#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run build > deploy.log

cp ./404.html ./dist/

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init > deploy.log
git add -A > deploy.log
git commit -m 'deploy' > deploy.log
git remote add origin https://github.com/dudematthew/boost-rpg-tools.git > deploy.log

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f origin HEAD:gh-pages > deploy.log

cd -

# if you want to keep the terminal open
/bin/bash
