import * as React from "react";
import { ThemeProvider} from "next-themes";

export default function Theme({ children ,...props }) {
  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  );
}
