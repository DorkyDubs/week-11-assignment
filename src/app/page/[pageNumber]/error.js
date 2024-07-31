export default function ErrorPage() {
  return (
    <>
      <h3 className=" text-xl text-red-500">
        {" "}
        oh bro, it&apos;s gone wrong. Does this page really exist?
      </h3>
      <h2>{":("}</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Go home and try again?</button>
      <Link href="/">homepage</Link>
    </>
  );
}
