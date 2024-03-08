import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import { ClickOnCat } from "./animations/click-on-cat"

function App() {
  return (
    <>
        <Canvas
        camera={{
            fov: 64,
            position: [2.3, 1.5, 2.3],
        }}
        >
        <Experience />
        </Canvas>
        <div class = "flex flex-row-reverse w-5/6 ">
            <ClickOnCat />
        </div>
        
    </>
  );
}

export default App;