import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Chip from "@material-ui/core/Chip";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HistoryIcon from "@material-ui/icons/History";
import "./JobList.css";
import { Button } from "@material-ui/core";
import { LOAD_ALL_JOBS } from "./../GraphQL/Queries";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const getJobLocation = (location) => {
  var locations = location.cities.concat(location.remotes);
  return locations.map((city) => city.name).join(" / ");
};

function JobList() {
  const history = useHistory();
  const { loading, error, data } = useQuery(LOAD_ALL_JOBS);
  const [jobs, setJobs] = React.useState([]);
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [noOfPages, setnoOfPages] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const viewDetails = (Id, newdata) => {
    localStorage.setItem("jobId", JSON.stringify(newdata));
    history.push("/job_details");
  };

  useEffect(() => {
    if (data) {
      setJobs(data.jobs);
      setnoOfPages(Math.ceil(data.jobs.length / itemsPerPage));
    }
  }, [data]);
  if (loading) return <p>Loading.......</p>;
  if (error) return <p>Something went Wrong</p>;
  return (
    <div className="jobList">
      {jobs
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((job, id) => (
          <div className="post" key={id}>
            <div className="postHeader">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/220px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
                className="post__icon"
                alt="company logo"
              />
              <div className="postInfo">
                <h2>{job.title}</h2>
                <p>
                  at {job.company.name} | {job.commitment.title}
                </p>
              </div>
            </div>
            <div className="postMessage">
              <li className="job_tags">
                {job.tags.map((tag, id) => (
                  <Chip label={tag.name} key={id} className="tag_list" />
                ))}
              </li>
            </div>
            <div className="jobHistory">
              <div className="jon_location">
                <LocationOnIcon />
                <h6 className="city_name">{getJobLocation(job)}</h6>
              </div>
              <div className="job_history">
                <HistoryIcon />
                <h6 className="posted_date">
                  {new Date(job.postedAt).toDateString()}
                </h6>
              </div>
            </div>
            <div className="description">
              <p>{job.description}</p>
            </div>
            <div className="post__button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => viewDetails(job.id, job)}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      <div className="job_page">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}

export default JobList;
