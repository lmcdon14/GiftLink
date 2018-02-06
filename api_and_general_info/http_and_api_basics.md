What is HTTP?
=============
Hypertext Transfer Protocol (HTTP) is a protocol that basically lets 
clients and servers communicate with one another. The main way we will 
be using HTTP is to make requests to the Facebook Graph API. If you want an 
overview of HTTP as a whole you can visit [Wikipedia](https://en.wikipedia.org/wiki/Markdown). 

The Facebook Graph API
======================
The Graph API is how data gets into, and out the Facebook platform. It 
utilizes HTTP requests to query data and perform other tasks. Essentially, 
data on Facebook is represented in 3 ways: 
* nodes: [users](https://developers.facebook.com/docs/graph-api/reference/user) (our primary concern), pages, and comments
* edges: connections between nodes: albums, photos, friends, and likes
* fields: information about nodes: this will include things like gender, 
  name, home town, and so on.
  
More information on the graph API can be found [here](https://developers.facebook.com/docs/graph-api/overview)

Getting Data
============
Before making a request, you will need an [access token](https://developers.facebook.com/docs/facebook-login/access-tokens/). As Facebook defines it, 
an access token "provides temporary, secure access to Facebook APIs." They 
basically will just serve as a way for users to read over permissions and
hand them to the app. 

The way that we will be retrieving data will be through HTTP [GET](https://www.w3schools.com/tags/ref_httpmethods.asp) requests. You can easily make
HTTP GET requests with the [requests](http://docs.python-requests.org/en/master/) library. 
