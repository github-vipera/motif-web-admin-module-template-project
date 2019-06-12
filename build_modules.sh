#!/bin/bash

ng build custom-module-test-app $1 $2
ng build custom-web-admin-module $1 $2
cp -R projects/custom-web-admin-module/src/assets dist/custom-web-admin-module
echo Assets copied to dist folder
