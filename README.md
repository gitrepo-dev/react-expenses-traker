# Getting Started with boiler-template

## `Note: before going to start with our boiler-template` 

This project was bootstrapped with custome configuration. You need to know some important information about it. I develop this template for making work easy. You will get the folder "utils" under this folder you will get the folder component, page, toolkit in this folder. I worte the code for generating template files or creating files for functional component, class component, redux-toolkit with redux-sage steup. You don't need to create manually component or creating and setting up with redux & sage files. You just need to hit the command for generating all these files. You will get the command below and you can also configration according to your work happy journey :)

## `Github CI/CD`

For setting up the github CI/CD you can code in .github/workflows/ci.yml file.

## `Directory structures`

I already created the directory structure for the work you can cutomize or creating news according to your work.



## `Available Scripts`

In the project directory available commands are:

1) "npm run dev" command for start the development version:

### `npm run dev`

2) "npm start" command for start the production version:

### `npm start`

3) "npm run create-component component-name" command is for creating a functionl component under ./src/component directory:

### `npm run create-component test`

4) "npm run create-page component-name" command is for creating a functionl component under ./src/page directory:

### `npm run create-page test`

5) "npm run create-page-class component-name" command is for creating a class component under ./src/page directory:

### `npm run create-page-class test`

6) "npm run create-toolkit component-name" command is for creating a steup of redux toolkit with redux sage component under ./src/redux directory after created setup goto ./src/redux directory and open the file store.ts and import reducer & sage file in it to work properly:

### `npm run create-toolkit test`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
