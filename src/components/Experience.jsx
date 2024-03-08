import { OrbitControls, ScrollControls, ContactShadows, Float } from "@react-three/drei";
import { Avocado } from "./Avocado";
import { Overlay } from "./Overlay";
import { Suspense } from 'react'

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}> {/*TODO: Add fallback loading*/}
          {/* <Overlay /> */}
          <Float speed={.5} rotationIntensity={1} floatIntensity={0}>
              <Avocado position={[0, 0, 0]} onClick={(e) => console.log("avocado")} scale={20}/>
          </Float>
          <ContactShadows position={[0, -0.3, 0]} blur={4.5} scale={20} far={20}/>
        
      </Suspense>
    </>
  );
};