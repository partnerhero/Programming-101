### HTTP Verbs

First things first - HTTP requests can come in a number of flavors, depending on which HTTP verb is being used.
The verb is used to define the action intended by the request.

In this workshop, we'll look at the three primary verbs:

    1. GET - used for retrieving data (fetch data for a user)
    2. POST - used for creating new data (create a new user)
    3. PUT - used for replacing data (update a user)

###### Each of these verbs expects some sort of response. A GET verb would expect the data being requested, while a POST or PUT verb just expects an indication that the request was successful.

That warrants the question - how do we know if a request was successful?

##### HTTP Status Codes

These are simple numerical codes that represent status messages, depending on the outcome of a request.

The status code categories are:  
 2XX - OK  
 4XX - Resource not found  
 5XX - Server error

And some of the primary codes that are used from each category are:  
 200 - Success  
 404 - Resources not found (ever seen this?)  
 500 - Server error

### Practice Problems

Identify the verb used on the following examples:

    1. I click on Log In and a request is sent to retrieve my user information.
    2. I am on my notekeeper app. I write a new note, and click on save.
    3. On the same notekeeper app, I open an existing note and edit, then click on save.
    4. On an inventory app, I delete a note.
    5. I click on the search bar, type in "shopping list" and click Search.

Now, name the response code.

    1. On Request 1, the server does not find a user associated with my email.
    2. On request 2, the note is saved.
    3. On request 4, the note cannot be deleted because it is open by someone else.
    4. On request 5, only 1 note is found that matches the query.

###### Now we're ready to start doing HTTP requests ourselves!

But not before a [quick derail](https://github.com/partnerhero/Programming-101/blob/master/Course_15_HTTP_Requests_%2B_Promises/npm.md) :station:
