function Card() {
  const images = [
    "https://via.placeholder.com/150?text=Image1",
    "https://via.placeholder.com/150?text=Image2",
    "https://via.placeholder.com/150?text=Image3",
    "https://via.placeholder.com/150?text=Image1",
    "https://via.placeholder.com/150?text=Image2",
    "https://via.placeholder.com/150?text=Image3",
    "https://via.placeholder.com/150?text=Image1",
    "https://via.placeholder.com/150?text=Image2",
    "https://via.placeholder.com/150?text=Image3",
  ];
  

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-gray-200 h-24 flex items-center justify-center rounded"
        >
          <img src={image} alt={`Image ${index + 1}`} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
export default Card;  