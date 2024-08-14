import Image from "next/image";
import spcpkgimg1 from './images/spc-package-1.jpeg';
import spcpkgimg2 from './images/spc-package-2.jpeg';
import SpcpricetableCnt from "./SpcpricetableCnt";

const SpcCnt = () => {
  return (
    <>
    <div className="spc-main-blk">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="spc-pkgimg-blk">
                        <Image className="spcpkgimg" src={spcpkgimg1} alt="spc freezone " />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="spc-pkgimg-blk">
                <Image className="spcpkgimg" src={spcpkgimg2} alt="spc freezone " />
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className="spc-prctabletlt-blk">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12">
                <SpcpricetableCnt/>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default SpcCnt