### Querying Nodes on the Facebook Graph API

We will be querying nodes from the Facebook Graph API in order to retrieve data from our users. 
There are two types of nodes: root nodes and non-root nodes. The main difference is that root nodes
can be directly queried, while non-root nodes must be accessed via root nodes or edges. You can find
an extensive list of root nodes [here](https://developers.facebook.com/docs/graph-api/reference). A few root nodes that may come in handy for
our application will be [Friend List](https://developers.facebook.com/docs/graph-api/reference/friend-list), [Object Likes](https://developers.facebook.com/docs/graph-api/reference/v2.12/object/likes), and [Profile](https://developers.facebook.com/docs/graph-api/reference/v2.12/profile).
