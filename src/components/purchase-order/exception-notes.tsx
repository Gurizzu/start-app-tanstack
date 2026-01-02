import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface ExceptionNote {
  id: string
  title: string
  actions?: string
  attachment?: string
}

interface ExceptionNotesProps {
  notes: Array<ExceptionNote>
  onAddNote?: () => void
  className?: string
}

export function ExceptionNotes({
  notes,
  onAddNote,
  className,
}: ExceptionNotesProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Table>
        <TableHeader>
          <TableRow className="text-xs">
            <TableHead className="w-[40%]">EXCEPTION TITLE</TableHead>
            <TableHead className="w-[30%]">ACTIONS</TableHead>
            <TableHead>ATTACHMENT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notes.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={3}
                className="text-sm text-muted-foreground text-center py-4"
              >
                No exception notes
              </TableCell>
            </TableRow>
          ) : (
            notes.map((note) => (
              <TableRow key={note.id} className="text-sm">
                <TableCell>{note.title}</TableCell>
                <TableCell className="text-muted-foreground">
                  {note.actions || '--'}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {note.attachment || '--'}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Button
        variant="ghost"
        size="sm"
        onClick={onAddNote}
        className="gap-1 text-info hover:text-info/80 h-8 px-2"
      >
        <Plus className="h-4 w-4" />
        Add Exception Note
      </Button>
    </div>
  )
}
