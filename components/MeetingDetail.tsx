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

      <p>
        <strong>Meeting Type:</strong>{" "}
        {meeting.meetingType}
      </p>

      <p>
        <strong>Presiding:</strong>{" "}
        {meeting.presiding}
      </p>

      <p>
        <strong>Conducting:</strong>{" "}
        {meeting.conducting}
      </p>

      <h2 className="text-xl font-semibold">
        Announcements
      </h2>

      <ul>
        {meeting.announcements?.map(
          (announcement, index) => (
            <li key={index}>
              {announcement}
            </li>
          )
        )}
      </ul>

      <h2 className="text-xl font-semibold">
        Opening Hymn
      </h2>

      <p>
        #{meeting.openingHymn.number} -{" "}
        {meeting.openingHymn.title}
      </p>

      <h2 className="text-xl font-semibold">
        Opening Prayer
      </h2>

      <p>{meeting.openingPrayer}</p>

      <h2 className="text-xl font-semibold">
        Ward Business
      </h2>

      <ul>
        {meeting.wardBusiness.map((item) => (
          <li key={item.description}>
            {item.description}
          </li>
        ))}
      </ul>

      <p>
        <strong>Stake Business:</strong>{" "}
        {meeting.stakeBusiness ? "Yes" : "No"}
      </p>

      <h2 className="text-xl font-semibold">
        Sacrament Hymn
      </h2>

      <p>
        #{meeting.sacramentHymn.number} -{" "}
        {meeting.sacramentHymn.title}
      </p>

      <h2 className="text-xl font-semibold">
        Speakers & Musical Numbers
      </h2>

      <ul>
        {meeting.speakers.map((speaker) => (
          <li key={`${speaker.name}-${speaker.type}`}>
            {speaker.name}
            {speaker.topic &&
              ` - ${speaker.topic}`}
            {" "}
            ({speaker.type})
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">
        Closing Hymn
      </h2>

      <p>
        #{meeting.closingHymn.number} -{" "}
        {meeting.closingHymn.title}
      </p>

      <h2 className="text-xl font-semibold">
        Closing Prayer
      </h2>

      <p>{meeting.closingPrayer}</p>
    </div>
  );
}