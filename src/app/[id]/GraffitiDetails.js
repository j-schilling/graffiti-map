export default function GraffitiDetails({ graffitiData }) {
  const createdAt = new Date(graffitiData.graffiti.createdAt);

  return (
    <div className="flex flex-col items-center p-5">
      <section className="p-3 border-black w-full border  bg-white">
        <div className="">Added on {createdAt.toLocaleDateString()}</div>
        {/* text-color grey-400 */}
        <div className="text-lg line-clamp-4 ">
          {graffitiData.graffiti.location}
        </div>
      </section>
    </div>
  );
}
