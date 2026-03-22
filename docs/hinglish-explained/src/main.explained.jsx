// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import ReactDOM from "react-dom/client";
// Yeh line ReactDOM ko react-dom/client se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
import App from "./App.jsx";
// Yeh line App ko ./App.jsx se import kar rahi hai taaki yahan use kar sakein.
import "./index.css";
// Yeh line ./index.css ko side effect ke liye load kar rahi hai, usually styles ya setup ke liye.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
