# Component development process

* Consider planning first what is its purpose(presentation dumb,higher-order,logical smart,controlled,uncontrolled) 

* Then consider which style you will use : class components for more logical components, functional for less logical components

* Then consider what pre-loaded data component requires, if necessary then write loader function in routers and get data in component using useLoaderData() hook, or get the data using context useContext(),or props from parent component, or from redux store.Routing is distributed across pages so each component will store its actions and loaders in its own directory.

* Then write the logic of the component,render it,check wheter it works properly.Then write loader and logic tests for component.

* Then consider writing actions made by component like handling form submissions, uploading images,in router actions functions. Then write action and integration tests for component.

* Then add markup for the component using Material UI. Keep styles object diffirent explicitely below markup and component , prefer writing clean markup use aliases for MUI components from Aliases.js , prefer writing styles only in styles object and referencing it in markup sx prop of each component,dont prefer writing system props in MUI components.Components will follow global theme,wrap components with ThemeProvider with theme object in same file if any style overrides are desired.Then write markup tests.

* Then write comments in each of the above created files explaining purpose of each section,data flow through files,and explanation of logic of the component.

* Consider optionally writing accessibility,snapshot,error handling,performance tests as well.

* Ensure incorporating proper testing guidelines refer to [TESTING_GUIDELINES.md](TESTING_GUIDLINES.md).Everytime on saving any file lint and format the code using ESLint and Prettier.Run
```Bash
npm run lint
npm run format
```