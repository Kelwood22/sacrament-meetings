export type MeetingType =
  | "testimony"
  | "regular"
  | "stake"
  | "general";

export interface Hymn {
  number: number;
  title: string;
}

export interface SpeakerItem {
  name: string;
  topic: string;
  type: "speaker" | "musical-number";
}

export interface WardBusinessItem {
  description: string;
}

export interface SacramentMeeting {
  id: number;
  date: string;
  meetingType: MeetingType;
  presiding: string;
  conducting: string;
  announcements?: string[];
  openingHymn: Hymn;
  openingPrayer: string;
  wardBusiness: WardBusinessItem[];
  stakeBusiness: boolean;
  sacramentHymn: Hymn;
  speakers: SpeakerItem[];
  closingHymn: Hymn;
  closingPrayer: string;
}

export type MeetingFormData = {
  date: string;
  meeting_type: string;
  presiding: string;
  conducting: string;
  opening_prayer: string;
  closing_prayer: string;

  opening_hymn: Hymn;
  sacrament_hymn: Hymn;
  closing_hymn: Hymn;

  announcements: string[];
  ward_business: WardBusinessItem[];
  speakers: SpeakerItem[];

  stake_business: boolean;
};