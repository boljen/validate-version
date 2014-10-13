# validate-version (NodeJS)

A lightweight package to validate (major.minor.bugfix) version strings. It's not
the holy grail but it's particularly lightweight. Use the semver package or
modify this package if you need more advanced usage.

## Installation

Basic usage is pretty straight forward

    npm install validate-version

    var validateVersion = require('validate-version');

## validateVersion.validate(version, extended)

Here are some examples:

    validateVersion.validate("1.0.0");              // true
    validateVersion.validate("1.0.a");              // false
    validateVersion.validate("1.0.0-master");       // false
    validateVersion.validate("1.0.0-master", true); // true
