/*
Course 13!

Version Control:
-Version Control software is software that allows users to make small revisions to a large-scale project over time. 
-Each of these revisions (or “versions”/“builds”) constitutes a new software update. 
-A project can be reverted to previous versions as needed. This allows common version concepts such as “alpha builds” and test environments.
-Version Control software also allows multiple people to work on various aspects of a codebase simultaneously without overwriting each other.

We will be discussing GitHub, one of the most popular pieces of Version Control software. GitHub integrates with a lot of systems, making it a go-to for larger projects. (GitHub is used for several internal PH projects.)

GitHub Intro:
Each overarching project in GitHub is encapsulated in what is called a repository, or “repo” for short. For instance, PH’s Beacon has a backend repo and a frontend repo. Programming 101 has its own repo that we will use for the purposes of this course.

Branches:

GitHub handles versions by way of using “branches”. A branch essentially is a unique set of code changes with a unique name. Each repository can have one or more branches. There is a main branch (called the “master” branch and usually representative of the most up-to-date production code) from which branches can deviate. A typical code update, from inception to production, works as follows:

Branches are set up: master branch -> staging branch -> [feature branch 1, feature branch 2, ...., bugfix branch 1, bugfix branch 2, …]

A branch’s lifecycle:
1. A new branch is created locally based off of the most up-to-date version of staging or master (we will use master for this course).
2. A new branch is created remotely so that these changes can be checked out and viewed by other people on the project without interrupting work on the local branch. These local and remote iterations are linked.
3. Work is done on the local branch.
4. Once work on the local branch is completed, these changes are pushed to the remote branch on the server so that they can be viewed by others in the repo.
5. Once the code changes are approved, this remote branch is merged back into the staging branch.
6. Once significant updates have been merged to the staging branch, the latest version of this branch is tested and merged into the master branch.
7. The master branch is then pushed to production.

Pull Requests (“PRs”):
Version Control makes it easy to verify code changes within a controlled environment. Recall in step 4 above, changes were pushed to our remote branch so that they can be reviewed. Practically, this review process occurs in GitHub through what we call a Pull Request, or “PR”. 

PRs allow us to:
-Merge our changes into an existing branch (generally the staging branch, but not always).
-View a snapshot of the code changes.
-Give feedback on the code and request changes/updates.
-Quickly approve and merge code.

We will see an example of a PR as we move forward.

*/

//--------------------------------------------------------------------

/* Cloning and working on a repo

1. Log in to Github and click on the repository you wish to clone

https://github.com/partnerhero/Programming-101

2. Click the green Code button to reveal the URL and click the clipboard icon to copy it

3. Navigate to your desired local project folder in command prompt
    -the cloning process will create a new folder with your project already inside

4. git clone <URL>
    -this puts all the files on your computer // AND goes through the init process so you don't have to do git init beforehand

5. git checkout -b <new branch name>
    -this creates a new branch and moves you to that branch
        -changes that you make to your code on this branch will be separate from the master branch

6. git push -u origin <your new branch name>
    -this creates a remote branch on github that you can push your changes to

7. Make your changes
    -create a folder with your name on it and add an index.js file that logs something to the console

8. git status once you've saved your changes
    -this will show you any files that haven't been added or committed yet

9. git add .
    -this adds all your save changes so you can commit them

10. git commit -m "<brief message here>"
    -this commits your changes to your local branch

11. git push
    -pushes your changes to the remote branch 
    -can also use git push origin <remote branch name>

12. You should see your branch in the github now

13. git checkout someone else's branch
    -doesn't work, need to git pull

14. git pull
    -now I can checkout a new branch

15. You can create a PR by clicking compare and create PR

16. Go through pull request review process

17. Make sure to always git pull
*/

/*
Side note: let's talk about stashing changes
    If you need to switch branches because a more urgent ticket came through, but you're not ready to commit your changes on your current branch.
        git add .
            must add your changes to be able to stash them
        git stash save "<message>"
            notice reverted changes in text editor
        git stash list
            the stash is named. if it's the fist one, it looks like this: stash@{0}
        git stash apply <stash name>
            see the changes brought back in text editor
            apply does not not remove the stash though
        git stash list
            see it's still there
        git stash pop
            applies changes from first stash in list and removes stash from the list
        git stash drop stash@{0}
            removes a single stash
        git stash clear
            removes all stashes
*/

//----------------------------------------------------------------------

/* Creating your own new repo and connecting it to github

1. Navigate to a local project folder from your command prompt that you want to make into a github repo

2. git init
    -initializes the git process and creates a brand new repo

3. git add .
    -adds all files to a staging area ready to be commited

4. git commit -m "<notes>"
    -commits the changes

5. Log in to your github account and click on new repository and create repository

6. You should see some instructions there on how to proceed

7. git remote add origin https://github.com/username/new_repo

8. git push -u origin master
    -this pushes your local repo to your github account

9. Check your github account and see that your work has been pushed to github!

*/

//----------------------------------------------------------------------

/*
GitHub Homework

1. Go to https://github.com/partnerhero/Programming-101
2. Click the green "Code" button and copy the clone link
3. In your command line, navigate to a folder where you'd like the Programming 101 repo to exist
4. Type git clone <paste the clone link here> and push enter (Note: If you already have this repo, then you can navigate to that folder and type git pull instead)
5. Create a local branch by typing git checkout -b your_name_course13HW
6. Create a remote branch of the same name by typing git push -u origin <your branch name>
7. From your text editor, create a new folder within the Course 13 folder called <your name>'s HW
8. In your new folder, write a quick program in an index.js file that when run, logs the following to the console:
#
##
###
####
9. When you're finished writing your program, save your changes and type git add . to add all of your changes
10. Type git commit -m "<brief message summarizing changes" to commit the changes to your local branch
11. Type git push in order to push your changes to your remote branch
12. Go to the PH Programming-101 repo and create a Pull Request for your remote branch
13. Request Daniel (blumdani) and Josh (joshua-alex) as Reviewers on your PR and submit it

We will both be notified of this and will check your work.

*/
