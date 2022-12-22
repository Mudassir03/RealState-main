import { useNavigate } from "react-router-dom";
import "./propertyCard.css";

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail", { state: property });
  };
  return (
    <div onClick={() => handleClick()} className="propertyCard">
      <img className="propertyImg" src={property.img}  alt=""></img>
      <div className="propertyText">
      
        <p className="address">{property.address}</p>
        <p><b>{property.price}</b></p>
        <p  className="des">{property.des}</p>
       
      </div>
    </div>
  );
}
