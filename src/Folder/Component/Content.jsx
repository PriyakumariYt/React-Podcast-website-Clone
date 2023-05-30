import React from "react";
function Content() {
  return (
    <>
      <div className="head">
        <h1>Easy and Powerful Tools</h1>
      </div>

      <div className="boxContainer">
        <div className="box1">
          <h4>Everything you need to have a successful podcast</h4>
          <h1>Podcast Hosting Made Easy</h1>
          <p>
            Easy and powerful tools, with free learning materials, and
            remarkable customer support.
          </p>
          <div className="button">Get Started</div>
        </div>

        <div className="box1">
          <h4>Easily manage multiple podcasts in one dashboard</h4>
          <h1>Built for productivity</h1>
          <p>
            Create projects for each podcast you manage. Have unique
            integrations for every podcast. Keep your team organized and your
            content engine turning.
          </p>
          <div className="button">Enroll Now</div>
        </div>
      </div>
    </>
  );
}
export default Content;
