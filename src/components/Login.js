import styles from "../styles/login.module.css";
import { useState } from "react";
import { Route } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isChecked, setIsChecked] = useState(false);

	const handlelogin = () => {
		if (username !== "" && password !== "") {
			// TODO: push it to order page
		} else {
			// TODO: throw/display the errors
		}
	};
	return (
		<div
			className={`${styles.container} flex flex-col items-center justify-center`}>
			<input
				type='text'
				name='username'
				id='username'
				placeholder='Username'
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
				required
			/>
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Password'
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				required
			/>
			<div>
				<input
					type='checkbox'
					name='remember me'
					id='rememberMe'
					checked={isChecked}
					onChange={() => {
						setIsChecked(!isChecked);
					}}
				/>
				<label htmlFor='rememberMe'>Remember Me</label>
			</div>

			<button onClick={handlelogin}>login</button>
		</div>
	);
}

export default Login;
