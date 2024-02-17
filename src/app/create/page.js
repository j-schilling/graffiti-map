import Link from "next/link.js";
import { useRouter } from "next/router";
import Form from "../components/form/Form.js";

export default function CreateEntryPage() {
  const router = useRouter();

  async function AddEntry(entryData) {
    console.log("entryData on create", entryData);
    const response = await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    });
    if (response.ok) {
      router.push("/map");
    }
  }

  return (
    <>
      <Link href="/map" passHref legacyBehavior>
        Go back
      </Link>
      <h2>Add Graffiti</h2>
      <Form onSubmit={AddEntry} formName={"add-entry"} />
    </>
  );
}
