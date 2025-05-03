import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAddShoppingCart } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { use } from "react";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) > -1;
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item?.rating?.stars ?? 0} ⭐ | {item?.rating?.count ?? 0}
      </div>

      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          class="btn btn-add-bag  btn-danger"
          onClick={handleRemoveFromBag}
        >
          Remove <MdDelete />
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag <MdAddShoppingCart />
        </button>
      )}
    </div>
  );
};

export default HomeItem;
