import arrow__right from '../../assets/img/nav/arrow__right.png';
import logo from "../../assets/img/header/logo.png";
import cross from "../../assets/img/header/cross.png";
import './styles.css';

export const NavigationComp = ({active, setActive}) => {

    return (
        <>
            <div className={`header__main__wrap ${active ? '' : 'hide' }`}>
                <div className={`header__main`}>
                    <header className={'header__container'}>
                        <div className={'header__wrapper'}>
                            <div className={'header__logo'}>
                                <img src={logo} alt={'logo'} className={'header__logo-thumb'}/>
                            </div>
                            <div className={'header__close'} onClick={() => setActive(!active)}>
                                <img src={cross} alt={'close'} className={'header__logo-close'} />
                            </div>
                        </div>
                    </header>
                    <nav className={'nav__container'}>
                        <div className={'nav__wrapper'}>
                            <ul className={'nav__list'}>
                                <li className={'nav__list__item'} onClick={() => setActive(!active)}>
                                    <p className={'nav__list__item-text'}>Go to product page</p>
                                    <img src={arrow__right} alt={'open'} className={'nav__list__item-thumb'}/>
                                </li>
                                <li className={'nav__list__item'}>
                                    <a href={'#!'} className={'nav__list__item-text'}>Track your order</a>
                                    <img src={arrow__right} alt={'open'} className={'nav__list__item-thumb'}/>
                                </li>
                                <li className={'nav__list__item'}>
                                    <a href={'#!'} className={'nav__list__item-text'}>Contact us</a>
                                    <img src={arrow__right} alt={'open'} className={'nav__list__item-thumb'}/>
                                </li>
                                <li className={'nav__list__item'}>
                                    <a href={'#!'} className={'nav__list__item-text'}>FAQs</a>
                                    <img src={arrow__right} alt={'open'} className={'nav__list__item-thumb'}/>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}