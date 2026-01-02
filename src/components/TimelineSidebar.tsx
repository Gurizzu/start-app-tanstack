import { ScrollArea } from "@/components/ui/scroll-area"

export function TimelineSidebar() {
    const events = [
        {
            date: "02 Jan 2026",
            time: "10:43 WIB",
            code: "PO01-2601-0002",
            desc: "Purchase Order approved by Ninda Ratnasari",
            type: "System Message",
            active: true
        },
        {
            date: "02 Jan 2026",
            time: "09:26 WIB",
            code: "PO01-2601-0002",
            desc: "Purchase Order published by Noorohmah",
            type: "System Message"
        },
        {
            date: "29 Dec 2025",
            time: "08:59 WIB",
            code: "PR01-2512-0386",
            desc: "Purchase Request published by Leonie Paula",
            type: "System Message"
        },
        {
            date: "28 Dec 2025",
            time: "20:18 WIB",
            code: "PR01-2512-0386",
            desc: "Purchase Request fully approved by Fred Zhang",
            type: "System Message"
        },
        {
            date: "28 Dec 2025",
            time: "19:29 WIB",
            code: "PR01-2512-0386",
            desc: "Purchase Request approved by Agus Endro",
            type: "System Message"
        },
        {
            date: "27 Dec 2025",
            time: "14:52 WIB",
            code: "PR01-2512-0386",
            desc: "Purchase Request approved by Tomy Firmansyah",
            type: "System Message"
        },
        {
            date: "27 Dec 2025",
            time: "14:10 WIB",
            code: "PR01-2512-0386",
            desc: "Purchase Request published by Leonie Paula",
            type: "System Message"
        },
        {
            date: "27 Dec 2025",
            time: "07:37 WIB",
            code: "PR01-2512-0386",
            desc: "Purchase Request saved as draft by Leonie Paula",
            type: "System Message"
        }
    ]

    return (
        <div className="bg-background border rounded-lg h-full flex flex-col w-[300px] shrink-0">
            <div className="p-4 border-b">
                <h2 className="font-bold text-lg">PO01-2601-0002</h2>
                <p className="text-xs text-muted-foreground">Source: Purchase Request PR01-2512-0386</p>
            </div>
            <ScrollArea className="flex-1 p-4">
                <div className="relative border-l ml-2 space-y-6 pb-4">
                    {events.map((event, index) => (
                        <div key={index} className="ml-4 relative">
                            <div className={`absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border border-background ${event.active ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
                            <div className="flex justify-between items-start text-xs text-muted-foreground mb-1">
                                <span className={`${event.active ? 'text-blue-600 font-bold' : ''}`}>{event.date}</span>
                                <span className="text-right">{event.time}<br />{event.type}</span>
                            </div>
                            <div className="text-xs font-semibold mb-1">{event.code}</div>
                            <div className="text-xs text-foreground">{event.desc}</div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}
