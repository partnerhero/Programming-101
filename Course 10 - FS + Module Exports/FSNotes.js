//FILE SYSTEM!
​
//INTRO
/*
    Over the past few sessions, we've discussed how to
    get data from a remote server using HTTP requests.
    However, assume the following scenario:
​
    You're designing your business' new website and 
    want to upload a snazzy new logo that you've created.
​
    Based on what we've learned, you could: 
    Set up a remote server, upload the data to a remote 
    server, set up an API endpoint, and then send a
    request for the information, and wait for the request 
    to be fulfilled. This needlessly wastes both time and processing power 
    for a file that we already have on our machine. So what do we do?
​
    Let's simply pull it from our local machine!
​
    Node.js has a built-in dependency known as the file 
    system that makes it easy to access files on your 
    local machine. Course 10 will be all about how we 
    utilize the file system to perform our CRUD procedures 
    on local files.
​
    However, let's quickly touch on a few concepts first...
*/
​
//---------------------------------------------------------------------------------
​
//FILE ENCODING
/*
    File encoding needs to be specified on certain file 
    system methods. File encoding, essentially, is a set 
    of rules that computers use to interpret 0 and 1 
    bits to human-readable language.
​
    UTF-8 is a common standard, and one that we will use 
    in this course. 
    
    This is a very brief demo of how encoding works. We 
    won't be doing the conversions ourselves. But it's
    good to understand the general concept. 
​
    UTF-8 works as such: each character has a value, 
    and each value is then represented using bits.
    For example: 
    1. The word "hello" is comprised of the letters 
        H-E-L-L-O. 
    2. These numbers are represented by the values
        104 101 108 108 111.
    3. These values can be written using 8-bit "bytes" as:
        01101000 01100101 01101100 01101100  01101111
    4. So, when we specify we are using UTF-8 encoding, 
    the computer receives the bytes above and understands 
    how to decipher them into the word "hello".
*/
​
//---------------------------------------------------------------------------------
​
//"THROW"
/*
    We have used the phrase when talking about errors in 
    the context of promises, but we will explicitly be
    using the throw keyword. "Throwing an error" simply 
    means that code stops and an error is generated.
    The "throw" keyword allows us to define custom 
    errors, which we refer to as "throwing an exception".
​
    We will see this line of code a lot:
    "if (err) throw err;" 
    Remember that the if statement evaluates a truthy or 
    falsey value. Then, this line simply means: 
    "if the error exists, throw it."
*/
​
//---------------------------------------------------------------------------------
​
//Asynchronous vs Synchronous methods
/*
    All fs methods have an asynchronous and a synchronous 
    version. Does anybody remember the difference
    between the two?
​
    (From module 9: "Anything that requires waiting for.")
​
    Javascript is generally synchronous: meaning a line 
    of code will run and finish before the next line of 
    code will execute. Dependencies like axios and fs 
    allow us to perform asynchronous operations.
​
    The methods we will talk about today will all be 
    asynchronous, though each of them has a synchronous
    counterpart. The advantage of having these 
    asynchronous methods is it allows us to build more 
    complex methods by combining asynchronous methods.
*/
​
//---------------------------------------------------------------------------------
​
//NAVIGATING THE TERMINAL
/*  
    We're going to be navigating through the terminal 
    more and more as we add additional files, imports, 
    and dependencies to our project.
​
    As a quick reminder, we can use "cd" to move around 
    in directories.
    "cd .." allows you to move back a file.
    "cd <path/folder name>" allows you to access that folder.
    "cd" will take you to your root directory.
    "ls" (or "dir" on Windows) will allow you to view the folders available to you.
*/
​
//FILE SYSTEM INTRO:
/*
('fs' is​ technically a package, but it is prebuilt into
Node.js. Thus, we do not need to install it with npm.)
​
To include the File System module in your file, use the 
require() method like we did with axios:
const fs = require('fs');
​
This gives us a variable we can call to access the fs
methods.
​*/
​
//---------------------------------------------------------------------------------
​
// fs.writeFile
/*  
    fs.writeFile() writes data to a file. 
    -If a file does not exist, it creates one. 
    -If the file does exist, it replaces it.
​   
    Example:
    fs.writeFile(fileName, fileContents, err => {
        if (err) throw err;
        console.log('The file was written!');
    });
​
    Let's write a file within a 'myFolder' folder!
*/
​
//---------------------------------------------------------------------------------
​
// fs.appendFile
/*
    fs.appendFile appends or adds content to an existing 
    file. If a file by the specified name does not exist, it 
    creates a new file.​
​
    // fs.appendFile example
    fs.appendFile(fileName, additionalText, err => {
        if (err) throw err;
        console.log(`The data was appended!`);
    });
​
    Let's append text to our file!
*/
​
//---------------------------------------------------------------------------------
​
//fs.copyFile
/*
    This method will allow you to copy an existing file into a 
    destination file. 
    
    NOTE: If the destination file exists and contains information, 
    that information will be overwritten.
​
    Side Note:
    Relative Paths:
    We can avoid having to write out entire file paths by using 
    relative paths. These are paths specified based on the directory 
    that we're in. For instance, I'm currently working in the 
    workspace:
    /Users/danielblumberg/Programming 101/Course10/
    -We have referenced myFolder previously by simply calling /myFolder/
    -If I want to reference a file in the Programming 101 folder, I can
    refer to it relative to the Course10 directory, like so:
    ../testFile.txt
​
​
    fs.copyFile example:
​
    const fs = require('fs');
​
    fs.copyFile(sourceFile, destinationFile, (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });
    
    The testFile.txt file in Programming 101 actually exists, so let's
    copy text.txt to it.
*/
​
//---------------------------------------------------------------------------------
​
// fs.readFile
/*
    fs.readFile reads the contents of a file without 
    opening or closing the file itself.
​
    Note: readFile requires an encoding specification.
​
    Examples:
​
    fs.readFile with file that's in the same directory:
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
​
    Note that if the file is not in the same directory,
    we can specify a relative path to read a file in any
    directory we can access.
*/
​
//---------------------------------------------------------------------------------
​
//fs.rename
/*
    As you can probably guess by the method name, we can also
    utilize the file system to update the file's name.
​
    It will look like this:
​
    const fs = require('fs');
​
    fs.rename('myfile.txt', 'myrenamedfile.txt', (err) => {
        if (err) throw err;
        console.log('File Renamed!');
    });
    
    text.txt is a rather bland name. Let's change the name to
    something more descriptive, like "Course10Example.txt".
*/
​
//---------------------------------------------------------------------------------
​
//fs.unlink
/*
    Perhaps the only method that isn't pretty obvious from the name,
    this method is used to delete a file on your system. 
    Make sure you want to delete the file!
​
    fs.unlink example:
​
    const fs = require('fs');
​
    fs.unlink('/src/text.txt', (err) => {
        if (err) throw err;
        console.log('successfully deleted /src/text.txt');
    });
​
    Finally, let's delete the file we've been working with.
*/
​
//QUICK RECAP! Match the correct method to the question.
//writeFile
//appendFile
//copyFile
//readFile
//rename
//unlink
//Questions: 
//1.Which method(s) is/are used to change a file's name?
​
//2.Which method(s) is/are used to copy an existing file?
​
//3.Which method(s) is/are used to delete a file?
​
//Tougher questions!:
​
//4.Which method(s) is/are used to create a file?
​
//5.Which method(s) is/are used to overwrite an existing file?
