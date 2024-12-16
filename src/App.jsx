// import React from "react";
// import "./App.css";
// import SampleHeader from "./layout/SampleHeader";
// import Gal from "./components/Gal";
// import Ninput from "./components/Ninput";
// import Detail from "./components/Detail";

// const App = () => {
//   return (
//     <div>
//       <SampleHeader />
//       <main>
//         <Gal />
//         <Ninput />
//         <Detail />
//       </main>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Header from "./Components2/Header";
import Gallery from "./Components2/Gallery";
import Detail from "./Components2/Detail";
import Input from "./Components2/Input";

const App = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Detail />
      <Input />
    </div>
  );
};

export default App;
