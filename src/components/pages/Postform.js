// import React, { Component } from 'react'
// import axios from 'axios'

// class Postform extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       username:  '',
//       email : '',
//       password: ''
//     }
    
//   }
//   changeHandler = e =>{
//     this.setState({[e.target.email]:e.target.value})
//   }

//   submitHandler = e =>{
//     e.preventDefault()
//     console.log(this.state)
//     axios.post("http://localhost:8080/register",this.state)
//     .then(response => {
//       console.log(response)
//     }).catch(error=>{
//       console.log(error)
//     })
//   }
  
//   render() {
//     const {username,email,password} = this.state
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <input type="text" name="username" values = {username} onChange={this.changeHandler}/>
//           </div>
//           <div>
//             <input type="text"name="email" values = {email}  onChange={this.changeHandler}/>
//           </div>
//           <div>
//             <input type="text" email="password"values = {password}  onChange={this.changeHandler}/>
//           </div>
//         </form>
//         <button type ="submit"> submit </button>
//       </div>
//     )
//   }
// }

// export default Postform


import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8080/register', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { username, email, password } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm