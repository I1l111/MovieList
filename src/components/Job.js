import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Job = ({ data, setKeywords }) => {
  const {
    company,
    contract,
    featured,
    // id,
    languages,
    level,
    location,
    logo,

    position,
    postedAt,
    role,
    tools,
  } = data;

  let keywords = [role, level, ...languages, ...tools];

  const [icon, setIcon] = useState("");

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      setIcon(d.default);
    });
    console.log(logoSvg)
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div
      className={
        featured ? "job-container job-container--borderLeft" : "job-container"
      }
    >
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="part1">
        <div className="company">
          <span className="cname">{company}</span>
          {data.new && <span className="new">new!</span>}
          {data.featured && <span className="featured">featured</span>}
        </div>

        <div className="position">{position}</div>

        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => setKeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

Job.propTypes = {
  setKeywords: PropTypes.func.isRequired,
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.array,
      PropTypes.number,
    ])
  ),
};

export default Job;
