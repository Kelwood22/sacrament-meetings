import { getMeetingById } from "@/lib/meetings-db";
import { notFound } from "next/navigation";
import EditMeetingForm from "./EditMeetingForm";

export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const meeting = await getMeetingById(
    Number((await params).id)
  );

  if (!meeting) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Edit Meeting
      </h1>

      <EditMeetingForm
        meeting={meeting}
        id={Number((await params).id)}
      />
    </main>
  );
}