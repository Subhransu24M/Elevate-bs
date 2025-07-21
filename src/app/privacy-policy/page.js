import FooterNew from '../components/Footer/FooterNew';
import NewNavbar from '../components/NavBar/NewNavbar';
import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import PrivacyPolicy from './PrivacyPolicy';

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/about-dubai.jpg";
    return (
        <>
        <div className='fullwrapper'>
            <NewNavbar/>
            <BreadCrumb page="Privacy Policy" backgroundImage={breadcrumbBackground} />
            <PrivacyPolicy/>
            <FooterNew/>
        </div>
        
        </>
    )
}
export default page