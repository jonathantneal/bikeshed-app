# Bikeshed App [<img src="https://rawgit.com/jonathantneal/bikeshed-app/master/assets/bikeshed.svg" alt="" width="90" height="90" align="right">][Bikeshed App]

[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]

[Bikeshed App] lets you easily create and edit web specifications.

[Bikeshed] is a spec-generating tool that takes in lightly-decorated Markdown
and spits out a full spec, with cross-spec autolinking, automatic generation of
indexes/ToC/etc, and many other features.

This project is entirely inspired by but not currently affiliated with 
[Bikeshed].

## Test

```sh
# clone this repo
git clone git@github.com:jonathantneal/bikeshed-app.git

# goto this repo
cd bikeshed-app

# install dependencies
npm install

# run the bikeshed app
npm start
```

[cli-url]: https://travis-ci.org/jonathantneal/bikeshed-app
[cli-img]: https://img.shields.io/travis/jonathantneal/bikeshed-app.svg
[win-url]: https://ci.appveyor.com/project/jonathantneal/bikeshed-app
[win-img]: https://img.shields.io/appveyor/ci/jonathantneal/bikeshed-app.svg

[Bikeshed App]: https://github.com/jonathantneal/bikeshed-app
[Bikeshed]: https://tabatkins.github.io/bikeshed/

[linux64]: https://github.com/jonathantneal/bikeshed-app/releases/download/0.1.0/Bikeshed.linux64.zip
[osx64]: https://github.com/jonathantneal/bikeshed-app/releases/download/0.1.0/Bikeshed.osx64.zip
[win64]: https://github.com/jonathantneal/bikeshed-app/releases/download/0.1.0/Bikeshed.win64.zip
