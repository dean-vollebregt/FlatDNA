#!/bin/bash

function update_lambda() {
    cd lambda
    npm install
    zip -r ../lambda.zip *
    cd ..
    aws s3 sync . s3://flatdna-backend/ --acl private --exclude "*" --include "lambda.zip"
    rm -rf lambda.zip
    aws lambda update-function-code --function-name flatDNA --s3-bucket flatdna-backend --s3-key lambda.zip
}

function sync_public_assets() {
    cd public
    aws s3 sync . s3://www.flatdna.com.au/
}

function main(){
  update_lambda
  sync_public_assets
}

main