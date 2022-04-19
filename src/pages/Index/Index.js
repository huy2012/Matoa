import Banner from '../../Components/header/Banner/banner';
import Introduce from '../../Components/body/Introduce/Introduce';
import MonthlyDeals from '../../Components/body/MonthlyDeals/MonthlyDeals';
import RecentNews from '../../Components/body/RecentNews/RecentNews';
import Category from '../../Components/body/Category/Category';
import Testimonials from '../../Components/body/Testimonials/Testimonials';
import Instagram from '../../Components/Instagram/Instagram';
import PaymentSupport from '../../Components/body/PaymentSupport/PaymentSupport';
import Footer from '../../Components/body/footer/Footer';

const Index = () => {
    return (
        <>
            <Banner />

            <Introduce />

            <MonthlyDeals />

            <RecentNews />

            <Category />

            <Testimonials />

            <Instagram />
        </>
    );
};

export default Index;