import { privacyPolicyContent } from "@/components/footer/privacy-policy/privacy-policy";

const PrivacyPolicyPage = () => {
  return (
    <main className="flex flex-col items-start justify-center -mt-6 mb-12 px-4 md:px-36">
      <h1 className="text-3xl md:text-4xl font-semibold text-neutral-800 mb-4 md:mb-6 w-full text-center md:max-w-screen-2xl mx-auto">
        Privacy Policy
      </h1>
      {privacyPolicyContent.map((item) => {
        return (
          <div
            className="my-3 text-neutral-700 font-normal text-lg"
            key={item.id}
          >
            <p className="">{item.description}</p>
          </div>
        );
      })}
    </main>
  );
};

export default PrivacyPolicyPage;
