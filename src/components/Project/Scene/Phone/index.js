/*
The following message refers to the mesh structure.
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DatSketch (https://sketchfab.com/DatSketch)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/samsung-galaxy-s21-ultra-cd962832be7744efb6b37fe0ee2027e7
title: Samsung Galaxy S21 Ultra
*/

import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import styled from "styled-components";
import { animated } from "@react-spring/three";
import { useSpring } from "@react-spring/core";
import AOS from "aos";
import "aos/dist/aos.css";

const PageIframe = styled.iframe`
  width: 511px;
  height: 1151px;
  border-radius: 45px;
  position: absolute;
  top: -195px;
  left: -260px;
  padding: 0px;
  margin: 0px;
  background-color: black;
  border: 1px solid black;
`;

const Page = ({ src }) => {
  return (
    <Html position={[0, 0, 0]} transform occlude>
      <PageIframe src={"https://bernatfogarasi.github.io"} />
    </Html>
  );
};

const PageMesh = ({ src }) => {
  return (
    <mesh position={[4, 0, -1.7]}>
      <boxBufferGeometry args={[0, 0, 0]} />
      <meshStandardMaterial color="turquoise" metalness={0.5} roughness={0.2} />
      <Page src={src} />
    </mesh>
  );
};

export default function Phone({ position, rotation, scale, src }) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  const [animationIndex, setAnimationIndex] = useState(0);

  // useFrame(() => {
  //   group.current.rotation.y += 0.01;
  // });

  const { spring } = useSpring({
    spring: animationIndex,
    config: { mass: 5, tension: 400, friction: 80, precision: 0.001 },
  });

  const animationDelays = [500, 1500];

  const animationIndexes = [
    0,
    ...animationDelays.map((item, index) => index + 1),
  ];

  const animationValues = (...values) => {
    return spring.to(animationIndexes, values);
  };

  const animations = {
    scale: animationValues(0, 0.8, 0.8),
    rotation: {
      x: animationValues(0, -Math.PI / 8, Math.PI / 30),
      y: animationValues(-Math.PI, -Math.PI, 0),
    },
  };

  useEffect(() => {
    const animate = () => {
      console.log("animate");
      animationDelays.map((delay, index) =>
        setTimeout(() => {
          setAnimationIndex(index + 1);
        }, delay)
      );
    };
    animate();
  }, []);

  // useEffect(() => (group.current.style = spring), []);

  return (
    <group {...{ scale, position, rotation }} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <animated.group
            rotation-x={animations.rotation.x}
            rotation-y={animations.rotation.y}
            scale={animations.scale}
          >
            <group position={[-1.01, -0.44, 0]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.CamModuleFrame_BodyFrame_0.geometry}
                material={nodes.CamModuleFrame_BodyFrame_0.material}
              />
            </group>
            <group position={[-1.01, -0.44, 0.04]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.CamModule_CameraModule_0.geometry}
                material={materials.CameraModule}
              />
            </group>
            <group position={[0.98, 2.04, 0.51]} scale={[-0.26, 0.26, 0.26]}>
              <group position={[0, 2.78, 0]}>
                <group position={[0, 0, -0.27]} scale={[0.5, 0.5, 0.21]}>
                  <mesh
                    geometry={nodes.Lens2_Lens_0.geometry}
                    material={nodes.Lens2_Lens_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Camera2_BodyFrame_0.geometry}
                  material={nodes.Camera2_BodyFrame_0.material}
                />
                <mesh
                  geometry={nodes.Camera2_Camera2_0.geometry}
                  material={nodes.Camera2_Camera2_0.material}
                />
                <mesh
                  geometry={nodes.Camera2_Camera3_0.geometry}
                  material={nodes.Camera2_Camera3_0.material}
                />
                <mesh
                  geometry={nodes.Camera2_Glass_0.geometry}
                  material={nodes.Camera2_Glass_0.material}
                />
              </group>
              <group position={[2.61, -0.07, 0]} scale={0.68}>
                <group position={[0, 0.01, -0.28]} scale={[0.42, 0.42, 0.23]}>
                  <mesh
                    geometry={nodes.Lens4_Lens_0.geometry}
                    material={nodes.Lens4_Lens_0.material}
                  />
                  <mesh
                    geometry={nodes.Lens4_Camera2_0.geometry}
                    material={nodes.Lens4_Camera2_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Camera4_BodyFrame_0.geometry}
                  material={nodes.Camera4_BodyFrame_0.material}
                />
                <mesh
                  geometry={nodes.Camera4_Camera3_0.geometry}
                  material={nodes.Camera4_Camera3_0.material}
                />
                <mesh
                  geometry={nodes.Camera4_Camera2_0.geometry}
                  material={nodes.Camera4_Camera2_0.material}
                />
                <mesh
                  geometry={nodes.Camera4_Glass_0.geometry}
                  material={nodes.Camera4_Glass_0.material}
                />
              </group>
              <group position={[2.61, 2.84, 0]} scale={0.68}>
                <mesh
                  geometry={nodes.Sensor_BodyFrame_0.geometry}
                  material={nodes.Sensor_BodyFrame_0.material}
                />
                <mesh
                  geometry={nodes.Sensor_Camera2_0.geometry}
                  material={nodes.Sensor_Camera2_0.material}
                />
                <mesh
                  geometry={nodes.Sensor_Red_0.geometry}
                  material={materials.material}
                />
                <mesh
                  geometry={nodes.Sensor_Glass_0.geometry}
                  material={nodes.Sensor_Glass_0.material}
                />
              </group>
              <group position={[2.61, 1.42, 0]} scale={0.35}>
                <mesh
                  geometry={nodes.Flashh_BodyFrame_0.geometry}
                  material={nodes.Flashh_BodyFrame_0.material}
                />
                <mesh
                  geometry={nodes.Flashh_Flash_0.geometry}
                  material={materials.Flash}
                />
                <mesh
                  geometry={nodes.Flashh_Glass_0.geometry}
                  material={nodes.Flashh_Glass_0.material}
                />
              </group>
              <group position={[0, -2.86, 0]}>
                <mesh
                  geometry={nodes.Camera3_BodyFrame_0.geometry}
                  material={nodes.Camera3_BodyFrame_0.material}
                />
                <mesh
                  geometry={nodes.Camera3_Camera2_0.geometry}
                  material={nodes.Camera3_Camera2_0.material}
                />
                <mesh
                  geometry={nodes.Camera3_Camera3_0.geometry}
                  material={nodes.Camera3_Camera3_0.material}
                />
                <mesh
                  geometry={nodes.Camera3_Lens001_0.geometry}
                  material={materials["Lens.001"]}
                />
                <mesh
                  geometry={nodes.Camera3_Glass_0.geometry}
                  material={nodes.Camera3_Glass_0.material}
                />
              </group>
              <group position={[0, 0, -0.27]} scale={[0.32, 0.32, 0.22]}>
                <mesh
                  geometry={nodes.Lens1_Lens_0.geometry}
                  material={nodes.Lens1_Lens_0.material}
                />
                <mesh
                  geometry={nodes.Lens1_Camera2_0.geometry}
                  material={nodes.Lens1_Camera2_0.material}
                />
              </group>
              <group
                position={[3.99, 4.51, -1.76]}
                rotation={[0, 0, Math.PI]}
                scale={[-0.73, 0.73, 0.73]}
              >
                <group
                  position={[0, 0, 0.12]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.16, 0.16, 0.09]}
                >
                  <mesh
                    geometry={nodes.LensFC_Lens_0.geometry}
                    material={nodes.LensFC_Lens_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.FrontCamera_BodyFrame_0.geometry}
                  material={nodes.FrontCamera_BodyFrame_0.material}
                />
                <mesh
                  geometry={nodes.FrontCamera_Camera3_0.geometry}
                  material={nodes.FrontCamera_Camera3_0.material}
                />
                <mesh
                  geometry={nodes.FrontCamera_Glass_0.geometry}
                  material={nodes.FrontCamera_Glass_0.material}
                />
              </group>
              <PageMesh src={src} />
              <mesh
                geometry={nodes.Camera1_BodyFrame_0.geometry}
                material={nodes.Camera1_BodyFrame_0.material}
              />
              <mesh
                geometry={nodes.Camera1_Camera2_0.geometry}
                material={nodes.Camera1_Camera2_0.material}
              />
              <mesh
                geometry={nodes.Camera1_Camera3_0.geometry}
                material={nodes.Camera1_Camera3_0.material}
              />

              <mesh
                geometry={nodes.Camera1_Glass_0.geometry}
                material={nodes.Camera1_Glass_0.material}
              />
            </group>
            <mesh
              geometry={nodes.Back_Back_0.geometry}
              material={materials.Back}
            />
            {/* <mesh
               geometry={nodes.Screen_Screen_0.geometry}
               material={materials.Screen}
             />  */}
            <mesh
              geometry={nodes.ScreenBezel_ScreenBezel_0.geometry}
              material={materials.ScreenBezel}
            />
            <group
              position={[1.74, 1.32, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                geometry={nodes.VolumeButton__BodyFrame_0.geometry}
                material={nodes.VolumeButton__BodyFrame_0.material}
              />
            </group>
            <group
              position={[1.74, 0.43, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                geometry={nodes.PowerButton_BodyFrame_0.geometry}
                material={nodes.PowerButton_BodyFrame_0.material}
              />
            </group>
            <group
              position={[-0.11, -3.08, 0.44]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[-0.49, 0.49, 0.49]}
            >
              <mesh
                geometry={nodes.Logo_BodyFrame_0.geometry}
                material={nodes.Logo_BodyFrame_0.material}
              />
            </group>
            <mesh
              geometry={nodes.S21ULTRA_BodyFrame_0.geometry}
              material={nodes.S21ULTRA_BodyFrame_0.material}
            />
            <mesh
              geometry={nodes.S21ULTRA_Speaker_0.geometry}
              material={materials.Speaker}
            />
            <mesh
              geometry={nodes.S21ULTRA_Chrome_0.geometry}
              material={materials.Chrome}
            />
            <mesh
              geometry={nodes.S21ULTRA_Antennas_0.geometry}
              material={materials.Antennas}
            />
          </animated.group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
