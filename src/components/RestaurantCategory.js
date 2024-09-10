import ItemLIst from "./ItemList";

const RestaurantCategory = ({ data, showItems, SetShowIndex }) => {
  const handleClick = () => {
    SetShowIndex();
  };

  return (
    <div className="w-2/5 border-t-2  mx-auto ">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={handleClick}
      >
        <span className="font-bold text-xl">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>
      {showItems && (
        <div>
          {data.itemCards.map((item) => (
            <ItemLIst key={item.card.info.id} data={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
