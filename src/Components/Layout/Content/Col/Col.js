import React from 'react';
import classNames from 'classnames';
import styles from './Col.css';

function Col({
	textAlign,
	className,
	id,
	children,
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
}) {
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
