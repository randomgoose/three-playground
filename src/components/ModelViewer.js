import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useResource } from "react-three-fiber";
import App from "../App";
import { OrbitControls } from "drei";
import { Physics } from "use-cannon"


const ModelViewer = props => {

    const [position, setPosition] = useState([2.5, 8, 5]);


    return (
        <Canvas colorManagement shadowMap camera={{ position: [-5, 2, 10], fov: 60 }}>
            <Physics>
            <fog attach="fog" args={["white", 0, 40]} />
            <axesHelper />
            <ambientLight intensity={0.4} />
            <directionalLight
                castShadow
                position={position}
                intensity={5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10} />
            <pointLight position={[-10, 0, -20]} color="blue" intensity={2.5} />
            <pointLight position={[0, -10, 0]} color="red" intensity={1.5} />
            <App setPos={setPosition} pos={position} />
            <OrbitControls />
            </Physics>
        </Canvas>
    )
}

export default ModelViewer;