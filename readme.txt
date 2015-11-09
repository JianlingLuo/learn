$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"

注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址


$ mkdir learngit
$ cd learngit
$ pwd
/Users/michael/learngit
pwd命令用于显示当前目录


第二步，通过git init命令把这个目录变成Git可以管理的仓库：
$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/

第一步，用命令git add告诉Git，把文件添加到仓库：
$ git add readme.txt

第二步，用命令git commit告诉Git，把文件提交到仓库：
$ git commit -m "wrote a readme file"

要随时掌握工作区的状态，使用git status命令。

如果git status告诉你有文件被修改过，用git diff可以查看修改内容。