import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";

const DynamicMap = dynamic(
  () => import("@/app/draggablemarkermap/DraggableMarkerMap"),
  {
    ssr: false,
  }
);

export default function GraffitiForm({
  onSubmit,
  formName,
  creator,
  defaultData,
  loadingAddGraffiti,
  setLoadingAddGraffiti,
}) {
  const [userCoords, setUserCoords] = useState(null);
  const [draggableMarkerCoords, setDraggableMarkerCoords] =
    useState(userCoords);
  const [zoom, setZoom] = useState(2);
  const [imageSrc, setImageSrc] = useState([]);
  console.log({ draggableMarkerCoords });

  useEffect(() => {
    function geoFindme() {
      function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        // Update the state with the new lat long
        setUserCoords([lat, long]);
        setDraggableMarkerCoords([lat, long]);
      }
      function error() {
        setUserCoords([50.94252260860335, 6.959073771647771]);
        setDraggableMarkerCoords([50.94252260860335, 6.959073771647771]);
        setZoom(2);
        console.log("Unable to retrieve your location");
      }

      if (!navigator.geolocation) {
        setUserCoords([50.94252260860335, 6.959073771647771]);
        setZoom(2);
        console.log("Geolocation is not supported by your browser");
      } else {
        setZoom(19);
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }

    // Call geoFindme to update coords state
    geoFindme();
  }, []);

  //set value of location field after dragging marker
  // useEffect(() => {
  //   document.getElementById("coords").value = draggableMarkerCoords;
  // }, [draggableMarkerCoords]);

  if (!userCoords) {
    return "Loading graffiti upload form...";
  }

  function handleOnChange(e) {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingAddGraffiti(true);
    const formData = new FormData(event.target);
    const entryData = Object.fromEntries(formData);

    console.log("entryData", entryData);

    async function uploadImages() {
      const completeImageArray = [];
      const firstThreeImages = imageSrc.slice(0, 3);
      for (const element of firstThreeImages) {
        const formData = new FormData();

        formData.append("file", element);
        formData.append("upload_preset", "ml_default");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/ds38ne4yp/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        console.log("cloudydata", data);

        completeImageArray.push(data.secure_url);
      }
      return completeImageArray;
    }

    // Coords
    const cleanStr = entryData.coords.replace("(", "");
    const veryCleanStr = cleanStr.replace(")", "");
    const coordsArray = veryCleanStr.split(",");
    const trimmedCoordsArray = coordsArray.map((coord) => coord.trim());

    // Tags
    function returnTagsArr() {
      const tagsStr = entryData.tags;
      return !tagsStr ? [] : tagsStr.split(",");
    }
    const finalTagsArray = returnTagsArr().map((tag) =>
      tag.toLowerCase().replace(/\s/g, "").replace(/-/g, "")
    );

    const finalObject = {
      ...entryData,
      images: await uploadImages(),
      coords: trimmedCoordsArray,
      creator: creator,
      tags: finalTagsArray,
      score: 0,
    };
    console.log("finalObject", finalObject);

    onSubmit(finalObject);
  }

  return (
    <div className="w-full">
      {/* absolute left-4 */}
      <form
        aria-labelledby={formName}
        onSubmit={handleSubmit}
        className="p-4 flex flex-col gap-4 items-stretch"
      >
        <div className="flex flex-col flex-wrap">
          <label htmlFor="file" className="whitespace-normal">
            Add up to 3 images of the graffiti *
          </label>
          <input
            required
            onChange={handleOnChange}
            type="file"
            multiple
            className="file:h-12 file:border-black file:border file:rounded file:bg-ggreymid py-2"
          />
          <div className="flex flex-row gap-2 flex-wrap">
            {imageSrc &&
              imageSrc.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  width={100}
                  height={50}
                  alt={`Preview image ${index + 1} of uploaded graffiti`}
                />
              ))}
          </div>
        </div>
        <div className="h-auto w-full overflow-hidden">
          <DynamicMap
            userCoords={userCoords}
            setUserCoords={setUserCoords}
            draggableMarkerCoords={draggableMarkerCoords}
            setDraggableMarkerCoords={setDraggableMarkerCoords}
            zoom={zoom}
          />
        </div>
        <div className="flex flex-col">
          {/* <label htmlFor="coords">Longitude, Lattitude *</label>
          <p>{`(e.g. copy from Google Maps or Apple Maps)`}</p>
          <p className="text-sm font-bold">
            Watch out: Must look exactly like this: 52.501928, 13.397778
          </p> */}

          <input
            required
            id="coords"
            name="coords"
            type="hidden"
            // defaultValue={defaultData?.mapURL}
            placeholder="52.501928, 13.397778"
            className="w-full border border-black rounded p-3 invalid:border-red-500"
            value={draggableMarkerCoords}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location">Location *</label>
          <input
            required
            id="location"
            name="location"
            type="text"
            // defaultValue={defaultData?.location}
            className="w-full border border-black rounded p-3 invalid:border-red-500"
            placeholder="e.g.: Kreuzberg, Berlin, Germany"
          />
        </div>
        <div className="pb-4 flex flex-col">
          <label htmlFor="tags">Tags (separate with commas)</label>
          <input
            id="tags"
            name="tags"
            type="text"
            // defaultValue={defaultData?.location}
            placeholder="e.g. wildstyle, mural, rip"
            className="w-full border border-black rounded p-3"
          />
        </div>
        <button
          type="submit"
          className="bg-gyellow w-48 h-16 border-black border rounded p-2.5 " // Update the color on click"
        >
          Add Graffiti
        </button>
        {/* <button
          className="bg-white w-48 h-16 rounded p-2.5 " // Update the color on click"
        ></button> */}
        {loadingAddGraffiti && (
          <div className="absolute bottom-0 h-full bg-gwhitedark opacity-50">
            <Image
              className={"p-4 opacity-0 relative"}
              src="https://i.giphy.com/d1TwYpDcR1zPi.webp"
              width={462}
              height={350}
              alt="animated GIF of a spray can"
            />
            <h1 className="relative -top-24 text-center font-bold text-2xl text-gyellow ">
              Uploading...
            </h1>
          </div>
        )}
      </form>
    </div>
  );
}

// /* {defaultData ? "Update Graffiti" : "Add Graffiti"} */
