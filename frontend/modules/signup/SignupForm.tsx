import React from 'react';

interface Props {
	name?: string;
	email?: string;
	password?: string;
	passwordConfirm?: string;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignupForm = ({
	name,
	email,
	password,
	passwordConfirm,
	onSubmit,
	onChange
}: Props) => {
	return (
		<form onSubmit={onSubmit}>
			<label>
				Name:
				<input
					className="uk-textarea"
					required
					name="name"
					value={name}
					onChange={onChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					className="uk-textarea"
					required
					name="email"
					value={email}
					onChange={onChange}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					className="uk-textarea"
					required
					type="password"
					name="password"
					value={password}
					onChange={onChange}
				/>
			</label>
			<br />
			<label>
				Password Confirm:
				<input
					className="uk-textarea"
					required
					type="password"
					name="passwordConfirm"
					value={passwordConfirm}
					onChange={onChange}
				/>
			</label>
			<br />
			<input className="uk-button-ancmnt" type="submit" value="Submit" />
		</form>
	);
};
