import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        announcements: ['Ward picnic on Saturday'],
        openingHymn: {
            number: 30,
            title: 'Come, Come, Ye Saints'
        },
        openingPrayer: 'Brother Johnson',
        wardBusiness: [{ description: 'Sustaining of new Primary Presidency' }],
        stakeBusiness: false,
        sacramentHymn: {
            number: 169,
            title: 'In Remembrance of Thy Suffering'
        },
        speakers: [
            {
                name: 'Brother Thompson',
                topic: 'Faith and Works',
                type: 'speaker'
            },
            {
                name: 'Sister Davis',
                topic: 'Charity and Service',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 3,
            title: 'Now Let Us Rejoice'
        },
        closingPrayer: 'Sister Williams'
    },
    {
        id: 2,
        date: '2026-05-10',
        meetingType: 'stake',
        presiding: 'Bishop Smith',
        conducting: 'Brother Johnson',
        announcements: ['Youth activity on Friday'],
        openingHymn: {
            number: 2,
            title: 'The Spirit of God'
        },
        openingPrayer: 'Sister Thompson',
        wardBusiness: [{ description: 'Sustain primary teachers' }],
        stakeBusiness: false,
        sacramentHymn: {
            number: 220,
            title: 'Lord, I Would Follow Thee'
        },
        speakers: [
            {
                name: 'Brother Anderson',
                topic: 'Obedience and Faith',
                type: 'speaker'
            },
            {
                name: 'Ward Choir',
                topic: 'Jesus',
                type: 'musical-number'
            },
            {
                name: 'Sister Martinez',
                topic: 'Service and Charity',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 116,
            title: 'Come, Follow Me'
        },
        closingPrayer: 'Brother Davis'
    },
    {
        id: 3,
        date: '2026-05-17',
        meetingType: 'general',
        presiding: 'Bishop Smith',
        conducting: 'Sister Williams',
        announcements: ['Relief Society activity on Thursday'],
        openingHymn: {
            number: 116,
            title: 'Come, Follow Me'
        },
        openingPrayer: 'Brother Martinez',
        wardBusiness: [{ description: 'Sustain Choir Director' }],
        stakeBusiness: false,
        sacramentHymn: {
            number: 196,
            title: 'Jesus, Once of Humble Birth'
        },
        speakers: [
            {
                name: 'Brother Lee',
                topic: 'Faith and Prayer',
                type: 'speaker'
            },
            {
                name: 'Sister Kim',
                topic: 'Charity and Service',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 19,
            title: 'We Thank Thee, O God, for a Prophet'
        },
        closingPrayer: 'Brother Anderson'
    },
    {
        id: 4,
        date: '2026-05-24',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Johnson',
        announcements: ['Ward activity on Saturday'],
        openingHymn: {
            number: 103,
            title: 'Come, Follow Me'
        },
        openingPrayer: 'Sister Thompson',
        wardBusiness: [{ description: 'Missionary return' }],
        stakeBusiness: false,
        sacramentHymn: {
            number: 178,
            title: 'Lord, I Would Follow Thee'
        },
        speakers: [
            {
                name: 'Brother Anderson',
                topic: 'Obedience and Faith',
                type: 'speaker'
            },
            {
                name: 'Ward Choir',
                topic: 'Jesus',
                type: 'musical-number'
            },
            {
                name: 'Sister Martinez',
                topic: 'Service and Charity',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 116,
            title: 'Come, Follow Me'
        },
        closingPrayer: 'Brother Davis'
    },
    {
        id: 5,
        date: '2026-05-31',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Brother Williams',
        announcements: ['Ward activity on Sunday'],
        openingHymn: {
            number: 116,
            title: 'Come, Follow Me'
        },
        openingPrayer: 'Brother Martinez',
        wardBusiness: [{ description: 'Sustain Ward Clerk' }],
        stakeBusiness: false,
        sacramentHymn: {
            number: 196,
            title: 'Jesus, Once of Humble Birth'
        },
        speakers: [
            {
                name: 'Ward Members',
                topic: 'Testimonies',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 19,
            title: 'We Thank Thee, O God, for a Prophet'
        },
        closingPrayer: 'Brother Anderson'
    }

];

export function getMeetings(
    date?: string | null
): SacramentMeeting[] {
    if (date) {
        return meetings.filter((m) => m.date === date);
    }
    return meetings;    
}

export function getMeetingById(
    id: number
): SacramentMeeting | null {
    return meetings.find((m) => m.id === id) ?? null;       
}
