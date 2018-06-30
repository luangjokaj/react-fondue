import React, { Component } from 'react';
import classNames from 'classnames';

const TEST = 'https://riangle.com/healthcheck-test.php';
const PROD = 'https://riangle.com/healthcheck-prod.php';
const CHTEST = 'https://riangle.com/healthcheck-ch-test.php';
const CHPROD = 'https://riangle.com/healthcheck-ch-prod.php';
const PRETEST = 'https://riangle.com/healthcheck-pre-test.php';

class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			test: {},
			prod: {},
			preTest: {},
			chTest: {},
			chProd: {},
		};
	}

	loadData = () => {
		this.setState({
			test: {},
			prod: {},
			preTest: {},
			chTest: {},
			chProd: {},
		});
		this.fetchData();
	};

	fetchAPI = (API, env) => {
		fetch(API)
			.then((response, env) => {
				return response.json();
			})
			.then(receivedResponse => {
				const freeMemory = receivedResponse.grape.data.memory.free.match(/^\d*/);
				const totalMemory = receivedResponse.grape.data.memory.total.match(/^\d*/);
				const difference = Number(totalMemory[0]) - Number(freeMemory[0]);
				const average = (Number(totalMemory[0]) + Number(freeMemory[0])) / 2;
				const percentage = (difference / average) * 100;

				this.setState({
					[env]: {
						grapeStatus: receivedResponse.grape.status,
						mangoStatus: receivedResponse.mango.status,
						version: receivedResponse.grape.data.spectra,
						time: receivedResponse.grape.data.time,
						memory: {
							free: freeMemory,
							total: totalMemory,
							percentage: percentage,
						},
					},
				});
				console.log(this.state);
			})
			.catch(error => {
				console.log(error);
				this.setState({
					[env]: {
						grapeStatus: 'down',
						mangoStatus: 'down',
						version: 'Unknown',
						time: 'Unknown',
						memory: {
							free: 'Unknown',
							total: 'Unknown',
							percentage: 0,
						},
					},
				});
			});
	};

	fetchData = () => {
		setTimeout(() => {
			this.fetchAPI(TEST, 'test');
			this.fetchAPI(PROD, 'prod');
			this.fetchAPI(PRETEST, 'preTest');
			this.fetchAPI(CHTEST, 'chTest');
			this.fetchAPI(CHPROD, 'chProd');
		}, 1500);
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const { test, prod, preTest, chTest, chProd } = this.state;
		const hasData =
			test['version'] &&
			prod['version'] &&
			preTest['version'] &&
			chTest['version'] &&
			chProd['version'];

		return (
			<div
				className={classNames('ss-wrapper', {
					loaded: hasData,
				})}
			>
				<div>
					<main className="ss-container">
						<header
							className={classNames('ss-header', {
								loaded: hasData,
							})}
						/>
						{hasData && (
							<div className="ss-content">
								<section>
									<div>
										<h2>Test</h2>
									</div>
									<div>
										<em>Spectra</em> <strong>{test.version}</strong>
									</div>
									<div>
										Grape{' '}
										<span role="img" aria-label="grape">
											🍇
										</span>
										<i className={test.grapeStatus}>{test.grapeStatus}</i>
									</div>
									<div>
										Mango{' '}
										<span role="img" aria-label="mango">
											🍊
										</span>
										<i className={test.mangoStatus}>{test.mangoStatus}</i>
									</div>
									<div className="ss-memory">
										Memory
										<section>
											<div>
												<em>Total</em>
												<strong>{test.memory.total} MB</strong>
											</div>
											<div>
												<em>Free</em>
												<strong>{test.memory.free} MB</strong>
											</div>
											<span
												className={classNames('ss-progress', {
													red: test.memory.percentage > 70,
													warning: test.memory.percentage > 40,
													error: test.memory.percentage === 0,
												})}
											>
												<i style={{ width: `${test.memory.percentage}%` }} />
											</span>
										</section>
									</div>
									<div className="ss-time">{test.time}</div>
								</section>
								<section>
									<div>
										<h2>Prod</h2>
									</div>
									<div>
										<em>Spectra</em> <strong>{prod.version}</strong>
									</div>
									<div>
										Grape{' '}
										<span role="img" aria-label="grape">
											🍇
										</span>
										<i className={prod.grapeStatus}>{prod.grapeStatus}</i>
									</div>
									<div>
										Mango{' '}
										<span role="img" aria-label="mango">
											🍊
										</span>
										<i className={prod.grapeStatus}>{prod.mangoStatus}</i>
									</div>
									<div className="ss-memory">
										Memory
										<section>
											<div>
												<em>Total</em>
												<strong>{prod.memory.total} MB</strong>
											</div>
											<div>
												<em>Free</em>
												<strong>{prod.memory.free} MB</strong>
											</div>
											<span
												className={classNames('ss-progress', {
													red: prod.memory.percentage > 70,
													warning: prod.memory.percentage > 40,
													error: prod.memory.percentage === 0,
												})}
											>
												<i style={{ width: `${prod.memory.percentage}%` }} />
											</span>
										</section>
									</div>
									<div className="ss-time">{prod.time}</div>
								</section>
								<section>
									<div>
										<h2>Pre Test</h2>
									</div>
									<div>
										<em>Spectra</em> <strong>{preTest.version}</strong>
									</div>
									<div>
										Grape{' '}
										<span role="img" aria-label="grape">
											🍇
										</span>
										<i className={preTest.grapeStatus}>{preTest.grapeStatus}</i>
									</div>
									<div>
										Mango{' '}
										<span role="img" aria-label="mango">
											🍊
										</span>
										<i className={preTest.grapeStatus}>{preTest.mangoStatus}</i>
									</div>
									<div className="ss-memory">
										Memory
										<section>
											<div>
												<em>Total</em>
												<strong>{preTest.memory.total} MB</strong>
											</div>
											<div>
												<em>Free</em>
												<strong>{preTest.memory.free} MB</strong>
											</div>
											<span
												className={classNames('ss-progress', {
													red: preTest.memory.percentage > 70,
													warning: preTest.memory.percentage > 40,
													error: preTest.memory.percentage === 0,
												})}
											>
												<i style={{ width: `${preTest.memory.percentage}%` }} />
											</span>
										</section>
									</div>
									<div className="ss-time">{preTest.time}</div>
								</section>
								<section>
									<div>
										<h2>CH Test</h2>
									</div>
									<div>
										<em>Spectra</em> <strong>{chTest.version}</strong>
									</div>
									<div>
										Grape{' '}
										<span role="img" aria-label="grape">
											🍇
										</span>
										<i className={chTest.grapeStatus}>{chTest.grapeStatus}</i>
									</div>
									<div>
										Mango{' '}
										<span role="img" aria-label="mango">
											🍊
										</span>
										<i className={chTest.mangoStatus}>{chTest.mangoStatus}</i>
									</div>
									<div className="ss-memory">
										Memory
										<section>
											<div>
												<em>Total</em>
												<strong>{chTest.memory.total} MB</strong>
											</div>
											<div>
												<em>Free</em>
												<strong>{chTest.memory.free} MB</strong>
											</div>
											<span
												className={classNames('ss-progress', {
													red: chTest.memory.percentage > 70,
													warning: chTest.memory.percentage > 40,
													error: chTest.memory.percentage === 0,
												})}
											>
												<i style={{ width: `${chTest.memory.percentage}%` }} />
											</span>
										</section>
									</div>
									<div className="ss-time">{test.time}</div>
								</section>
								<section>
									<div>
										<h2>CH Prod</h2>
									</div>
									<div>
										<em>Spectra</em> <strong>{chProd.version}</strong>
									</div>
									<div>
										Grape{' '}
										<span role="img" aria-label="grape">
											🍇
										</span>
										<i className={chProd.grapeStatus}>{chProd.grapeStatus}</i>
									</div>
									<div>
										Mango{' '}
										<span role="img" aria-label="mango">
											🍊
										</span>
										<i className={chProd.grapeStatus}>{chProd.mangoStatus}</i>
									</div>
									<div className="ss-memory">
										Memory
										<section>
											<div>
												<em>Total</em>
												<strong>{chProd.memory.total} MB</strong>
											</div>
											<div>
												<em>Free</em>
												<strong>{chProd.memory.free} MB</strong>
											</div>
											<span
												className={classNames('ss-progress', {
													red: chProd.memory.percentage > 70,
													warning: chProd.memory.percentage > 40,
													error: chProd.memory.percentage === 0,
												})}
											>
												<i style={{ width: `${chProd.memory.percentage}%` }} />
											</span>
										</section>
									</div>
									<div className="ss-time">{chProd.time}</div>
								</section>
							</div>
						)}
						<div className="ss-github">
							<a
								href="https://github.com/luangjokaj/spectra-status"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Article;
