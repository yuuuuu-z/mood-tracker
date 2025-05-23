"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className=" toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-green-600 group-[.toaster]:border-green-300 group-[.toaster]:shadow-lg ",
          description: "group-[.toast]:text-sm ",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-green-600",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-green-600",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
