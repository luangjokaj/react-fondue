import React from "react";
import classNames from "classnames";
const styles = require("./ContentPusher.css");
import AppearAfter from "../../AppearAfter";

interface ContentPusherProps {
	children: any;
	className?: string;
	delay?: number;
}

function ContentPusher({
	children,
	className,
	delay = 600,
}: ContentPusherProps) {
	return (
		<AppearAfter
			className={classNames(styles.contentPusher, className)}
			visibleClassName={styles.visible}
			delay={delay}
		>
			<div>{children}</div>
		</AppearAfter>
	);
}

export default ContentPusher;
