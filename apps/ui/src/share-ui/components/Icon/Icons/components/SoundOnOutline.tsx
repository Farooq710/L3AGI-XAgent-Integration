/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SoundOnOutlineProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const SoundOnOutline: React.FC<SoundOnOutlineProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13953)" fill="#fff">
      <path d="M8.25531 24.5197H11.1571C11.2399 24.5197 11.3142 24.5448 11.382 24.6061L15.8688 28.622C16.3995 29.0961 16.8086 29.3169 17.3447 29.3169 18.0903 29.3169 18.6625 28.7633 18.6625 28.0094V12.4065C18.6625 11.6525 18.0903 11.0469 17.328 11.0469 16.7992 11.0469 16.4384 11.2808 15.8688 11.7939L11.382 15.7744C11.3124 15.8339 11.2399 15.8608 11.1571 15.8608H8.25531C6.75783 15.8608 6 16.6464 6 18.2322V22.1586C6 23.7425 6.7662 24.5197 8.25531 24.5197zM8.42607 22.7216C8.08862 22.7216 7.92602 22.5571 7.92602 22.2196V18.1692C7.92602 17.8253 8.08862 17.6608 8.42607 17.6608H11.6208C11.8974 17.6608 12.1072 17.6042 12.3421 17.3898L16.4319 13.667C16.4793 13.6178 16.5304 13.5908 16.6 13.5908 16.6734 13.5908 16.7365 13.6437 16.7365 13.7375V26.6198C16.7365 26.7136 16.6734 26.7785 16.6 26.7785 16.5471 26.7785 16.4877 26.7479 16.4319 26.6986L12.3421 22.9926C12.1072 22.7847 11.8974 22.7216 11.6208 22.7216H8.42607zM22.1351 24.7027C22.5568 24.9816 23.125 24.8881 23.4376 24.4402 24.2607 23.3443 24.749 21.7857 24.749 20.1716 24.749 18.5575 24.2607 17.0073 23.4376 15.8994 23.125 15.4551 22.5568 15.3513 22.1351 15.6406 21.6374 15.967 21.5485 16.5677 21.9387 17.139 22.5034 17.9414 22.8221 19.0328 22.8221 20.1716 22.8221 21.3104 22.4932 22.3916 21.9387 23.2041 21.5569 23.7821 21.6374 24.3678 22.1351 24.7027zM26.2059 27.4327C26.6647 27.7249 27.2302 27.6127 27.5463 27.1492 28.8775 25.2708 29.6473 22.7569 29.6473 20.1717 29.6473 17.5865 28.8859 15.0558 27.5463 13.1923 27.2302 12.7307 26.6647 12.6185 26.2059 12.9106 25.7233 13.2137 25.6547 13.8114 26.0096 14.3405 27.0972 15.9262 27.7241 18.0146 27.7241 20.1717 27.7241 22.3288 27.0804 24.3986 26.0096 26.0011 25.6649 26.5301 25.7233 27.1296 26.2059 27.4327zM30.3118 30.1963C30.7528 30.492 31.3488 30.3623 31.665 29.8766 33.4671 27.1896 34.5431 23.8431 34.5431 20.1772 34.5431 16.5047 33.4419 13.1731 31.665 10.4796 31.3488 9.98364 30.7528 9.86414 30.3118 10.1599 29.8299 10.4696 29.7623 11.0618 30.095 11.5871 31.6597 13.9646 32.633 16.9152 32.633 20.1772 32.633 23.4307 31.6597 26.3999 30.095 28.7691 29.7623 29.2944 29.8299 29.8847 30.3118 30.1963z"
      />
    </g>
    <defs>
      <filter id="filter0_bd_718_13953" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13953" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13953" result="effect2_dropShadow_718_13953" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13953" result="shape" />
      </filter>
    </defs>
  </svg>
);
SoundOnOutline.displayName = 'SoundOnOutline';
export default SoundOnOutline;
/* tslint:enable */
/* eslint-enable */