import React from "react";
import { Container, Readable } from "../../Layout";
const styles = require("./Loading.css");

function Loading() {
	return (
		<Container>
			<Readable>
				<div className={styles.loading}>
					<div className={styles.spinner}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</Readable>
		</Container>
	);
}

export default Loading;
