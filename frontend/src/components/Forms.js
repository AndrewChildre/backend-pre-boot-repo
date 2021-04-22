import React from 'react'


const Forms = (props) => {
    return (
			<form onSubmit={props.getInfo}>
				<input type='text' name='form' />
				<button>push</button>
			</form>
		);
}

export default Forms;
