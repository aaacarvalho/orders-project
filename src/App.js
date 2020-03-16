import React, { useState, useEffect } from 'react';
import AppContainer from './components/AppContainer';
import OrderData from './components/OrderData';
import Api from './services/api';
import './styles/style.css';

function App() {	
	const [ready, setReady] = useState(false);
	const [data, setData] = useState({
		cities: [], 
		neighborhoods: [], 
		buffets: [], 
		buffets_categories: [],
		snacks: [],
		snacks_categories: []
	});

	useEffect(() => {
		const getData = async () => {
			const cities = await Api.get('/cities');
			const neighborhoods = await Api.get('/neighborhoods');
			const buffets = await Api.get('/buffets');
			const buffets_categories = await Api.get('/buffets/categories');
			const snacks = await Api.get('/snacks');
			const snacks_categories = await Api.get('/snacks/categories');

			setData({
				cities: cities.data, 
				neighborhoods: neighborhoods.data, 
				buffets: buffets.data, 
				buffets_categories: buffets_categories.data,
				snacks: snacks.data,
				snacks_categories: snacks_categories.data
			});	
			
			setReady(true);
		};

		getData();
	}, []);

	return (
		<AppContainer>
			{ready && <OrderData 
				cities={data.cities}
				neighborhoods={data.neighborhoods}	
				snacks_categories={data.snacks_categories}
				snacks={data.snacks}
			/>}
		</AppContainer>
	);
}

export default App;
