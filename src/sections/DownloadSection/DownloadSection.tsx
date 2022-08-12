import React from "react";
import { Field, connectSection } from "@jaenjs/jaen";

const DownloadSection = () => {
    return (
        <section className="cta">
          <div className="cta-content">
            <div className="container px-5">
              <h2 className="text-white display-1 lh-1 mb-4">
                <Field.Text name="DownloadText" defaultValue={"Download now!"}/>
              </h2>
              <a
                className="btn btn-outline-light py-3 px-4 rounded-pill"
                href="https://startbootstrap.com/theme/new-age"
                target="_blank"
              >
                <Field.Text name="DownloadButtonText" defaultValue={"Download for free"}/>
              </a>
            </div>
          </div>
        </section>
    );
}

export default connectSection(DownloadSection, {displayName: "DownloadSection", name: "DownloadSection"});