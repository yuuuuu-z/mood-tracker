"use client";

import { useEffect, useState } from "react";
import BackBtn from "@/app/components/BackBtn";
import {
  Bell,
  BellRing,
  Clock,
  Smartphone,
  Mail,
  MessageSquare,
  Calendar,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NotificationPage() {
  const [mounted, setMounted] = useState(false);
  const [reminderTime, setReminderTime] = useState("evening");
  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    weeklyReport: true,
    moodStreak: false,
    insights: true,
    emailUpdates: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleNotification = (key: string) => {
    setNotifications((prev) => ({
      ...prev,
      [key as keyof typeof prev]: !prev[key as keyof typeof prev],
    }));
  };

  const notificationSettings = [
    {
      id: "dailyReminder",
      title: "Daily Mood Check-in",
      description: "Get reminded to log your daily mood and feelings",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-blue-500",
      enabled: notifications.dailyReminder,
    },
    {
      id: "weeklyReport",
      title: "Weekly Mood Summary",
      description: "Receive insights about your mood patterns each week",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "bg-green-500",
      enabled: notifications.weeklyReport,
    },
    {
      id: "moodStreak",
      title: "Mood Tracking Streaks",
      description: "Celebrate your consistent mood tracking milestones",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-orange-500",
      enabled: notifications.moodStreak,
    },
    {
      id: "insights",
      title: "Personalized Insights",
      description: "Get AI-powered suggestions based on your mood data",
      icon: <BellRing className="h-5 w-5" />,
      color: "bg-purple-500",
      enabled: notifications.insights,
    },
    {
      id: "emailUpdates",
      title: "Email Notifications",
      description: "Receive mood tracker updates via email",
      icon: <Mail className="h-5 w-5" />,
      color: "bg-red-500",
      enabled: notifications.emailUpdates,
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <BackBtn />
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" overflow-visible relative z-0">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <BackBtn />
          <div className="px-4 -mt-16 pt-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Bell className="h-6 w-8 text-white" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold tracking-tight">
                Notifications
              </h1>
            </div>
            <p className="text-muted-foreground">
              Stay connected with your mood tracking journey
            </p>
          </div>
        </div>

        {/* Notification Status */}
        <Card className="mb-8 border-0 shadow-lg bg-white/90">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-lg text-gray-900">
                    Push Notifications
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enabled for this device
                  </p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 border-green-200"
              >
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold  px-2">
            Notification Preferences
          </h2>

          {notificationSettings.map((setting) => (
            <Card
              key={setting.id}
              className="border-0 shadow-md bg-white/90 hover:shadow-lg transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${setting.color}`}>
                      <div className="text-white">{setting.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900 md:text-lg">
                        {setting.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {setting.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleNotification(setting.id)}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reminder Time Select */}
        <Card className="border-0 shadow-lg bg-white/90 dark:text-black ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Reminder Timing
            </CardTitle>
            <CardDescription>
              Choose when you'd like to receive your daily mood reminders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 ">
            <div className="flex items-center justify-between ">
              <div>
                <h4 className="font-medium">Daily Reminder Time</h4>
                <p className="text-sm text-muted-foreground">
                  Best time for your mood check-in
                </p>
              </div>
              <div>
                <Select value={reminderTime} onValueChange={setReminderTime}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select reminder time" />
                  </SelectTrigger>
                  {/* <SelectContent position="popper" className="z-50">
                    <SelectGroup>
                      <SelectLabel>Reminder Time</SelectLabel>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                      <SelectItem value="night">Night</SelectItem>
                    </SelectGroup>
                  </SelectContent> */}
                </Select>
              </div>
              {/* FIXED Select Dropdown */}
            </div>

            <Separator />

            <div className="text-center text-sm text-muted-foreground">
              Notifications help you build consistent mood tracking habits
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
