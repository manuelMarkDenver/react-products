const Product = ({ id, name, desc, img, featured }) => {
  console.log(img);
  return (
    <>
      <tr>
        <td className="border border-green-600">{id}</td>
        <td className="border border-green-600">
          <img src={img} alt="" />
        </td>
        <td className="border border-green-600">{name}</td>
        <td className="border border-green-600 px-3">{desc}</td>
        <td className="border border-green-600">
          <input type="checkbox" value={featured} checked={featured} readOnly />
        </td>
        <td className="border border-green-600">
          <i className="far fa-edit text-blue-500 cursor-pointer"></i>
        </td>
        <td className="border border-green-600">
          <i className="fas fa-times text-red-500 cursor-pointer"></i>
        </td>
      </tr>
    </>
  );
};

export default Product;
