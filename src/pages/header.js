import React from 'react';
import './header.css';
const searchData = [
	{id:1,name:'All'},
	{id:2,name:'1'},
	{id:3,name:'2l'},
	{id:4,name:'3l'},
	{id:5,name:'4l'},

];
const listData = [
	{id:1,title:"Movies, TV & Showtimes",
	  list:[{id:11,name:"DropdownContent1",url:"URL link"},
	       {id:12,name:"Movies",url:"URL link"},
	       {id:13,name:"Charts & Trands",url:"URL link"}]
	},
	{id:2,title:"Celebs, Events & Photos",
	  list:[{id:21,name:"DropdownContent2",url:"URL link"},
	       {id:22,name:"Celebs",url:"URL link"},
	       {id:23,name:"Photos",url:"URL link"}]
	},
	{id:3,title:"News & Community",
	  list:[{id:31,name:"DropdownContent3",url:"URL link"},
	       {id:32,name:"News",url:"URL link"},
	       {id:33,name:"Community",url:"URL link"}]
	},
	{id:4,title:"Watchlist",
	  list:[{id:41,name:"DropdownContent4",url:"URL link"},
	       {id:42,name:"Your Watchlist",url:"URL link"},
	       {id:43,name:"Popular Movies",url:"URL link"}]
	},

]
const SelectDropdown = props=>(
	<select name="All" id="slectMovie">
	{
		props.data.map((item,key)=>{
			return(
				<option value={item.name}>{item.name}</option>
			)
		})
	}
	</select>
)


class Header extends React.Component{
	render(){
		return(
			<div class="header">
				<div class="logo">
					<button>IMDb</button>
				</div>
				<div class="searchAndSocial">
					<div class="searchbar">
						<div class="search-form">
							<input type="text" value="Find Movies, TV shows, Celebrities and more..." class="findMovieInput" />
							<SelectDropdown data={searchData}></SelectDropdown>
							<button class="findMovieBtn">go</button>
						</div>
						<div class="socal-connect">
							<select name="IMDbPro" id="imdbPro"></select>
							<span class="help">Help</span>
							<a href="">facebook</a>
							<a href="">insta</a>
							<a href="">twitter</a>
							<a href="">df</a>
						</div>
					</div>
					<div class="action-bar">
						<div class="nav-options">
							<ul class="nav-option-list">
								<li>
									<div class="dropdown">
										Movies, TV & Showtimes
									</div>
									<div class="dropdown-content">
										DropdownContent
										<div class="row">
											<div class="col-md-6">
												cnnjn
											</div>
											<div class="col-md-6">bcj</div>
										</div>
									</div>
								</li>
								<li>
									<div class="dropdown">Celebs, Events & Photos</div>
									<div class="dropdown-content">
										DropdownContent3
										<div class="row">
											<div class="col-md-6">
												dsf
											</div>
											<div class="col-md-6">
												dfas
											</div>
										</div>
									</div>
								</li>
								<li><div class="dropdown">News & Community</div>
									<div class="dropdown-content">
										DropdownContent3
										<div class="row">
											<div class="col-md-6">
												dsf
											</div>
											<div class="col-md-6">
												dfas
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="dropdown">Watchlist</div>
									<div class="dropdown-content">
										DropdownContent3
										<div class="row">
											<div class="col-md-6">
												dsf
											</div>
											<div class="col-md-6">
												dfas
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="sign-in">
							<button class="signInBtn">Sign in</button>
						</div>
			    </div>
				</div>
		</div>
			)
	}
}
export default Header;
