import styles from "./Form.module.css";

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entryData = Object.fromEntries(formData);

    // Tags
    const tagsArray = entryData.tags.split(",");
    const finalTagsArray = tagsArray.map((tag) =>
      tag.toLowerCase().replace(/\s/g, "").replace(/-/g, "")
    );

    const finalObject = { ...entryData, tags: finalTagsArray, score: 0 };
    console.log("finalObject", finalObject);

    // onSubmit(entryData);
  }

  return (
    <form
      aria-labelledby={formName}
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {/* <label htmlFor="name">🌉 Name</label>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
      /> */}
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
        placeholder="e.g. wildstyle, throw-up, RIP"
        className={styles.input}
      />
      <button type="submit">
        {/* {defaultData ? "Update Graffiti" : "Add Graffiti"} */}
        Add Graffiti
      </button>
    </form>
  );
}
