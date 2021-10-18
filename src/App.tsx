import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { editable as e, configure } from "react-three-editable";
import ShoeMode from "./gltf.jsx";
// Import your previously exported state
import editableState from "./editableState.json";

const bind = configure({
  // Enables persistence in development so your edits aren't discarded when you close the browser window
  enablePersistence: true,
  // Useful if you use r3e in multiple projects
  localStorageNamespace: "Example"
});

export default function App() {
  return (
    <Canvas onCreated={bind({ state: editableState })}>
      <ambientLight intensity={0.5} />
      {/* Mark objects as editable. */}
      {/* Properties in the code are used as initial values and reset points in the editor. */}
      <e.mesh uniqueName="shoe">
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.5}
            contactShadowOpacity={0.6}
            contactShadowBlur={1}
          >
            <ShoeMode />
          </Stage>
        </Suspense>
      </e.mesh>
      <e.mesh uniqueName="Box">
        <boxBufferGeometry />
        <meshStandardMaterial color="orange" />
      </e.mesh>
    </Canvas>
  );
}
