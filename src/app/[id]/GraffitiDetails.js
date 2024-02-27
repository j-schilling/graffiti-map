export default function GraffitiDetails({ graffitiData }) {
  console.log("graffitiData", graffitiData);
  return (
    <div className="flex flex-col items-center p-5">
      <section className="p-3 border-black w-full border rounded shadow-lg bg-white">
        <div className="text-gray-400">
          Added on {graffitiData.graffiti.createdAt}
        </div>
        <div className="text-lg line-clamp-4">
          {graffitiData.graffiti.location}
        </div>
      </section>
    </div>
  );
}
