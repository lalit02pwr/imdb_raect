import React from 'react';
import './sidebar.css';
class Sidebar extends React.Component{
  render(){
    return(
      <div class="sidebar">
				<div class="trial">
					<p class="trialInfo">Enjoy unlimited streaming on Prime Video<br/>
					   Thousands of titles available to watch instantly
					</p>
					<button class="trialBtn">Start your 30-days free trial</button>
				</div>
				<div class="seasonContent">
					<div class="seasonHeader">
						<div class="headerList">
							<ul class="headerListItems">
								<li class="headerListItem">FULL CAST AND CREW</li>
								<li class="headerListItem">TRIVIA</li>
								<li class="headerListItem">USER REVIEWS</li>
								<li class="headerListItem">IMDbPro</li>
								<li class="headerListItem">MORE</li>
							</ul>
							<div class="headerListItem">SHARE</div>
						</div>
						<div class="season">
							<div class="seasonLogo">+</div>
							<div class="AboutSeason">
								<span class="seasonName">13 Reasons Why</span>
								<ul class="seasonType">
									<li>TV-MA</li>
									<li>1h</li>
									<li>Drama,Mystery</li>
									<li>TV series (2017-)</li>
								</ul>
							</div>
							<div class="rating">
								<span class="point">7.9</span>
								<span class="ratingButton">Rate This</span>
							</div>
						</div>
					</div>
					<div class="episodeGuide">
						episod guide<br/>
						<span class="episodes">39 episodes</span>
					</div>
					<div class="trailer">
						<div class="trailerImage"><img src="why.jpg" alt="why"/></div>
						<div class="trailerVideo"><img alt="Trailer" title="Trailer" src="https://m.media-amazon.com/images/M/MV5BNWI5ZmNhYjEtZGEyZi00MzY2LTg2YWItNTM0MWVlYzQyZTA2XkEyXkFqcGdeQW1yb3NzZXI@._V1_UX477_CR0,0,477,268_AL__QL50.jpg"/></div>
					</div>
					<div class="seasonDetail">
						<div class="aboutSeason">Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.</div>
						<div class="stars">Creator: Brian Yorkey<br/>
						Stars:  Dylan Minnette, Katherine Langford, Christian Navarro | See full cast & crew </div>
						<div class="watchlistButton"><button class="watchlistBtn">+ Add to watchlist</button></div>
						<div class="views">
							<ul>
								<li class="reviews">Reviews</li>
								<li class="popularity">Popularity</li>
							</ul>
						</div>
						<div class="companyInfo">
							<span class="companyInfoLogo">IMDbPro</span>
							<span class="companyInfoDtail">View production, box office, & company info.</span>
						</div>
				</div>
				</div>
			</div>
    )
  }
}

export default Sidebar ;
