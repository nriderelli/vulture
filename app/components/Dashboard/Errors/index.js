// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import local files
import Refresh from 'images/refresh.png';
import Button from '../../Button';
import IMG from './IMG';
import ErrorContainer from './ErrorContainer';
import ErrorText from './ErrorText';
import Icon from './Icon';
/* eslint-disable react/prefer-stateless-function */
class Errors extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-lg-10 col-md-9">
					{this.props.error ? (
						<ErrorContainer>
							<ErrorText>{this.props.error}</ErrorText>
							<Button float="right" background="#f88a1a">
								<Icon
									className="fa fa-cogs"
									aria-hidden="true"
								/>
							</Button>
						</ErrorContainer>
					) : (
						''
					)}
				</div>
				<div className="col-lg-2 col-md-3">
					<Button className="dash_my0"
						float="right"
						height="100%"
						background="#006e82"
						padding="10px"
						
					>
						<IMG src={Refresh} alt="refresh" />
						&nbsp;&nbsp; My Dashboard
					</Button>
				</div>
			</div>
		);
	}
}

export default Errors;
