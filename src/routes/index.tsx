import { createFileRoute } from '@tanstack/react-router'
import { PurchaseOrderPage } from '@/components/purchase-order'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <PurchaseOrderPage />
}
