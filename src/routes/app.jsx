import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/layout';
import Login from '../containers/login';
import RecoveryPassword from '../containers/recoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'
import '../styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/password-recovery" component={PasswordRecovery} />
					<Route exact path="/send-email" component={SendEmail} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
					<Route path="*" component={NotFound} />
				</Routes>
			</Layout>
		</BrowserRouter>

	);
}



export default App;