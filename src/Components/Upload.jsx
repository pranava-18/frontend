import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Upload() {
  const [file, setFile] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const [thumbnailSrc, setThumbnailSrc] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImageUrlsChange = (event) => {
    setImageUrls(event.target.value);
  };

  const generateThumbnail = async () => {
    const imageUrlArray = imageUrls
      .split("\n")
      .map((url) => url.trim())
      .filter((url) => url.length);

    try {
      const response = await fetch(
        "http://localhost:3000/api/generate-thumbnail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            urls: imageUrlArray,
          }),
        }
      );

      if (response.ok) {
        const imageBlob = await response.blob();
        setThumbnailSrc(URL.createObjectURL(imageBlob));
      } else {
        const errorText = await response.text();
        console.error(
          "Failed to generate thumbnail:",
          response.status,
          errorText
        );
        alert(
          `Failed to generate thumbnail: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error generating thumbnail:", error);
      alert("Error generating thumbnail: " + error.message);
    }
  };

  return (
    <div className="bg-slate-400 overflow-hidden">
      <Navbar />
      <div className="flex justify-around bg-slate-400 rounded-2xl">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">From Files</h1>
          <div className="overflow-hidden relative w-64 mt-4 mb-4">
            <button className="bg-blue-500 text-white p-2 rounded-lg">
              <svg
                fill="#FFF"
                height="18"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
              </svg>
              <span className="ml-2">Upload Document</span>
            </button>
            <input
              className="cursor-pointer absolute block py-2 px-4 w-full opacity-0"
              type="file"
              name="documents[]"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {thumbnailSrc && (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">Thumbnail</h1>
              <img
                id="thumbnail"
                src={thumbnailSrc}
                alt="Thumbnail"
                className="w-64 h-64 object-cover"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">From Links</h1>
          <textarea
            id="imageUrls"
            value={imageUrls}
            onChange={handleImageUrlsChange}
            className="w-96 h-96"
            placeholder="Enter image URLs, one per line"
          ></textarea>
          <button
            onClick={generateThumbnail}
            className="bg-red-600 text-white p-2 rounded-lg mt-4 hover:bg-black duration-500"
          >
            Generate
          </button>
          {thumbnailSrc && (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">Thumbnail</h1>
              <img
                id="thumbnail"
                src={thumbnailSrc}
                alt="Thumbnail"
                className="w-64 h-64"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Upload;
