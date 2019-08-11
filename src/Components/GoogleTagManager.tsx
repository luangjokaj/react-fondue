import React from 'react';
// @ts-ignore
import gtmParts from 'react-google-tag-manager';

interface GoogleTagManagerProps {
	gtmId: string;
	dataLayerName?: string;
	additionalEvents?: object;
	previewVariables?: string;
	scriptId?: string;
	scheme?: string;
}

class GoogleTagManager extends React.Component<GoogleTagManagerProps, any> {
	componentDidMount() {
		const dataLayerName = this.props.dataLayerName || 'dataLayer';
		const scriptId = this.props.scriptId || 'react-google-tag-manager-gtm';

		if (!window[dataLayerName]) {
			const gtmScriptNode: any = document.getElementById(scriptId);

			eval(gtmScriptNode.textContent);
		}
	}

	render() {
		const {
			gtmId,
			dataLayerName,
			additionalEvents,
			previewVariables,
			scriptId,
			scheme,
		} = this.props;
		const gtm = gtmParts({
			id: gtmId,
			dataLayerName: dataLayerName || 'dataLayer',
			additionalEvents: additionalEvents || {},
			previewVariables: previewVariables || false,
			scheme: scheme || 'https:',
		});

		return (
			<div>
				<div>{gtm.noScriptAsReact()}</div>
				<div id={scriptId || 'react-google-tag-manager-gtm'}>
					{gtm.scriptAsReact()}
				</div>
			</div>
		);
	}
}

export default GoogleTagManager;
