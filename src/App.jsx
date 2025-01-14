import "./index.css";
import {
  Navbar,
  HeroSection,
  IonsInNumber,
  FindandJoinChallenge,
  WhyChooseCatalystion,
  HowItWorks,
  ComingSoonSection,
  SegmentsSection,
  JoinCommunitySection,
  Footer,
  Accordian,
  RegistrationForm,
  RegisterasCompany,
  RegisterasClient,
  AboutUS,
  TermsAndCondition,
  Client,
  OurServices,
} from "./modules";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <HeroSection />
          <IonsInNumber />
          <FindandJoinChallenge />
          <WhyChooseCatalystion />
          <HowItWorks />
          <ComingSoonSection />
          <SegmentsSection />
          <OurServices />
          <Accordian />
          <JoinCommunitySection />
          <Footer />
        </>
      ),
    },
    {
      path: "/ApplyasCatalyst",
      element: <RegistrationForm />,
    },
    {
      path: "/register-company",
      element: <RegisterasCompany />,
    },
    {
      path: "/register-client",
      element: <RegisterasClient />,
    },
    {
      path: "/aboutus",
      element: <AboutUS />,
    },
    {
      path: "/terms",
      element: <TermsAndCondition />,
    },
    {
      path: "/client",
      element: <Client />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
