import { CircleCheck } from "lucide-react";
import BackBtn from "../components/BackBtn";
import { ConfettiDemo } from "../components/ConfettiDemo";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className=" h-screen">
      <ConfettiDemo />
      <BackBtn />
      <div className="p-5 border rounded-md mx-5 space-y-5">
        <div className="flex items-center">
          <p className="text-3xl font-bold w-full">Payment Successfully! </p>
          <span>
            <CircleCheck size={48} color="#33d507" />
          </span>
        </div>

        <p>
          Thank you for your payment. Now you can discover new feature. 🙏✨
        </p>

        <Button>View Invoice</Button>
      </div>
    </div>
  );
}
