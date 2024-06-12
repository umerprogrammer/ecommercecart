import ECHeader from "../components/ECHeader";
import ProductCart from "../components/productcart";
import MainBanner2 from "../images/main-banner2.jpg";

const Home = () => {

    return <>
        {/* Main Banner  */}

        {/* <div className="container-fluid g-0 main-menu d-flex justify-content-end align-items-center w-100 ">
                <h1 className="text-white fw-bold fs-21 "  style={{ marginRight: "-60px", marginTop: "80px" }}>Up To</h1>
                <h1 className="text-white fw-bold fs-60" style={{ marginRight: "100px", marginTop: "150px" }}>70% Off</h1>
        </div> */}

        <div className="container-fluid main-menu">
            <div className="row h-100 border-bottom ">
                <div className="col-md-6 d-flex justify-content-center mt-5">
                    <div className=" w-50 main-menu-text " >
                        <span className="fw-bold fs-60 " style={{fontSize:"100px"}}>Online</span>
                        <span className="fw-bold fs-25 ">Shoping</span>
                        <span className="fw-bold fs-21  d-block ">Up To</span>
                        <span className=" fw-bold fs-60" style={{fontSize:"100px",lineHeight:"70px"}}>70% Off</span>
                        <div className="text-center">
                            
                        <button type="button" className="btn btn-sm  w-50 mt-5 btn-shop">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center ">
                    <img src={MainBanner2} alt="" className="shadow main-menu-img rounded-pill" style={{ width: "450px", height: "450px" }} />
                </div>
            </div>

        </div>
        {/* <ProductCart/> */}
    </>;

}

export default Home;