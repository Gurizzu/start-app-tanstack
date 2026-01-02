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
  notes: ExceptionNote[]
  onAddNote?: () => void
  className?: string
}

export function ExceptionNotes({ notes, onAddNote, className }: ExceptionNotesProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Table>
        <TableHeader>
          <TableRow className="text-[10px] uppercase">
            <TableHead className="w-[40%] font-semibold py-2">EXCEPTION TITLE</TableHead>
            <TableHead className="w-[30%] font-semibold py-2">ACTIONS</TableHead>
            <TableHead className="font-semibold py-2">ATTACHMENT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-xs text-muted-foreground text-center py-3">
                No exception notes
              </TableCell>
            </TableRow>
          ) : (
            notes.map((note) => (
              <TableRow key={note.id} className="text-xs">
                <TableCell className="py-2">{note.title}</TableCell>
                <TableCell className="text-muted-foreground py-2">{note.actions || '--'}</TableCell>
                <TableCell className="text-muted-foreground py-2">{note.attachment || '--'}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Button
        variant="ghost"
        size="sm"
        onClick={onAddNote}
        className="gap-1 text-info hover:text-info/80 h-7 px-2 text-xs"
      >
        <Plus className="h-3 w-3" />
        Add Exception Note
      </Button>
    </div>
  )
}
