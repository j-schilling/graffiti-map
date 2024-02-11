import dynamic from "next/dynamic";

export const metadata = {
  title: "Graffiti Map",
  description: "A map to view and upload real life graffiti art pieces",
  name: "viewport",
  content:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

const DynamicMap = dynamic(() => import("../components/map/Map"), {
  ssr: false,
});
console.log("Map", DynamicMap);
export default function Home() {
  return (
    <main>
      <DynamicMap />
    </main>
  );
}
