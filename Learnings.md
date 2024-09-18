### Three kinds of web architectures
These are implementations of client-server architecture distinguished on how easily they are hosted
- 1> Frontend only : all logic is in the frontend(made using react or angular) and backend(hidden always manged by hosting provider) just serves files. It is very convinient to host and multiple hosting providers(Render,Vercel,Appwrite) help in same for free.Backend logics are written as serverless functions provided by the platform.Platforms provide sdks with features of cloud storage and database,which help in building web application very fast.These are ideal for side projects and individual projects at small scale, but not suited for large scale projects as they dont offer granular control like ideal backend framework.
- 2> Backend only : all logic is in backend , and frontend is just templates with embedded backend language code and some native javascript or jquery.MVC architecture frameworks like spring boot,flask,express help in making them. But only render provides hosting to such projects that too setup is too clubersome.But having backend offers storage of backend itself allowing files of clients to store on backend server hosting computer. Connecting with MongoDB and Postgres(by Neon,Render or any provider) is pretty easy using drivers like psycopg2 and connection string of database as well as we can take advamntage of ORM of backend framework and better development experience using static typing of backend language. Moreover here using express and spring boot is important.They provide us more granular control on request and response objects allowing to redirect requests to diffirent middleware functions(see express docs) using dispatcher.They are important for authentication mechanisms like JWT which we need to implement in backend or use sdk of supabase auth etc products.These are suited for large scale projects with heavy computation required on server like some kind of custom service like streaming service or deep learning model deployed in backend for inference.Here we can do more of devops stuffs for server if we have more control over server i.e. it is hosted manually at aws ec2 or eks.We can also connect to free cloud storage providers using supabase etc and other platform sdks.
- 3> hybrid architecture : backend serves rest apis and frontend gives requests to them for data. Here we can get benifits of both above two approaches as well as limitations.But it is suited for very large scale projects. we can have react frontend and any language backend

### React and its powerful ecosystem
- When we deal with frontend using react then we deal ui library offering us to make ui using beautiful libraries like MUI,Material design components to avoid writing css. We can modify css using inline methods of writing css in js objects like sx prop in MUI components, style prop on any html or react components(faster development time and quick and comfortable for developers), or plain css file or tailwind using className attribute on all components(slow development time and more effort,recommended for very granular control on styles of ui).
- It provides us ui rendering stratergies using React Router v6 depending upon which way we choose above 
1> CLient Side Rendering for frontend only
3> SSR,ISR etc for hybrid architectures
React Router provides render diffirent components binded each with single route.We can create routes in two ways JSX and JSON.Recommended is JSON due to its more clarity and less redudant syntax.Use createBrowserRouter only(other routers arenot as useful as it , it is called data router in react router docs).Error pages can be binded using errorboundary.404 Error page can be bindedRoutes with no path and but only component are called layout components.It provides us Outlet component to use in layout components.Layout component can render default child component by adding index attribute to its route.
React router provides loader prop containing functions on each route to execute before mounting route element component on ui. That element component can make use data given loader using useLoaderData hook as well as if it has Outlet then it can pass that data down to child routes using context prop in Outlet component and access that data in child route element components using useOutletContext hook.
We can navigate someone depending on login or not using useNavigate hook and Navigate,Link component.
We can use Context Provider to pass data down to nested child components not routes.
Additionally whatever tokens we recieve from auth sdks functions like supabase can be stored as http-only cookies and localStorage and sessionStorage which can be easily accessed anywhere in codebase directly using getItem and setItem helping in navigation using react router i.e. if user does not have access token then can be redirected to login component or if has token token then to application.localStorage is persistent in browser of clients.
- Mui can mix with react router components like Link using component prop in Link etc Mui components.This can help lot in designing menus with MUI and navigation with Link as RouterLink of react router
- React has other ways as well like React with Redux, React with React Query but they were not used here.
- Content is distributed in src/pages/[section]. Each section directory can have three subdirectories,[section]/components containing all large number of lines components.[section]/shared can have small number of lines components shared or used among many large components in [section]/components and [section]/services should contain .ts files which has typescript functions for like server data sending requesting etc. Types and interfaces can be imported from sdks of platform we use and react and react-router.sections can have many nested section directories.
- directory structure recommended to use is
  C:\Users\Admin\Downloads\csr>cd src
<pre>
C:\Users\Admin\Downloads\csr\src>tree
Folder PATH listing
Volume serial number is FE03-A1CE
C:.
├───pages
│   ├───Authentication
│   │   ├───components
│   │   ├───services
│   │   └───shared
│   ├───Dashboard
│   │   ├───Notifications
│   │   ├───Profile
│   │   ├───Property
│   │   └───shared
│   │       └───Nav
│   │           ├───components
│   │           └───Drawer
│   └───Landing
│       ├───sections
│       │   └───HelpandSupport
│       │       └───FAQ
│       └───shared
│           └───icons
├───routers
└───utils
</pre>
  
