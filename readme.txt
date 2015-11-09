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