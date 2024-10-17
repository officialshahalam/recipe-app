

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h1>This page is not found</h1>
        <Button>
            <Link href="/">Go To Home</Link>
        </Button>
    </div>
  )
}
