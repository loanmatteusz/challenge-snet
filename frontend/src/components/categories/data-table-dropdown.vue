<script setup lang="ts">
    import { MoreHorizontal } from 'lucide-vue-next'
    import { Button } from '@/components/ui/button'
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger
    } from '@/components/ui/dropdown-menu'

    defineProps<{
        category: Category,
    }>()

    function copy(id: string) {
        navigator.clipboard.writeText(id)
    }
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem @click="copy(category.id)">
        Copy category ID
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>View customer</DropdownMenuItem>
      <DropdownMenuItem>View category details</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>