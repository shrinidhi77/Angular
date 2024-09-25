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
