import React, { Component } from "react";
import Head from "../../Components/Head";
import { Container, Readable } from "../../Components/Layout";
const styles = require("./About.css");
const dataEn = require("./data-about-en.md");
const dataDe = require("./data-about-de.md");
import { t } from "../../Components/Languages";

interface AboutProps {
	match: any;
}

class About extends Component<AboutProps, any> {
	render() {
		const { lang } = this.props.match.params;

		return (
			<>
				<Head title="ReactFondue • About" />
				<Container>
					<Readable>
						{lang === "en" && (
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: dataEn.__content,
								}}
							/>
						)}
						{lang === "de" && (
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: dataDe.__content,
								}}
							/>
						)}
					</Readable>
				</Container>
			</>
		);
	}
}

export default About;
