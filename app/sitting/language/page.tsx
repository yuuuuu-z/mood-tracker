"use client";

import { useEffect, useState } from "react";
import BackBtn from "@/app/components/BackBtn";
import { Globe, MapPin, Clock, Languages, Flag, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageRegionPage() {
  const [mounted, setMounted] = useState(false);
  const [settings, setSettings] = useState({
    language: "english",
    region: "cambodia",
    timezone: "asia-phnom-penh",
    dateFormat: "dd/mm/yyyy",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { value: "english", label: "English", flag: "🇺🇸" },
    { value: "khmer", label: "ខ្មែរ (Khmer)", flag: "🇰🇭" },
    { value: "chinese", label: "中文 (Chinese)", flag: "🇨🇳" },
    { value: "vietnamese", label: "Tiếng Việt", flag: "🇻🇳" },
    { value: "thai", label: "ไทย (Thai)", flag: "🇹🇭" },
    { value: "japanese", label: "日本語 (Japanese)", flag: "🇯🇵" },
  ];

  const regions = [
    { value: "cambodia", label: "Cambodia", flag: "🇰🇭" },
    { value: "thailand", label: "Thailand", flag: "🇹🇭" },
    { value: "vietnam", label: "Vietnam", flag: "🇻🇳" },
    { value: "singapore", label: "Singapore", flag: "🇸🇬" },
    { value: "malaysia", label: "Malaysia", flag: "🇲🇾" },
    { value: "usa", label: "United States", flag: "🇺🇸" },
  ];

  const timezones = [
    { value: "asia-phnom-penh", label: "Phnom Penh (GMT+7)" },
    { value: "asia-bangkok", label: "Bangkok (GMT+7)" },
    { value: "asia-ho-chi-minh", label: "Ho Chi Minh (GMT+7)" },
    { value: "asia-singapore", label: "Singapore (GMT+8)" },
    { value: "asia-kuala-lumpur", label: "Kuala Lumpur (GMT+8)" },
    { value: "america-new-york", label: "New York (GMT-5)" },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <BackBtn />
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <BackBtn />
          <div className="px-4 -mt-16 pt-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-500 rounded-lg">
                <Globe className="h-6 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Language & Region
              </h1>
            </div>
            <p className="text-muted-foreground">
              Customize your mood tracker for your location and language
            </p>
          </div>
        </div>

        {/* Current Settings */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Current Location
                  </h3>
                  <p className="text-sm text-gray-600">🇰🇭 Cambodia • English</p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 border-blue-200"
              >
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card className="mb-6 border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5" />
              Display Language
            </CardTitle>
            <CardDescription>
              Choose your preferred language for the mood tracker interface
            </CardDescription>
          </CardHeader>
          {/* <CardContent>
            <Select
              value={settings.language}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, language: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent> */}
        </Card>

        {/* Region Settings */}
        <Card className="mb-6 border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flag className="h-5 w-5" />
              Region
            </CardTitle>
            <CardDescription>
              Set your region for localized content and mood insights
            </CardDescription>
          </CardHeader>
          {/* <CardContent>
            <Select
              value={settings.region}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, region: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    <div className="flex items-center gap-2">
                      <span>{region.flag}</span>
                      <span>{region.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent> */}
        </Card>

        {/* Timezone Settings */}
        <Card className="mb-6 border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Timezone
            </CardTitle>
            <CardDescription>
              Ensure accurate timestamps for your mood entries
            </CardDescription>
          </CardHeader>
          {/* <CardContent>
            <Select
              value={settings.timezone}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, timezone: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {timezones.map((tz) => (
                  <SelectItem key={tz.value} value={tz.value}>
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent> */}
        </Card>

        {/* Date Format */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Date Format
            </CardTitle>
            <CardDescription>
              Choose how dates are displayed in your mood tracker
            </CardDescription>
          </CardHeader>
          {/* <CardContent className="space-y-4">
            <Select
              value={settings.dateFormat}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, dateFormat: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dd/mm/yyyy">
                  DD/MM/YYYY (27/06/2025)
                </SelectItem>
                <SelectItem value="mm/dd/yyyy">
                  MM/DD/YYYY (06/27/2025)
                </SelectItem>
                <SelectItem value="yyyy-mm-dd">
                  YYYY-MM-DD (2025-06-27)
                </SelectItem>
                <SelectItem value="dd-mmm-yyyy">
                  DD-MMM-YYYY (27-Jun-2025)
                </SelectItem>
              </SelectContent>
            </Select>

            <Separator />

            <div className="text-center text-sm text-muted-foreground">
              Changes will apply to all dates and timestamps in your mood
              tracker
            </div>
          </CardContent> */}
        </Card>
      </div>
    </div>
  );
}
