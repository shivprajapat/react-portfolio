import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Fragment, Suspense } from 'react'
import Shoe from "./shoe";
import { Desc } from "./style"
const ProductDesign = () => {
  return (
    <Fragment>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </Fragment>
  )
}

export default ProductDesign