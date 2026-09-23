import { getMeetingById } from "@/lib/meetings-db";
import { updateMeeting } from "@/lib/actions";

export default async function EditMeetingPage({
  params,
}: {
  params: { id: string };
}) {
  const meeting = await getMeetingById(
    Number(params.id)
  );

  if (!meeting) {
    return <p>Meeting not found.</p>;
  }

  const updateMeetingWithId =
    updateMeeting.bind(
      null,
      Number(params.id)
    );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Edit Meeting
      </h1>

      <form action={updateMeetingWithId}>
        <input
          type="date"
          name="date"
          defaultValue={meeting.date}
          className="border p-2 w-full"
        />

        <select
          name="meeting_type"
          defaultValue={meeting.meetingType}
          className="border p-2 w-full"
        >
          <option value="regular">Regular</option>
          <option value="testimony">Testimony</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
        </select>

        <input
          type="text"
          name="presiding"
          defaultValue={meeting.presiding}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="conducting"
          defaultValue={meeting.conducting}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="opening_prayer"
          defaultValue={meeting.openingPrayer}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="closing_prayer"
          defaultValue={meeting.closingPrayer}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update Meeting
        </button>
      </form>
    </main>
  );
}