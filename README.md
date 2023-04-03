Virtual DOM vs real DOM, what is diffing algorithm and reconciliation, why does React use virtual DOM
React lifecycle methods, 3 stages, how and why do we use them
The purpose of using the key attribute when we use map in JSX
Ways of triggering component update
What is HOC and higher order function?
What/why custom hooks?
What is the “children” props?
what/why React.memo, useMemo, useCallback
1. Virtual DOM is the virtual representation of real Dom  in memory. Both of them are objects, and tree structures. React uses virtual DOM for improving the proformance, because real dom updates expensively. Diffing algorithm is to compare the virtual Dom to the previous virtual Dom to find the difference.Reconciliation will appy those change to the real Dom. 


2.React lifecycle: 
Stage 1(Mounting,1st time render): contractor (create the instance and initialization ), render, componentDidMount(async http request)
Stage 2(Updateing, rerenders): shouldComponentUpdate, (if yes), render,  componentDidUpdate
Stage 3(Unmounting):componentWillUnmount(get data before the components destroied)


3. The key attribute is for react diffing algorithm, it should be unique in its map array area.[better way to put it…]


4. Ways of triggering updates. 1 props or state change.2 scu return yes. 3 force update 4 its fathers update 


5. HOC: higher order component, which accepts a component as an argument, reuse logic (state, lifecycle methods,event handler… ) and return a new component.  Usually starts with ‘With’. Higher order function is silmily with HOC, takes other functions as arguments, operate on them,  or returns them.


6. Custom Hooks names start with use. Taking some hooks from a component, building my own, and sharing logic between components. [share the stateful logic, not states only? ] 


7. ‘Children’ is the ‘props’ property.  
 1,undefined,which means father passes nothing to his son between the jsx node 
 2, a string, like ‘asdf’, pass a string.  [3 jsx node]
 3.1, an object.  like the object.type is ‘div’. Pass a html tag
 3.2, an object, like  the object.type is ƒ TestPropsChildren(props), pass a fn component. 
 3.3, an object, like class TestPropsChildrenClass, pass a class component
 4, an array of objects.  Pass two or more above, excluding undefined


8. React.memo is a HOC, takes 2 arguments: component and arePropsEqual fn (optional). It will compare the previous prop to the current to see if they are shallowly equal. If not, re-render. If yes, not render. Similar with SCU, but using for fn component and no state comparison. 


useMemo and useCallback are hooks fn.  Both take 2 arguments, 2nd are dependencies and for performance optimization. useMemo take the fn to get a result,  kees and returns the result between renders, while useCallback takes fn,keeps and returns it. 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
