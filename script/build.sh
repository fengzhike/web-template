#!/bin/sh

cd ./
# cd $(dirname $0)
BASE_DIR=$(pwd)
DIST_DIR=${BASE_DIR}/dist

export PATH=$NODEJS_BIN_LATEST:$PATH

echo "node: $(node -v)"
echo "npm: v$(npm -v)"

if [-d $BASE_DIR/output ]
then
    rm -rf $BASE_DIR/output
fi

npm install

if [NODE_ENV==production]
then
    echo "npm run build-online"
    npm run build-online
else
    echo "npm run build-test"
    npm run build-test
fi

mkdir $BASE_DIR/output

cd $DIST_DIR

zip -rq $BASE_DIR/output/app.zip *

echo "build completed"

