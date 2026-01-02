import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
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
      <Button variant="outline" size="sm" onClick={onAddItem} className="gap-1">
        <Plus className="h-4 w-4" />
        Add Item
      </Button>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-xs">
              <TableHead className="w-10">#</TableHead>
              <TableHead className="w-10">
                <Checkbox />
              </TableHead>
              <TableHead>ITEM</TableHead>
              <TableHead className="text-right w-20">PR QTY</TableHead>
              <TableHead className="text-right w-20">GR QTY</TableHead>
              <TableHead className="text-right w-20">PO QTY</TableHead>
              <TableHead className="w-20">UNITS</TableHead>
              <TableHead className="text-right w-28">UNIT PRICE</TableHead>
              <TableHead className="text-right w-20">DISCOUNT</TableHead>
              <TableHead className="text-right w-28">TOTAL</TableHead>
              <TableHead className="w-16">CUR</TableHead>
              <TableHead>SERVICE ORDER</TableHead>
              <TableHead>COST CENTER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className="text-sm">
                <TableCell>{item.itemNumber}</TableCell>
                <TableCell>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell className="font-medium max-w-[200px] truncate">
                  {item.description}
                </TableCell>
                <TableCell className="text-right">
                  <Input
                    type="number"
                    value={item.prQty}
                    className="h-8 w-16 text-right text-sm"
                    readOnly
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Input
                    type="number"
                    value={item.grQty}
                    className="h-8 w-16 text-right text-sm"
                    readOnly
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Input
                    type="number"
                    value={item.poQty}
                    className="h-8 w-16 text-right text-sm"
                  />
                </TableCell>
                <TableCell>{item.units}</TableCell>
                <TableCell className="text-right">
                  <Input
                    type="text"
                    value={formatNumber(item.unitPrice)}
                    className="h-8 w-24 text-right text-sm"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Input
                    type="number"
                    value={item.discount}
                    className="h-8 w-16 text-right text-sm"
                  />
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatNumber(item.total)}
                </TableCell>
                <TableCell>{item.currency}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.serviceOrder || '--'}
                </TableCell>
                <TableCell className="text-info hover:underline cursor-pointer">
                  {item.costCenter || '--'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Value Summary */}
      <div className="flex justify-end">
        <div className="w-full max-w-sm space-y-2 text-sm">
          <div className="grid grid-cols-3 gap-2 items-center border-t border-border pt-2">
            <span className="text-muted-foreground">Discount</span>
            <span className="text-right">
              <Input
                type="text"
                value={`${summary.discountPercent} %`}
                className="h-8 w-16 text-right text-sm inline"
              />
            </span>
            <div className="flex items-center justify-end gap-2">
              <Input
                type="text"
                value={formatNumber(summary.discountAmount)}
                className="h-8 w-24 text-right text-sm"
              />
              <span className="text-muted-foreground">{summary.currency}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center">
            <span className="text-muted-foreground">Sub Total</span>
            <span></span>
            <div className="flex items-center justify-end gap-2">
              <span className="font-medium">
                {formatNumber(summary.subTotal)}
              </span>
              <span className="text-muted-foreground">{summary.currency}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center">
            <span className="text-muted-foreground">VAT/PPN (VAT 0%)</span>
            <span></span>
            <div className="flex items-center justify-end gap-2">
              <span className="font-medium">
                {formatNumber(summary.vatAmount)}
              </span>
              <span className="text-muted-foreground">{summary.currency}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center border-t border-border pt-2">
            <span className="font-semibold">Grand Total</span>
            <span></span>
            <div className="flex items-center justify-end gap-2">
              <span className="font-bold text-base">
                {formatNumber(summary.grandTotal)}
              </span>
              <span className="text-muted-foreground">{summary.currency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
