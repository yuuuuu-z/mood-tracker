import {
  Bell,
  ChevronRight,
  DraftingCompass,
  Edit,
  Globe,
  ShieldEllipsis,
  ArrowLeft,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import SignOutBtn from "../components/SignOut";
import CountryInfo from "../components/CountryInfo";

const page = async () => {
  const user = await currentUser();
  const userId = user?.id.slice(-5);
  const icons = [
    {
      name: "Appearance Preferences",
      href: "/sitting/appearance",
      icon: <DraftingCompass className="h-5 w-5" />,
      color: "bg-purple-500",
      description: "Customize your app theme and display",
    },
    {
      name: "Notification",
      href: "/sitting/notification",
      icon: <Bell className="h-5 w-5" />,
      color: "bg-blue-500",
      description: "Manage your mood tracking reminders",
    },
    {
      name: "Language & Region",
      href: "/sitting/language",
      icon: <Globe className="h-5 w-5" />,
      color: "bg-green-500",
      description: "Set your preferred language and location",
    },
    {
      name: "Privacy & Security",
      href: "/sitting/privacy",
      icon: <ShieldEllipsis className="h-5 w-5" />,
      color: "bg-orange-500",
      description: "Control your data and privacy settings",
    },
  ];

  return (
    <div className="">
      <div className=" px-4">
        {/* Header */}
        <div className="">
          {/* Back Button */}
          <div className="sticky top-0 p-4 z-10">
            <Link href="/">
              <Button className="bg-purple-500 text-white font-bold hover:bg-gray-200 hover:text-purple-500">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="px-4 -mt-16 pt-20">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <Card className="mb-8 mt-5 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={user?.imageUrl} alt="Profile" />
                  <AvatarFallback className="bg-purple-500 text-white text-xl">
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {user?.fullName}
                  </h2>
                  <p className="text-sm text-gray-600">UID: {userId}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="bg-transparent"
              >
                <Link target="_blank" href="/user-profile">
                  <Edit className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Account Info Badges */}
            <div className="flex gap-3 mt-6 text-center">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 border-green-200 px-4 py-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Account Type: Free
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-200 text-blue-700 px-4 py-2"
              >
                <Globe className="w-3 h-3 mr-1  " />
                <CountryInfo />
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Settings Menu */}
        <div className="space-y-3">
          {icons.map((item, idx) => (
            <Card
              key={idx}
              className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <CardContent className="p-0">
                <Link href={item.href} className="block">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${item.color}`}>
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sign Out Section */}
        <div className="mt-12">
          <div className="flex justify-center sticky bottom-1 p-2">
            {/* <Button
              variant="destructive"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-colors"
            >
              Sign Out
            </Button> */}
            <SignOutBtn />
          </div>
          <p className="text-center pb-5 text-xs text-gray-500 mt-4">
            You'll need to sign in again to access your mood data
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
