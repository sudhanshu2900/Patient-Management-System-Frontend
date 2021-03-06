import React from "react";
import ServiceCard from "./Components/ServiceCard";
import { Link } from "react-router-dom";

function CardPage() {
  return (
    <>
      <div class="container">
        <div class="boxHome">
          <div class="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/addspecialist">
                <ServiceCard icon="π¨ββοΈ" name="Add Specialist" />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/addpatient">
                <ServiceCard icon="π¨βπ€" name="Add Patient" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/check">
                <ServiceCard icon="π·" name="Check Patient Status" />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/medicine">
                <ServiceCard icon="π©Ίπ" name="Treatment & Medicine List" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPage;
