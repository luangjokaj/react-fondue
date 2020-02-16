import React from "react";
import { Projects, GitHub } from "../../assets/svg";
const styles = require("./OtherProjects.css");

function OtherProjects() {
	return (
		<section className={styles.openSource}>
			<h2>Other open source projects</h2>
			<ul className={styles.projects}>
				<li>
					<a
						href="https://www.wordpressify.co"
						target="_blank"
						className={styles.linkLogo}
					>
						<Projects type="wordpressify" />
					</a>
					<span>Development workflow for WordPress themes.</span>
					<div className={styles.linkWrapper}>
						<a href="https://github.com/luangjokaj/wordpressify">
							<GitHub />
						</a>
						<em>or</em>
						<a
							href="https://www.wordpressify.co"
							className={styles.websiteUrl}
							target="_blank"
						>
							Visit Website
						</a>
					</div>
				</li>
				<li>
					<a
						href="https://www.gopablo.co"
						target="_blank"
						className={styles.linkLogo}
					>
						<Projects type="gopablo" />
					</a>
					<span>
						GoPablo is a static site generator with a modern
						workflow.
					</span>
					<div className={styles.linkWrapper}>
						<a href="https://github.com/luangjokaj/gopablo">
							<GitHub />
						</a>
						<em>or</em>
						<a
							href="https://www.gopablo.co"
							target="_blank"
							className={styles.websiteUrl}
						>
							Visit Website
						</a>
					</div>
				</li>
				<li>
					<a
						href="https://www.fuzzymail.co"
						target="_blank"
						className={styles.linkLogo}
					>
						<Projects type="fuzzymail" />
					</a>
					<span>
						Email template generator. Making emails fun again.
					</span>
					<div className={styles.linkWrapper}>
						<a href="https://github.com/luangjokaj/fuzzymail">
							<GitHub />
						</a>
						<em>or</em>
						<a
							href="https://www.fuzzymail.co"
							target="_blank"
							className={styles.websiteUrl}
						>
							Visit Website
						</a>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default OtherProjects;
