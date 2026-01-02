import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
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
  items: PurchaseItem[]
  summary: ValueSummary
  onAddItem?: () => void
  className?: string
}

export function PurchaseItemsTable({
  items,
  summary,
  onAddItem,
  className
}: PurchaseItemsTableProps) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num)
  }

  return (
    <div className={cn('space-y-4', className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={onAddItem}
        className="gap-1 text-info hover:text-info/80 h-7 px-2"
      >
        <Plus className="h-3 w-3" />
        Add Item
      </Button>

      <div className="overflow-x-auto border rounded-md">
        <Table>
          <TableHeader>
            <TableRow className="text-[10px] uppercase bg-muted/50">
              <TableHead className="w-8 font-semibold">#</TableHead>
              <TableHead className="w-12 font-semibold">ITEM</TableHead>
              <TableHead className="font-semibold min-w-[120px]"></TableHead>
              <TableHead className="text-right w-16 font-semibold">PR QTY</TableHead>
              <TableHead className="text-right w-16 font-semibold">GR QTY</TableHead>
              <TableHead className="text-right w-16 font-semibold">PO QTY</TableHead>
              <TableHead className="w-16 font-semibold">UNITS</TableHead>
              <TableHead className="text-right w-24 font-semibold">UNIT PRICE</TableHead>
              <TableHead className="text-right w-20 font-semibold">DISCOUNT</TableHead>
              <TableHead className="text-right w-24 font-semibold">TOTAL</TableHead>
              <TableHead className="w-12 font-semibold">CUR</TableHead>
              <TableHead className="font-semibold">SERVICE ORDER</TableHead>
              <TableHead className="font-semibold">COST CENTER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className="text-sm">
                <TableCell className="py-2">{item.itemNumber}</TableCell>
                <TableCell className="py-2">
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell className="font-medium max-w-[200px] py-2">
                  {item.description}
                </TableCell>
                <TableCell className="text-right py-2">{item.prQty}</TableCell>
                <TableCell className="text-right py-2">{item.grQty}</TableCell>
                <TableCell className="text-right py-2">{item.poQty}</TableCell>
                <TableCell className="py-2">{item.units}</TableCell>
                <TableCell className="text-right py-2">{formatNumber(item.unitPrice)}</TableCell>
                <TableCell className="text-right py-2">{item.discount}</TableCell>
                <TableCell className="text-right font-medium py-2">
                  {formatNumber(item.total)}
                </TableCell>
                <TableCell className="py-2">{item.currency}</TableCell>
                <TableCell className="text-muted-foreground py-2">
                  {item.serviceOrder || '--'}
                </TableCell>
                <TableCell className="text-info hover:underline cursor-pointer py-2">
                  {item.costCenter || '--'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Value Summary */}
      <div className="flex justify-end">
        <div className="w-full max-w-xs space-y-1 text-sm">
          <div className="flex items-center justify-between py-1">
            <span className="text-muted-foreground">Discount</span>
            <div className="flex items-center gap-2">
              <span>{summary.discountPercent} %</span>
              <span className="w-24 text-right">{formatNumber(summary.discountAmount)}</span>
              <span className="text-muted-foreground w-8">{summary.currency}</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-muted-foreground">Sub Total</span>
            <div className="flex items-center gap-2">
              <span className="w-24 text-right font-medium">{formatNumber(summary.subTotal)}</span>
              <span className="text-muted-foreground w-8">{summary.currency}</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-muted-foreground">VAT/PPN (VAT 0%)</span>
            <div className="flex items-center gap-2">
              <span className="w-24 text-right">{formatNumber(summary.vatAmount)}</span>
              <span className="text-muted-foreground w-8">{summary.currency}</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-1 border-t border-border pt-2">
            <span className="font-semibold">Grand Total</span>
            <div className="flex items-center gap-2">
              <span className="w-24 text-right font-bold">{formatNumber(summary.grandTotal)}</span>
              <span className="text-muted-foreground w-8">{summary.currency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
