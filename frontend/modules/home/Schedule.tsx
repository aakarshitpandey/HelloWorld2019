import React from 'react';
import './index.scss';

export const Schedule = () => (
	<div
		className="uk-section uk-section-primary uk-flex uk-flex-center bg-purple-gradient"
		id="schedule"
		style={{ paddingBottom: 0 }}
	>
		<div className="uk-container-small fullwidth uk-margin-large-bottom">
			<h2 className="uk-padding-small h1-light text-align-center text-yellow">
				Day-Of Schedule
			</h2>
			<div style={{ position: 'relative', overflow: 'hidden' }}>
				<img src={require(`../../static/images/Day_Sched.jpg`)} />
			</div>
			<hr />
			<h2 className="uk-padding-small h1-light text-align-center text-yellow">Location</h2>
			<div uk-grid="" className="uk-grid">
				<div className="uk-width-2-3@m uk-first-column">
					<iframe
						title="Location Map"
						allowFullScreen
						frameBorder="0"
						height="300px"
						src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfw3Ca7LiEogRxUHhdrGHkJo&key=AIzaSyBBVmjYgH5d7sxq0FD3mPvNBdIUxqWURO0"
						style={{ border: 0 }}
						width="100%"
					></iframe>
				</div>
				<div className="uk-width-1-3@m">
					<p className="p-large-yellow">
						<b>Date:</b>
					</p>
					<p className="p-large-yellow"> September 14 - 15 </p>
					<hr />
					<p className="p-large-yellow">
						<b>Location: </b>
					</p>
					<p className="p-large-yellow">Wilmeth Active Learning Center</p>
					<hr />
				</div>
			</div>
		</div>
	</div>
);
