import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return <SignIn forceRedirectUrl="/redirect" />;
};

export default Page;
