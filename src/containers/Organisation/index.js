/**
 *
 * Organisation
 *
 */

import React from "react";
import OrganisationForm from "../../components/OrganisationForm";
import "./organisationStyle.scss";

export default function Organisation() {
  return (
    <div className="organisation">
      <OrganisationForm />
    </div>
  );
}

Organisation.propTypes = {};
