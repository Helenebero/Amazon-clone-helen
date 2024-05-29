    import React from "react";
    import classes from "./Footer.module.css";
    import FooterBottom from "./FooterBottom";
    import { CiGlobe } from "react-icons/ci";
    import { RiArrowDropDownFill } from "react-icons/ri";

    function Footer() {
    return (
        <section className={classes.footer}>
        <div className={classes.top_footer_wrapper}>
            <div className={classes.inner_footer}>
            <div className={classes.inner_footer_links}>
                <div className={classes.inner_footer_link_div}>
                <h4>Get to Know Us</h4>
                <a href="">Carrers</a>
                <a href="">Amazon Newsletter</a>
                <a href="">About Amazon</a>
                <a href="">Accessibility</a>
                <a href="">Sustainability</a>
                <a href="">Press Center</a>
                <a href="">Investor Relations</a>
                <a href="">Amazon Devices</a>
                <a href="">Amazon Science</a>
                </div>
                <div className={classes.inner_footer_link_div}>
                <h4>Make Money with Us</h4>
                <a href="">Sell on Amazon</a>
                <a href="">Sell apps on Amazon</a>
                <a href="">Supply to Amazon</a>
                <a href="">Protect & Build Your Brand</a>
                <a href="">Become an Affiliate</a>
                <a href="">Become a Delivery Driver</a>
                <a href="">Start a Package Delivery Business</a>
                <a href="">Advertise Your Products</a>
                <a href="">Self-Publish with Us</a>
                <a href="">Become an Amazon Hub Partner</a>
                <a href="">›See More Ways to Make Money</a>
                </div>
                <div className={classes.inner_footer_link_div}>
                <h4>Amazon Payment Products</h4>
                <a href="">Amazon Visa</a>
                <a href="">Amazon Store Card</a>
                <a href="">Amazon Secured Card</a>
                <a href="">Amazon Business Card</a>
                <a href="">Shop with Points</a>
                <a href="">Credit Card Marketplace</a>
                <a href="">Reload Your Balance</a>
                <a href="">Gift Cards</a>
                <a href="">Amazon Currency Converter</a>
                </div>
                <div className={classes.inner_footer_link_div}>
                <h4>Let Us Help You</h4>
                <a href="">Your Account</a>
                <a href="">Your Orders</a>
                <a href="">Shipping Rates & Policies</a>
                <a href="">Amazon Prime</a>
                <a href="">Returns & Replacements</a>
                <a href="">Manage Your Content and Devices</a>
                <a href="">Recalls and Product Safety Alerts</a>
                <a href="">Help</a>
                </div>
            </div>
            </div>
            <hr className={classes.footer_liner} />
            <div className={classes.footer_middle_logo}>
            <div>
                <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt=""
                />
            </div>

            <div className={classes.language_Selector}>
                <button className={classes.lauangue}>
                <CiGlobe className={classes.global} size={40} /> English
                <RiArrowDropDownFill />{" "}
                </button>
                <input
                className={classes.country_of_lanuauge}
                type="text"
                placeholder="USA"
                />
                {" "}
            </div>
            </div>
        </div>

        <FooterBottom />
        </section>
    );
    }

    export default Footer;
