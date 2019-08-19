import React from 'react';
import './dashboard.css';
import Sidebar from './components/sidebar'
import Content from './components/content';
class Dashboard extends React.Component{

	render(){
		return(
			<div className="dashboard">
        <Sidebar></Sidebar>
				<Content></Content>
			</div>
		)
	}
}
export default Dashboard;
