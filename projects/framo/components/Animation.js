import React from 'react';
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';

const Form = styled.div`
  maxWidth: 100%;
  width: 100vw;
  height: auto;
`

const Svg = styled.svg`
  width: 100%;
  stroke-width: 4px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: miter;
`

const steps = [
  {
    // 0
    APath: "M7 153L50 7 50 7 93 153M28.499999999999993 80.00000000000001L71.49999999999999 79.99999999999999",
    ATransform: "translate(200 0)",
  },
  {
    // 1
    MPath: "M7 133 L7 7 L60 78.39999999999999 L113 7 L113 133 ",
    MTransform: "translate(300 160)",
  },
  {
    // 2
    MPath: "M7 133 L7 7 L110 41.2 L213 7 L213 133 ",
    MTransform: "translate(200 160)",
  },
  {
    // 3
    OPath: "M47.419999999999995 133 C21.620000000000005 133 ,7 111.58 ,7 73.78 L7 66.22 C7 28.420000000000005 ,21.620000000000005 7 ,47.419999999999995 7 L52.580000000000005 7 C78.38 7 ,93 28.420000000000005 ,93 66.22 L93 73.78 C93 111.58 ,78.38 133 ,52.580000000000005 133 Z",
    OTransform: "translate(420 160)",
  },
  {
    // 4
    APath: "M7 153L7 7 313 7 313 153M6.999999999999998 80L313.00000000000006 80.00000000000031",
    ATransform: "translate(200 0)",
  },
  {
    // 5
    RPath: "M7 153L7 7 67.19999999999999 7C84.4 7 93 14.299999999999997 93 43.5L93 43.5C93 72.7 84.4 80 67.19999999999999 80L7 80M66.12500000000004 80.0000000000001L93 153",
    RTransform: "translate(100 0)",
  },
  {
    // 6
    APath: "M7 153L40 7 40 7 73 153M23.500000000000004 80.00000000000001L56.49999999999998 80.00000000000003",
    ATransform: "translate(440 0)",
  },
  {
    // 7
    RPath: "M7 153L7 7 333 7C333 7 333 10.193750000000001 333 22.96875L333 64.03125C333 76.80625 333 80 333 80L7 80M231.12500000000034 80.00000000000011L333 153",
    RTransform: "translate(100 0)",
  },
  {
    // 8
    MPath: "M7 133 L7 7 L160 19.599999999999998 L313 7 L313 133 ",
    MTransform: "translate(100 160)",
  },
  {
    // 9
    MPath: "M7 133 L7 7 L50 90.16 L93 7 L93 133 ",
    MTransform: "translate(100 160)",
  },
  {
    // 10
    OPath: "M7 133 C7 133 ,7 133 ,7 133 L7 7 C7 7 ,7 7 ,7 7 L313 7 C313 7 ,313 7 ,313 7 L313 133 C313 133 ,313 133 ,313 133 Z",
    OTransform: "translate(200 160)",
  },
  {
    // 3
    OPath: "M47.419999999999995 133 C21.620000000000005 133 ,7 111.58 ,7 73.78 L7 66.22 C7 28.420000000000005 ,21.620000000000005 7 ,47.419999999999995 7 L52.580000000000005 7 C78.38 7 ,93 28.420000000000005 ,93 66.22 L93 73.78 C93 111.58 ,78.38 133 ,52.580000000000005 133 Z",
    OTransform: "translate(420 160)",
  },
  {
    // 8
    MPath: "M7 133 L7 7 L160 19.599999999999998 L313 7 L313 133 ",
    MTransform: "translate(100 160)",
  },
  {
    // 5
    RPath: "M7 153L7 7 67.19999999999999 7C84.4 7 93 14.299999999999997 93 43.5L93 43.5C93 72.7 84.4 80 67.19999999999999 80L7 80M66.12500000000004 80.0000000000001L93 153",
    RTransform: "translate(100 0)",
  },
  {
    // 4
    APath: "M7 153L7 7 313 7 313 153M6.999999999999998 80L313.00000000000006 80.00000000000031",
    ATransform: "translate(200 0)",
  },
  {
    // 2
    MPath: "M7 133 L7 7 L110 41.2 L213 7 L213 133 ",
    MTransform: "translate(200 160)",
  },
  {
    // 5
    RPath: "M7 153L7 7 67.19999999999999 7C84.4 7 93 14.299999999999997 93 43.5L93 43.5C93 72.7 84.4 80 67.19999999999999 80L7 80M66.12500000000004 80.0000000000001L93 153",
    RTransform: "translate(100 0)",
  },
  {
    // 0
    APath: "M7 153L50 7 50 7 93 153M28.499999999999993 80.00000000000001L71.49999999999999 79.99999999999999",
    ATransform: "translate(200 0)",
  },
  {
    // 1
    MPath: "M7 133 L7 7 L60 78.39999999999999 L113 7 L113 133 ",
    MTransform: "translate(300 160)",
  },
  {
    // 3
    OPath: "M47.419999999999995 133 C21.620000000000005 133 ,7 111.58 ,7 73.78 L7 66.22 C7 28.420000000000005 ,21.620000000000005 7 ,47.419999999999995 7 L52.580000000000005 7 C78.38 7 ,93 28.420000000000005 ,93 66.22 L93 73.78 C93 111.58 ,78.38 133 ,52.580000000000005 133 Z",
    OTransform: "translate(420 160)",
  },
]

// const startF = {
//   FPath: "M7 293L7 7 93 7M7 121.4L75.8 121.4",
//   FTransform: "translate(0 0)",
// }

const startR = {
  RPath: "M7 293L7 7 67.19999999999999 7C84.4 7 93 21.299999999999997 93 78.5L93 78.5C93 135.70000000000002 84.4 150 67.19999999999999 150L7 150M66.12500000000001 150.0000000000001L93 293",
  RTransform: "translate(100 0)",
}

const startA = {
  APath: "M7 293L50 7 50 7 93 293M28.500000000000007 150.00000000000006L71.50000000000003 149.99999999999997",
  ATransform: "translate(200 0)",
}

const startM = {
  MPath: "M7 293 L7 7 L60 264.40000000000003 L113 7 L113 293 ",
  MTransform: "translate(300 0)",
}

const startO = {
  OPath: "M50 293 C24.2 293 ,7 235.8 ,7 150 L7 150 C7 64.2 ,24.2 7 ,50 7 L50 7 C75.8 7 ,93 64.2 ,93 150 L93 150 C93 235.8 ,75.8 293 ,50 293 Z",
  OTransform: "translate(420 0)",
}

const start = {
  FPath: "M7 293L7 7 93 7M7 121.4L75.8 121.4",
  FTransform: "translate(0 0)",
  RPath: "M7 293L7 7 67.19999999999999 7C84.4 7 93 21.299999999999997 93 78.5L93 78.5C93 135.70000000000002 84.4 150 67.19999999999999 150L7 150M66.12500000000001 150.0000000000001L93 293",
  RTransform: "translate(100 0)",
  APath: "M7 293L50 7 50 7 93 293M28.500000000000007 150.00000000000006L71.50000000000003 149.99999999999997",
  ATransform: "translate(200 0)",
  MPath: "M7 293 L7 7 L60 264.40000000000003 L113 7 L113 293 ",
  MTransform: "translate(300 0)",
  OPath: "M50 293 C24.2 293 ,7 235.8 ,7 150 L7 150 C7 64.2 ,24.2 7 ,50 7 L50 7 C75.8 7 ,93 64.2 ,93 150 L93 150 C93 235.8 ,75.8 293 ,50 293 Z",
  OTransform: "translate(420 0)",
}


const Animation = () => {
  console.log(steps.length);
  const props = useSpring({
    from: {...start},
    to: async next => {
      while (1) {
        await next({ ...steps[0] })
        await next({ ...steps[1] })
        await next({ ...steps[2] })
        await next({ ...steps[3] })
        await next({ ...steps[4] })
        await next({ ...steps[5] })
        await next({ ...steps[6] })
        await next({ ...steps[7] })
        await next({ ...steps[8] })
        await next({ ...steps[9] })
        await next({ ...steps[10] })
        await next({ ...steps[11] })
        await next({ ...steps[12] })
        await next({ ...steps[13] })
        await next({ ...steps[14] })
        await next({ ...steps[15] })
        await next({ ...steps[16] })
        await next({ ...startR })
        await next({ ...steps[17] })
        await next({ ...steps[18] })
        await next({ ...steps[19] })
        await next({ ...startA })
        await next({ ...startM })
        await next({ ...startO })
      }
    },
  })

  return(
    <Form>
      <Svg viewBox="0 0 520 300">
        <animated.path vectorEffect="non-scaling-stroke" transform={props.FTransform} d={props.FPath}  />
        <animated.path vectorEffect="non-scaling-stroke" transform={props.RTransform} d={props.RPath}  />
        <animated.path vectorEffect="non-scaling-stroke" transform={props.ATransform} d={props.APath}  />
        <animated.path vectorEffect="non-scaling-stroke" transform={props.MTransform} d={props.MPath}  />
        <animated.path vectorEffect="non-scaling-stroke" transform={props.OTransform} d={props.OPath}  />
      </Svg>
    </Form>
  )
}



export default Animation;