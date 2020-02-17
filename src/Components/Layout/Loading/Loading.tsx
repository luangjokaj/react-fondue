import React from "react";
import { ContentPusher, Container, Readable } from "../../Layout"
const styles = require("./Loading.css");

function Loading() {
	return (
		<ContentPusher delay={0}>
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
		</ContentPusher>
	);
}

export default Loading;
