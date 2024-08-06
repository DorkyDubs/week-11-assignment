import Link from "next/link";
// throw new Error("Cannot vote if you're not logged in");
export default function ErrorPage() {
  return (
    <>
      <h3 className=" text-xl text-red-500">
        {" "}
        oh bro, it&apos;s gone wrong because you didn&apos;t log in.
      </h3>
      <h2>{":("}</h2>

      <Link href="/"> Go home and try again?</Link>
    </>
  );
}
