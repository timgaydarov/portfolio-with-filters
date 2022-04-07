import React from 'react';
import './css/App.css';
import Portfolio from './Components/Portfolio';


function App(props) {
	return (
		<Portfolio filters={props.filters} buisnessCards={props.buisnessCards} />
	);
}

export default App;
