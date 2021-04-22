import React, { Component } from 'react';
// import axios from 'axios'
import Forms from './Forms'


   class Fitness extends Component {
	   getInfo = (e) => {
		   e.preventDefualt();
		   const forminfo =  e.target.elements.form.value
		   console.log(forminfo);
	   }
	   render() {
		   return (
			   <div>
				   <header className='fitheader'>
					   <h1>Fit Info</h1>
				   </header>
					   <Forms getInfo={this.getInfo} />
			   </div>
		   )
	   }
   }




export default Fitness;