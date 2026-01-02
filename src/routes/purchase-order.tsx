import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { StatusCard } from '@/components/StatusCard'
import { ItemsTable } from '@/components/ItemsTable'
import { TimelineSidebar } from '@/components/TimelineSidebar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Paperclip } from 'lucide-react'

export const Route = createFileRoute('/purchase-order')({
    component: PurchaseOrderPage
})

function PurchaseOrderPage() {
    return (
        <Layout>
            <div className="flex gap-6 max-w-[1920px] mx-auto pb-4 h-full items-start">
                <div className="flex flex-col gap-6 flex-1 min-w-0 pb-20">

                    {/* Top Actions */}
                    <div className="flex items-center gap-4 bg-background p-2 rounded-lg border shadow-sm px-4">
                        <Button variant="ghost" size="sm" className="font-semibold text-foreground">View Timeline</Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">Print</Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">Quick Update</Button>
                    </div>

                    {/* Document Header */}
                    <div className="grid gap-6">
                        {/* Status Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <StatusCard
                                role="Creator"
                                name="Noorohmah"
                                className="border-green-200 bg-green-50/50"
                            />
                            <StatusCard
                                role="Approved 02 Jan 2026"
                                name="Ninda Ratnasari"
                                className="border-green-200 bg-green-50/50"
                            />
                            <StatusCard
                                role="Supply Chain Management"
                                name="Denny Zhang"
                                variant="active"
                            />
                            <StatusCard
                                role="BOD"
                                name="Fred Zhang"
                                variant="default"
                            />
                        </div>

                        {/* Info Grid */}
                        <div className="bg-background border rounded-lg overflow-hidden text-sm">
                            <div className="grid grid-cols-[120px_1fr_120px_1fr_120px_1fr] border-b">
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">COMPANY</div>
                                <div className="p-3">MBSS</div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">PO NUMBER</div>
                                <div className="p-3 font-mono italic">PO01-2601-0002</div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">EXPENSE GROUP</div>
                                <div className="p-3">Operations</div>
                            </div>
                            <div className="grid grid-cols-[120px_1fr_120px_1fr_120px_1fr] border-b">
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">DOC STATUS</div>
                                <div className="p-3">Published</div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">CREATED BY</div>
                                <div className="p-3 flex items-center gap-2">
                                    <div className="h-5 w-5 rounded-full bg-slate-200"></div>
                                    Noorohmah
                                </div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">EXPENSE TYPE</div>
                                <div className="p-3">Vessels Supplies - Coal</div>
                            </div>
                            <div className="grid grid-cols-[120px_1fr_120px_1fr_120px_1fr] border-b">
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">CURRENCY</div>
                                <div className="p-3 text-blue-600 font-medium">IDR</div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">PUBLISHED</div>
                                <div className="p-3">02 Jan 2026</div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">REQUIRED DATE</div>
                                <div className="p-3 text-blue-600">02 Jan 2026</div>
                            </div>
                            <div className="grid grid-cols-[120px_1fr_120px_1fr_120px_1fr]">
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">TRACKING CODE</div>
                                <div className="p-3 text-blue-600">2512270002</div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">TERMS (DAYS)</div>
                                <div className="p-3 text-blue-600">30</div>
                                <div className="p-3 bg-muted/30 text-muted-foreground font-semibold">DELIVERY TO</div>
                                <div className="p-3 text-blue-600">ENTEBE MEGASTAR 67</div>
                            </div>
                        </div>
                    </div>

                    {/* Purchase Requests */}
                    <section className="bg-muted/30 rounded-lg border">
                        <div className="px-4 py-2 bg-slate-700 text-white text-xs font-bold rounded-t-lg uppercase tracking-wider">
                            Purchase Requests
                        </div>
                        <div className="p-4 flex gap-3">
                            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 bg-blue-50">
                                PR01-2512-0386
                            </Button>
                            <Button variant="outline" size="sm" className="border-dashed">+ Add PR</Button>
                        </div>
                    </section>

                    {/* Vendor Info */}
                    <section className="bg-muted/30 rounded-lg border">
                        <div className="px-4 py-2 bg-slate-700 text-white text-xs font-bold rounded-t-lg uppercase tracking-wider">
                            Vendor Info
                        </div>
                        <div className="p-4 space-y-2 bg-background">
                            <h3 className="text-blue-600 font-bold text-sm">V170017 - O - KARYA BERSAMA TEKNIK - BANJARMASIN</h3>
                            <p className="text-sm text-muted-foreground">JI Ray 11 Puntik Tengah Rt 008 / Rw 004, Sel Puntik Tengah, Mandastana Barito Kuala, 70581</p>
                            <div className="flex text-sm mt-2">
                                <span className="font-bold mr-2">NPWP:</span> 702436003731000
                            </div>
                            <Button variant="ghost" size="sm" className="h-auto p-0 text-blue-600 hover:text-blue-700 text-xs mt-2">
                                + Select a Vendor Info
                            </Button>
                        </div>
                    </section>

                    {/* Bank Info */}
                    <section className="bg-muted/30 rounded-lg border">
                        <div className="px-4 py-2 bg-slate-700 text-white text-xs font-bold rounded-t-lg uppercase tracking-wider">
                            Bank Info
                        </div>
                        <div className="bg-background text-sm">
                            <div className="grid grid-cols-[150px_1fr] border-b">
                                <div className="p-3 text-muted-foreground font-semibold text-xs uppercase">Source Bank</div>
                                <div className="p-3 text-blue-600 font-medium">Default</div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr]">
                                <div className="p-3 text-muted-foreground font-semibold text-xs uppercase">Bank Info</div>
                                <div className="p-3 text-blue-600">Bank Mandiri - IDR - KARYA BERSAMA TEKNIK - 0310010916214 - BMRIIDJA</div>
                            </div>
                        </div>
                    </section>

                    {/* Items Section */}
                    <section>
                        <Tabs defaultValue="items" className="w-full">
                            <TabsList className="bg-slate-200">
                                <TabsTrigger value="items" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">Purchase Items</TabsTrigger>
                                <TabsTrigger value="assignment">Account Assignment</TabsTrigger>
                            </TabsList>
                            <div className="mt-0 bg-muted/30 p-4 border rounded-b-lg rounded-tr-lg">
                                <TabsContent value="items" className="mt-0">
                                    <ItemsTable />
                                </TabsContent>
                            </div>
                        </Tabs>
                    </section>

                    {/* Attachments */}
                    <section className="bg-muted/30 rounded-lg border">
                        <div className="px-4 py-2 bg-slate-600 text-white text-xs font-bold rounded-t-lg uppercase tracking-wider">
                            Attachments
                        </div>
                        <div className="bg-background">
                            {/* Table alike list */}
                            <div className="text-xs uppercase font-bold text-muted-foreground p-3 border-b">Attachments</div>
                            <div className="divide-y">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex justify-between p-3 text-sm hover:bg-muted/50">
                                        <div className="flex items-center gap-2 text-blue-600">
                                            <Paperclip className="h-3 w-3" />
                                            <span>PR01-2512-0386_msr-dan-ba-permintaan.pdf</span>
                                        </div>
                                        <button className="text-blue-500 hover:underline text-xs">Remove</button>
                                    </div>
                                ))}
                                <div className="p-3">
                                    <Button variant="ghost" size="sm" className="h-auto p-0 text-blue-600 text-xs">+ Add attachment</Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Action Buttons */}
                    <div className="flex gap-4 sticky bottom-6 z-10">
                        <Button className="bg-[#1e293b] hover:bg-[#0f172a]">Submit</Button>
                        <Button variant="destructive" className="bg-[#ef4444] hover:bg-[#dc2626]">Cancel</Button>
                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="hidden xl:block h-full sticky top-0 overflow-hidden pb-6">
                    <TimelineSidebar />
                </div>
            </div>
        </Layout>
    )
}
