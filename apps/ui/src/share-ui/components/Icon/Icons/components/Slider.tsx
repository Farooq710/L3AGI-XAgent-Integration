/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SliderProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Slider: React.FC<SliderProps> = ({size, ...props}) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={ size || "32" } height={ size || "32" } {...props}>
    <mask id="path-1-inside-1_5614_36423" fill="#fff">
      <path d="M16.9313 16.75C16.7402 17.3586 16.1717 17.8 15.5 17.8C14.8283 17.8 14.2598 17.3586 14.0687 16.75H10C9.72386 16.75 9.5 16.5261 9.5 16.25C9.5 15.9739 9.72386 15.75 10 15.75H14.1041C14.3234 15.1937 14.8657 14.8 15.5 14.8C16.1343 14.8 16.6766 15.1937 16.8959 15.75H21C21.2761 15.75 21.5 15.9739 21.5 16.25C21.5 16.5261 21.2761 16.75 21 16.75H16.9313Z"
        fillRule="evenodd" clipRule="evenodd" />
    </mask>
    <path d="M16.9313 16.75C16.7402 17.3586 16.1717 17.8 15.5 17.8C14.8283 17.8 14.2598 17.3586 14.0687 16.75H10C9.72386 16.75 9.5 16.5261 9.5 16.25C9.5 15.9739 9.72386 15.75 10 15.75H14.1041C14.3234 15.1937 14.8657 14.8 15.5 14.8C16.1343 14.8 16.6766 15.1937 16.8959 15.75H21C21.2761 15.75 21.5 15.9739 21.5 16.25C21.5 16.5261 21.2761 16.75 21 16.75H16.9313Z"
      fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    <path d="M16.9313 16.75V16.625H16.8396L16.8121 16.7125L16.9313 16.75ZM14.0687 16.75L14.1879 16.7125L14.1604 16.625H14.0687V16.75ZM14.1041 15.75V15.875H14.1891L14.2203 15.7959L14.1041 15.75ZM16.8959 15.75L16.7797 15.7959L16.8109 15.875H16.8959V15.75ZM15.5 17.925C16.2278 17.925 16.8436 17.4466 17.0506 16.7875L16.8121 16.7125C16.6369 17.2705 16.1155 17.675 15.5 17.675V17.925ZM13.9494 16.7875C14.1564 17.4466 14.7722 17.925 15.5 17.925V17.675C14.8845 17.675 14.3631 17.2705 14.1879 16.7125L13.9494 16.7875ZM14.0687 16.625H10V16.875H14.0687V16.625ZM10 16.625C9.79289 16.625 9.625 16.4571 9.625 16.25H9.375C9.375 16.5952 9.65482 16.875 10 16.875V16.625ZM9.625 16.25C9.625 16.0429 9.79289 15.875 10 15.875V15.625C9.65482 15.625 9.375 15.9048 9.375 16.25H9.625ZM10 15.875H14.1041V15.625H10V15.875ZM15.5 14.675C14.8127 14.675 14.2254 15.1017 13.9878 15.7041L14.2203 15.7959C14.4215 15.2857 14.9188 14.925 15.5 14.925V14.675ZM17.0122 15.7041C16.7746 15.1017 16.1873 14.675 15.5 14.675V14.925C16.0812 14.925 16.5785 15.2857 16.7797 15.7959L17.0122 15.7041ZM16.8959 15.875H21V15.625H16.8959V15.875ZM21 15.875C21.2071 15.875 21.375 16.0429 21.375 16.25H21.625C21.625 15.9048 21.3452 15.625 21 15.625V15.875ZM21.375 16.25C21.375 16.4571 21.2071 16.625 21 16.625V16.875C21.3452 16.875 21.625 16.5952 21.625 16.25H21.375ZM21 16.625H16.9313V16.875H21V16.625Z"
      fill="#fff" mask="url(#path-1-inside-1_5614_36423)" />
  </svg>
);
Slider.displayName = 'Slider';
export default Slider;
/* tslint:enable */
/* eslint-enable */
