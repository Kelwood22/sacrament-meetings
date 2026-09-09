import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

type MeetingCardProps = {
  meeting: SacramentMeeting;
};

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-xl font-semibold">
        {meeting.date}
      </h2>

      <p>
        Type: {meeting.meetingType}
      </p>

      <Link href={`/meetings/${meeting.id}`} className="text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  );
}