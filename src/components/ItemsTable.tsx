import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ItemsTable() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 text-blue-600 border-dashed border-blue-200 bg-blue-50 hover:bg-blue-100">
                        + Add Item
                    </Button>
                </div>
            </div>

            <div className="rounded-md border bg-background">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[30px]"><Checkbox /></TableHead>
                            <TableHead className="w-[40px]">#</TableHead>
                            <TableHead>ITEM</TableHead>
                            <TableHead className="w-[80px]">PK QTY</TableHead>
                            <TableHead className="w-[80px]">RMN</TableHead>
                            <TableHead className="w-[80px]">PO QTY</TableHead>
                            <TableHead className="w-[60px]">UNITS</TableHead>
                            <TableHead className="w-[120px]">UNIT PRICE</TableHead>
                            <TableHead className="w-[100px]">DISCOUNT</TableHead>
                            <TableHead className="w-[120px]">TOTAL</TableHead>
                            <TableHead className="w-[50px]">CUR</TableHead>
                            <TableHead>SERVICE ORDER</TableHead>
                            <TableHead>COST CENTER</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell><Checkbox checked /></TableCell>
                            <TableCell>1</TableCell>
                            <TableCell className="font-medium">HRU EPIRB NSR</TableCell>
                            <TableCell>1.00</TableCell>
                            <TableCell>0.00</TableCell>
                            <TableCell>
                                <Input className="h-7 w-16 text-right" defaultValue="1.00" />
                            </TableCell>
                            <TableCell>PC</TableCell>
                            <TableCell className="text-right">1,950,000.00</TableCell>
                            <TableCell>
                                <Input className="h-7 w-16 text-right" defaultValue="0.00" />
                            </TableCell>
                            <TableCell className="text-right">1,950,000.00</TableCell>
                            <TableCell>IDR</TableCell>
                            <TableCell>--</TableCell>
                            <TableCell className="truncate max-w-[150px]" title="TUG BOAT - ENTEBE MEGASTAR 67">TUG BOAT - ENTEBE MEGASTAR 67</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-end">
                <div className="w-[400px] space-y-2 text-sm bg-background p-4 rounded-md border">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Discount (0.00%)</span>
                        <div className="flex items-center gap-2">
                            <span className="font-mono">0.00</span>
                            <span className="text-muted-foreground text-xs">IDR</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center font-medium">
                        <span>Sub Total</span>
                        <div className="flex items-center gap-2">
                            <span className="font-mono">1,950,000.00</span>
                            <span className="text-muted-foreground text-xs">IDR</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">VAT/PPN (VI 0%)</span>
                        <div className="flex items-center gap-2">
                            <span className="font-mono">0.00</span>
                            <span className="text-muted-foreground text-xs">IDR</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t font-bold text-base">
                        <span>Grand Total</span>
                        <div className="flex items-center gap-2">
                            <span className="font-mono">1,950,000.00</span>
                            <span className="text-muted-foreground text-xs">IDR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
