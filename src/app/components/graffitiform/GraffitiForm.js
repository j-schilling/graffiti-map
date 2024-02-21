import styles from "./GraffitiForm.module.css";
import { useState } from "react";
import Image from "next/image";

export default function GraffitiForm({
  onSubmit,
  formName,
  creator,
  defaultData,
}) {
  const [imageSrc, setImageSrc] = useState([]);
  const [uploadData, setUploadData] = useState();

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

  // imageSRC for each im loop request zu cloudinary secure url

  //   const reader = new FileReader();

  //   reader.onload = function (onLoadEvent) {
  //     setImageSrc(onLoadEvent.target.result);
  //     setUploadData(undefined);
  //   };

  //   reader.readAsDataURL(changeEvent.target.files[0]);
  // }

  async function handleSubmit(event) {
    console.log("ImageSRC", imageSrc);
    event.preventDefault();
    const formData = new FormData(event.target);
    const entryData = Object.fromEntries(formData);

    // Cloudinary image upload => how to deal with the multiple files here?
    //     formData.append("upload_preset", "ml_default");
    // imageSrc.forEach(async (element => {
    //     const response = await fetch(
    //       "https://api.cloudinary.com/v1_1/ds38ne4yp/image/upload",
    //       {
    //         method: "POST",
    //         body: formData,
    //       }
    //     );
    //     const data = await response.json();})
    // const firstThreeItems = completeImageArray.slice(0, 3);

    async function uploadImages() {
      const completeImageArray = [];
      const firstThreeImages = imageSrc.slice(0, 3);
      for (const element of firstThreeImages) {
        const formData = new FormData();
        // Assuming `element` is a file or the relevant data for formData
        formData.append("file", element); // Adjust based on your API requirements
        formData.append("upload_preset", "ml_default"); // Example additional field

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

    console.log("completeImageArray", await uploadImages());

    // setImageSrc(data.secure_url);
    // setUploadData(data);

    // Coords
    const coordsArray = entryData.coords.split(",");
    const trimmedCoordsArray = coordsArray.map((coord) => coord.trim());

    // Tags
    const tagsArray = entryData.tags.split(",");
    const finalTagsArray = tagsArray.map((tag) =>
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
    <form
      aria-labelledby={formName}
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <p>
        <label htmlFor="file" className={styles.label}>
          Upload graffiti image
        </label>
        <input
          required
          onChange={handleOnChange}
          type="file"
          name="file"
          multiple
        />
      </p>

      {/* {imageSrc && (
        <Image
          src={imageSrc}
          width={100}
          height={50}
          alt="preview image of uploaded graffiti"
        />
      )} */}

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

      <label htmlFor="coords" className={styles.label}>
        Longitude, Lattitude *
      </label>
      <input
        required
        id="coords"
        name="coords"
        type="text"
        // defaultValue={defaultData?.mapURL}
        placeholder="e.g.: 52.501928, 13.397778"
        className={styles.input}
      />
      <label htmlFor="location" className={styles.label}>
        Location *
      </label>
      <input
        required
        id="location"
        name="location"
        type="text"
        // defaultValue={defaultData?.location}
        className={styles.input}
        placeholder="e.g.: Kreuzberg, Berlin, Germany"
      />
      <label htmlFor="tags" className={styles.label}>
        Tags (separate with commas)
      </label>
      <input
        id="tags"
        name="tags"
        type="text"
        // defaultValue={defaultData?.location}
        placeholder="e.g. wildstyle, throwup, rip"
        className={styles.input}
      />
      <button type="submit">
        {/* {defaultData ? "Update Graffiti" : "Add Graffiti"} */}
        Add Graffiti
      </button>
    </form>
  );
}
