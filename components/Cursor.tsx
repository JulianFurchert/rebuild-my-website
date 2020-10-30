import React from "react";

export type CursorVariants = 'default' | 
  'zoom-in' | 
  'zoom-out' | 
  'grab' | 
  'grabbing' | 
  'pointer' |
  'ew-resize' |
  'ns-resize' |
  'nwse-resize'

export type CursorProps = {
  variant?: CursorVariants
}

export const Cursor: React.FC<CursorProps> = ({ variant, ...props }) => {
  switch(variant){
    case 'zoom-in':
      return <Zoomin {...props} />
    case 'zoom-out':
      return <Zoomout {...props} />
    case 'grab':
      return <Grab {...props}/>
    case 'grabbing':
      return <Grabbing {...props}/>
    case 'pointer':
      return <Pointer {...props}/>
    case 'ew-resize':
      return <EwResize {...props}/>
    case 'ns-resize':
      return <NsResize {...props}/>
    case 'nwse-resize':
      return <NwseResize {...props}/>
    default:
      return <Default {...props}/>
  }
} 

export default Cursor

type SvgProps = {
  size?: number
}

const Zoomin: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="zoomin">
        <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
            <rect id="bg" x="0" y="0" width="35" height="35"></rect>
        </g>
        <path d="M20.5,15 C20.5,18.038 18.038,20.5 15,20.5 C11.962,20.5 9.5,18.038 9.5,15 C9.5,11.962 11.962,9.5 15,9.5 C18.038,9.5 20.5,11.962 20.5,15" id="glass" fill="#FFFFFF"></path>
        <path d="M20.5,15 C20.5,18.038 18.038,20.5 15,20.5 C11.962,20.5 9.5,18.038 9.5,15 C9.5,11.962 11.962,9.5 15,9.5 C18.038,9.5 20.5,11.962 20.5,15 L20.5,15 Z" id="glass-border" stroke="#000000"></path>
        <path d="M18,14 L16,14 L16,12 L14,12 L14,14 L12,14 L12,15.98 L14,15.98 L14,18 L16,18 L16,15.98 L18,15.98 L18,14 Z" id="plus" fill="#000000"></path>
        <path d="M23.5859,25 L24.9999,23.586 L19.5509,18.137 L18.1369,19.551 L23.5859,25 Z" id="stem" fill="#000000"></path>
      </g>
    </g>
  </svg>
)

const Zoomout: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="zoomout">
        <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
            <rect id="bg" x="0" y="0" width="35" height="35"></rect>
        </g>
        <path d="M20.5,15 C20.5,18.038 18.038,20.5 15,20.5 C11.962,20.5 9.5,18.038 9.5,15 C9.5,11.962 11.962,9.5 15,9.5 C18.038,9.5 20.5,11.962 20.5,15" id="glass" fill="#FFFFFF"></path>
        <path d="M20.5,15 C20.5,18.038 18.038,20.5 15,20.5 C11.962,20.5 9.5,18.038 9.5,15 C9.5,11.962 11.962,9.5 15,9.5 C18.038,9.5 20.5,11.962 20.5,15 L20.5,15 Z" id="glass-border" stroke="#000000"></path>
        <path d="M18,16 L12.02,16 L12.02,14.02 L18,14.02 L18,16 Z" id="minus" fill="#000000"></path>
        <path d="M23.5859,25 L24.9999,23.586 L19.5509,18.137 L18.1369,19.551 L23.5859,25 Z" id="stem" fill="#000000"></path>
      </g>
    </g>
  </svg>
)

const Grab: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="openhand">
            <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
                <rect id="bg" x="0" y="0" width="35" height="35"></rect>
            </g>
            <path d="M13.5557,17.5742 C13.4577,17.1992 13.3597,16.7272 13.1497,16.0222 C12.9827,15.4652 12.8077,15.1632 12.6797,14.7892 C12.5247,14.3342 12.3767,14.0682 12.1837,13.6082 C12.0447,13.2792 11.8197,12.5602 11.7267,12.1682 C11.6077,11.6592 11.7597,11.2442 11.9707,10.9622 C12.2237,10.6232 12.9327,10.4722 13.3277,10.6112 C13.6987,10.7412 14.0717,11.1232 14.2437,11.3992 C14.5317,11.8592 14.6007,12.0312 14.9607,12.9412 C15.3537,13.9332 15.5247,14.8592 15.5717,15.1722 L15.6567,15.6242 C15.6557,15.5842 15.6137,14.5022 15.6127,14.4622 C15.5777,13.4332 15.5527,12.6392 15.5747,11.5232 C15.5767,11.3972 15.6387,10.9362 15.6587,10.8082 C15.7367,10.3082 15.9637,10.0082 16.3317,9.8292 C16.7437,9.6282 17.2577,9.6142 17.7327,9.8122 C18.1557,9.9852 18.3587,10.3622 18.4197,10.8342 C18.4337,10.9432 18.5137,11.8212 18.5127,11.9412 C18.4997,12.9662 18.5187,13.5822 18.5277,14.1152 C18.5317,14.3462 18.5307,15.7402 18.5447,15.5842 C18.6057,14.9282 18.6387,12.3952 18.8887,11.6422 C19.0327,11.2092 19.2937,10.8962 19.6827,10.7132 C20.1137,10.5102 20.7957,10.6432 21.0867,10.9562 C21.3717,11.2612 21.5327,11.6482 21.5687,12.1092 C21.6007,12.5142 21.5497,13.0062 21.5487,13.3542 C21.5487,14.2212 21.5277,14.6782 21.5117,15.4752 C21.5107,15.5132 21.4967,15.7732 21.5347,15.6572 C21.6287,15.3772 21.7227,15.1152 21.8007,14.9122 C21.8497,14.7872 22.0417,14.2982 22.1597,14.0532 C22.2737,13.8192 22.3707,13.6842 22.5747,13.3652 C22.7747,13.0522 22.9897,12.9172 23.2427,12.8042 C23.7827,12.5692 24.3517,12.9162 24.5437,13.3952 C24.6297,13.6102 24.5527,14.1082 24.5157,14.5002 C24.4547,15.1472 24.2617,15.8062 24.1637,16.1482 C24.0357,16.5952 23.8897,17.3832 23.8237,17.7492 C23.7517,18.1432 23.5897,19.1312 23.4647,19.5692 C23.3787,19.8702 23.0937,20.5472 22.8127,20.9532 C22.8127,20.9532 21.7387,22.2032 21.6207,22.7652 C21.5037,23.3282 21.5427,23.3322 21.5197,23.7302 C21.4957,24.1292 21.6407,24.6532 21.6407,24.6532 C21.6407,24.6532 20.8387,24.7572 20.4067,24.6872 C20.0157,24.6252 19.5317,23.8462 19.4067,23.6092 C19.2347,23.2812 18.8677,23.3442 18.7247,23.5862 C18.4997,23.9692 18.0157,24.6562 17.6737,24.6992 C17.0057,24.7832 15.6197,24.7292 14.5347,24.7192 C14.5347,24.7192 14.7197,23.7082 14.3077,23.3612 C14.0027,23.1012 13.4777,22.5772 13.1637,22.3012 L12.3317,21.3802 C12.0477,21.0202 11.7027,20.2872 11.0887,19.3952 C10.7407,18.8912 10.0617,18.3102 9.8047,17.8162 C9.5817,17.3912 9.4737,16.8622 9.6147,16.4912 C9.8397,15.8972 10.2897,15.5942 10.9767,15.6592 C11.4957,15.7092 11.8247,15.8652 12.2147,16.1962 C12.4397,16.3862 12.7877,16.7302 12.9647,16.9442 C13.1277,17.1392 13.1677,17.2202 13.3417,17.4532 C13.5717,17.7602 13.6437,17.9122 13.5557,17.5742" id="hand" fill="#FFFFFF"></path>
            <path d="M13.5557,17.5742 C13.4577,17.1992 13.3597,16.7272 13.1497,16.0222 C12.9827,15.4652 12.8077,15.1632 12.6797,14.7892 C12.5247,14.3342 12.3767,14.0682 12.1837,13.6082 C12.0447,13.2792 11.8197,12.5602 11.7267,12.1682 C11.6077,11.6592 11.7597,11.2442 11.9707,10.9622 C12.2237,10.6232 12.9327,10.4722 13.3277,10.6112 C13.6987,10.7412 14.0717,11.1232 14.2437,11.3992 C14.5317,11.8592 14.6007,12.0312 14.9607,12.9412 C15.3537,13.9332 15.5247,14.8592 15.5717,15.1722 L15.6567,15.6242 C15.6557,15.5842 15.6137,14.5022 15.6127,14.4622 C15.5777,13.4332 15.5527,12.6392 15.5747,11.5232 C15.5767,11.3972 15.6387,10.9362 15.6587,10.8082 C15.7367,10.3082 15.9637,10.0082 16.3317,9.8292 C16.7437,9.6282 17.2577,9.6142 17.7327,9.8122 C18.1557,9.9852 18.3587,10.3622 18.4197,10.8342 C18.4337,10.9432 18.5137,11.8212 18.5127,11.9412 C18.4997,12.9662 18.5187,13.5822 18.5277,14.1152 C18.5317,14.3462 18.5307,15.7402 18.5447,15.5842 C18.6057,14.9282 18.6387,12.3952 18.8887,11.6422 C19.0327,11.2092 19.2937,10.8962 19.6827,10.7132 C20.1137,10.5102 20.7957,10.6432 21.0867,10.9562 C21.3717,11.2612 21.5327,11.6482 21.5687,12.1092 C21.6007,12.5142 21.5497,13.0062 21.5487,13.3542 C21.5487,14.2212 21.5277,14.6782 21.5117,15.4752 C21.5107,15.5132 21.4967,15.7732 21.5347,15.6572 C21.6287,15.3772 21.7227,15.1152 21.8007,14.9122 C21.8497,14.7872 22.0417,14.2982 22.1597,14.0532 C22.2737,13.8192 22.3707,13.6842 22.5747,13.3652 C22.7747,13.0522 22.9897,12.9172 23.2427,12.8042 C23.7827,12.5692 24.3517,12.9162 24.5437,13.3952 C24.6297,13.6102 24.5527,14.1082 24.5157,14.5002 C24.4547,15.1472 24.2617,15.8062 24.1637,16.1482 C24.0357,16.5952 23.8897,17.3832 23.8237,17.7492 C23.7517,18.1432 23.5897,19.1312 23.4647,19.5692 C23.3787,19.8702 23.0937,20.5472 22.8127,20.9532 C22.8127,20.9532 21.7387,22.2032 21.6207,22.7652 C21.5037,23.3282 21.5427,23.3322 21.5197,23.7302 C21.4957,24.1292 21.6407,24.6532 21.6407,24.6532 C21.6407,24.6532 20.8387,24.7572 20.4067,24.6872 C20.0157,24.6252 19.5317,23.8462 19.4067,23.6092 C19.2347,23.2812 18.8677,23.3442 18.7247,23.5862 C18.4997,23.9692 18.0157,24.6562 17.6737,24.6992 C17.0057,24.7832 15.6197,24.7292 14.5347,24.7192 C14.5347,24.7192 14.7197,23.7082 14.3077,23.3612 C14.0027,23.1012 13.4777,22.5772 13.1637,22.3012 L12.3317,21.3802 C12.0477,21.0202 11.7027,20.2872 11.0887,19.3952 C10.7407,18.8912 10.0617,18.3102 9.8047,17.8162 C9.5817,17.3912 9.4737,16.8622 9.6147,16.4912 C9.8397,15.8972 10.2897,15.5942 10.9767,15.6592 C11.4957,15.7092 11.8247,15.8652 12.2147,16.1962 C12.4397,16.3862 12.7877,16.7302 12.9647,16.9442 C13.1277,17.1392 13.1677,17.2202 13.3417,17.4532 C13.5717,17.7602 13.6437,17.9122 13.5557,17.5742" id="hand-border" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M20.5664,21.7344 L20.5664,18.2754" id="line3" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
            <path d="M18.5508,21.7461 L18.5348,18.2731" id="line2" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
            <path d="M16.5547,18.3047 L16.5757,21.7307" id="line1" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
        </g>
    </g>
  </svg>
)

const Grabbing: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="closedhand">
            <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
                <rect id="bg" x="0" y="0" width="35" height="35"></rect>
            </g>
            <path d="M13.5732,12.0361 C14.0532,11.8581 15.0002,11.9671 15.2502,12.5091 C15.4632,12.9711 15.6462,13.7501 15.6562,13.5841 C15.6802,13.2151 15.6322,12.4171 15.7932,12.0001 C15.9102,11.6961 16.1402,11.4101 16.4792,11.3091 C16.7642,11.2231 17.0992,11.1931 17.3952,11.2541 C17.7082,11.3181 18.0372,11.5411 18.1602,11.7531 C18.5222,12.3761 18.5282,13.6521 18.5452,13.5841 C18.6092,13.3121 18.6152,12.3551 18.8282,12.0001 C18.9692,11.7651 19.3252,11.5551 19.5152,11.5211 C19.8092,11.4691 20.1712,11.4531 20.4792,11.5131 C20.7282,11.5621 21.0652,11.8571 21.1562,12.0001 C21.3752,12.3441 21.4982,13.3161 21.5352,13.6581 C21.5512,13.7991 21.6092,13.2651 21.8282,12.9221 C22.2342,12.2831 23.6722,12.1591 23.7262,13.5611 C23.7522,14.2151 23.7462,14.1851 23.7462,14.6251 C23.7462,15.1411 23.7342,15.4531 23.7062,15.8271 C23.6762,16.2261 23.5902,17.1311 23.4652,17.5691 C23.3792,17.8701 23.0942,18.5471 22.8122,18.9531 C22.8122,18.9531 21.7382,20.2031 21.6212,20.7651 C21.5042,21.3281 21.5432,21.3321 21.5192,21.7301 C21.4962,22.1291 21.6402,22.6531 21.6402,22.6531 C21.6402,22.6531 20.8392,22.7571 20.4062,22.6871 C20.0152,22.6251 19.5312,21.8471 19.4062,21.6091 C19.2342,21.2811 18.8672,21.3441 18.7242,21.5861 C18.5002,21.9691 18.0152,22.6561 17.6742,22.6991 C17.0052,22.7831 15.6192,22.7291 14.5342,22.7191 C14.5342,22.7191 14.7192,21.7081 14.3072,21.3611 C14.0022,21.1011 13.4772,20.5771 13.1632,20.3011 L12.3312,19.3801 C12.0482,19.0201 11.3292,18.4511 11.0882,17.3951 C10.8752,16.4591 10.8962,16.0001 11.1252,15.6251 C11.3572,15.2441 11.7952,15.0361 11.9792,15.0001 C12.1872,14.9581 12.6712,14.9611 12.8542,15.0621 C13.0772,15.1851 13.1672,15.2211 13.3422,15.4531 C13.5722,15.7601 13.6542,15.9091 13.5552,15.5741 C13.4792,15.3121 13.2332,14.9791 13.1212,14.6041 C13.0122,14.2431 12.7202,13.6611 12.7412,13.0781 C12.7492,12.8571 12.8442,12.3071 13.5732,12.0361" id="hand" fill="#FFFFFF"></path>
            <path d="M13.5732,12.0361 C14.0532,11.8581 15.0002,11.9671 15.2502,12.5091 C15.4632,12.9711 15.6462,13.7501 15.6562,13.5841 C15.6802,13.2151 15.6322,12.4171 15.7932,12.0001 C15.9102,11.6961 16.1402,11.4101 16.4792,11.3091 C16.7642,11.2231 17.0992,11.1931 17.3952,11.2541 C17.7082,11.3181 18.0372,11.5411 18.1602,11.7531 C18.5222,12.3761 18.5282,13.6521 18.5452,13.5841 C18.6092,13.3121 18.6152,12.3551 18.8282,12.0001 C18.9692,11.7651 19.3252,11.5551 19.5152,11.5211 C19.8092,11.4691 20.1712,11.4531 20.4792,11.5131 C20.7282,11.5621 21.0652,11.8571 21.1562,12.0001 C21.3752,12.3441 21.4982,13.3161 21.5352,13.6581 C21.5512,13.7991 21.6092,13.2651 21.8282,12.9221 C22.2342,12.2831 23.6722,12.1591 23.7262,13.5611 C23.7522,14.2151 23.7462,14.1851 23.7462,14.6251 C23.7462,15.1411 23.7342,15.4531 23.7062,15.8271 C23.6762,16.2261 23.5902,17.1311 23.4652,17.5691 C23.3792,17.8701 23.0942,18.5471 22.8122,18.9531 C22.8122,18.9531 21.7382,20.2031 21.6212,20.7651 C21.5042,21.3281 21.5432,21.3321 21.5192,21.7301 C21.4962,22.1291 21.6402,22.6531 21.6402,22.6531 C21.6402,22.6531 20.8392,22.7571 20.4062,22.6871 C20.0152,22.6251 19.5312,21.8471 19.4062,21.6091 C19.2342,21.2811 18.8672,21.3441 18.7242,21.5861 C18.5002,21.9691 18.0152,22.6561 17.6742,22.6991 C17.0052,22.7831 15.6192,22.7291 14.5342,22.7191 C14.5342,22.7191 14.7192,21.7081 14.3072,21.3611 C14.0022,21.1011 13.4772,20.5771 13.1632,20.3011 L12.3312,19.3801 C12.0482,19.0201 11.3292,18.4511 11.0882,17.3951 C10.8752,16.4591 10.8962,16.0001 11.1252,15.6251 C11.3572,15.2441 11.7952,15.0361 11.9792,15.0001 C12.1872,14.9581 12.6712,14.9611 12.8542,15.0621 C13.0772,15.1851 13.1672,15.2211 13.3422,15.4531 C13.5722,15.7601 13.6542,15.9091 13.5552,15.5741 C13.4792,15.3121 13.2332,14.9791 13.1212,14.6041 C13.0122,14.2431 12.7202,13.6611 12.7412,13.0781 C12.7492,12.8571 12.8442,12.3071 13.5732,12.0361 L13.5732,12.0361 Z" id="hand-border" stroke="#000000" strokeWidth="0.75" strokeLinejoin="round"></path>
            <path d="M20.5664,19.7344 L20.5664,16.2754" id="line3" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
            <path d="M18.5508,19.7461 L18.5348,16.2731" id="line2" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
            <path d="M16.5547,16.3047 L16.5757,19.7307" id="line1" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
        </g>
    </g>
  </svg>
)

const Pointer: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="pointinghand">
            <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
                <rect id="bg" x="0" y="0" width="35" height="35"></rect>
            </g>
            <path d="M13.3315,21.3799 C13.0475,21.0209 12.7025,20.2869 12.0885,19.3959 C11.7405,18.8919 10.8775,17.9429 10.6205,17.4609 C10.3975,17.0349 10.4215,16.8439 10.4745,16.4909 C10.5685,15.8629 11.2125,15.3739 11.8995,15.4399 C12.4185,15.4889 12.8585,15.8319 13.2545,16.1559 C13.4935,16.3509 13.7875,16.7299 13.9645,16.9439 C14.1275,17.1399 14.1675,17.2209 14.3415,17.4529 C14.5715,17.7599 14.6435,17.9119 14.5555,17.5739 C14.4845,17.0779 14.3685,16.2309 14.2005,15.4819 C14.0725,14.9139 14.0415,14.8249 13.9195,14.3889 C13.7905,13.9249 13.7245,13.5999 13.6035,13.1079 C13.5195,12.7599 13.3685,12.0489 13.3275,11.6489 C13.2705,11.1019 13.2405,10.2099 13.5915,9.7999 C13.8665,9.4789 14.4975,9.3819 14.8885,9.5799 C15.4005,9.8389 15.6915,10.5829 15.8245,10.8799 C16.0635,11.4139 16.2115,12.0309 16.3405,12.8409 C16.5045,13.8719 16.8065,15.3029 16.8165,15.6039 C16.8405,15.2349 16.7485,14.4579 16.8125,14.1039 C16.8705,13.7829 17.1405,13.4099 17.4785,13.3089 C17.7645,13.2239 18.0995,13.1929 18.3945,13.2539 C18.7075,13.3179 19.0375,13.5419 19.1605,13.7529 C19.5225,14.3769 19.5295,15.6519 19.5445,15.5839 C19.6305,15.2079 19.6155,14.3549 19.8285,13.9999 C19.9685,13.7659 20.3255,13.5549 20.5155,13.5209 C20.8095,13.4689 21.1705,13.4529 21.4795,13.5129 C21.7285,13.5619 22.0655,13.8579 22.1565,13.9999 C22.3745,14.3439 22.4985,15.3169 22.5355,15.6579 C22.5505,15.7989 22.6095,15.2659 22.8285,14.9219 C23.2345,14.2829 24.6715,14.1589 24.7265,15.5609 C24.7515,16.2149 24.7465,16.1849 24.7465,16.6249 C24.7465,17.1419 24.7345,17.4529 24.7065,17.8269 C24.6755,18.2269 24.5895,19.1309 24.4645,19.5689 C24.3785,19.8699 24.0935,20.5469 23.8125,20.9529 C23.8125,20.9529 22.7385,22.2029 22.6215,22.7659 C22.5035,23.3279 22.5425,23.3319 22.5195,23.7309 C22.4965,24.1289 22.6405,24.6529 22.6405,24.6529 C22.6405,24.6529 21.8385,24.7569 21.4065,24.6879 C21.0155,24.6249 20.5315,23.8469 20.4065,23.6089 C20.2345,23.2809 19.8675,23.3439 19.7245,23.5859 C19.4995,23.9689 19.0155,24.6559 18.6735,24.6989 C18.0055,24.7829 16.6195,24.7299 15.5345,24.7189 C15.5345,24.7189 15.7195,23.7079 15.3075,23.3609 C15.0025,23.1019 14.4775,22.5769 14.1635,22.3009 L13.3315,21.3799 Z" id="hand" fill="#FFFFFF"></path>
            <path d="M13.3315,21.3799 C13.0475,21.0209 12.7025,20.2869 12.0885,19.3959 C11.7405,18.8919 10.8775,17.9429 10.6205,17.4609 C10.3975,17.0349 10.4215,16.8439 10.4745,16.4909 C10.5685,15.8629 11.2125,15.3739 11.8995,15.4399 C12.4185,15.4889 12.8585,15.8319 13.2545,16.1559 C13.4935,16.3509 13.7875,16.7299 13.9645,16.9439 C14.1275,17.1399 14.1675,17.2209 14.3415,17.4529 C14.5715,17.7599 14.6435,17.9119 14.5555,17.5739 C14.4845,17.0779 14.3685,16.2309 14.2005,15.4819 C14.0725,14.9139 14.0415,14.8249 13.9195,14.3889 C13.7905,13.9249 13.7245,13.5999 13.6035,13.1079 C13.5195,12.7599 13.3685,12.0489 13.3275,11.6489 C13.2705,11.1019 13.2405,10.2099 13.5915,9.7999 C13.8665,9.4789 14.4975,9.3819 14.8885,9.5799 C15.4005,9.8389 15.6915,10.5829 15.8245,10.8799 C16.0635,11.4139 16.2115,12.0309 16.3405,12.8409 C16.5045,13.8719 16.8065,15.3029 16.8165,15.6039 C16.8405,15.2349 16.7485,14.4579 16.8125,14.1039 C16.8705,13.7829 17.1405,13.4099 17.4785,13.3089 C17.7645,13.2239 18.0995,13.1929 18.3945,13.2539 C18.7075,13.3179 19.0375,13.5419 19.1605,13.7529 C19.5225,14.3769 19.5295,15.6519 19.5445,15.5839 C19.6305,15.2079 19.6155,14.3549 19.8285,13.9999 C19.9685,13.7659 20.3255,13.5549 20.5155,13.5209 C20.8095,13.4689 21.1705,13.4529 21.4795,13.5129 C21.7285,13.5619 22.0655,13.8579 22.1565,13.9999 C22.3745,14.3439 22.4985,15.3169 22.5355,15.6579 C22.5505,15.7989 22.6095,15.2659 22.8285,14.9219 C23.2345,14.2829 24.6715,14.1589 24.7265,15.5609 C24.7515,16.2149 24.7465,16.1849 24.7465,16.6249 C24.7465,17.1419 24.7345,17.4529 24.7065,17.8269 C24.6755,18.2269 24.5895,19.1309 24.4645,19.5689 C24.3785,19.8699 24.0935,20.5469 23.8125,20.9529 C23.8125,20.9529 22.7385,22.2029 22.6215,22.7659 C22.5035,23.3279 22.5425,23.3319 22.5195,23.7309 C22.4965,24.1289 22.6405,24.6529 22.6405,24.6529 C22.6405,24.6529 21.8385,24.7569 21.4065,24.6879 C21.0155,24.6249 20.5315,23.8469 20.4065,23.6089 C20.2345,23.2809 19.8675,23.3439 19.7245,23.5859 C19.4995,23.9689 19.0155,24.6559 18.6735,24.6989 C18.0055,24.7829 16.6195,24.7299 15.5345,24.7189 C15.5345,24.7189 15.7195,23.7079 15.3075,23.3609 C15.0025,23.1019 14.4775,22.5769 14.1635,22.3009 L13.3315,21.3799 L13.3315,21.3799 Z" id="hand-border" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M21.5664,21.7344 L21.5664,18.2754" id="line3" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
            <path d="M19.5508,21.7461 L19.5348,18.2731" id="line2" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
            <path d="M17.5547,18.3047 L17.5757,21.7307" id="line1" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></path>
        </g>
    </g>
  </svg>
)

const EwResize: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="resizeeastwest">
            <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
                <rect id="bg" x="0" y="0" width="35" height="35"></rect>
            </g>
            <path d="M9,17.9907 L9,17.9957 L14.997,23.9917 L14.998,19.9927 L16.997,19.9927 L19.017,19.9927 L19.017,23.9927 L24.997,17.9917 L19.017,11.9927 L19.018,16.0117 L16.997,16.0137 L14.997,16.0137 L14.998,11.9917 L9,17.9907 Z M10.411,17.9937 L13.998,14.4057 L13.997,16.9927 L17.497,16.9927 L20.018,16.9927 L20.018,14.4077 L23.583,17.9937 L20.019,21.5787 L20.018,18.9937 L17.497,18.9937 L13.998,18.9927 L13.997,21.5787 L10.411,17.9937 Z" id="resize-border" fill="#FFFFFF"></path>
            <path d="M17.4971,18.9932 L20.0181,18.9932 L20.0181,21.5792 L23.5831,17.9932 L20.0181,14.4082 L20.0181,17.0132 L17.4971,17.0132 L13.9971,17.0132 L13.9971,14.4062 L10.4111,17.9932 L13.9971,21.5792 L13.9971,18.9922 L17.4971,18.9932 Z" id="resize" fill="#000000"></path>
        </g>
    </g>
  </svg>
)

const NsResize: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="resizenorthsouth">
            <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
                <rect id="bg" x="0" y="0" width="35" height="35"></rect>
            </g>
            <path d="M17,9 L11,14.98 L15,14.98 L15,17 L15,19 L11,19 L17,25 L23,19 L19,19 L19,17 L19,14.98 L23,14.98 L17,9 Z M17,10.414 L20.586,13.981 L18,13.981 L18,16.501 L18,20 L20.586,20 L17,23.586 L13.414,20 L16,20 L16,16.501 L16,13.981 L13.414,13.981 L17,10.414 Z" id="resize-border" fill="#FFFFFF"></path>
            <path d="M18,16.5 L18,13.98 L20.586,13.98 L17,10.414 L13.414,13.98 L16,13.98 L16,16.5 L16,20 L13.414,20 L17,23.586 L20.586,20 L18,20 L18,16.5 Z" id="resize" fill="#000000"></path>
        </g>
    </g>
  </svg>
)

const NwseResize: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="resizenorthwestsoutheast">
            <g id="bg-copy" fill="#FFFFFF" opacity="0.00999999978">
                <rect id="bg" x="0" y="0" width="35" height="35"></rect>
            </g>
            <path d="M14.2568,17.0869 L18.3288,21.1549 L15.4998,23.9829 L23.9728,23.9699 L23.9858,15.4999 L21.1448,18.3419 L17.0698,14.2739 L15.6558,12.8589 L18.4998,10.0169 L10.0138,10.0169 L10.0138,18.5009 L12.8428,15.6739 L14.2568,17.0869 Z" id="resize" fill="#FFFFFF"></path>
            <path d="M15.3174,16.7334 L19.7444,21.1574 L17.9164,22.9854 L22.9724,22.9694 L22.9864,17.9154 L21.1444,19.7564 L16.7164,15.3344 L14.2424,12.8594 L16.0864,11.0164 L11.0134,11.0164 L11.0134,16.0874 L12.8434,14.2594 L15.3174,16.7334 Z" id="resize" fill="#000000"></path>
        </g>
    </g>
  </svg>
)

const Default: React.FC<SvgProps> =  ({ size = 80, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" version="1.1" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="pointer">
            <g id="bg" fill="#FFFFFF" opacity="0.00999999978">
                <rect x="0" y="0" width="35" height="35"></rect>
            </g>
            <path d="M12,24.4219 L12,8.4069 L23.591,20.0259 L16.81,20.0259 L16.399,20.1499 L12,24.4219 Z" id="point-border" fill="#FFFFFF"></path>
            <path d="M21.0845,25.0962 L17.4795,26.6312 L12.7975,15.5422 L16.4835,13.9892 L21.0845,25.0962 Z" id="stem-border" fill="#FFFFFF"></path>
            <path d="M19.751,24.4155 L17.907,25.1895 L14.807,17.8155 L16.648,17.0405 L19.751,24.4155 Z" id="stem" fill="#000000"></path>
            <path d="M13,10.814 L13,22.002 L15.969,19.136 L16.397,18.997 L21.165,18.997 L13,10.814 Z" id="point" fill="#000000"></path>
        </g>
    </g>
  </svg>
)