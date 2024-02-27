export default function GraffitiTags({ tags }) {
  console.log("tags", tags);
  return (
    <section className="px-8 pt-5 flex flex-row flex-wrap gap-2">
      {tags.map((tag, i) => (
        <button
          key={i}
          className="text-sm border-black border  bg-ggreylight p-1"
        >
          #{tag}
        </button>
      ))}
    </section>
  );
}
