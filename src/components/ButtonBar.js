import React, { Component } from 'react';
import AppButton from './AppButton'

class ButtonBar extends Component {
	render() {
		return (
			<div>
					{
						this.props.items.map((item) => {
							return <AppButton
								key={item} 
								name={item}
								click={this.props.click}
							/>
						})
					}
			</div>
		)
	}
}

export default ButtonBar