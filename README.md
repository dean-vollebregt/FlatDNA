#!/bin/bash

# remove files
rm Lambda/*.zip

# zip files for deployment
cd Lambda
zip -r ../flatdna-backend.zip *

cd ../..

# sync files to s3 for Lambda deployment
aws s3 sync . s3://flatdna-backend/ --acl private --exclude "*" --include "flatdna-backend.zip" --include "cloudformation.yml"

# update lambda functions
aws lambda update-function-code --function-name flatdna --s3-bucket flatdna-backend --s3-key flatdna-backend.zip


# sync files to s3 for static content deployment
cd public
aws s3 sync . s3://flatdna/ --acl public-read