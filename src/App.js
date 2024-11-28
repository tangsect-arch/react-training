import "./App.css";
import { lazy, Suspense } from "react";

const ComponentA = lazy(() => import("./ComponentA.js"));
const ComponentB = lazy(() => import("./ComponentB.js"));

function App() {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <ComponentA />
        <ComponentB />
      </Suspense>
    </>
  );
}

export default App;
