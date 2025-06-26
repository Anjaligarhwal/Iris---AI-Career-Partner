import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function RedirectPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  } else {
    redirect("/onboarding");
  }
}
