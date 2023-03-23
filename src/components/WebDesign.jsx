import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Desktop from "./Desktop";

export const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment={city} intensity={0.6}>
        <Desktop />
      </Stage>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};
