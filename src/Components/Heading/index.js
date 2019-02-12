import React from 'react';
import { makeHeading } from './makeHeading';

export const H1 = makeHeading(1);
export const H2 = makeHeading(2);
export const H3 = makeHeading(3);
export const H4 = makeHeading(4);
export const H5 = makeHeading(5);
export const H6 = makeHeading(6);

export const H = ({ type = 1, ...props }) => {
	const Component = makeHeading(type);
	return <Component {...props} />;
};
