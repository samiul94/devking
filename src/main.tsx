import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";
createRoot(document.getElementById("root")!).render(
<StrictMode>
<App />
<Toaster
position="bottom-right"
reverseOrder={false}
toastOptions={{
duration: 2800,
style: {
fontSize: "12px",
borderRadius: "10px",
},
}}
/>
</StrictMode>
);
