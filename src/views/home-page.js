// import { NavigationBar } from "../widgets/header/header";
// import { LandingContainer } from "../widgets/container-landing/container-landing";
import { ChannelsContainer } from "../widgets/container-channels/container-channels";
// import { StoreContainer } from "../widgets/container-store/container-store";
// import { BenefitsContainer } from "../widgets/container-benefits/container-benefits";
import { Footer } from "../widgets/footer/footer";
// import { Helmet } from "react-helmet";

export const HomePage = () => {
  return (
    <div className="home-page">
      <ChannelsContainer></ChannelsContainer>

      <Footer></Footer>
    </div>
  );
};
