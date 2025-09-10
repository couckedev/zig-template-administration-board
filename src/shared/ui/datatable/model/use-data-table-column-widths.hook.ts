import { useLayoutEffect, useRef, useState } from "react";

export function useDataTableColumnWidths() {
  const headerRowRef = useRef<HTMLTableRowElement>(null);
  const [colWidths, setColWidths] = useState<number[]>([]);

  useLayoutEffect(() => {
    if (headerRowRef.current) {
      const widths = Array.from(headerRowRef.current.children).map(
        (th) => (th as HTMLTableCellElement).getBoundingClientRect().width
      );
      setColWidths(widths);
    }
  }, []);

  return { headerRowRef, colWidths };
}