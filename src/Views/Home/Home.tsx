import React, { Component, Fragment } from "react";
import Head from "../../Components/Head";
import { ContentPusher, Container, Readable } from "../../Components/Layout";
const styles = require("./Home.css");
const dataEn = require("./data-home-en.md");
const dataDe = require("./data-home-de.md");
import { t } from "../../Components/Languages";
import OtherProjects from "../../Components/OtherProjects";

interface HomeProps {
	match: any;
}

class Home extends Component<HomeProps, any> {
	render() {
		const { lang } = this.props.match.params;

		return (
			<Fragment>
				<Head />
				<ContentPusher>
					<Container>
						<Readable>
							{lang === "en" && (
								<div
									dangerouslySetInnerHTML={{
										__html: dataEn.__content,
									}}
								/>
							)}
							{lang === "de" && (
								<div
									dangerouslySetInnerHTML={{
										__html: dataDe.__content,
									}}
								/>
							)}
							<OtherProjects />
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Home;
