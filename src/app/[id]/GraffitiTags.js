export default function GraffitiTags({ tags }) {
  console.log("tags", tags);
  return (
    <section className="px-5 pt-5 flex flex-row flex-wrap gap-2">
      {tags.map((tag, i) => (
        <button key={i} className=" border-black border  bg-gyellow p-2">
          #{tag}
        </button>
      ))}
    </section>
  );
}
