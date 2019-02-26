#!/usr/bin/env bash

BRANCH=gh-pages
TARGET_REPO=manosim/ui-color.git
DIST_FOLDER=build

if [ "$TRAVIS_PULL_REQUEST" == "false" ] && [ "$TRAVIS_BRANCH" == "master" ]; then
    echo -e "Starting deployment to Github Pages\n"

    if [ "$TRAVIS" == "true" ]; then
        git config --global user.email "hello@manos.im"
        git config --global user.name "manosim"
    fi

    # Using token clone gh-pages branch
    git clone --quiet --branch=$BRANCH https://${GH_TOKEN}@github.com/$TARGET_REPO built_website > /dev/null

    # Go into directory and copy data we're interested in to that directory
    cd built_website
    rsync -rv --exclude=.git  ../$DIST_FOLDER/* .

    # Add, commit and push files
    git add -f .
    git commit -m "Deployment - Travis build $TRAVIS_BUILD_NUMBER"
    git push -fq origin $BRANCH > /dev/null

    echo -e "Deployment completed.\n"
else
  echo -e "Deployment cancelled. It's either a PR or not the master branch.\n"
fi
