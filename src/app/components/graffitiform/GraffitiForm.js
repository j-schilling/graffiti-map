import styles from "./GraffitiForm.module.css";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function GraffitiForm({
  onSubmit,
  formName,
  onChange,
  defaultData,
}) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };
  }

  reader.readAsDataURL(changeEvent.target.files[0]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entryData = Object.fromEntries(formData);

    // Coludinary image upload
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "ml_default");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/ds38ne4yp/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);

    // // Image URLs
    const imagesArray = entryData.images.split(",");
    const trimmedImagesArray = imagesArray.map((image) => image.trim());

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
      images: trimmedImagesArray,
      coords: trimmedCoordsArray,
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
      onChange={handleOnChange}
      className={styles.form}
    >
      <p>
        <input type="file" name="file" />
      </p>

      <img src={imageSrc} alt="preview image uploaded graffiti" />

      {imageSrc && !uploadData && (
        <p>
          <button>Upload Files</button>
        </p>
      )}

      {uploadData && (
        <code>
          <pre>{JSON.stringify(uploadData, null, 2)}</pre>
        </code>
      )}
      <label htmlFor="image-urls" className={styles.label}>
        Image Urls
      </label>
      <input
        id="image-urls"
        name="images"
        type="text"
        // defaultValue={defaultData?.image}
        className={styles.input}
      />
      <label htmlFor="coords" className={styles.label}>
        Longitude, Lattitude
      </label>
      <input
        id="coords"
        name="coords"
        type="text"
        // defaultValue={defaultData?.mapURL}
        placeholder="e.g.: 52.50894849139298, 13.39731765733085"
        className={styles.input}
      />
      <label htmlFor="location" className={styles.label}>
        Location
      </label>
      <input
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
