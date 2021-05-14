const ImageThumb = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-xs border border-gray-300 rounded-lg my-5 py-5 px-5">
      <img src={image} className="w-52"></img>
      <h3>Current Image</h3>
    </div>
  );
};

export default ImageThumb;
