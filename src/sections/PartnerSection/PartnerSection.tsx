import React from "react";
import { Field, connectSection } from "@jaenjs/jaen";

const PartnerSection = () => {
    return (
    <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
        <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
            <div className="h2 fs-1 text-white mb-4">
                <Field.Text name="PartnerText" defaultValue={"An intuitive solution to a common problem that we all face, wrapped up in a single app!"}/>
            </div>
            <img
                src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-new-age/4bfda90b95322054a0af4249174c673598b00296/src/assets/img/tnw-logo.svg"
                alt="..."
                style={{ height: "3rem", display: "block", margin: "auto" }}
            />
            </div>
        </div>
        </div>
    </aside>
  );
}

export default connectSection(PartnerSection, {displayName: "PartnerSection", name: "PartnerSection"});