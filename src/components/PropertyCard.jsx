import { CiHeart, CiLocationOn } from "react-icons/ci";
import LivingRoomImg from "../assets/Livingarea.png";
import BedroomImg from "../assets/Bedrooms.png";
import BathroomImg from "../assets/BathroomIcon.png";

export default function PropertyCard(props) {
  const { title,
    slug,
    price,
    description,
    categoryName,
    location,
    bedrooms,
    bathrooms,
    areaSqft,
    amenities,
    images } = props.data
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition m-2 p-4">
      <div className="w-full md:w-1/3">
        <img
          src={images[0]}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-blue-900 font-bold text-lg">{price}</h3>
          <CiHeart className="text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
        </div>

        <h4 className="text-sm font-semibold mb-1">{title}</h4>

        <div className="flex items-center text-gray-500 text-xs mb-2">
          <CiLocationOn className="mr-1 text-lg" />
          <span>{location}</span>
        </div>

        <p className="text-xs text-gray-600 mb-4 line-clamp-2">
          {description}
        </p> 

        <div className="flex justify-between text-center text-blue-900 text-xs font-medium">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <img src={BedroomImg} alt="Bedroom" className="h-4 w-4" /> {bedrooms}
            </div>
           Bedrooms
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <img src={BathroomImg} alt="Bathroom" className="h-4 w-4" /> {bathrooms}
            </div>
            Bathrooms
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <img src={LivingRoomImg} alt="Living Area" className="h-4 w-4" /> {areaSqft}
            </div>
            Living Area
          </div>
        </div>
      </div>
    </div>
  );
}
