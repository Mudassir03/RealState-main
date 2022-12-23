import "./properties.css";
import { properties } from "../../propertyData";
import PropertyCard from "./propertyCard/PropertyCard";
import Ip from "./ip";

export default function Properties() {
  return (
    <>
    <div className="nav">
      <h2 className="heading"><span>P</span>roperties</h2>
      <a className="github-link" href="https://github.com/Mudassir03/RealState-main"><button className="git-btn"><h3>Source Code </h3></button></a>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Ip />
      </div>
      <div className="properties">
        {properties.map((property, i) => {
          return <PropertyCard key={property.id} property={property} ></PropertyCard>;
        })}
      </div>
    </>
  );
}
