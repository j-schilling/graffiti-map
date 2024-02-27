export default function GraffitiDetails({ graffitiData }) {
  const createdAt = new Date(graffitiData.graffiti.createdAt);

  return (
    <div className="flex flex-col items-center p-5">
      <section className="p-3 border-black w-full border rounded shadow-lg bg-white">
        <div className="text-gray-400">
          Added on {createdAt.toLocaleDateString()}
        </div>
        <div className="text-lg line-clamp-4 underline decoration-4 decoration-gyellow">
          {graffitiData.graffiti.location}
        </div>
      </section>
    </div>
  );
}
