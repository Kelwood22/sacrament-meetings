import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
  const response = await fetch(
    "http://localhost:3000/api/meetings",
    {
      cache: "no-store",
    }
  );

  const meetings: SacramentMeeting[] =
    await response.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        All Meetings
      </h1>

      <div className="space-y-4">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </div>
  );
}