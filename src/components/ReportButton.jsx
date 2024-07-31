import { db } from "@/db";
import { revalidatePath } from "next/cache";
async function handleReport(formData) {
  "use server";
  const PostId = formData.get("post-id");
  //   buttonStyle = "bg-yellow-500 shadow-lg text-white border-2 ";
  // const button = form.getElementsByName("button");
  // button.style.visibility = "hidden";
  await db.query(`INSERT INTO reports (post_id) VALUES ($1)`, [PostId]);
  revalidatePath("/");
}

let buttonStyle =
  "bg-red-500 shadow-lg text-white border-2 p-[6px] m-[3px] border-white hover:bg-yellow-300 active:bg-green-400";
export default async function ReportButton({ id }) {
  return (
    <>
      <form action={handleReport}>
        <label htmlFor="post-id"></label>
        <input type="text" name="post-id" defaultValue={id} hidden />
        <button type="submit" className={buttonStyle}>
          Report Post
        </button>{" "}
      </form>
    </>
  );
}
