"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  addMeeting as addMeetingDB,
  updateMeeting as updateMeetingDB,
  deleteMeeting as deleteMeetingDB,
} from "./meetings-db";

const MeetingFormSchema = z.object({
    date: z.string(),
    meeting_type: z.string(),
    presiding: z.string(),
    conducting: z.string(),
    opening_prayer: z.string(),
    closing_prayer: z.string(),
});

export async function addMeeting(
  formData: FormData
) {
  const validatedFields =
    MeetingFormSchema.safeParse({
      date: formData.get("date"),
      meeting_type: formData.get("meeting_type"),
      presiding: formData.get("presiding"),
      conducting: formData.get("conducting"),
      opening_prayer: formData.get("opening_prayer"),
      closing_prayer: formData.get("closing_prayer"),
    });

  if (!validatedFields.success) {
    throw new Error("Invalid form data");
  }

    await addMeetingDB({
    ...validatedFields.data,

    opening_hymn: {
        number: 1,
        title: "Opening Hymn",
    },

    sacrament_hymn: {
        number: 1,
        title: "Sacrament Hymn",
    },

    closing_hymn: {
        number: 1,
        title: "Closing Hymn",
    },

    announcements: [],
    ward_business: [],
    speakers: [],
    stake_business: false,
    });

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  formData: FormData
) {
  const validatedFields =
    MeetingFormSchema.safeParse({
      date: formData.get("date"),
      meeting_type: formData.get("meeting_type"),
      presiding: formData.get("presiding"),
      conducting: formData.get("conducting"),
      opening_prayer: formData.get("opening_prayer"),
      closing_prayer: formData.get("closing_prayer"),
    });

if (!validatedFields.success) {
  throw new Error("Missing required fields.");
}

  if (!validatedFields.success) {
throw new Error("Invalid form data");
}

    await updateMeetingDB(id, {
    ...validatedFields.data,
    
    opening_hymn: {
    number: 1,
    title: "Opening Hymn",
    },
    
    sacrament_hymn: {
    number: 1,
    title: "Sacrament Hymn",
    },
    
    closing_hymn: {
    number: 1,
    title: "Closing Hymn",
    },
    
    announcements: [],
    ward_business: [],
    speakers: [],
    stake_business: false,
    });
    
    revalidatePath("/meetings");
    redirect("/meetings");
    }

export async function deleteMeeting(
  id: number
) {
  await deleteMeetingDB(id);

  revalidatePath("/meetings");
}
