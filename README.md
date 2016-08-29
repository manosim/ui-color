UIColor.xyz [![Build Status](https://travis-ci.org/manosim/ui-color.svg?branch=master)](https://travis-ci.org/manosim/ui-color)
=======================
Website: [http://www.uicolor.xyz/](http://www.uicolor.xyz/)


UIColor is a website used to convert HEX & RGB colors to **UIColor** for both **Objective-C** and **Swift** featuring a **colorpicker** and **copy to clipboard** functionality making things easier.

### Prerequisites

 - AngularJS
 - NPM
 - Grunt
 - Http-Server

### Development
You have to install **http-server** globally and then just watch and serve the files.

    npm install
    npm install http-server -g
    npm start

### Deployment
[Travis CI](http://www.travis-ci.org/) does the job. For every commit on the `master` branch, Travis runs the builds and pushes to the `gh-pages` branch.

### License

UIColor is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
