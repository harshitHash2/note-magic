import React from "react";

const AboutCon = () => {
  return (
    <>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                At NoteMagic, we believe that great ideas deserve a great space.
                Our mission is to provide you with a seamless, intuitive, and
                powerful note-taking platform that helps you capture, organize,
                and access your thoughts anytime, anywhere.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                NoteMagic was born out of the frustration with existing
                note-taking solutions. I wanted something that was not just a
                repository for notes but a dynamic tool that adapts to the way
                you think and work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCon;
