"use client";
import Link from "next/link";
export default function ErrorPage() {
  return (
    <>
      <h3 className=" text-xl text-red-500">
        {" "}
        oh bro, it&apos;s gone wrong. Does this page really exist?
      </h3>
      <h2>{":("}</h2>
      <p></p>
      <Link href="/">Go home and try again?</Link>
    </>
  );
}
