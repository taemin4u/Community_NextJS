import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Svg = styled(motion.svg)`
  width: 50px;
  height: 50px;

  g {
    path {
      stroke-width: 20;
    }
  }
`;

const logoVariants = {
  normal: {
    pathLength: 0,
    fill: 'rgba(0, 0, 0, 0)',
    stroke: 'rgba(0,0,0,1)',
    scale: 1,
  },
  active: {
    fill: 'rgba(0, 0, 0, 1)',
    stroke: 'rgba(255,255,255,0)',
    pathLength: 1,
    scale: 1.2,
  },
};

function Airbnb() {
  return (
    <Svg
      version="1.0"
      variants={logoVariants}
      whileHover="active"
      initial="normal"
      transition={{
        default: { duration: 0.5 }, // 모든 프로퍼티에 적용됨
        // fill animation에만 적용됨, fill은 이 속성이 적용됨
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 584.000000 585.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.g transform="translate(0.000000,585.000000) scale(0.100000,-0.100000)">
        <motion.path
          d="M4115 5833 c-81 -10 -237 -48 -328 -79 -440 -154 -788 -502 -941
-943 -69 -198 -78 -262 -83 -595 l-5 -298 -197 195 c-126 126 -206 198 -224
203 -43 10 -112 -1 -145 -24 -56 -41 -80 -139 -48 -200 8 -15 171 -183 363
-373 303 -302 353 -348 385 -353 84 -15 88 -12 465 366 236 237 354 362 359
381 16 69 -8 139 -64 181 -28 21 -97 32 -139 22 -18 -5 -101 -79 -231 -209
l-204 -202 5 285 c4 239 8 299 25 370 60 253 179 462 359 630 168 156 363 257
597 308 112 23 360 23 474 -2 416 -89 752 -375 899 -766 52 -138 65 -206 70
-390 4 -153 2 -188 -17 -280 -87 -425 -398 -776 -811 -914 -172 -58 -125 -56
-1693 -56 -842 0 -1490 -4 -1558 -10 -382 -32 -716 -186 -983 -455 -211 -213
-350 -474 -416 -785 -33 -152 -33 -438 0 -590 104 -487 395 -868 828 -1084
485 -243 1083 -206 1530 93 346 232 574 568 664 979 18 82 22 141 26 391 l5
293 187 -185 c102 -101 197 -190 210 -197 35 -18 111 -16 148 3 62 33 93 105
78 184 -6 33 -49 81 -348 381 -188 189 -355 350 -371 359 -36 19 -106 19 -142
-1 -34 -17 -697 -681 -713 -713 -18 -35 -13 -114 9 -150 36 -60 107 -90 174
-72 34 9 76 45 244 212 l204 202 -5 -275 c-4 -301 -14 -372 -69 -528 -58 -165
-145 -307 -265 -433 -189 -198 -446 -332 -707 -368 -562 -78 -1096 231 -1305
755 -112 279 -113 613 -4 889 151 382 468 654 874 751 68 17 191 18 1639 24
1709 7 1598 3 1813 65 494 142 899 547 1043 1043 45 157 58 255 58 437 0 197
-21 327 -80 496 -81 234 -191 406 -374 589 -300 301 -669 453 -1088 449 -81
-1 -160 -4 -177 -6z"
        />
      </motion.g>
    </Svg>
  );
}

export default Airbnb;

/**
 
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="584.000000pt" height="585.000000pt" viewBox="0 0 584.000000 585.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,585.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4115 5833 c-81 -10 -237 -48 -328 -79 -440 -154 -788 -502 -941
-943 -69 -198 -78 -262 -83 -595 l-5 -298 -197 195 c-126 126 -206 198 -224
203 -43 10 -112 -1 -145 -24 -56 -41 -80 -139 -48 -200 8 -15 171 -183 363
-373 303 -302 353 -348 385 -353 84 -15 88 -12 465 366 236 237 354 362 359
381 16 69 -8 139 -64 181 -28 21 -97 32 -139 22 -18 -5 -101 -79 -231 -209
l-204 -202 5 285 c4 239 8 299 25 370 60 253 179 462 359 630 168 156 363 257
597 308 112 23 360 23 474 -2 416 -89 752 -375 899 -766 52 -138 65 -206 70
-390 4 -153 2 -188 -17 -280 -87 -425 -398 -776 -811 -914 -172 -58 -125 -56
-1693 -56 -842 0 -1490 -4 -1558 -10 -382 -32 -716 -186 -983 -455 -211 -213
-350 -474 -416 -785 -33 -152 -33 -438 0 -590 104 -487 395 -868 828 -1084
485 -243 1083 -206 1530 93 346 232 574 568 664 979 18 82 22 141 26 391 l5
293 187 -185 c102 -101 197 -190 210 -197 35 -18 111 -16 148 3 62 33 93 105
78 184 -6 33 -49 81 -348 381 -188 189 -355 350 -371 359 -36 19 -106 19 -142
-1 -34 -17 -697 -681 -713 -713 -18 -35 -13 -114 9 -150 36 -60 107 -90 174
-72 34 9 76 45 244 212 l204 202 -5 -275 c-4 -301 -14 -372 -69 -528 -58 -165
-145 -307 -265 -433 -189 -198 -446 -332 -707 -368 -562 -78 -1096 231 -1305
755 -112 279 -113 613 -4 889 151 382 468 654 874 751 68 17 191 18 1639 24
1709 7 1598 3 1813 65 494 142 899 547 1043 1043 45 157 58 255 58 437 0 197
-21 327 -80 496 -81 234 -191 406 -374 589 -300 301 -669 453 -1088 449 -81
-1 -160 -4 -177 -6z"/>
</g>
</svg>

 */