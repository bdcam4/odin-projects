https://webpack.js.org/guides/getting-started/
https://webpack.js.org/guides/development/
https://webpack.js.org/guides/asset-management/
https://webpack.js.org/guides/output-management/

mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

mkdir src
mkdir dist

touch webpack.config.js

npm install --save-dev webpack-dev-server
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
