import './navbarnew.css';
import Image from 'next/image';
import ebslogo from '../../../../public/logo/ebs-logo.png';
import Link from 'next/link';
import NavbarCanvas from './NavbarCanvas';
const NavbarNew = () => {
  return (
    <div className='navbarnew-blk'>
        <div className='container'>
            <div className='row'>
                <div className='navbarnew'>
                    <div className='navbar-logo'>
                    <Link className="navbar-brand" href="/"><Image src={ebslogo} width={120} height={120} priority={false} alt="logo"></Image></Link>
                    </div>
                    <div className='navbar-cta'></div>
                    <div className='navbar-menu'>
                        <NavbarCanvas/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarNew