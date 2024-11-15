import { useState } from "react";

function Card() {
  const defaultImage = "/download.jpg"; // Default "clueless" image path
  const actualImages = [
    "/download (1).jpg",
    "/download (1).jpg",
    "/download (1).jpg",
    "/download (1).jpg",
    "/download (1).jpg",
    "/download (1).jpg",
    "/download (1).jpg",
    "/download (1).jpg",
    "/download (1).jpg",
  ];

  // State to track revealed images
  const [revealedImages, setRevealedImages] = useState(
    Array(actualImages.length).fill(false)
  );

  // Handle button click to reveal an image
  const handleSelectClick = () => {
    const randomIndex = Math.floor(Math.random() * actualImages.length); // Generate random index
    setRevealedImages((prev) =>
      prev.map((revealed, index) => (index === randomIndex ? true : revealed))
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-3 gap-4 p-4">
        {actualImages.map((image, index) => (
          <div
            key={index}
            className="bg-gray-200 h-24 sm:h-32 md:h-40 flex items-center justify-center"
          >
            <img
              src={revealedImages[index] ? image : defaultImage}
              alt={`Image ${index}`}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSelectClick}
        className="btn btn-primary mt-4 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/4 px-4 py-2 rounded justify-center"
      >
        Select
      </button>
    </div>
  );
}

export default Card;
