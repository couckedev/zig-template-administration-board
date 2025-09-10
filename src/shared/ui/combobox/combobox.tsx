"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/button/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"
import type { ComboboxProps } from "./combobox-props.interface"
import { COMBOBOX_ICON } from "./combobox-icon-variants.constant"
import { COMBOBOX_CONTENT } from "./combobox-content-variants.constant"
import { COMBOBOX_INPUT } from "./combobox-input-variants.constant"

export function Combobox({
  buttonProps,
  placeholder,
  entries = [],
  popoverSide,
  value: controlledValue,
  onChange,
  size = "regular",
  variant = "ghost",
  matchTriggerWidth = true,
  popoverClassName,
  inputClassName,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState<string>("")

  const value = controlledValue !== undefined ? controlledValue : internalValue

  const handleSelect = (currentValue: string) => {
    if (currentValue === value) {
      setOpen(false)
      return
    }
    onChange?.(currentValue)
    if (controlledValue === undefined) setInternalValue(currentValue)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          // Important: on laisse quand même la possibilité de passer d’autres props via buttonProps,
          // mais size/variant du Combobox ont priorité.
          {...buttonProps}
          variant={variant}
          size={size}
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", buttonProps?.className)}
          onClick={(e) => {
            buttonProps?.onClick?.(e)
            setOpen((o) => !o)
          }}
        >
          <span className={cn(!value && "text-muted-foreground")}>
            {value ? entries.find((entry) => entry.value === value)?.label : placeholder}
          </span>
          <ChevronDown className={cn("opacity-60", COMBOBOX_ICON({ size }))} aria-hidden="true" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side={popoverSide ?? "bottom"}
        className={cn(
          COMBOBOX_CONTENT({ size }),
          matchTriggerWidth ? "w-[--radix-popover-trigger-width]" : "w-[200px]",
          popoverClassName
        )}
      >
        <Command>
          <CommandInput
            placeholder={placeholder}
            className={cn(COMBOBOX_INPUT({ size }), inputClassName)}
          />
          <CommandList>
            <CommandEmpty>No results</CommandEmpty>
            <CommandGroup>
              {entries.map((entry) => (
                <CommandItem key={entry.value} value={entry.value} onSelect={handleSelect}>
                  {entry.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      COMBOBOX_ICON({ size }),
                      value === entry.value ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden="true"
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}