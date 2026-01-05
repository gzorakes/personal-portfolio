import { Card, CardContent } from "../ui/card";
import { ArrowRight, FingerprintPattern } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function CredentialsCard() {
  return (
    <Card className="order-2">
      <div className="h-44 flex items-center justify-center">
        <FingerprintPattern
          size={120}
          className="text-accent-foreground"
          strokeWidth={0.8}
        />
      </div>
      <CardContent className="mt-auto">
        <div className="flex items-center justify-between my-auto">
          <h2 className="text-2xl text-muted-foreground font-semibold">
            Credentials
          </h2>
          <Link
            href="/credentials"
            aria-label="View credentials page"
            className={buttonVariants()}
          >
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
