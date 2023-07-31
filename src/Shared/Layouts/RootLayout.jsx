import Navbar from "../Components/Navbar";
import Medias from "../Components/Medias";
import './rootLayout-style.css';

const RootLayout = ({ children }) => {
    return (
        <div className="root-layout ">
            <div className="portfolio-body container">
                <div className="layout-children">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default RootLayout;