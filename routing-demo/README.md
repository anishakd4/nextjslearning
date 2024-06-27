## Routing Conventions

- All routes must be placed inside app folder
- Every file that corresponds to a route must be named Page.js or Page.tsx
- Every folder corresponds to a path segment in browser url

When these conventions are followed the file automatically becomes a route

1. page.tsx file inside app folder maps to route of your domain
2. Although we deleted this layout.tsx file, nextjs automatically creates and populates it when we load the route route
3. nextjs will automatically respond with 404 in case of non matching route, we don't have to explicitly handle non matching route.

## Nested Routes

1.By creating a nested folder structure, it will route in the same way in the url

## Dynamic Routes

1. While creating nested folders is ok for now but it is not always feasible to define routes using predefined paths especially for complex applications.
2. In nextjs we can enclose a folder name with brackets to create a dynamic route.
3. nextjs treats square brackets in a folder name as a dynamic segment enabling us to create dynamic routes.

Every page in th app router receives route parameters as a prop. Lets destructure it as params. The params object contains the route parameters as key value pairs

## Nested Dynamic Routes

It is possible to create nested dynamic routes by having dynamic segments in the folder names.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Catch all Segments

1. this file is match any URL that contains the doc segment in the path. Catch all segment routes captures all URL segments and maps them to this single file in our project
2. nextjs provides an optional catch all route as well. Just '/docs' will move to 404. To display the same docs home page nextjs provides optional catch all segments. Just wrap square brackets with another pair of square brackets.

## Not Found Page

1. By default in any any nextjs application when you navigate to a router that is not defined in the app folder, nextjs renders a default 404 not found page.
2. For this just create a not-found.tsx or not-found.js file in the app folder.
3. This not found page is tied to the file based routing mechanism of the app router.
4. not found pages can also be define at the folder level.

## File Colocation

1. Although nextjs provide routing conventions to follow, it remains flexible regarding how you structure your project files and folders.
2. nextjs uses file system based router where each folder represents a route segment mapped to a corresponding segment in the URL.
3. A router isn't publicly accessible until a page.js or page.tsx is added to the respective route segment.
4. Moreover even when a route becomes publicly accessible only the content returned by the page.tsx is sent to the client. The content returned must be a default exported react component.
5. Although you can collocate your project files within the app directory, it is not mandatory if you prefer you can keep them outside the app directory within the src folder

## Private Folders

A private folder indicates that it is a private implementation detail and should not considered for the routing system. This means that the folder and all its subfolders are excluded from routing.

To create a private folder simply prefix the folder name with an underscore. Within this folder you can have utility functions. Normally page.tsx would correspond to URL however this being inside a private folder making this page.tsx un-routable. If you try to navigate to this folder in url you will get 404 not found error.

private folders can be helpful in a few different scenarios:

- Separating UI logic from routing logic.
- For consistently organizing internal files across a project
- For sorting and grouping files in code editor and
- finally for avoiding potential naming with future Nextjs file conventions.

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
