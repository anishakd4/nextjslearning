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

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
