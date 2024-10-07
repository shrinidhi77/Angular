Angular projects

<!-- Note before pushing projects to repo -->
<!-- -- Remove the .git file of the angular projects because its considered as another repo  -->

rm -rf sso/.git

<!-- Remove the Submodule Reference: You need to remove the submodule reference for example project sso. First, you can remove the submodule entry from the Git index from the root of the repo S:\visual_studio\Lex\Angular -->

git rm --cached sso <!-- sso is project -->

<!-- stage the changes -->

git add sso

<!-- commite the staged chnages  -->

git commit -m "Remove submodule references and add sso and angular_hooks files"

<!-- push  -->

git push origin master


git init -> create empty .git ur project

git status -> get status about the files which are modified are added to .git file or not , green indicates added , red indicates not added 

git add .   -> the files which are modified are added to .git file

to connect the local to git repo : git remote add origin https://github.com/shrinidhi77/Angular.git

Check the repo name : git remote -v

reset : git reset

refresh : git refresh

to stage the files : git add sso or to add all files git add .

commit the changes : git commit -m "observable routing-guard  routing-guard-demo  CHANGE_LOG viewchild"

will push to origin branch : git push origin main 

git checkout -b main

git branch

git status 

git push -u origin master

git clone https://github.com/shrinidhi77/Angular.git

to fetch all the remote branches of repo: git fetch --all