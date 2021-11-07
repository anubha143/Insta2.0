import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
// Browser...
const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <img
          className="w-80 mt-20"
          src="https://links.papareact.com/ocw"
          alt="image"
        />
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 text-white rounded-lg"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
// Server Side Render...
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
