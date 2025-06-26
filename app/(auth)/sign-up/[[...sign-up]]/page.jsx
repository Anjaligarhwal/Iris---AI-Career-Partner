import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return <SignUp forceRedirectUrl="/redirect" />;
};

export default Page;
