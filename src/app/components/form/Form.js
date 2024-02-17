export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entryData = Object.fromEntries(formData);
    onSubmit(entryData);
    console.log("placeData", placeData);
  }

  return (
    <form aria-labelledby={formName} onSubmit={handleSubmit}>
      {/* <label htmlFor="name">🌉 Name</label>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
      /> */}
      <label htmlFor="image-urls">🔗 Image Urls</label>
      <input
        id="image-urls"
        name="images"
        type="text"
        // defaultValue={defaultData?.image}
      />
      <label htmlFor="location">📍Location</label>
      <input
        id="location"
        name="location"
        type="text"
        // defaultValue={defaultData?.location}
      />
      <label htmlFor="coords">🔗 Map Url</label>
      <input
        id="coords"
        name="coords"
        type="text"
        // defaultValue={defaultData?.mapURL}
      />
      <button type="submit">
        {/* {defaultData ? "Update Graffiti" : "Add Graffiti"} */}
        Add Graffiti
      </button>
    </form>
  );
}
