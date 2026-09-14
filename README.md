# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.




#  Dev Stack Builder

    --This is a project named Dev Stack Builder. In this website, we can Build our ideal development stack. We can also 
      explore the technologies and learn about technologies in detail . For better experience we can stack technologies
      that we like and  build our ideal stack.
    
# Technology Used

- React.js
- Tailwind CSS, DaisyUI
- JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)
- React Icons (NPM Package)
    
    
# Project features
    --Responsive design for medium device
    --Show navber & stack while scroling
    --when a button or icon cliked show it's status with toast

# question

**1.What is JSX, and why is it used in React?**
jsx full meaning is JavaScript XML.It allow us to write HTML-like code inside the JavaScript.
It used in React because JSX make it easier to understand & create component. 

**2.What is the difference between props and state?**
Props is like parameters that used in js. In React we use props to passing data from parent to child .Data also can passed between component.On the other hand , state manage data that are inside of component.we use it for change data & update data. 

**3.What does the useState hook do, and where did you use it in this project?**
useState is a React hook. it create and manage state .we use it in functional component.  

**4.What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect is like a methode that perform side effects in a react component.we need to use useEffect because when we fatching data like JSON/API from any source & load it, it need some time to loading.So, we use useEffect to perform a side effect in this small time.  

**5.Why does every item in a .map() list need a unique key prop?**
Because react need a unique key to identify eatch item.so that,React can understand each item that are added,chagned and removed.

**6.What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering is like showing different UI depending on condition.
Example:In the empty stack message card if technology are selected ,it show defferent UI card with how many technology are counted, technology name, technology logo and some remove,removeall button etc .

**7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
We pass data from a parent component to a child component using props.In react, we can pass data in one way(parent to child)/one direction.A child can send back information to the parent by calling a function passed through props.



