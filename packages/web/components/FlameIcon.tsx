import React from 'react';

interface Props {
  className?: string;
}

const FlameIcon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-flame ${props.className}`} width="44"
    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
  </svg>
);

export default FlameIcon;
