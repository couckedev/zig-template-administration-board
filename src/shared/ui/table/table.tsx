import * as React from "react"
import { cn } from "@/shared/lib/utils"

export const TableContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full overflow-x-auto bg-white ring-1 ring-inset ring-gray-200",
      className
    )}
    {...props}
  />
))
TableContainer.displayName = "TableContainer"

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn("w-full caption-bottom text-sm", className)}
    {...props}
  />
))
Table.displayName = "Table"

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      // Styles appliqués aux th enfants
      "bg-gray-50",
      "[&>tr>th]:text-teal-600 [&>tr>th]:font-semibold [&>tr>th]:text-left [&>tr>th]:whitespace-nowrap",
      "[&>tr>th]:border-y [&>tr>th]:border-gray-200",
      "[&>tr>th]:py-1 [&>tr>th]:px-2",
      className
    )}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("bg-white", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-gray-50 text-gray-700",
      // Appliquer styles sur les cellules du footer
      "[&>tr>td]:border-t [&>tr>td]:border-gray-200 [&>tr>td]:font-medium [&>tr>td]:py-4 [&>tr>td]:px-2",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "bg-white text-gray-900 transition-colors",
      // Bordure des cellules de chaque ligne
      "[&>td]:border-b [&>td]:border-gray-100",
      // Hover + sélection
      "hover:bg-teal-50 data-[state=selected]:bg-teal-50",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "align-middle text-left font-semibold text-teal-600 bg-gray-50",
      "border-y border-gray-200 py-1 px-2 whitespace-nowrap",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("align-middle py-4 px-2", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-[0.95em] text-gray-500", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"