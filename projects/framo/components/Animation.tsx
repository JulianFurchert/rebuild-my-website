import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { styled } from '../../../stitches.config';

const Form = styled('div', {
  width: "100%", 
  height: "auto"
})

const Svg = styled('svg', {
  width: "100%",
  strokeWidth: "4px",
  fill: "none",
  stroke: "currentColor",
  strokeLinejoin: "miter"
})

const steps = [
  {
    // A - 0
    d: "M7 153L50 7 50 7 93 153M28.499999999999993 80.00000000000001L71.49999999999999 79.99999999999999",
    x: 200,
    y: 0
  },
  {
    // M - 1
    d: "M7 133 L7 7 L60 78.39999999999999 L113 7 L113 133 ",
    x: 300,
    y: 160
  },
  {
    // M - 2
    d: "M7 133 L7 7 L110 41.2 L213 7 L213 133 ",
    x: 200,
    y: 160
  },
  {
    // O - 3
    d: "M47.419999999999995 133 C21.620000000000005 133 ,7 111.58 ,7 73.78 L7 66.22 C7 28.420000000000005 ,21.620000000000005 7 ,47.419999999999995 7 L52.580000000000005 7 C78.38 7 ,93 28.420000000000005 ,93 66.22 L93 73.78 C93 111.58 ,78.38 133 ,52.580000000000005 133 Z",
    x: 420,
    y: 160
  },
  {
    // A - 4
    d: "M7 153L7 7 313 7 313 153M6.999999999999998 80L313.00000000000006 80.00000000000031",
    x: 200,
    y: 0
  },
  {
    // R - 5
    d: "M7 153L7 7 67.19999999999999 7C84.4 7 93 14.299999999999997 93 43.5L93 43.5C93 72.7 84.4 80 67.19999999999999 80L7 80M66.12500000000004 80.0000000000001L93 153",
    x: 100,
    y: 0
  },
  {
    // A - 6
    d: "M7 153L40 7 40 7 73 153M23.500000000000004 80.00000000000001L56.49999999999998 80.00000000000003",
    x: 440,
    y: 0
  },
  {
    // R - 7
    d: "M7 153L7 7 333 7C333 7 333 10.193750000000001 333 22.96875L333 64.03125C333 76.80625 333 80 333 80L7 80M231.12500000000034 80.00000000000011L333 153",
    x: 100,
    y: 0
  },
  {
    // M - 8
    d: "M7 133 L7 7 L160 19.599999999999998 L313 7 L313 133 ",
    x: 100,
    y: 160
  },
  {
    // M - 9
    d: "M7 133 L7 7 L50 90.16 L93 7 L93 133 ",
    x: 100,
    y: 160
  },
  {
    // O - 10
    d: "M7 133 C7 133 ,7 133 ,7 133 L7 7 C7 7 ,7 7 ,7 7 L313 7 C313 7 ,313 7 ,313 7 L313 133 C313 133 ,313 133 ,313 133 Z",
    x: 200,
    y: 160
  },
  {
    // O - 3
    d: "M47.419999999999995 133 C21.620000000000005 133 ,7 111.58 ,7 73.78 L7 66.22 C7 28.420000000000005 ,21.620000000000005 7 ,47.419999999999995 7 L52.580000000000005 7 C78.38 7 ,93 28.420000000000005 ,93 66.22 L93 73.78 C93 111.58 ,78.38 133 ,52.580000000000005 133 Z",
    x: 420,
    y: 160
  },
  {
    // M - 8
    d: "M7 133 L7 7 L160 19.599999999999998 L313 7 L313 133 ",
    x: 100,
    y: 160
  },
  {
    // R - 5
    d: "M7 153L7 7 67.19999999999999 7C84.4 7 93 14.299999999999997 93 43.5L93 43.5C93 72.7 84.4 80 67.19999999999999 80L7 80M66.12500000000004 80.0000000000001L93 153",
    x: 100,
    y: 0
  },
  {
    // A - 4
    d: "M7 153L7 7 313 7 313 153M6.999999999999998 80L313.00000000000006 80.00000000000031",
    x: 200,
    y: 0
  },
  {
    // M - 2
    d: "M7 133 L7 7 L110 41.2 L213 7 L213 133 ",
    x: 200,
    y: 160
  },
  {
    // R - 5
    d: "M7 153L7 7 67.19999999999999 7C84.4 7 93 14.299999999999997 93 43.5L93 43.5C93 72.7 84.4 80 67.19999999999999 80L7 80M66.12500000000004 80.0000000000001L93 153",
    x: 100,
    y: 0
  },
  {
    // A - 0
    d: "M7 153L50 7 50 7 93 153M28.499999999999993 80.00000000000001L71.49999999999999 79.99999999999999",
    x: 200,
    y: 0
  },
  {
    // M - 1
    d: "M7 133 L7 7 L60 78.39999999999999 L113 7 L113 133 ",
    x: 300,
    y: 160
  },
  {
    // O - 3
    d: "M47.419999999999995 133 C21.620000000000005 133 ,7 111.58 ,7 73.78 L7 66.22 C7 28.420000000000005 ,21.620000000000005 7 ,47.419999999999995 7 L52.580000000000005 7 C78.38 7 ,93 28.420000000000005 ,93 66.22 L93 73.78 C93 111.58 ,78.38 133 ,52.580000000000005 133 Z",
    x: 420,
    y: 160
  },
]

const startF = {
  d: "M7 293L7 7 93 7M7 121.4L75.8 121.4",
  x: 0,
  y: 0
}

const startR = {
  d: "M7 293L7 7 67.19999999999999 7C84.4 7 93 21.299999999999997 93 78.5L93 78.5C93 135.70000000000002 84.4 150 67.19999999999999 150L7 150M66.12500000000001 150.0000000000001L93 293",
  x: 100,
  y: 0
}

const startA = {
  d: "M7 293L50 7 50 7 93 293M28.500000000000007 150.00000000000006L71.50000000000003 149.99999999999997",
  x: 200,
  y: 0
}

const startM = {
  d: "M7 293 L7 7 L60 264.40000000000003 L113 7 L113 293 ",
  x: 300,
  y: 0
}

const startO = {
  d: "M50 293 C24.2 293 ,7 235.8 ,7 150 L7 150 C7 64.2 ,24.2 7 ,50 7 L50 7 C75.8 7 ,93 64.2 ,93 150 L93 150 C93 235.8 ,75.8 293 ,50 293 Z",
  x: 420,
  y: 0
}

const transition = {
  duration: 1
}

const Animation = () => {
  const f = useAnimation()
  const r = useAnimation()
  const a = useAnimation()
  const m = useAnimation()
  const o = useAnimation()

  useEffect(()=>{
    const sequence = async () => {
      await a.start(steps[0])
      await m.start(steps[1])
      await m.start(steps[2])
      await o.start(steps[3])
      await a.start(steps[4])
      await r.start(steps[5])
      await a.start(steps[6])
      await r.start(steps[7])
      await m.start(steps[8])
      await m.start(steps[9])
      await o.start(steps[10])
      await o.start(steps[11])
      await m.start(steps[12])
      await r.start(steps[13])
      await a.start(steps[14])
      await m.start(steps[15])
      await r.start(steps[16])
      await r.start(startR)
      await a.start(steps[17])
      await m.start(steps[18])
      await o.start(steps[19])
      await a.start(startA)
      await m.start(startM)
      await o.start(startO)
    }
    sequence()
  },[])
  
  return(
    <Form>
      <Svg viewBox="0 0 520 300">
        <motion.path 
          vectorEffect="non-scaling-stroke"
          animate={f}
          initial={startF} 
          d={startF.d}
          style={{ transform: `translateX(${startF.x}px) translateY(${startF.y}px) translateZ(0px)`}}
          transition={transition}
        />
        <motion.path 
          vectorEffect="non-scaling-stroke"
          animate={r}
          initial={startR} 
          d={startR.d} 
          style={{ transform: `translateX(${startR.x}px) translateY(${startR.y}px) translateZ(0px)`}}
          transition={transition}
        />
        <motion.path 
          vectorEffect="non-scaling-stroke"
          animate={a}
          initial={startA} 
          d={startA.d} 
          style={{ transform: `translateX(${startA.x}px) translateY(${startA.y}px) translateZ(0px)`}}
          transition={transition}
        />
        <motion.path 
          vectorEffect="non-scaling-stroke"
          animate={m} 
          initial={startM} 
          d={startM.d} 
          style={{ transform: `translateX(${startM.x}px) translateY(${startM.y}px) translateZ(0px)`}}
          transition={transition}
        />
        <motion.path 
          vectorEffect="non-scaling-stroke"
          animate={o} 
          initial={startO} 
          d={startO.d} 
          style={{ transform: `translateX(${startO.x}px) translateY(${startO.y}px) translateZ(0px)`}}
          transition={transition}
        />
      </Svg>
    </Form>
  )
}



export default Animation;