import React from "react";
import { Field, connectSection } from "@jaenjs/jaen";

const AboutSection = () => {
    return (
        <section className="bg-light">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg-5">
                <h2 className="display-4 lh-1 mb-4">
                    <Field.Text name="aboutTitle" defaultValue={"This is us"}/>
                </h2>
                <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                <Field.Text name="aboutDescription" defaultValue={"This section is perfect htmlFor featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space htmlFor text here, so don't worry about writing too much."}/>
                </p>
              </div>
              <div className="col-sm-8 col-md-6">
                <div className="px-5 px-sm-0">
                  <img
                    className="img-fluid rounded-circle"
                    src="https://source.unsplash.com/u8Jn2rzYIps/900x900"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default connectSection(AboutSection, {displayName: "AboutSection", name: "AboutSection"});