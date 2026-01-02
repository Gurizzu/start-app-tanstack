import * as React from 'react'
import { ChevronDown, History, Plus, Printer, RefreshCw } from 'lucide-react'

import { PageHeader } from './page-header'
import { DocumentHeader } from './document-header'
import { FormSection } from './form-section'
import { TimelineSidebar } from './timeline-sidebar'
import { PurchaseItemsTable } from './purchase-items-table'
import { AttachmentsSection } from './attachments-section'
import { ExceptionNotes } from './exception-notes'
import { AdditionalNotes } from './additional-notes'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

// Sample data
const sampleApprovers = [
  { name: 'Noorohmah', role: 'Creator', variant: 'creator' as const },
  {
    name: 'Ninda Ratnasari',
    role: 'Approved 02 Jan 2026',
    variant: 'approved' as const,
  },
  {
    name: 'Denny Zhang',
    role: 'Supply Chain Management',
    variant: 'pending' as const,
  },
  { name: 'Fred Zhang', role: 'BOD', variant: 'default' as const },
]

const sampleTimelineEntries = [
  {
    date: '02 Jan 2026',
    time: '10:43 WIB',
    title: 'PO01-2601-0002',
    description: 'Purchase Order approved by Ninda Ratnasari',
    type: 'system' as const,
  },
  {
    date: '02 Jan 2026',
    time: '08:26 WIB',
    title: 'PO01-2601-0002',
    description: 'Purchase Order published by Noorohmah',
    type: 'system' as const,
  },
  {
    date: '29 Dec 2025',
    time: '09:09 WIB',
    title: 'PR01-2512-0386',
    description: 'Purchase Request published by Liconie Paula',
    type: 'system' as const,
  },
  {
    date: '28 Dec 2025',
    time: '20:18 WIB',
    title: 'PR01-2512-0386',
    description: 'Purchase Request fully approved by Fred Zhang',
    type: 'message' as const,
  },
  {
    date: '28 Dec 2025',
    time: '19:29 WIB',
    title: 'PR01-2512-0386',
    description: 'Purchase Request approved by Agus Endre',
    type: 'message' as const,
  },
  {
    date: '27 Dec 2025',
    time: '14:57 WIB',
    title: 'PR01-2512-0386',
    description: 'Purchase Request approved by Tony Firmansyah',
    type: 'system' as const,
  },
  {
    date: '27 Dec 2025',
    time: '14:10 WIB',
    title: 'PR01-2512-0386',
    description: 'Purchase Request published by Liconie Paula',
    type: 'system' as const,
  },
  {
    date: '27 Dec 2025',
    time: '07:37 WIB',
    title: 'PR01-2512-0386',
    description: 'Purchase Request saved as draft by Liconie Paula',
    type: 'system' as const,
  },
]

const samplePurchaseItems = [
  {
    id: '1',
    itemNumber: 1,
    description: 'HRU EP1EB NSR',
    prQty: 1,
    grQty: 0,
    poQty: 1,
    units: 'PC',
    unitPrice: 1950000.0,
    discount: 0,
    total: 1950000.0,
    currency: 'IDR',
    serviceOrder: '--',
    costCenter: 'TUG BOAT - ENTEBE MEGASTAR 67',
  },
]

const sampleValueSummary = {
  discountPercent: 0,
  discountAmount: 0.0,
  subTotal: 1950000.0,
  vatPercent: 0,
  vatAmount: 0.0,
  grandTotal: 1950000.0,
  currency: 'IDR',
}

const sampleAttachments = [
  {
    id: '1',
    name: 'PR01-2512-0386(Lmr-dan-ba-permintaan-hru-ep1rb-25-des-2025-010-mr-email7-deck-sir2025.pdf',
  },
  {
    id: '2',
    name: 'PR01-2512-0386 Penawaran harga BCM - Q0544 - TB Megastar 67.pdf',
  },
  {
    id: '3',
    name: 'PR01-2512-0386 Penawaran harga IGS - Q 202 - TB Megastar 67.pdf',
  },
  {
    id: '4',
    name: 'PR01-2512-0386 Penawaran harga KBT - 122 - TB Megastar 67.pdf',
  },
  {
    id: '4',
    name: 'PR01-2512-0386 Penawaran harga KBT - 122 - TB Megastar 67.pdf',
  },
]

const sampleExceptionNotes = [
  { id: '1', title: 'Add Exception Note', actions: '--', attachment: '--' },
]

export function PurchaseOrderPage() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <PageHeader
        userName="Muhammad Cahya"
        organization="MBSS"
        poNumber="PO01-2601-0002"
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleSidebar={() => setSidebarOpen(true)}
        showSidebarToggle
      />

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-5 space-y-3 overflow-auto max-h-[calc(100vh-56px)]">
          <div className="flex flex-col gap-5 px-6 py-4 max-w-[1400px] mx-auto">
            {/* Toolbar */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 rounded-full text-xs font-medium border-border/60 hover:bg-muted/50"
              >
                <History className="h-3.5 w-3.5" />
                View Timeline
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 rounded-full text-xs font-medium border-border/60 hover:bg-muted/50"
              >
                <Printer className="h-3.5 w-3.5" />
                Print
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 rounded-full text-xs font-medium border-border/60 hover:bg-muted/50"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Quick Update
              </Button>
            </div>

            {/* Document Header */}
            <FormSection
              title="Document Header"
              defaultOpen
              className="dark:bg-slate-900/50"
            >
              <DocumentHeader approvers={sampleApprovers} className="mb-8" />
              {/* ... (existing fields code) ... */}
              <div className="divide-y divide-border/40 text-sm">
                {/* ... (existing grid code) ... */}
                <div className="grid grid-cols-8 gap-x-2 py-2.5">
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    COMPANY
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    MBSS
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    PO NUMBER
                  </span>
                  <span className="text-foreground tracking-tight italic font-medium">
                    PO01-2601-0002
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    EXPENSE GROUP
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    Operations
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    SERVICE AREA
                  </span>
                  <span className="text-blue-600 underline cursor-pointer decoration-1 underline-offset-2 tracking-tight font-medium dark:text-blue-400">
                    BANJARMASIN
                  </span>
                </div>
                <div className="grid grid-cols-8 gap-x-2 py-2.5">
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    DOC STATUS
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    Published
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    CREATED BY
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded-full bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">
                      N
                    </div>
                    <span className="text-foreground tracking-tight font-medium">
                      Noorohmah
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    EXPENSE TYPE
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    Vessels Supplies - Coal
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider"></span>
                  <span className="text-foreground tracking-tight font-medium"></span>
                </div>
                <div className="grid grid-cols-8 gap-x-2 py-2.5">
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    CURRENCY
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    IDR
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    PUBLISHED
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    02 Jan 2026
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    REQUIRED DATE
                  </span>
                  <span className="text-blue-600 underline cursor-pointer decoration-1 underline-offset-2 tracking-tight font-medium dark:text-blue-400">
                    02 Jan 2026
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    DELIVERY TO
                  </span>
                  <span className="text-blue-600 underline cursor-pointer decoration-1 underline-offset-2 tracking-tight font-medium dark:text-blue-400">
                    ENTEBE MEGASTAR 67
                  </span>
                </div>
                <div className="grid grid-cols-8 gap-x-2 py-2.5">
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    TRACKING CODE
                  </span>
                  <span className="text-blue-600 underline cursor-pointer decoration-1 underline-offset-2 tracking-tight font-medium dark:text-blue-400">
                    2910270002
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    TERMS (DAYS)
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    30
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider"></span>
                  <span className="text-foreground tracking-tight font-medium"></span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider"></span>
                  <span className="text-foreground tracking-tight font-medium"></span>
                </div>
                <div className="grid grid-cols-8 gap-x-2 py-2.5 border-b border-border/40">
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    TAX CODE
                  </span>
                  <span className="text-blue-600 underline cursor-pointer decoration-1 underline-offset-2 tracking-tight font-medium dark:text-blue-400">
                    V1 0%
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                    PROCUREMENT TYPE
                  </span>
                  <span className="text-foreground tracking-tight font-medium">
                    Goods
                  </span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider"></span>
                  <span className="text-foreground tracking-tight font-medium"></span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider"></span>
                  <span className="text-foreground tracking-tight font-medium"></span>
                </div>
              </div>
            </FormSection>

            {/* Purchase Requests */}
            <FormSection
              title="Purchase Requests"
              defaultOpen
              className="dark:bg-slate-900/50"
            >
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium rounded-sm shadow-sm hover:bg-blue-100 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
                  PR01-2512-0386
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1 border border-dashed border-gray-300 text-gray-400 text-xs font-medium rounded-full hover:border-blue-400 hover:text-blue-500 transition-colors">
                  <Plus className="h-3 w-3" />
                  Add PR
                </button>
              </div>
            </FormSection>

            {/* Vendor Bidding */}
            <FormSection
              title="Vendor Bidding"
              defaultOpen
              className="dark:bg-slate-900/50"
            >
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium rounded-sm shadow-sm hover:bg-blue-100 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
                  BD01-2512-0435
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1 border border-dashed border-gray-300 text-gray-400 text-xs font-medium rounded-full hover:border-blue-400 hover:text-blue-500 transition-colors">
                  <Plus className="h-3 w-3" />
                  Add Vendor Bidding
                </button>
              </div>
            </FormSection>

            {/* Vendor Info */}
            <FormSection
              title="Vendor Info"
              defaultOpen
              className="dark:bg-slate-900/50"
            >
              <div className="space-y-1">
                <a
                  href="#"
                  className="block text-blue-600 hover:underline text-sm font-medium dark:text-blue-400"
                >
                  V170017 - 0 - KARYA BERSAMA TEKNIK - BANJARMASIN
                </a>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Jl Ray 11 Puruk Tengah Rt 008 / Rw 004, Sei Puruk Tengah,
                  Mandastana Barito Kuala, 70561
                </div>
                <div className="text-xs text-muted-foreground">
                  NPWP: 702438003731000
                </div>
                <button className="flex items-center gap-1 text-blue-500 text-xs hover:underline mt-2 font-medium cursor-pointer dark:text-blue-400">
                  <Plus className="h-3 w-3" />
                  Select a Vendor Info
                </button>
              </div>
            </FormSection>

            {/* Bank Info */}
            <FormSection
              title="Bank Info"
              defaultOpen
              className="dark:bg-slate-900/50"
            >
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center mb-1">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  SOURCE BANK
                </span>
                <span className="text-sm font-medium">Default</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center mb-1">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  BANK INFO
                </span>
                <span className="text-sm font-medium">
                  <a
                    href="#"
                    className="text-blue-600 underline dark:text-blue-400"
                  >
                    Bank Mandiri - IDR - KARYA BERSAMA TEKNIK - 0310010916214 -
                    BMR1IDJA
                  </a>
                </span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  INTERMEDIARY INFO
                </span>
                <span className="text-sm font-medium">--</span>
              </div>
            </FormSection>

            {/* Purchase Items */}
            {/* Purchase Items */}
            {/* Purchase Items */}
            <Tabs defaultValue="items" className="w-full">
              <FormSection
                customTitle={
                  <div className="flex items-center gap-6">
                    <span>Purchase Items</span>
                    <TabsList className="hidden h-auto bg-transparent p-0 gap-6 border-l border-white/20 pl-6 ml-2">
                      <TabsTrigger
                        value="items"
                        className="h-auto p-0 font-medium text-xs text-blue-200 data-[state=active]:text-white bg-transparent shadow-none hover:text-white transition-colors"
                      >
                        PURCHASE ITEMS
                      </TabsTrigger>
                      <TabsTrigger
                        value="account"
                        className="h-auto p-0 font-medium text-xs text-blue-200 data-[state=active]:text-white bg-transparent shadow-none hover:text-white transition-colors"
                      >
                        ACCOUNT ASSIGNMENT
                      </TabsTrigger>
                    </TabsList>
                  </div>
                }
                defaultOpen
                className="dark:bg-slate-900/50"
                contentClassName="p-0 overflow-hidden"
              >
                <div className="p-4">
                  <TabsContent value="items" className="mt-0">
                    <PurchaseItemsTable
                      items={samplePurchaseItems}
                      summary={sampleValueSummary}
                      onAddItem={() => { }}
                    />
                  </TabsContent>
                  <TabsContent value="account" className="mt-0">
                    <div className="p-8 text-center text-sm text-muted-foreground">
                      Account Assignment content
                    </div>
                  </TabsContent>
                </div>
              </FormSection>
            </Tabs>

            {/* Attachments */}
            <FormSection
              title="Attachments"
              defaultOpen
              className="dark:bg-slate-900/50"
            >
              <AttachmentsSection
                attachments={sampleAttachments}
                onAdd={() => { }}
                onRemove={() => { }}
              />
            </FormSection>

            {/* Exception Notes & Additional Notes */}
            <div className="grid grid-cols-1 gap-6">
              <FormSection
                title="Exception Note"
                defaultOpen
                className="dark:bg-slate-900/50"
              >
                <ExceptionNotes
                  notes={sampleExceptionNotes}
                  onAddNote={() => { }}
                />
              </FormSection>
              <FormSection
                title="Additional Notes"
                defaultOpen
                className="dark:bg-slate-900/50"
              >
                <AdditionalNotes
                  value={`PT KARYA BERSAMA TEKNIK
01/MR/E1567/DECK/XII/2025
TB. ENTEBE MEGASTAR 67
HRU EF1B8
D1 BANJARMASIN (PASSING TRISAKTI)`}
                />
              </FormSection>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4 pb-8 px-1">
              <Button
                size="sm"
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 h-9 font-medium shadow-sm border border-transparent dark:border-slate-700"
              >
                Submit
              </Button>
              <Button
                size="sm"
                className="bg-red-500 hover:bg-red-600 text-white px-8 h-9 font-medium shadow-sm border border-transparent dark:border-red-900"
              >
                Cancel
              </Button>
            </div>
          </div>
        </main>

        {/* Timeline Sidebar - Desktop */}
        <aside className="hidden lg:block w-72 xl:w-80 border-l border-border bg-card shrink-0">
          <TimelineSidebar
            poNumber="PO01-2601-0002"
            sourceInfo="Source: Purchase Request PR01-2512-0386"
            entries={sampleTimelineEntries}
          />
        </aside>

        {/* Timeline Sidebar - Mobile Sheet */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="right" className="w-80 p-0">
            <TimelineSidebar
              poNumber="PO01-2601-0002"
              sourceInfo="Source: Purchase Request PR01-2512-0386"
              entries={sampleTimelineEntries}
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
