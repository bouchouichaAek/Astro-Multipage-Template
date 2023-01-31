import React, { Component } from "react";
import BloggerWidget from "../../Components/BloggerWidget/BloggerWidget";
import Landing from "../../Components/Landing/Landing";
import SingleBlog from "../../Components/SingleBlog/SingleBlog";

class Blogger extends Component {
  state = {};
  render() {
    return (
      <>
        <Landing
          title="Our Blog"
          desc="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin."
        />
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 col-lg-9">
              <SingleBlog />
              <SingleBlog />
              <SingleBlog />
            </div>
            <div className="col-12 col-lg-3">
              <BloggerWidget />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Blogger;
