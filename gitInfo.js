/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a tool to used to manage small and large projects allowing multiple developers to work together on the same projects";
    console.log(gitDefinition);


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "GitHub is a code hosting platform for version control of your projects and collaboration amongst peers";
    console.log(gitHubDefinition);


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = "gitInit is a command to create a new git repository";
    console.log(gitInitDefinition);


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "gitClone is a command used to make a copy of an exising repository";
    console.log(gitCloneDefinition);


//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = "git Status is a command that displays the state of the working directory and allows you to see which files are not being tracked by Git";
    console.log(gitStatusDefinition);

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "gitAdd is a command that adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit";
let gitAddCode = "git add .";
    console.log(gitAddDefinition);
    console.log(gitAddCode);



//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "gitCommit is a command used to save your changes to the local repository. You have to specify which changes you want to inlcude.";
let gitCommitCode = "git commit -m 'initial commit'";
    console.log(gitCommitDefinition);
    console.log(gitCommitCode);



//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = "gitPush is a command used to upload your local repository content to a remote repository";
    console.log(gitPushDefinition);


    