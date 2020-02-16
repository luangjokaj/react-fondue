import React from "react";
import ContentPusher from "../ContentPusher";
import Readable from "../Readable";
import { Container } from "../Content";
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
