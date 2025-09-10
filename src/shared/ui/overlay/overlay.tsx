import type { PropsWithChildren } from "react";

export function LoadingOverlay({children}: PropsWithChildren) {
  return (
    <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
      {children}
    </div>
  );
}
