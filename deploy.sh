rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "初始化DatePicker组件样式" &&
git branch -M main &&
git remote add origin git@github.com:isCCcc/blanche-ui-website.git &&
#git remote add origin git@gitee.com:meatball-c/blanche-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://iscccc.github.io/blanche-ui-website/