# Sample work from SecondFunnel

This is a short excerpt of my work at SecondFunnel. Some parts of the code has been removed but the main functionality is there.

Special thanks to Fraser Harris and the team at SecondFunnel to allow me to upload an excerpt of the code on GitHub as illustration.

Main functionalities of the two apps:

### 1) api:

##### Libraries and Frameworks used:

* Django REST Framework
* Django REST Framework bulk

##### Functionalites include:

* RESTful API endpoint based on Django REST Framework
* Custom GET/POST/PATCH requests with parameter parsing
* Custom permissions set based on user profile

##### Example functionality demonstration:

The following are some example functionality with linked code to where the functions are executed. For each of these, there's both a web-view (for browsers) and a direct HTTP Request view (for when a HTTP Request is sent). The functionality of both is the same.

##### List of all objects of a certain model (Web view):

![alt tag](http://i.imgur.com/dQCoSQE.png)

##### Viewing an object information (Web View):

This is quite similar to the built-in Djano REST Framework Serializers, except that more information about the individual tile that is by default not shown is listed, such as `defaultImage`, `name` and associated `categories`.

Code sample:

https://github.com/NhatL/secondfunnel-sample-work/blob/master/api/views.py#L1455

https://github.com/NhatL/secondfunnel-sample-work/blob/master/api/views.py#L1543

![alt tag](http://i.imgur.com/FTvmo62.png)

![alt tag](http://i.imgur.com/Q8DAbLV.png)

##### Filtering products on a page based on name (Direct HTTP Request):

Filter the available products on the page based on user search criteria, such as `name` and `URL`. There's also a set limit here so that if thousands of products are available, only a few gets returned in case of overloading the server.

Code sample:

https://github.com/NhatL/secondfunnel-sample-work/blob/master/api/views.py#L1040

![alt tag](http://i.imgur.com/BgVEiPr.png)

##### PATCHing object attribute (Direct HTTP Request):

Object PATCHing using a PATCH request is allowed, with options for both individual tile patching and bulk tile patching (to reduce the amount of HTTP calls to the server)

Code sample:

https://github.com/NhatL/secondfunnel-sample-work/blob/master/api/views.py#L1479

https://github.com/NhatL/secondfunnel-sample-work/blob/master/api/generics.py#L12

![alt tag](http://i.imgur.com/25IpCzP.png)

---

### 2) dashboard:

The dashboard's primary function is to manage gift guide pages. It connects to a RESTful API system in order to display all the different tiles of a page. From the dashboard, employees can go through and make most, if not all of the wanted changes to that page.

Overall, the dashboard serves as a front-end application that enables employees to easily make updates and modifications to a gift guide page without having to touch the back-end.

##### Libraries and Frameworks used:

* JavaScript/JQuery
* Underscore.js
* Backbone.js
* Marionette
* Bootstrap

##### Functionalities include:

* Display all objects on a page with its pictures
* Edit object attributes with input validation
* Add/remove objects from the webpage from a list of items in the database
* Upload new content to the webpage, which will be automatically uploaded to external image server and updated in the database
* Any calls to the server is done by sending its appropriate HTTP Request to the server through the API above, and the result returned from the server is handled to see if any errors/mistakes/successes occurred.

##### Example functionality demonstration:

The following are some example functionality with linked code to where the functions are executed. 

##### Main dashboard page:

![alt tag](http://i.imgur.com/JfC7gZE.png)

##### Editing an object on a page, with displaying default image associated with it:

Code sample:

When the object on the page is clicked: 

https://github.com/NhatL/secondfunnel-sample-work/blob/master/dashboard/static/tiles.js#L509

The modal that's displayed when the object is clicked: 

https://github.com/NhatL/secondfunnel-sample-work/blob/master/dashboard/static/tiles.js#L606

![alt tag](http://i.imgur.com/eJ6j8Vv.png)

##### Adding an object to the page:

When the add button is clicked: 

https://github.com/NhatL/secondfunnel-sample-work/blob/master/dashboard/static/tiles.js#L1907

The modal that's displayed when add button is clicked: 

https://github.com/NhatL/secondfunnel-sample-work/blob/master/dashboard/static/tiles.js#L1176

![alt tag](http://i.imgur.com/ZLMi0ZR.png)
