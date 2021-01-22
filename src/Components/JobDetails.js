import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HistoryIcon from "@material-ui/icons/History";
import { Button } from "@material-ui/core";
import "./JobDetails.css";
export class JobDetails extends Component {
  render() {
    const getJobLocation = (location) => {
      var locations = location.cities.concat(location.remotes);
      return locations.map((city) => city.name).join(" / ");
    };

    const jobs = JSON.parse(localStorage.getItem("jobId"));
    return (
      <div className="jobDetails">
        <div className="post">
          <div className="postHeader">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/220px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
              className="post__icon"
              alt="company logo"
            />
            <div className="postInfo">
              <h2>{jobs.title}</h2>
              <p>
                at {jobs.company.name} | {jobs.commitment.title}
              </p>
            </div>
          </div>
          <div className="postMessage">
            <li className="job_tags">
              {jobs.tags.map((tag, id) => (
                <Chip label={tag.name} key={id} className="tag_list" />
              ))}
            </li>
          </div>
          <div className="jobHistory">
            <div className="jon_location">
              <LocationOnIcon />
              <h6 className="city_name">{getJobLocation(jobs)}</h6>
            </div>
            <div className="job_history">
              <HistoryIcon />
              <h6 className="posted_date">
                {new Date(jobs.postedAt).toDateString()}
              </h6>
            </div>
          </div>
          <div className="details_description">
            <p>{jobs.description}</p>
          </div>
          <div className="post__button">
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.open(jobs.applyUrl, "_blank")}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDetails;
