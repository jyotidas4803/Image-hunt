import { useState } from "react";

function Card() {
  const defaultImage = "/download.jpg"; // Default "clueless" image path
  const actualImages = [
    "/dog (3).jpg",
    "/dog (1).jpg",
    "/dog (2).jpg",
    "/dog (1).jpg",
    "/dog (3).jpg",
    "/dog (2).jpg",
    "/dog (1).jpg",
    "/dog (2).jpg",
    "/dog (3).jpg",
  ];

  // State to track revealed images
  const [revealedImages, setRevealedImages] = useState(
    Array(actualImages.length).fill(false)
  );

  // Handle button click to reveal an image with delay
  const handleSelectClick = () => {
    const randomIndex = Math.floor(Math.random() * actualImages.length); // Generate random index

    // Delay to reveal image
    setTimeout(() => {
      setRevealedImages((prev) =>
        prev.map((revealed, index) => (index === randomIndex ? true : revealed))
      );
    }, 500); // 500ms delay
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-3 gap-4 p-4">
        {actualImages.map((image, index) => (
          <div
            key={index}
            className={`h-24 sm:h-32 md:h-40 flex items-center justify-center ${
              revealedImages[index] ? "" : "shadow-lg shadow-gray-500"
            }`} // Apply shadow if image is not revealed
          >
            <img
              src={revealedImages[index] ? image : defaultImage}
              alt={`Image ${index}`}
              className="h-full w-full object-cover rounded-lg transition-opacity duration-500 ease-in-out"
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
