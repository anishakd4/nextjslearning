## Nextjs

- Nextjs is React framework for building web applications.
- It uses React for building user interfaces but also provides additional features that enable you to build production ready applications. These features include routing, optimized rendering, data fetching, bundling, compiling and more.
- We don't need to install additional packages as nextjs provides everything we need.
- Nextjs being a framework has opinions and conventions that need to be followed to implement these features

## React

- It is not feasible to create a fully featured application for production using React alone.
- React is a library for building user. It is responsible for the view layer only of the application.
- You need to make decisions about other features such as routing, data fetching and more.

## Why learn Nextjs

- Nextjs simplifies the process of building web application for production. Nextjs provides some noteworthy features out of the box:
  1. Routing : When building react app we need to install a 3rd party routing package, configure it and add code every time you need to create a route. Nextjs offers file based routing, simplifying the task of creating routes and eliminating the need for 3rd party routing package
  2. Nextjs allows you to create APIS, making it a truly full stack framework. Using Nextjs we can write both the front end code and the APIS that can be called by react app.
  3. Rendering: nextjs supports both server side and client side rendering. When used correctly it can result in better performance and SEO which is very important.
  4. Data fetching: Nextjs offers simplified data fetching with async await support in react components.
  5. Styling: Nextjs supports preferred styles methods including CSS modules and tailwind css and css is js.
  6. Optimization: Nextjs offers optimization out of the box for images, fonts and scripts to improve application's core web vitals and experience.
  7. Dev and prod build system : Nextjs provides a well optimized development and production build system allowing you to focus on coding rather than configuring.
- Nextjs just needs node and a code editor to get started with.

## to create new project

- `npx create-next-app hello-world` command to create a new project in nextjs.

## Project structure

- `next.config.js` as configuration file for nextjs
- `tsconfig.js` as configuration file for typescript
- `eslint.rc` for eslint
- `tailwind.config.ts` and `postcss.config.js` for tailwind.
- `next-env.d.ts` for nextjs typescript declarations
- `.next folder` is generated when we run either the dev or build scripts. It is from this folder that our nextjs application is served.
- `node_modules` is where our all the dependencies of our project are installed. It is generated when we run `npm install` command, but in our case it was generated when we run dev script which internally installs dependencies if they are not already installed.
- `public` folder holds all the static assets to be served such as images and svgs.
- in `src` folder we have 1 folder `app` which is the newly introduced app router.
- `favicon.ico` is the icon we see in the browser tab when we run the application.
- `golbals.css` contains styling for whole app.
- `layout.tsx` is the UI that can shared across different pages of the application
- `page.tsx` is the UI visible on visiting `localhost:3000`. `page.tsx` replaces the children prop in the `layout.tsx` to form the complete UI we see in the browser.

## run steps

- when we run npm run dev in the terminal, the execution is transferred to layout.tsx. The RootLayout component is rendered when we navigate to localhost:3000, the children prop will always refer to the component defined in the page.tsx file
