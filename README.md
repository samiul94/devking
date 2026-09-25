Project Name
DEVKING

Description
DEVKING is a responsive React + TypeScript web application that allows users to explore modern web technologies and build a personalized technology stack. Users can browse technologies by category, view their descriptions, experience levels and ratings, and add or remove technologies from their stack with interactive toast notifications.

Technologies Used
-React
-TypeScript
-Vite
-Tailwind CSS
-React Toastify
-JSON

3 Features
- Browse development technologies
- Build a personalized technology stack
- Add and remove technologies dynamically





1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that lets you write HTML-like code directly inside JavaScript. It is used in React because it makes building and visualizing UI components intuitive, readable, and easier to maintain compared to writing pure JavaScript methods.

2. What is the difference between props and state?

- Props (Properties): Read-only data passed from a parent component down to a child component. They cannot be modified by the component receiving them.

- State: Internal data managed within a component that can change over time (e.g., when a user interacts with the app). When state changes, the component re-renders to update the UI.

3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook adds reactive state memory to a functional component, allowing it to remember values and trigger UI updates when those values change. In this project, `useState` was used in `App.tsx` to keep track of:

- `technologies`: The list of loaded technology objects.

- `stack`: The array of technologies currently selected by the user.

- `loading`: A boolean flag to show/hide the loading spinner.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects in React components, such as fetching data from an external source or setting up subscriptions. It was needed to load the `tech.json` file asynchronously via `fetch` right after the component rendered on the screen, without blocking the initial UI display.

5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify which items in a list have changed, been added, or been removed. Unique keys help React optimize performance during re-renders by updating only the DOM elements that actually changed rather than rebuilding the entire list.

6. What is conditional rendering? Show one place you used it.

Conditional rendering is the process of displaying different elements or layouts based on specific conditions in your state or props.

*Example from the project:* Displaying the empty state message when `selectedTechnologies.length === 0`:

TypeScript

```
{selectedTechnologies.length === 0 ? (

```

No technologies selected yet.

) : (

/* Render selected items here */

)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- Parent to Child: The parent passes data by specifying custom attributes (props) on the child component tag (e.g., ``).

- Child to Parent: The parent passes a callback function down as a prop to the child. When an event happens inside the child component, it executes that function and passes data back to the parent as an argument (e.g., `onClick={() => handleAddToStack(technology)}`).