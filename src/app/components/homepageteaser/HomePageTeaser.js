export default function SayHelloTeaser() {
  return (
    <div className="w-full h-full border-black border-2 rounded-sm shadow-sm bg-white">
      <a href="" className="block cursor-pointer">
        <article className="w-full h-full">
          {/* <figure className="w-full h-1/2 border-black border-b-2"></figure> */}
          <div className="px-6 py-5 text-left h-full">
            {/* <p className="text-base mb-4">Welcome to Graffiti Map</p>
            <h1 className="text-[32px] mb-4">Neo Brutallism</h1> */}
            <p className="text-s  line-clamp-4">
              Welcome to Graffiti Map, where graffiti fans can check out
              graffiti in their area and all around the world!
            </p>
            {/* <strong>Read More</strong> */}
          </div>
        </article>
      </a>
    </div>
  );
}
