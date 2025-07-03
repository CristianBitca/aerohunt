# ✈️ AERO Hunt - Flight Metasearch Engine

**AERO Hunt** is a modern flight metasearch engine that aggregates real-time flight data from various airlines and online travel agencies into one convenient and responsive web interface. Built with a modular, component-based architecture using **React** and **JavaScript**, AERO Hunt aims to simplify the travel planning process by offering a seamless user experience.

> ⚠️ **Important Note:** The application is currently **non-functional** because the third-party API used to fetch flight data has become private. The interface is working, but no live data will be displayed until an alternative data source is integrated.

---

## 🚀 Features

- ✅ Clean and intuitive flight search interface  
- ✅ Modular architecture with reusable components  
- ✅ Built with responsive design principles  
- ✅ Easy integration with flight data APIs *(currently disabled)*  
- ✅ Scalable structure for future feature additions (filters, sorting, login, etc.)

---

## 🧱 Tech Stack

| Layer       | Technologies Used               |
|-------------|----------------------------------|
| Front-End   | React, JavaScript, JSX, HTML, CSS |
| State       | React Hooks                      |
| Styling     | CSS Modules / Tailwind *(optional)* |
| API         | External Flight Data API *(private)* |
| Build Tools | Vite or Webpack                  |

---

## 📁 Project Structure

AERO-Hunt/
│
├── public/ # Static assets
│
├── src/
│ ├── components/ # Reusable components
│ │ ├── SearchBar.jsx
│ │ ├── FlightList.jsx
│ │ ├── FlightCard.jsx
│ │ └── Loader.jsx
│ │
│ ├── pages/ # Page-level views
│ │ └── Home.jsx
│ │
│ ├── services/ # API and utility functions
│ │ └── flightService.js
│ │
│ ├── App.jsx # Main application component
│ └── index.js # Application entry point
│
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

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
