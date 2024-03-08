import { ContactShadows, Float, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
import Avocado from "./components/Avocado.jsx";
import Overlay from "./components/Overlay.jsx"
import { Suspense } from 'react'

export default function App() {
  return (

        <div>
          <ThreeScene/>
        </div>
  );
}

// function Controls() {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   return <orbitControls args={[camera, domElement]} />;
// }

function ThreeScene() {
  return (
    <Canvas camera={{ position: [0,0,0] }} >
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />

      <Suspense fallback={null}>
        <ScrollControls pages={2} damping={0.25}>
          <Scroll>
            <Overlay />
            <Float speed={.5} rotationIntensity={.5} floatIntensity={0}>
              <Avocado position={[0, 0.5, -1]} onClick={(e) => console.log("avocado")} scale={40}/>
            </Float>
            <ContactShadows position={[0, -0.3, 0]} blur={4.5} scale={20} far={20}/>
            {/* <Controls /> */}
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}



