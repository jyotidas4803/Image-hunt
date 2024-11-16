import { useState } from "react";

function Card() {
  const defaultImage = "/download.jpg"; // Default placeholder image path
  const actualImages = [
    "/dog (1).jpg",
    "/dog (2).jpg",
    "/dog (3).jpg",
    "/dog (1).jpg",
    "/dog (2).jpg",
    "/dog (3).jpg",
    "/dog (1).jpg",
    "/dog (2).jpg",
    "/dog (3).jpg",
  ];

  // State to track revealed images and user interactions
  const [revealedImages, setRevealedImages] = useState(
    Array(actualImages.length).fill(false)
  );
  const [clickCount, setClickCount] = useState(0); // Track number of button clicks
  const [revealedIndexes, setRevealedIndexes] = useState([]); // Track revealed indexes
  const [gameOver, setGameOver] = useState(false); // Game over state

  // Handle button click to reveal an image
  const handleSelectClick = () => {
    if (clickCount >= 3 || gameOver) return; // Disable button after 3 clicks or if game is over

    const randomIndex = Math.floor(Math.random() * actualImages.length);

    if (!revealedImages[randomIndex]) {
      setRevealedImages((prev) =>
        prev.map((revealed, index) => (index === randomIndex ? true : revealed))
      );

      setRevealedIndexes((prev) => [...prev, randomIndex]); // Add revealed index
      setClickCount((prev) => prev + 1); // Increment click count

      // Check win condition
      if (
        revealedIndexes.length > 0 &&
        actualImages[revealedIndexes[0]] === actualImages[randomIndex]
      ) {
        setGameOver(true);
        setTimeout(() => alert("🎉 Congratulations, you won!"), 500);
        return;
      }

      // Check game over
      if (clickCount === 2) {
        setGameOver(true);
        setTimeout(() => alert("😞 Sorry, you lost!"), 500);
      }
    }
  };

  // Reload the game
  const handleReload = () => {
    setRevealedImages(Array(actualImages.length).fill(false));
    setClickCount(0);
    setRevealedIndexes([]);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-3 gap-4 p-4">
        {actualImages.map((image, index) => (
          <div
            key={index}
            className={`h-24 sm:h-32 md:h-40 flex items-center justify-center ${
              revealedImages[index] ? "" : "shadow-lg shadow-gray-500"
            }`}
          >
            <img
              src={revealedImages[index] ? image : defaultImage}
              alt={`Image ${index}`}
              className="h-full w-full object-cover rounded-lg transition-opacity duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
      {!gameOver ? (
        <button
          onClick={handleSelectClick}
          disabled={clickCount >= 3}
          className={`btn btn-primary mt-4 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/4 px-4 py-2 rounded justify-center ${
            clickCount >= 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Select
        </button>
      ) : (
        <button
          onClick={handleReload}
          className="btn btn-secondary mt-4 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/4 px-4 py-2 rounded justify-center"
        >
          Reload
        </button>
      )}
    </div>
  );
}

export default Card;
