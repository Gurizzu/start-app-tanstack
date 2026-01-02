import * as React from 'react'
import { Plus, X } from 'lucide-react'

import { PageHeader } from './page-header'
import { DocumentHeader } from './document-header'
import { FormSection, InfoRow } from './form-section'
import { TimelineSidebar } from './timeline-sidebar'
import { PurchaseItemsTable } from './purchase-items-table'
import { AttachmentsSection } from './attachments-section'
import { ExceptionNotes } from './exception-notes'
import { AdditionalNotes } from './additional-notes'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Sample data
const sampleApprovers = [
  { name: 'Noorohmah', role: 'Creator', variant: 'info' as const },
  { name: 'Ninda Ratnasari', role: 'Approved 02 Jan 2026', variant: 'warning' as const },
  { name: 'Denny Zhang', role: 'Supply Chain Management', variant: 'warning' as const },
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
  { id: '1', name: 'PR01-2512-0386(Lmr-dan-ba-permintaan-hru-ep1rb-25-des-2025-010-mr-email7-deck-sir2025.pdf' },
  { id: '2', name: 'PR01-2512-0386 Penawaran harga BCM - Q0544 - TB Megastar 67.pdf' },
  { id: '3', name: 'PR01-2512-0386 Penawaran harga IGS - Q 202 - TB Megastar 67.pdf' },
  { id: '4', name: 'PR01-2512-0386 Penawaran harga KBT - 122 - TB Megastar 67.pdf' },
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
    <div className="min-h-screen bg-muted/30">
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
          {/* Action Bar */}
          <div className="flex items-center gap-2 text-sm">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              View Timeline
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Print
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Quick Update
            </Button>
          </div>

          {/* Document Header */}
          <FormSection title="Document Header" defaultOpen>
            <DocumentHeader approvers={sampleApprovers} />

            {/* Info Grid - Row format like reference */}
            <div className="space-y-1 mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
                <InfoRow label="COMPANY" value="MBSS" />
                <InfoRow label="PO NUMBER" value="PO01-2601-0002" />
                <InfoRow label="EXPENSE GROUP" value="Operations" />
                <InfoRow label="SERVICE AREA" value={<span className="text-info underline cursor-pointer">BANJARMASIN</span>} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
                <InfoRow label="DOC STATUS" value="Published" />
                <InfoRow label="CREATED BY" value="Noorohmah" />
                <InfoRow label="EXPENSE TYPE" value="Vessels Supplies - Coal" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
                <InfoRow label="CURRENCY" value="IDR" />
                <InfoRow label="PUBLISHED" value="02 Jan 2026" />
                <InfoRow label="REQUIRED DATE" value="02 Jan 2026" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
                <InfoRow label="TRACKING CODE" value={<span className="text-info underline cursor-pointer">2910270002</span>} />
                <InfoRow label="TERMS (DAYS)" value="30" />
                <InfoRow label="DELIVERY TO" value={<span className="text-info underline cursor-pointer">ENTEBE MEGASTAR 67</span>} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
                <InfoRow label="TAX CODE" value={<span className="text-info underline cursor-pointer">V1 0%</span>} />
                <InfoRow label="PROCUREMENT TYPE" value="Goods" />
              </div>
            </div>
          </FormSection>

          {/* Purchase Requests */}
          <FormSection title="Purchase Requests" defaultOpen>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-info/10 text-info border-info/40 px-2 py-0.5">
                PR01-2512-0386
                <button className="ml-1.5 hover:text-info/70"><X className="h-3 w-3" /></button>
              </Badge>
              <Button variant="ghost" size="sm" className="text-info gap-1 h-7 text-xs">
                <Plus className="h-3 w-3" />
                Add PR
              </Button>
            </div>
          </FormSection>

          {/* Vendor Bidding */}
          <FormSection title="Vendor Bidding" defaultOpen>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-info/10 text-info border-info/40 px-2 py-0.5">
                BD01-2512-0435
                <button className="ml-1.5 hover:text-info/70"><X className="h-3 w-3" /></button>
              </Badge>
              <Button variant="ghost" size="sm" className="text-info gap-1 h-7 text-xs">
                <Plus className="h-3 w-3" />
                Add Vendor Bidding
              </Button>
            </div>
          </FormSection>

          {/* Vendor Info */}
          <FormSection title="Vendor Info" defaultOpen>
            <div className="space-y-2">
              <button className="text-info text-sm flex items-center gap-1 hover:underline">
                <Plus className="h-3 w-3" />
                Select a Vendor Info
              </button>
              <div>
                <a href="#" className="text-info underline text-sm font-medium">
                  V170017 - 0 - KARYA BERSAMA TEKNIK - BANJARMASIN
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Jl Ray 11 Puruk Tengah Rt 008 / Rw 004, Sei Puruk Tengah, Mandastana Barito Kuala, 70561
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <span className="font-medium">NPWP:</span> 702438003731000
                </p>
              </div>
            </div>
          </FormSection>

          {/* Bank Info */}
          <FormSection title="Bank Info" defaultOpen>
            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoRow label="SOURCE BANK" value="Default" />
              </div>
              <InfoRow label="BANK INFO" value={<a href="#" className="text-info underline">Bank Mandiri - IDR - KARYA BERSAMA TEKNIK - 0210019018214 - BANK02A</a>} />
              <InfoRow label="INTERMEDIARY INFO" value="--" />
            </div>
          </FormSection>

          {/* Purchase Items */}
          <FormSection title="Purchase Items" defaultOpen>
            <Tabs defaultValue="items" className="w-full">
              <TabsList className="h-8">
                <TabsTrigger value="items" className="text-xs h-7">Purchase Items</TabsTrigger>
                <TabsTrigger value="account" className="text-xs h-7">Account Assignment</TabsTrigger>
              </TabsList>
              <TabsContent value="items" className="mt-3">
                <PurchaseItemsTable items={samplePurchaseItems} summary={sampleValueSummary} />
              </TabsContent>
              <TabsContent value="account" className="mt-3">
                <p className="text-muted-foreground text-sm">Account assignment details...</p>
              </TabsContent>
            </Tabs>
          </FormSection>

          {/* Attachments */}
          <FormSection title="Attachments" defaultOpen>
            <AttachmentsSection attachments={sampleAttachments} />
          </FormSection>

          {/* Exception Note */}
          <FormSection title="Exception Note" defaultOpen>
            <ExceptionNotes notes={[{ id: '1', title: 'Add Exception Note', actions: '--', attachment: '--' }]} />
          </FormSection>

          {/* Additional Notes */}
          <FormSection title="Additional Notes" defaultOpen>
            <AdditionalNotes value={`PT KARYA BERSAMA TEKNIK
01/MR/E1567/DECK/XII/2025
TB. ENTEBE MEGASTAR 67
HRU EF1B8
D1 BANJARMASIN (PASSING TRISAKTI)`} />
          </FormSection>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 pb-8">
            <Button size="sm" className="bg-info hover:bg-info/90 text-info-foreground">
              Submit
            </Button>
            <Button size="sm" variant="destructive">
              Cancel
            </Button>
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

        {/* Timeline Sidebar - Mobile/Tablet Sheet */}
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
