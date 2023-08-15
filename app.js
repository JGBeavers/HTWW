/*
1. What is HTTP?
Hyper Text Transfer Protocol. Set of rules to exchange data between client and server.

2. What is a URL?
Uniform Resource Locator. It is a reference to a particular resource on the internet. Included in the URL are things like the protocol such as http/https, domain, directory location and query strings.

3. What is DNS?
Domain Name System. Associates more human redable domain names to IP addresses.

4. What is a query string?
Part of the URL after the question mark which assigns values to site specific parameters.

5. What are two HTTP verbs and how are they different?
GET vs POST
GET is used to retrieve information from a server/application without changing backend information
POST is used when you want to alter data on the server 

6. What is an HTTP request?
A client communicating with a server and requesting things such as web pages to display/information.

7. What is an HTTP response?
The server is responding to the HTTP request with an HTTP response, displaying whatever is requested by the client.

8. What is an HTTP header? Give a couple examples of request and response headers you have seen.
An HTTP header will include additonal information and metadata about the request or response. Things such as specific language, date requested, status codes would be examples.

9. What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
The client's computer will start a GET request by looking to see if the resource is cached on their browser. If it does not have this information, the client will send the request to their router and ISP router if unable to find. Assuming this site exists, somewhere along the path, someone will have a record for this site and be able to send their request to the web server who will send a response to the client request over port 80 server side. There is no authentication in this http request so the responding server will reply with the requested material, assuming a valid url is used.

Part Two: Practice Tools
1. curl "https://icanhazdadjoke.com/search?term=pirate"
2. dig icanhazdadjoke.com
*/
