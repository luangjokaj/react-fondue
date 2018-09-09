import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import styles from './Home.css';
import { t } from '../../Components/Languages';

import { connect } from "react-redux";
import { fetchData } from "../../App/Store";

class Home extends React.Component {
    componentDidMount( ) {
      if ( this.props.posts.length <= 0 ) {
        this.props.fetchData();
      }
    }

    render( ) {
      const { posts, match } = this.props;

      const { lang } = match.params;
			return (
				<div>
					<Helmet encodeSpecialCharacters={true}>
						<title>React SSR Boilerplate • Home</title>
						<meta
							name="description"
							content="A minimal React boilerplate with support for code splitting, hot module reload and server side rendering."
						/>
					</Helmet>
					<div className={styles.intro}>
						<h1 className={styles.title}>React Boilerplate</h1>
						<p className={styles.desc}>{t(lang, 'language.title')}</p>
	          <ul className={styles.desc}>
	            {posts.map(({id, title, body}) => (
	              <li key={id} >{title} - {body}</li>
	            ))}
	          </ul>
					</div>
				</div>
			);
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    posts: state.data,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
