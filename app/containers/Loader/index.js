import React, {Component} from 'react';

import LoderContainer from './LoderContainer';
import ImageContainer from './ImageContainer';

/* in this component we can show loading gif */

class Loading extends Component {
	render() {
		// inline css for cursor
		const style = {
			"cursor":"progress",
		};
		return(
			<LoderContainer>
				<ImageContainer>
					<i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
				</ImageContainer>
			</LoderContainer>
		)
	}
}

export default Loading;