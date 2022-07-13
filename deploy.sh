rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:isCCcc/blanche-ui-website.git &&
# git remote add origin git@gitee.com:meatball-c/blanche-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://iscccc.github.io/blanche-ui-website/