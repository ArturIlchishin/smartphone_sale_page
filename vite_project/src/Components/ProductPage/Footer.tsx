import logo from '../../assets/img/product/logo.png'
import {useState} from "react";
import './styles.css'

interface IFooter {
    activated: boolean
}

export const Footer = ({activated}: IFooter) => {

    const [active, setActive] = useState<boolean>(false)

    return (
        <>
            <footer className={`footer__container ${activated ? 'hidden' : ''}`}>
                <div className={'footer__logo'}>
                    <img src={logo} alt={'smartphone'} className={'footer__logo-img'} />
                </div>
                <div className={'footer__links'}>
                    <a href={'#!'} className={'footer__link'}>Privacy Notice</a>
                    <br />
                    <a href={'#!'} className={'footer__link'}>Terms and conditions</a>
                    <br />
                    <a href={'#!'} className={'footer__link'}>Cookies</a>
                    <br />
                </div>
                <div className={`footer__desc ${ active ? 'show': ''}`}>
                    <p className={'footer__desc-text'}>*Information is not a public offer
                        This site is not part of the Facebook or Facebook Inc. website. Also, this site is not endorsed by Facebook in any way FACEBOOK is a trademark of FACEBOOK, Inc. Facebook provides a platform for serving advertising, but the opinions and/or views expressed on this website are not representative of Facebook, Inc. Opinions and/or views expressed on our website's social media platforms, including but not limited to our blogs and Facebook pages, represent the thoughts of individual bloggers and online communities, and not necessarily those of our website or any of its business partners, affiliates or any of their respective officers, employees, staff or board members. The views and opinions expressed on these pages do not in any way reflect the opinions of the site on which they are published, other sites affiliated with the site, the personnel involved in the maintenance of the site or any member of the site. Any opinions or views expressed on this website's social media platforms are not representative of Facebook, Inc. Although our website makes reasonable efforts to monitor and/or moderate content posted on its social media platforms, we do not moderate all comments and cannot always respond to online inquiries in a timely manner. All new customers are entered into the raffle for the displayed campaign product. If you are the lucky winner, you will be contacted directly by email. This special offer includes a three-day trial to an affiliated service, after which the subscription fee will be thirty-three euros every fourteen days - automatically deducted from your credit card. If for any reason you are not satisfied with the service, you can cancel your account within three days. The service will renew every thirty days until cancelled. This campaign will expire on December 31 of this year. If you would like to participate without signing up for a three-day trial at Toolsandtoys, please email.</p>
                </div>
                <div className={'footer__button'}>
                    <button className={'footer__button-push'}
                            onClick={() => setActive(!active)}
                    >{`${ active ? 'Read less' : 'More info'}`}</button>
                </div>
                <div className={'footer__copyright'}>
                    <p className={'footer__copyright-text'}>© 2023 WhaleCo Inc.</p>
                </div>
            </footer>
        </>
    )
}