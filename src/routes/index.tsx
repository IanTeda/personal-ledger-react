import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <div className="bg-blue-500 text-white p-4">Hello World</div>,
})