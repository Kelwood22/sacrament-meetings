import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default function MeetingsPage() {
  const meetings = getMeetings();

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