import { connectDB } from "@/config/db";
import { env } from "@/config/env";
import { app } from "@/app";

const bootstrap = async (): Promise<void> => {
  await connectDB();
  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Backend running on port ${env.PORT}`);
  });
};

void bootstrap();
