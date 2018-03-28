# A Software Status Report for an Intelligent Gift Planning Program
  
  **Program Name**: GiftLink 
  
  **Team Name**: Socially Gifted
  
  **Team Number**: 4
  
  **Members**:  
    
  Frankie Betancourt  
  Isaac Ige  
  Landen McDonald  
  Zack Strickland  
  
  
  ## Introduction
  **GiftLink** is an intelligent gift planning program that utilizes the Facebook Graph API in order to help our users find the ideal gifts for their friends and family based on an individual's Facebook likes and interests. Over the course of the last few months, the Socially Gifted team has been able to implement a minimum viable system of our **GiftLink** web application. 
  
  ### Major Features and Accomplishments:
  
  - Basic user interface to enhance the visual appeal of our application
  - Allowing users to log into our webapp through Facebook
  - Accessing a user's friend list and displaying those that have also authorized GiftLink
  - Listing all friends' upcoming birthdays
  - Listing the friends' interests such as music, movies, sports, etc.
  - Dynamically generating and providing links to Amazon searches based on the listed interests
  - Created test users through the Facebook app dashboard
  - Drafted a privacy policy and began preparing **GiftLink** for official Facebook app review
  
  ### Changes from Original Proposal:
  
  - Switched from developing a desktop application to web application
	  - Utilizing Facebook's JavaScript SDK rather than the Python "Requests" module to make the appropriate HTTP requests
  - Implementing UI with Bootstrap front-end web framework rather than PyQt
  
  
  
  ## Customer Value
  No changes
  
  
  
  ## Technology
  Initially, we wanted to implement GiftLink as a desktop application using Python. This was the programming language that our team was most familiar with and there were tools available to address each aspect of the software. In theory, we thought this path would expedite development and testing since all team members had some familiarity with the tools and reduce the amount of interfacing  (be able to make a basic GUI with PyQt and make testing easier when we start implementing the machine learning features with Tensorflow).

However, we quickly discovered that the Facebook Graph API is not very well-suited for the desktop environment and that it would easier to begin building this software as a web application for these reasons:

 - Inconsistencies in how pywebview was behaving on different operating systems. 
 
 - There are many security practices that Facebook puts into place that proved to be cumbersome from a developer standpoint such as:
	- Preventing cross-site request forgery by having restrictions on the origins of a request to the API
	
	 - Extremely limited time to grab the user's access token from the response and pywebview was not fit for the task

Instead of continuing to try and build **GiftLink** with Python, we realized that the Facebook's JavaScript SDK is much more developer-friendly and greatly simplifies access to the various nodes and endpoints containing relevant user information. 

With a combination of various web development libraries and frameworks (Bootstrap, jQuery, Animate CSS, Google Fonts) we have created a piece of software simple user interface for our HTML webpage that intuitively allows users to find the interests of their friends and search for products relating to that interest on Amazon.


  ### Future Goals:
   
 - Create and update a Facebook page for the **GiftLink** with a link to the webapp
 - Implement a wishlist feature for users to specify gifts that they would want themselves
 - Add calendar with upcoming birthdays and holidays to UI
 - Add simple reminders feature for upcoming gift-giving holidays
 - Submit application for app review in order to gain full access to permissions for non-developers
 - Develop and train machine learning algorithm to intelligently generate search links and suggest products based on user likes
 - Expand the online marketplace search beyond Amazon
 - Curate and reduce the list of suggested gifts to make the process more focused/seamless  
  
  ## Team
  **Frankie Betancourt**:
  
  **Isaac Ige**: Developer
  Responsibilities / Contributions:
 - Guide the direction of development
 - Discover what resources/libraries are available that may aid development
 - Implement and test program features
 - Help explain/clarify program logic

  **Landen McDonald**:
  
  **Zack Strickland**:
  
  
  
  ## Project Management
  The development of our project is currently on schedule as described in our project proposal. Initially, we would have liked to have submitted the application for review by now, but upon reading the strict Facebook guidelines that must be met in order to have the application approved, we agreed that it would be best to polish off the formatting and UI elements first.
  
  
  
  ## Reflection
