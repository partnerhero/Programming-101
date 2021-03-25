/*
Course 14 - Github

Install instructions Git for Windows
    Everyone open command prompt
        https://git-scm.com/download/win
            All default options are good here, you can click "Next" through the installer

Create a github account
    give me your username so I can add you as a contributor
        this will let you make

Version Control:
-Version Control software is software that allows users to make small changes to large-scale projects over time.
    -Most programs and apps are much more complicated than you might initially think. Even the simplest ones can be made up of hundreds of features and each feature could have required hundreds of individual smallers tasks to create.
        -Version control allows us to isolate these individual tasks and make changes to a codebase without interrupting the program or even other developers working on the program.
            -You could probably imagine the chaos if all developers on a project worked on a shared version of a program at the same time. Ever done this on GSheets? It's a mess.
        -It also allows us to revert any changes in case a new change caused a problem in the program
-We can also use version control software to hold several different "working versions" sometimes called "builds" of a program's code that allow for different test environments like alpha and beta builds if you've ever heard of those.

We will be discussing GitHub, one of the most popular pieces of Version Control software. GitHub is very widespread and is almost universally the standard version control software. Others exist, but are only used in special cases or sometimes internally. Because GitHub is so widely used, it integrates very well with a lot of systems and is essential for any aspiring developer or designer to be familiar with. We use GitHub for PH projects as well!

GitHub Intro:
    Show your account/repo
        The code for each project in GitHub is held in what is called a repository or “repo” for short. For instance, we have a repo dedicated to Programming 101 notes that we update using GitHub.

Branches:
    GitHub handles this version control by using “branches”. A branch is basically a unique set of code changes with its own unique name. Each repo can have one or more branches, but there is usually a primary branch (often called the “master” branch) that is representative of the most up to date and stable production code of a program.

Let's look at a visual aide to understand how this works
    Excalidraw here to show basics of master<---develop----feature/bugfix branches
        Master:
            -contains the most up to date and stable verion of your code. The master branch is really what's protected by all this version control.
        Develop:
            -this is the staging branch, which basically is the place that holds all incoming changes over a given period of time often called a "sprint"; a period of time within which a team makes their changes to a project. Examople 2 weeks
        Other branches:
            -These are branches created by developers to work on the task they were set to work on during the sprint. The purpose of these branches vary depending on needs but often are branches adding new features or fixing bugs. 

    -The develop branch is used as a place to bring all new changes into, and then test them as a whole to make sure they all play nice together before "merging" all new changes from the past couple of weeks into the production code

QUESTIONS? COMMENTS?

Let git going!            

Open command prompt
    go into your node-workshop folder
        git --version
Clone my public repo: https://github.com/joshua-alex/github101
    Cloning just means you're copying it from github to your computer
        Click Code and this clipboard to copy and go back to cmd prompt
            git clone <paste link>
Move into the newly created folder in your terminal
    cd github101
Now I want you all to make some changes to this repo
    You're each going to need to create your own branch first
        git checkout -b <branch name>
            This command does two things:
                1. creates a new branch from the master branch, but only on your computer, not on the repo in github
                2. It moves you to that new branch
                    To check what branch you're on type
                        git branch
    Next you want to make a matching branch online in the github repo, called a remote branch. Local branch means on your computer and remote branch means on github
        git push -u origin <name of new branch> (the name here must match the name of your local branch otherwise it won't work for you)
            what is -u?
                -u automatically sets the upstream for this branch.
                    The upstream is basically where you will push changes to and pull changes from
            what is origin?
                "origin" is the shorthand name for the remote repository that a project was originally cloned from. More precisely, it is used instead of that original repository's URL - and thereby makes referencing much easier.


//--------------------------------------------------------------------------------

PART 2

REVIEW. quickly cover cloning, creating new branch, pushing new branch to origin

Let's make sure everyone who can participate today have been added as collaboraters.

Open command prompt and get to your folder

Ok, you're all set to make changes now!
    You're on your own branch and anything you do should not interrupt the program or anyone else
        The changes you make on this branch won't affect the code on the master branch until we review and approve your changes
Open the folder in VSCode
    You should see wosh's file woshj.js
Create your own new file with the same naming convention
    <name>.js
    add a console.log() statement to the file and save
Notice the color change in VSCode?
    This is a quick way to get an idea of what changes have been made
This next command is a very helpful command I use all the time
    git status
        Shows the changes you've made and what you've done with those changes if anything
Add your changes to the staging area
    git add .
    what is the staging area?
        a place to store changes before "committing" to them
            changes added to this staging area can easily be removed
Next we commit our changes
    what is a commit?
        a commit is is exactly that, you commit to your changes and add them to your branch so to speak
            commits act as another layer of control and organization. You can have several commits on a single branch that each could even represent smaller changes you made on the branch
    git commit -m "<message>"
        The message here should briefly represent the changes you made
            Different projects will have different requirements for what belongs in a commit message, but a brief summary is good
git status
    You don't have to run git status every time though
Cool! You made changes on your own branch! But for now the change has only been made on your own computer, so you need to push your changes to the repo in github
    git push
        This will push your changes from your local branch to the remote branch in the repo in github
            It's important to understand that only CHANGES are pushed. Changes are considered:
                Things added (like files or more lines of code) and these show up as green
                Things editted (like a line of code) and these changes show up in yellow
                Things removed (like files or lines of code) and these show up as red

Let's all go to that repo in github and reload the page to see if our branches have updated
    Click branches and then click on your branch
        The code on your branch should match that code in your text editor
We still don't have changes in the master branch yet, to do that we need to merge the changes into develop
    IMPORTANT! Even if parts of your branch that you didn't change look different than the branch you're merging to, you don't need to worry. This version control and branching only tracks CHANGES you made. On complex projects you will be asked to "merge" the staging branch into your own branch if there is a disparity, but there's no need to worry about ruining anything if you didn't change it.
        Create a PR
            show what branch merging into what branch
Review the PR
    File changes for code review
    Explain code review vs QA review
Merge changes if good
    leave comments/request changes if not
We need the new changes on o-ur computer so we can code some more
    git pull
        Check out VSCode now
Branches are usually named after the tasks that are done on them, so you rarely ever reuse the same branch for more changes.

*/
