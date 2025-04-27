import { use, useEffect, useState } from "react";

import {Canvas, useFrame, useThree} from "@react-three/fiber";
import styles from "../styles/Home.module.css";

import OrbitControls from "../components/orbit_controls";

import Star from "../components/star";
import SpotLight from "../components/spot_light";

import Model from "../components/Scene";

import Text from "../components/text";

export default function Home() {
	return (
		<div className={styles.scene}>
			<Canvas
				shadows
				className={styles.canvas}
				camera={{
					position: [0, 0, 2000]
				}}
			>
				<OrbitControls
					autoRotate={false}
					enableDamping={true}
					enableZoom={true}
					enablePan={true}
					dampingFactor={0.5}
					maxDistance={1000}
					minDistance={100}
				/>
				<ambientLight intensity={0.7} fallback={null}/>
				<SpotLight 
					color={0xFFFF}
					// intensity={10}
						// distance={0.1}  // Shorter distance = less intense reach
						decay={1}      // Higher decay = faster intensity dropoff
				/>
				<Star stars={1000}/>
				<Text 
					position={[0,40,0]} 
					text={"To my lovely Nisha"}
				/>
				<Model position={[0,0,0]}/>
				<Text 
					position={[0,-40,0]} 
					text={"Love, Gian"}
				/>
			</Canvas>
		</div>	
	)
}
