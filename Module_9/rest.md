### Important Concepts

Before we start making requests ourselves, there are two concepts that we need to understand:


#### REST ~in peace~

REST stands for Representational State Transfer, and it is a software design pattern for network architecture used to interact with data entities. This is done through CRUD:

1. Create :hatching_chick:
2. Read :mag:
3. Update :pencil:
4. Destroy :fire: 

Let's put these into context:

Imagine we have a notekeeper webapp that allows users to create, edit, and delete notes. Technically, each of these three actions requires a different "interaction" with our data entity (which in this case are the notes). 

- Creating a note would require us to add a new note to our database
    - This note should have an ID
- Reading a note would require us to look up that note in our database
    - Look up by ID
- Updating a note would require us to first look for an existing note, and then overwrite it
    - Look up by ID, update "Last Edited" field
- Deleting a note (similar to editing) would require us to first look it up before deleting 
    - Look up by ID, updated "Archived" to true

Are you telling me that we need to do this every time we want to just edit a simple note on my database?

:bangbang: yes :bangbang:

#### Just Kidding - API

REST allows developers to standardize CRUD actions by creating "endpoints" in our application that do these things. These endpoints are usually exposed in what we call an API, or application programming interface.

(an endpoint, is just a URL within our app that can receive requests regarding a certain action.)

In our case, our API would be a simple set of 4 endpoints, one for each CRUD action. This really simplifies the flow of our app, since it allows us to really cleanly define the requirements for each action that affects an entity in our database. 

For example:  
https://notekeeper.com/api/createnote  
https://notekeeper.com/api/readnote  
https://notekeeper.com/api/updatenote  
https://notekeeper.com/api/deletenote  

Now, how do we use CRUDs in real life? How will we use CRUDs today?

Through :three: HTTP verbs 

