import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WalletIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-6 relative w-[700px] h-[500px]">
      {/* Earnings card */}
      <Card className="absolute w-[340px] -top-[15px] left-0 drop-shadow-xl shadow-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">This Month's Earnings</CardTitle>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              +24% ↑
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary">$42.50</div>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span>from 1,284 sessions</span>
          </div>
          <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-secondary">
            <div className="w-[65%] bg-primary" />
            <div className="w-[35%] bg-primary/30" />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            65% of your Claude Pro subscription covered
          </p>
        </CardContent>
      </Card>

      {/* Privacy card */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-primary/5">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-8 w-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <CardTitle className="text-center mt-3">Privacy-First</CardTitle>
          <CardDescription className="font-normal text-primary">
            Open-source & auditable
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-4">
          <p className="text-sm text-muted-foreground">
            All PII is stripped locally before anything leaves your machine.
            Inspect the code yourself.
          </p>
        </CardContent>
      </Card>

      {/* Supported tools */}
      <Card className="absolute top-[160px] left-[20px] w-72 drop-shadow-xl shadow-primary/5">
        <CardHeader>
          <CardTitle className="text-base">Supported Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: "Claude", color: "bg-orange-500" },
            { name: "Cursor", color: "bg-blue-500" },
            { name: "Codex", color: "bg-green-500" },
          ].map((tool) => (
            <div key={tool.name} className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${tool.color}`} />
              <span className="text-sm font-medium">{tool.name}</span>
              <span className="ml-auto text-xs text-green-600">● Active</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Payout card */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-primary/5">
        <CardHeader className="flex flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/10 p-3 rounded-2xl">
            <WalletIcon />
          </div>
          <div>
            <CardTitle>Auto-payouts via Stripe</CardTitle>
            <CardDescription className="text-sm mt-1">
              Get paid monthly directly to your bank account. No crypto, no
              hassle.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
