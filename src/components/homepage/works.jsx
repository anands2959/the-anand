import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./brand.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Brand Fabricator</div>
							<div className="work-subtitle">
								Android Developer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./birla.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Grasim Industries Ltd.,Renukoot</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
