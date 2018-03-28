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
  **GiftLink** is an intelligent gift planning program that utilizes the Facebook Graph API in order to generate gift suggestions for our users based on their friends' Facebook likes and interests. Over the course of the last few months, the Socially Gifted team has been able to implement a minimum viable system of our **GiftLink** web application. 
  
  ### Major Features and Accomplishments:
  
  - Basic user interface to enhance the visual appeal of our application
  - Logging into Facebook from our web application
  - Accessing the user's friends list and listing the friends that have authorized GiftLink
  - Listing all friends' upcoming birthdays
  - Listing the friends' interests such as music, movies, sports, etc.
  - Providing links to Amazon searches based on the listed interests
  - Created test users through the Facebook app dashboard
  - Created a privacy policy and prepared **GiftLink** for official Facebook app review
  
  ### Changes from Original Proposal:
  
  - Switched from desktop to web application framework
  - Utilizing Javascript Facebook SDK rather than Python "Requests" module
  - Implementing UI with Bootstrap rather than PyQt
  
  
  
  ## Customer Value
  No changes
  
  
  
  ## Technology
  Initially, we wanted to implement GiftLink as a desktop application using Python. This was the programming language that our team was most familiar with and it provided us with the simplest way to implement both our application GUI (using PyQt) as well as our machine learning algorithms (using Tensorflow). However, we quickly discovered that the Facebook Graph API is not very well-suited for the desktop framework and instead is simpler to implement via a web-based framework. Rather than using the Python "Requests" and "JSON" modules in order to utilize the Facebook Graph API, we realized that the Facebook SDK for Javascript greatly simplifies access to the various nodes and end-points containing relevant user information. Using the Bootstrap framework, we have created a simple user interface for our HTML webpage that intuitively allows users to find desired gift suggestions.
  
  ### Future Goals:
   
  - Create Facebook page for the application with a link to our webpage
  - Create a wish-list feature for users to add links to gifts that they would want themselves
  - Add calendar with upcoming birthdays and holidays to UI
  - Add simple reminders feature for upcoming gift-giving dates
  - Submit application for app review in order to gain full access to permissions for non-developers
  - Develop and train machine learning algorithm to intelligently generate search links based on user likes
  
  
  
  ## Team
  Frankie Betancourt:
  
  Isaac Ige:
  
  Landen McDonald:
  
  Zach Strickland:
  
  
  
  ## Project Management
  The development of our project is currently on schedule as described in our project proposal. Initially, we would have liked to have submitted the application for review by now, but upon reading the strict Facebook guidelines that must be met in order to have the application approved, we agreed that it would be best to polish off the formatting and UI elements first.
  
  
  
  ## Reflection
  
  
  
