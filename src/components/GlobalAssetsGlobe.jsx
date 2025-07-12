import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AssetPoint({ position, color }) {
    const pointRef = useRef();

    useFrame(({ clock }) => {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5 + position[0]) * 0.3;
        if (pointRef.current) {
            pointRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh position={position} ref={pointRef}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshBasicMaterial color={color} transparent opacity={0.8} />
        </mesh>
    );
}

// Main Globe component
function Globe() {
    const globeRef = useRef();

    // Rotate the globe automatically
    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001;
        }
    });

    // Create random asset points on the surface of the sphere
    const assetPoints = useMemo(() => {
        const points = [];
        for (let i = 0; i < 30; i++) {
            const phi = Math.acos(-1 + (2 * i) / 29);
            const theta = Math.sqrt(30 * Math.PI) * phi;
            const position = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
            points.push({ position: [position.x, position.y, position.z], color: ['#0088FE', '#FFBB28', '#FF8042'][i % 3] });
        }
        return points;
    }, []);

    return (
        <group ref={globeRef}>
            {/* The main globe sphere with a slightly transparent, wireframe look */}
            <Sphere args={[1, 32, 32]}>
                <meshStandardMaterial 
                    color="#003366" 
                    wireframe={true} 
                    transparent 
                    opacity={0.1} 
                />
            </Sphere>
            {/* The inner glow of the globe */}
            <Sphere args={[0.98, 32, 32]}>
                <meshBasicMaterial color="#0077ff" toneMapped={false} transparent opacity={0.2} />
            </Sphere>
            {/* Render the asset points */}
            {assetPoints.map((point, i) => <AssetPoint key={i} {...point} />)}
        </group>
    );
}

// The wrapper component that sets up the 3D scene
const GlobalAssetsGlobe = () => {
    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-[380px] transition-colors duration-300">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Global Asset Distribution</h3>
            <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Globe />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default GlobalAssetsGlobe;
