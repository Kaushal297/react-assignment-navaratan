import styles from "../styles/login.module.css";

function Login() {
	return (
		<div
			className={`${styles.container} flex flex-col items-center justify-center`}>
			<input
				type='text'
				name='username'
				id='username'
				placeholder='Username'
			/>
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Password'
			/>
			<div>
				<input type='checkbox' name='remember me' id='rememberMe' />
				<label htmlFor='rememberMe'>Remember Me</label>
			</div>

			<button>login</button>
		</div>
	);
}

export default Login;
