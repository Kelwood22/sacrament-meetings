import { getMeetings } from "@/lib/meetings-db";

export default function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        All Meetings
      </h1>

      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className="border p-4 rounded mb-3"
        >
          <p>{meeting.date}</p>
          <p>{meeting.meetingType}</p>
        </div>
      ))}
    </div>
  );
}
