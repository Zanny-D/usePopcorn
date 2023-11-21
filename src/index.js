import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

// function Test() {
//   return (
//     <div>
//       <App />
//       const [movieRating, setMovieRating] = useState(0);
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

// {/* <StarRating
//   maxRating={5}
//   messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
// />
// <StarRating maxRating={10} />
// {/* <StarRating maxRating={100} /> */}
// <StarRating size={100} color="salmon" className="test" defaultRating={3} />
// <Test /> */}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
