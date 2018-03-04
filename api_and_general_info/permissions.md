# Necessary API Permissions
- [public_profile](https://developers.facebook.com/docs/facebook-login/permissions/#reference-public_profile) - This is implicitly 
requested by default, and is the minimum necessary permission for a user to interact with the application. This also includes some 
demographic information (including information like age_range, which is already processed by Facebook) which could potentially be useful 
to us if we want to implement special demographic-based suggestion features later on.
- [user_friends](https://developers.facebook.com/docs/facebook-login/permissions/#reference-user_friends) - Note that this will only
give us access to those friends of the user who are also users of the application. This will provide us with edges to the nodes for each 
such friend, giving us equal access to those users as the initial.
- [user_likes](https://developers.facebook.com/docs/facebook-login/permissions/#reference-user_likes) - Note that requesting this 
permission will trigger a security review of our application by Facebook, as will all of the following. Our purposes fall within the 
criteria listed under "Common Uses", as they do for each of the following.
- [user_actions.music](https://developers.facebook.com/docs/facebook-login/permissions/#reference-user_actions_music)
- [user_actions.books](https://developers.facebook.com/docs/facebook-login/permissions/#reference-user_actions_books)
- [user_actions.video](https://developers.facebook.com/docs/facebook-login/permissions/#reference-user_actions_video)

Unfortunately, there does not appear to be a permission equivalent to one of the above for games or video games. The [user_games_activity]
(https://developers.facebook.com/docs/facebook-login/permissions/#reference-user_games_activity) only gives access to achievements and 
activity on Facebook platform games, rather than a list of liked or played games in general. We'll have to make use of user_likes for this 
purpose.
