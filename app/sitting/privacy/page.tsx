"use client";

import { useEffect, useState } from "react";
import BackBtn from "@/app/components/BackBtn";
import {
  Shield,
  Lock,
  Eye,
  Download,
  Trash2,
  UserCheck,
  Database,
  Key,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PrivacySecurityPage() {
  const [mounted, setMounted] = useState(false);
  const [privacy, setPrivacy] = useState({
    dataEncryption: true,
    anonymousAnalytics: false,
    shareInsights: true,
    biometricLock: false,
    autoLogout: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const togglePrivacy = (key: string) => {
    setPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const privacySettings = [
    {
      id: "dataEncryption",
      title: "End-to-End Encryption",
      description: "Your mood data is encrypted and only you can access it",
      icon: <Lock className="h-5 w-5" />,
      color: "bg-green-500",
      enabled: privacy.dataEncryption,
      recommended: true,
    },
    {
      id: "anonymousAnalytics",
      title: "Anonymous Usage Analytics",
      description: "Help improve the app by sharing anonymous usage data",
      icon: <Database className="h-5 w-5" />,
      color: "bg-blue-500",
      enabled: privacy.anonymousAnalytics,
      recommended: false,
    },
    {
      id: "shareInsights",
      title: "Personalized Insights",
      description:
        "Allow AI analysis of your mood patterns for better recommendations",
      icon: <Eye className="h-5 w-5" />,
      color: "bg-purple-500",
      enabled: privacy.shareInsights,
      recommended: true,
    },
    {
      id: "biometricLock",
      title: "Biometric App Lock",
      description:
        "Use fingerprint or face recognition to secure your mood data",
      icon: <Key className="h-5 w-5" />,
      color: "bg-orange-500",
      enabled: privacy.biometricLock,
      recommended: true,
    },
    {
      id: "autoLogout",
      title: "Auto Logout",
      description: "Automatically log out after 30 minutes of inactivity",
      icon: <UserCheck className="h-5 w-5" />,
      color: "bg-red-500",
      enabled: privacy.autoLogout,
      recommended: true,
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <BackBtn />
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
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
              <div className="p-2 bg-red-500 rounded-lg">
                <Shield className="h-6 w-8 text-white" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold tracking-tight">
                Privacy & Security
              </h1>
            </div>
            <p className="text-muted-foreground">
              Keep your mood data safe and control your privacy
            </p>
          </div>
        </div>

        {/* Security Status */}
        <Alert className="mb-8 border-green-200 bg-green-50">
          <Shield className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Your mood data is secure and encrypted. We never share your personal
            information.
          </AlertDescription>
        </Alert>

        {/* Privacy Settings */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold ">Privacy Controls</h2>

          {privacySettings.map((setting) => (
            <Card
              key={setting.id}
              className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-3 rounded-xl ${setting.color}`}>
                      <div className="text-white">{setting.icon}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 text-[0.8rem] md:text-lg">
                          {setting.title}
                        </h3>
                        {setting.recommended && (
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 text-xs"
                          >
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <p className="text-[0.65rem] text-gray-600 pr-2 md:text-[0.8rem] ">
                        {setting.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => togglePrivacy(setting.id)}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Management */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:text-black">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 " />
              Data Management
            </CardTitle>
            <CardDescription className="dark:text-black">
              Control your mood tracking data and account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-medium">Export Your Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Download all your mood entries and insights
                  </p>
                </div>
              </div>
              <Button className="dark:text-white" variant="outline" size="sm">
                Export
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Trash2 className="h-5 w-5 text-red-600" />
                <div>
                  <h4 className="font-medium">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Permanently remove your account and all data
                  </p>
                </div>
              </div>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>

            <Separator />

            <div className="text-center text-sm text-muted-foreground">
              Your privacy is our priority. We follow strict data protection
              standards.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
