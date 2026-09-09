import { SacramentMeeting } from "@/lib/types";

type MeetingDetailProps = {
  meeting: SacramentMeeting;
};

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <div className="space-y-4">

      <h1 className="text-3xl font-bold">
        {meeting.date}
      </h1>

      <h2>Presiding</h2>
      <p>{meeting.presiding}</p>

      <h2>Conducting</h2>
      <p>{meeting.conducting}</p>

      <h2>Opening Hymn</h2>
      <p>
        #{meeting.openingHymn.number} -
        {" "}
        {meeting.openingHymn.title}
      </p>

      <h2>Opening Prayer</h2>
      <p>{meeting.openingPrayer}</p>

      <h2>Speakers</h2>

      <ul>
        {meeting.speakers.map((speaker) => (
          <li key={speaker.name}>
            {speaker.name}
            {" - "}
            {speaker.topic}
          </li>
        ))}
      </ul>

      <h2>Closing Prayer</h2>
      <p>{meeting.closingPrayer}</p>

    </div>
  );
}