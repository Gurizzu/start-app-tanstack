import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

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
    <div className={cn('space-y-0', className)}>
      <div className="border border-border/60 rounded-sm overflow-hidden border-t-0 rounded-t-none">
        <Table>
          <TableHeader>
            <TableRow className="text-[10px] uppercase bg-blue-50/50 hover:bg-blue-50/50 border-b border-border/60 dark:bg-slate-800 dark:hover:bg-slate-800 dark:border-slate-700">
              <TableHead className="w-[40%] font-bold text-blue-900/70 py-2 h-8 dark:text-blue-200">
                EXCEPTION TITLE
              </TableHead>
              <TableHead className="w-[30%] font-bold text-blue-900/70 py-2 h-8 dark:text-blue-200">
                ACTIONS
              </TableHead>
              <TableHead className="font-bold text-blue-900/70 py-2 h-8 dark:text-blue-200">
                ATTACHMENT
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notes.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-xs text-muted-foreground text-center py-3"
                >
                  No exception notes
                </TableCell>
              </TableRow>
            ) : (
              notes.map((note) => (
                <TableRow
                  key={note.id}
                  className="text-xs border-b border-border/40 last:border-0 hover:bg-muted/10 dark:hover:bg-slate-800/50"
                >
                  <TableCell className="py-2.5 font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-400">
                    <div className="flex items-center gap-1">
                      <Plus className="h-3 w-3" />
                      {note.title}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground py-2.5 text-center">
                    {note.actions || '--'}
                  </TableCell>
                  <TableCell className="text-muted-foreground py-2.5 text-center">
                    {note.attachment || '--'}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="px-1 py-2">
        <button
          onClick={onAddNote}
          className="flex items-center gap-1 text-blue-500 text-xs hover:underline hover:text-blue-600 font-medium dark:text-blue-400"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Exception Note
        </button>
      </div>
    </div>
  )
}
