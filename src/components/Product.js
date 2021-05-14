const Product = ({
  index,
  id,
  name,
  price,
  desc,
  img,
  featured,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <tr className="text-center">
        <td className="border border-green-600 px-3">{id}</td>
        <td className="border border-green-600 px-3 py-2">
          <img src={img} alt="" className="max-w-xs w-52" />
        </td>
        <td className="border border-green-600 px-3">{name}</td>
        <td className="border border-green-600 px-3">{price}</td>
        <td className="border border-green-600 px-3">{desc}</td>
        <td className="border border-green-600 px-3">
          <input type="checkbox" value={featured} checked={featured} readOnly />
        </td>
        <td className="border border-green-600 px-3">
          <button onClick={() => onEdit(id, index, 'edit')}>
            <i className="far fa-edit text-blue-500 cursor-pointer"></i>
          </button>
        </td>
        <td className="border border-green-600 px-3">
          <button onClick={() => onDelete(id)}>
            <i className="fas fa-times text-red-500 cursor-pointer"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Product;
