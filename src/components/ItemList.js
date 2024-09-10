import { CATEGORY_LOGO } from "../utils/constants";

const ItemList = ({ data }) => {
  if (!data) return null;

  const {
    name,
    price,
    defaultPrice,
    offerTags,
    ratings,
    description,
    imageId,
  } = data;

  const priceInRupees = (price || defaultPrice) / 100;
  const ratingValue = ratings?.aggregatedRating?.rating;
  const ratingCount = ratings?.aggregatedRating?.ratingCountV2;

  return (
    <div className="flex justify-between items-start p-4 border-b-2 hover:shadow-md transition-shadow duration-300 ease-in-out">
      <div className="text-left flex-1">
        <h1 className="font-bold text-xl text-gray-800">{name}</h1>
        <div className="flex items-center my-2">
          <span className="font-bold text-lg text-gray-700">
            ₹{priceInRupees.toFixed(2)}
          </span>
          {offerTags?.length > 0 && offerTags[0].subTitle && (
            <span className="text-green-600 text-sm ml-3">
              🏷️ {offerTags[0].title} {offerTags[0].subTitle}
            </span>
          )}
        </div>
        {ratingValue && ratingCount && (
          <p className="text-yellow-600 font-medium mt-1">
            ⭐ {ratingValue} ({ratingCount})
          </p>
        )}
        {description && (
          <p className="mt-2 text-gray-600 leading-relaxed">
            {description.length > 100
              ? `${description.substring(0, 120)}...`
              : description}
          </p>
        )}
      </div>
      <div className="w-[180px] ml-6 flex flex-col items-center relative">
        <img
          src={`${CATEGORY_LOGO}${imageId}`}
          alt={`${name} logo`}
          className="w-[150px] h-[150px] object-cover rounded-xl mb-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <button
          className="bg-white text-green-500 px-4 py-1 font-bold border rounded-lg text-lg w-[100px] shadow-lg absolute bottom-0 hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          aria-label={`Add ${name} to cart`}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ItemList;
