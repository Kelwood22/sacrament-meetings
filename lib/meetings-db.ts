import { neon } from '@neondatabase/serverless';
import type { SacramentMeeting, MeetingFormData } from './types';

const sql = neon(process.env.DATABASE_URL!);

const ITEMS_PER_PAGE = 5;

export async function getMeetings(
  query: string = '',
  currentPage: number = 1
): Promise<SacramentMeeting[]> {
  const searchTerm = `%${query}%`;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE
      presiding ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
    ORDER BY date DESC
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows as unknown as SacramentMeeting[];
}

export async function getMeetingsTotalPages(
  query: string = ''
): Promise<number> {
  const searchTerm = `%${query}%`;
  const rows = await sql`
    SELECT COUNT(*) FROM meetings
    WHERE
      presiding     ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
  `;
  return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
}

export async function getMeetingById(
  id: number
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type                AS "meetingType",
      presiding, conducting, announcements,
      opening_hymn                AS "openingHymn",
      opening_prayer              AS "openingPrayer",
      ward_business               AS "wardBusiness",
      stake_business              AS "stakeBusiness",
      sacrament_hymn              AS "sacramentHymn",
      speakers,
      closing_hymn                AS "closingHymn",
      closing_prayer              AS "closingPrayer"
    FROM meetings WHERE id = ${id}
  `;
  return (rows[0] as unknown as SacramentMeeting) ?? null;
}

export async function addMeeting(meeting: MeetingFormData) {
  await sql`
    INSERT INTO meetings (
  date,
  meeting_type,
  presiding,
  conducting,
  announcements,
  opening_hymn,
  opening_prayer,
  ward_business,
  stake_business,
  sacrament_hymn,
  speakers,
  closing_hymn,
  closing_prayer
)
VALUES (
  ${meeting.date},
  ${meeting.meeting_type},
  ${meeting.presiding},
  ${meeting.conducting},
  ${meeting.announcements},
  ${meeting.opening_hymn},
  ${meeting.opening_prayer},
  ${meeting.ward_business},
  ${meeting.stake_business},
  ${meeting.sacrament_hymn},
  ${meeting.speakers},
  ${meeting.closing_hymn},
  ${meeting.closing_prayer}
)
  `;
}

export async function updateMeeting(id: number, meeting: MeetingFormData) {
  await sql`
    UPDATE meetings
    SET
      date = ${meeting.date},
      meeting_type = ${meeting.meeting_type},
      presiding = ${meeting.presiding},
      conducting = ${meeting.conducting},
      announcements = ${meeting.announcements},
      opening_hymn = ${meeting.opening_hymn},
      opening_prayer = ${meeting.opening_prayer},
      ward_business = ${meeting.ward_business},
      stake_business = ${meeting.stake_business},
      sacrament_hymn = ${meeting.sacrament_hymn},
      speakers = ${meeting.speakers},
      closing_hymn = ${meeting.closing_hymn},
      closing_prayer = ${meeting.closing_prayer}
    WHERE id = ${id}
  `;
}

export async function deleteMeeting(id: number) {
  await sql`
    DELETE FROM meetings
    WHERE id = ${id}
  `;
}