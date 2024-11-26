import JafzaForm from "./JafzaForm"
import WhyChosejafza from "./WhyChosejafza"

const JafzaCnt = () => {
    return (
        <>
            <div className="jafza-cnt-blk">
                <div className="container">
                    <div className="row">
                        <div className="jafza-fst-blk">
                            <h1>Establish Your Offshore Company in JAFZA</h1>
                            <p>Effortless JAFZA Offshore Company Formation</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="jafza-fst-blk-lft-cnt">
                                <p>Unlock the potential of global markets with JAFZA Offshore Company Formation(Jebel Ali Free Zone Authority),Known for its efficient processes and strategic advantages, JAFZA offers a premier location for businesses seeking to expand internationally. </p>
                                <p>With competitive costs and a streamlined setup process, JAFZA offshore company formation is not just a choice but a strategic move for companies aiming to succeed in today’s global economy.</p>
                            </div>
                            <WhyChosejafza/>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="jafza-img-blk">
                                <img src="/images/jafza/jafza.jpg" alt="jafza company formation uae" loading="lazy" fetchPriority="high" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="jafza-option-benef-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12">
                            <div className="jafza-option-cntblk">
                                <h2>Options for JAFZA offshore company formation</h2>
                                <p>Depending on your business goals, you can choose from various offshore incorporation options:</p>
                                <div className="jafza-option-blk">
                                    <div className="option-blk">
                                        <img src="/logo/rak-icc-logo.png" alt="RAK ICC"/>
                                    </div>
                                    <div className="option-blk">
                                    <img src="/logo/jafza-logo.png" alt="JAFZA"/>
                                    </div>
                                    <div className="option-blk">
                                    <img src="/logo/AJMAN.png" alt="Ajman Free Zone"/>
                                    </div>
                                </div>
                                <p>JAFZA stands out as a key business hub, drawing investments across multiple sectors such as logistics, technology, automotive, and more. It represents a significant portion of Dubai’s foreign investments, making it an attractive choice for diverse industries.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <JafzaForm/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="key-benf-blk">
                <div className="container">
                    <h2>Key Benefits of Company Formation in JAFZA offshore</h2>
                    <div className="key-benf-btn-blk">
                        <a href="#" className="key-benfbtn">Check Benefits</a>
                    </div>
                </div>
            </div>



        </>
    )
}
export default JafzaCnt