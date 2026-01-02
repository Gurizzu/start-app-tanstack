import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface PurchaseItem {
  id: string
  itemNumber: number
  description: string
  prQty: number
  grQty: number
  poQty: number
  units: string
  unitPrice: number
  discount: number
  total: number
  currency: string
  serviceOrder?: string
  costCenter?: string
}

interface ValueSummary {
  discountPercent: number
  discountAmount: number
  subTotal: number
  vatPercent: number
  vatAmount: number
  grandTotal: number
  currency: string
}

interface PurchaseItemsTableProps {
  items: Array<PurchaseItem>
  summary: ValueSummary
  onAddItem?: () => void
  className?: string
}

export function PurchaseItemsTable({
  items,
  summary,
  onAddItem,
  className,
}: PurchaseItemsTableProps) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num)
  }

  return (
    <div className={cn('space-y-4', className)}>
      <button
        onClick={onAddItem}
        className="flex items-center gap-1.5 px-3 py-1.5 text-blue-600 text-xs font-medium hover:bg-blue-50 rounded-sm mb-2 border border-blue-200 shadow-sm transition-colors dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/40"
      >
        <Plus className="h-3.5 w-3.5" />
        Add Item
      </button>

      <div className="overflow-x-auto border border-border/60 rounded-sm">
        <Table>
          <TableHeader>
            <TableRow className="text-[10px] uppercase bg-blue-50/50 hover:bg-blue-50/50 border-b border-border/60 dark:bg-slate-800 dark:hover:bg-slate-800 dark:border-slate-700">
              <TableHead className="w-10 text-center py-2 h-9 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                #
              </TableHead>
              <TableHead className="w-[200px] py-2 h-9 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                ITEM
              </TableHead>
              <TableHead className="text-right py-2 h-9 w-24 bg-yellow-50/30 text-blue-900/80 font-bold tracking-tight dark:bg-yellow-900/10 dark:text-blue-200">
                PR QTY
              </TableHead>
              <TableHead className="text-right py-2 h-9 w-20 bg-yellow-50/30 text-blue-900/80 font-bold tracking-tight dark:bg-yellow-900/10 dark:text-blue-200">
                REM
              </TableHead>
              <TableHead className="text-right py-2 h-9 w-24 bg-blue-50/30 text-blue-900/80 font-bold tracking-tight border-x border-border/40 dark:bg-blue-900/10 dark:text-blue-200 dark:border-slate-700">
                PO QTY
              </TableHead>
              <TableHead className="text-center py-2 h-9 w-16 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                UNITS
              </TableHead>
              <TableHead className="text-right py-2 h-9 w-32 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                UNIT PRICE
              </TableHead>
              <TableHead className="text-right py-2 h-9 w-24 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                DISCOUNT
              </TableHead>
              <TableHead className="text-right py-2 h-9 w-32 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                TOTAL
              </TableHead>
              <TableHead className="text-center py-2 h-9 w-12 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                CUR
              </TableHead>
              <TableHead className="py-2 h-9 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                SERVICE ORDER
              </TableHead>
              <TableHead className="py-2 h-9 text-blue-900/80 font-bold tracking-tight dark:text-blue-200">
                COST CENTER
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                className="text-xs border-b border-border/50 hover:bg-muted/20 data-[state=selected]:bg-muted"
              >
                <TableCell className="py-1 text-center">
                  <Checkbox className="h-3.5 w-3.5 translate-y-[1px]" checked />
                </TableCell>
                <TableCell className="py-2 font-medium">
                  {item.itemNumber}
                </TableCell>
                <TableCell className="font-bold text-xs py-2 uppercase">
                  {item.description}
                </TableCell>
                <TableCell className="text-right py-2 bg-yellow-50/30">
                  {formatNumber(item.prQty)}
                </TableCell>
                <TableCell className="text-right py-2 bg-yellow-50/30">
                  0.00
                </TableCell>
                <TableCell className="text-right py-1 px-2 border-x border-border/40">
                  <div className="bg-background border border-border/60 rounded-sm px-2 py-1 text-right">
                    {formatNumber(item.poQty)}
                  </div>
                </TableCell>
                <TableCell className="py-2 pl-4 font-medium">
                  {item.units}
                </TableCell>
                <TableCell className="text-right py-2 px-2">
                  <div className="bg-background border border-border/60 rounded-sm px-2 py-1 text-right">
                    {formatNumber(item.unitPrice)}
                  </div>
                </TableCell>
                <TableCell className="text-right py-2 px-2">
                  <div className="bg-background border border-border/60 rounded-sm px-2 py-1 text-right flex items-center justify-end text-muted-foreground/60">
                    0.00
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium py-2">
                  {formatNumber(item.total)}
                </TableCell>
                <TableCell className="py-2">{item.currency}</TableCell>
                <TableCell className="text-muted-foreground py-2 text-center text-[10px]">
                  {item.serviceOrder}
                </TableCell>
                <TableCell className="text-xs text-foreground py-2">
                  {item.costCenter}
                </TableCell>
                <TableCell className="text-center py-2 text-blue-500 text-xs hover:underline cursor-pointer dark:text-blue-400">
                  No
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-muted/10 font-bold text-xs border-b border-border">
              <TableCell
                colSpan={3}
                className="uppercase text-[10px] py-2 pl-4 text-muted-foreground"
              >
                Value Summary
              </TableCell>
              <TableCell colSpan={11}></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Value Summary - right aligned */}
      <div className="flex justify-end pt-2">
        <div className="w-[450px] text-xs space-y-0">
          <div className="flex items-center justify-end gap-4 py-1.5">
            <span className="text-foreground/80 w-32 text-right">
              Discount (
            </span>
            <div className="flex items-center border border-border/60 rounded bg-background px-2 py-0.5 w-24 justify-end">
              <span className="text-muted-foreground mr-1">0.00</span>
              <span className="text-foreground">%</span>
            </div>
            <span className="text-foreground/80">)</span>
            <div className="flex items-center gap-2 w-40 justify-end">
              <div className="flex items-center border border-border/60 rounded bg-background px-2 py-0.5 w-full justify-end">
                <span className="font-medium">
                  {formatNumber(summary.discountAmount)}
                </span>
              </div>
              <span className="text-muted-foreground w-6 text-[10px] font-bold">
                {summary.currency}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 py-1.5">
            <span className="text-foreground/80 w-32 text-right">
              Sub Total
            </span>
            <span className="w-6"></span>
            <span className="w-1"></span>
            <div className="flex items-center gap-2 w-40 justify-end">
              <span className="w-full text-right font-medium">
                {formatNumber(summary.subTotal)}
              </span>
              <span className="text-muted-foreground w-6 text-[10px] font-bold">
                {summary.currency}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 py-1.5">
            <span className="text-foreground/80 w-32 text-right">
              VAT/PPN (V1 0%)
            </span>
            <span className="w-6"></span>
            <span className="w-1"></span>
            <div className="flex items-center gap-2 w-40 justify-end">
              <span className="w-full text-right font-medium">
                {formatNumber(summary.vatAmount)}
              </span>
              <span className="text-muted-foreground w-6 text-[10px] font-bold">
                {summary.currency}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 py-2 mt-1 border-t border-border/50">
            <span className="text-foreground w-32 text-right font-bold">
              Grand Total
            </span>
            <span className="w-6"></span>
            <span className="w-1"></span>
            <div className="flex items-center gap-2 w-40 justify-end">
              <span className="w-full text-right font-bold">
                {formatNumber(summary.grandTotal)}
              </span>
              <span className="text-muted-foreground w-6 text-[10px] font-bold">
                {summary.currency}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
