#!/bin/bash

function sync_public_assets_dev() {

    cd /home/deanvollebregt/Desktop/flatdna/frontend/build
    aws s3 sync . s3://www.flatdna-dev.com.au/
}

function sync_public_assets_prod() {

    cd /home/deanvollebregt/Desktop/flatdna/frontend
    aws s3 sync . s3://www.flatdna.com.au/
}

function update_lambda() {

    cd /home/deanvollebregt/Desktop/flatdna/lambda
    zip -r ../lambda.zip *

    cd /home/deanvollebregt/Desktop/flatdna
    aws s3 sync . s3://flatdna-backend/ --acl private --exclude "*" --include "cloudformation*" --include "lambda.zip"

    cd /home/deanvollebregt/Desktop/flatdna
    rm -rf lambda.zip

    aws lambda update-function-code --function-name flatDNA --s3-bucket flatdna-backend --s3-key lambda.zip
}
