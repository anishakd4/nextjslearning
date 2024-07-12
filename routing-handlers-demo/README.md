## Route Handlers

- We can also create custom request handlers for our routes using a feature called custom route handlers.
- Unlike page routes which will respond with HTML content, route handlers allow you to create Restful endpoints giving you full control over the response. we can perform CRUD operations with the database similar to node + express.js app.
- There is no overhead to create and configure a separate server. Nextjs provides everything you need out of the box.
- Route handlers are also great for making external API requests.
- Route handlers run server side ensuring that sensitive information like private keys remain secure and never gets shipped to the browser.
- Routing handlers are equivalent of API routes in Page router.
- Similar to page routes, route handlers must also be placed within the app folder.
- function name matching HTTP verb is another convention that we must follow.
- Similar to pge routes route handlers can be organized in folders and nested within sub folders. This allows for cleaner organization and easier management of routes. http://localhost:3000/dashboard/users http://localhost:3000/dashboard
- We have to create a Route.ts that exports HTTP verbs as functions [Demo](http://localhost:3000/hello)
- We have to be mindful about potential conflicts between page routes and route handlers. For example route.ts file and page.tsx file in the same profile folder. In this case route.ts file will handle the request by default. To avoid this conflict, we can move the route.ts file into a API directory.

## Handling GET Request

- data.ts inside comments is not a Nextjs convention. http://localhost:3000/comments
- Every route handler function receives the standard web request model object as a parameter. From this request object we are going to extract the JSON body specified as part of our request.
- For a POST request a 201 status of resource creating is more appropriate. If we were to return Response.Json object status would remain 200.

## Dynamic Route Handlers

- new folder id wrapped in square brackets is created.
- handler function receives 2 parameters request and context.
- Currently only value of context is params which is an object containing the dynamic route parameters for the current route. http://localhost:3000/comments/3

## Handling PATCH Request

- A patch request applies partial modifications to a resource.

## Handling DELETE Request

- Up until we have been defining the request type as the standard request API. However in the context of Nextjs the type we are actually dealing with in next request.
- Next request object provides convenient methods for managing query parameters with ease.

## Redirects in Route Handlers

- redirect is use to handle redirects. http://localhost:3000/comments/8
- in network tab request status it shows a 307 status code indicating a temporary redirect.

## Headers in Route Handlers

- HTTP headers represent the metadata associated with an API request and response. This metadata can be classified into 2 categories.
- First is request headers. These are sent by the client such as web browsers to the server. They contain essential information about the request, which helps the server understand and process it correctly.
- For example we have the "User-Agent" header which identifies the browser and operating system to the server. This is often used for browser specific content rendering and analytics. "Accept" header which indicates the content types like text, video or image formats that the client can process. It enables the server to deliver the resource in a format suitable for the client. Another common request header is the "Authorization" header used by the client to authenticate itself to the server. It carries credentials allowing controlled access to resources.
- Second is response headers. These are sent back from the server to the client. They provide information about the server and the data being sent in the response.
- For example, "Content-Type" header which indicates the media type of the response. It tells the client what data type of the returned content is such as text/html for HTML documents and application/json for JSON data.
- Headers from the headers functions are read only. To set headers you need to return a new response wih new header.

## Cookies in Route Handlers
