"use client";

import { useEffect, useState } from "react";
import BackBtn from "@/app/components/BackBtn";
import { Moon, Sun, Monitor, Palette, Eye, Smartphone } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AppearancePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent rendering on server
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = [
    {
      name: "Light Mode",
      description: "Clean and bright interface",
      icon: <Sun className="h-6 w-6" />,
      value: "light",
      preview: "bg-white border-gray-200",
      color: "bg-yellow-500",
    },
    {
      name: "Dark Mode",
      description: "Easy on the eyes in low light",
      icon: <Moon className="h-6 w-6" />,
      value: "dark",
      preview: "bg-gray-900 border-gray-700",
      color: "bg-blue-600",
    },
    {
      name: "System",
      description: "Follows your device settings",
      icon: <Monitor className="h-6 w-6" />,
      value: "system",
      preview: "bg-gradient-to-br from-white to-gray-900",
      color: "bg-purple-500",
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <BackBtn />
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <BackBtn />
          <div className="px-4 -mt-16 pt-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500 rounded-lg">
                <Palette className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight ">Appearance</h1>
            </div>
            <p className="text-muted-foreground">
              Customize how your mood tracker looks and feels
            </p>
          </div>
        </div>

        {/* Current Theme Status */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Current Theme</h3>
                  <p className="text-sm ">Active appearance setting</p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 border-green-200 px-4 py-2 capitalize"
              >
                {theme}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Theme Options */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold px-2">Choose Your Theme</h2>

          {themeOptions.map((option) => (
            <Card
              key={option.value}
              className={`border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all cursor-pointer group ${
                theme === option.value
                  ? "ring-2 ring-purple-500 ring-offset-2"
                  : ""
              }`}
              onClick={() => setTheme(option.value)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${option.color}`}>
                      <div className="text-white">{option.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {option.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {option.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Theme Preview */}
                    <div
                      className={`w-12 h-8 rounded-md border-2 ${option.preview}`}
                    >
                      <div className="w-full h-full rounded-sm overflow-hidden">
                        {option.value === "system" ? (
                          <div className="flex h-full">
                            <div className="w-1/2 bg-white"></div>
                            <div className="w-1/2 bg-gray-900"></div>
                          </div>
                        ) : (
                          <div
                            className={
                              option.value === "light"
                                ? "bg-white h-full"
                                : " h-full"
                            }
                          ></div>
                        )}
                      </div>
                    </div>

                    {theme === option.value && (
                      <Badge variant="default" className="bg-purple-500">
                        Active
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Settings Preview */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Preview
            </CardTitle>
            <CardDescription>
              See how your theme looks across different elements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg border bg-background">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Sample Card</h4>
                <Badge variant="outline">Demo</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                This is how your content will appear with the selected theme.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="default">
                  Primary
                </Button>
                <Button size="sm" variant="outline">
                  Secondary
                </Button>
              </div>
            </div>

            <Separator />

            <div className="text-center text-sm text-muted-foreground">
              Theme changes apply instantly across your entire mood tracker
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
