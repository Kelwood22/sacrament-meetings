import Link from "next/link";
import { deleteMeeting } from "@/lib/actions";
import { SacramentMeeting } from "@/lib/types";

type MeetingCardProps = {
  meeting: SacramentMeeting;
};

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  const deleteMeetingWithId =
    deleteMeeting.bind(null, meeting.id);

  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-xl font-semibold">
        {meeting.date}
      </h2>

      <p>
        Type: {meeting.meetingType}
      </p>

      <div className="flex gap-2 mt-4">
        <Link href={`/meetings/${meeting.id}`} className="text-blue-600 hover:underline">
          View Details
        </Link>

        <form action={deleteMeetingWithId}>
          <button
            type="submit"
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}