import React from 'react';

function Svg({ className }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="9"
			viewBox="0 0 12 9"
			className={className}
		>
			<path
				fill="#E5E5E5"
				fillRule="evenodd"
				d="M6.001492,9 C5.495492,9 5.011492,8.767 4.675492,8.358 L0.462492,3.26 C-0.041508,2.649 -0.142508,1.782 0.203492,1.049 C0.508492,0.402 1.115492,0 1.788492,0 L10.214492,0 C10.887492,0 11.494492,0.402 11.799492,1.049 C12.145492,1.782 12.044492,2.649 11.541492,3.259 L7.327492,8.358 C6.991492,8.767 6.507492,9 6.001492,9"
			/>
		</svg>
	);
}

export default Svg;
