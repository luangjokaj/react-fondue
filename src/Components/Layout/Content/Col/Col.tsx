import React from 'react';
import classNames from 'classnames';
const styles = require('./Col.css');

type gridNumbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

interface ColProps {
	textAlign?: 'left' | 'center' | 'right';
	className?: string;
	id?: string;
	xs?: gridNumbers;
	sm?: gridNumbers;
	md?: gridNumbers;
	lg?: gridNumbers;
	xl?: gridNumbers;
	xxl?: gridNumbers;
	xxxl?: gridNumbers;
	first?: boolean;
	firstSm?: boolean;
	firstMd?: boolean;
	firstLg?: boolean;
	firstXl?: boolean;
	firstXxl?: boolean;
	firstXxxl?: boolean;
	last?: boolean;
	lastSm?: boolean;
	lastMd?: boolean;
	lastLg?: boolean;
	lastXl?: boolean;
	lastXxl?: boolean;
	lastXxxl?: boolean;
	children: any;
}

function Col({
	textAlign,
	className,
	id,
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
	xxxl,
	first,
	firstSm,
	firstMd,
	firstLg,
	firstXl,
	firstXxl,
	firstXxxl,
	last,
	lastSm,
	lastMd,
	lastLg,
	lastXl,
	lastXxl,
	lastXxxl,
	children,
}: ColProps) {
	return (
		<div
			id={id}
			className={classNames(
				styles.col,
				{
					[styles[`textAlign-${textAlign || ''}`]]: textAlign,
					[styles[`col${xs || ''}`]]: xs,
					[styles[`colSm${sm || ''}`]]: sm,
					[styles[`colMd${md || ''}`]]: md,
					[styles[`colLg${lg || ''}`]]: lg,
					[styles[`colXl${xl || ''}`]]: xl,
					[styles[`colXxl${xxl || ''}`]]: xxl,
					[styles[`colXxxl${xxxl || ''}`]]: xxxl,
					[styles.orderFirst]: first,
					[styles.orderSmFirst]: firstSm,
					[styles.orderMdFirst]: firstMd,
					[styles.orderLgFirst]: firstLg,
					[styles.orderXlFirst]: firstXl,
					[styles.orderXxlFirst]: firstXxl,
					[styles.orderXxxlFirst]: firstXxxl,
					[styles.orderLast]: last,
					[styles.orderSmLast]: lastSm,
					[styles.orderMdLast]: lastMd,
					[styles.orderLgLast]: lastLg,
					[styles.orderXlLast]: lastXl,
					[styles.orderXxlLast]: lastXxl,
					[styles.orderXxxlLast]: lastXxxl,
				},
				className
			)}
		>
			{children}
		</div>
	);
}

export default Col;
