import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/Portfolio.css';
import './css/Toolbar.css';
import './css/ProjectList.css';

import App from './App';

const filters = [
	{ name: "All", key: 1 },
	{ name: "Websites", key: 2 },
	{ name: "Flayers", key: 3 },
	{ name: "Business Cards", key: 4 },
];

const buisnessCards = [{
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
	category: "Business Cards"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
	category: "Business Cards"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
	category: "Business Cards"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
	category: "Flayers"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
	category: "Business Cards"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
	category: "Business Cards"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
	category: "Websites"
}, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
	category: "Flayers"
}]

ReactDOM.render(
	<React.StrictMode>
		<App filters={filters} buisnessCards={buisnessCards} />
	</React.StrictMode>,
	document.getElementById('root')
);


