import { Card } from "../ui/card";
import * as motion from "motion/react-client";

export default function StatsCard() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="lg:col-span-2 order-7"
    >
      <Card className="h-full">
        <div className="flex items-center justify-evenly text-center h-full">
          <div className="space-y-4">
            <p className="text-4xl font-bold text-accent-foreground">03</p>
            <p className="text-sm text-muted-foreground">
              YEARS <br /> EXPERIENCE
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-4xl font-bold text-accent-foreground">20+</p>
            <p className="text-sm text-muted-foreground">
              COMPLETED <br />
              PROJECTS
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
