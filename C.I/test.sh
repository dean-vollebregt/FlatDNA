#!/bin/bash

function prepare_lambda() {
    cd lambda
    npm install
}

function run_tests() {
    cd tests
    npm install
    npm test
}


function main() {
    prepare_lambda
    run_tests
}

main