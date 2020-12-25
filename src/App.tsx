import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { AuthProvider } from './providers/AuthProvider';

import store from './store';
import Routes from './routes';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</Provider>
		</NavigationContainer>
	);
}

export default App;