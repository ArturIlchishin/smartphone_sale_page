import slides from "./slides.json";
import logo from "../../../assets/img/product/logo.png";
import menu from "../../../assets/img/product/menu.png";
import {NavigationComp} from "../../NavigationComp/NavigationComp";
import {RunningText} from "../RunningText";
import '../styles.css'

export const Slide = ({index, active, setActive}) => {

    return (
        <>
            <NavigationComp active={active} setActive={setActive}/>
            <RunningText />
            <div className={'product__head__container'} style={{background: slides[index].background}}>
                <div className={'product__head__logo'}  >
                    <img className={'product__head__logo-thumb'} src={logo} alt={'ProPhone'} />
                </div>
                <div className={'product__head__menu'} onClick={() => setActive(!active)} >
                    <img className={'product__head__menu-thumb'} src={menu} alt={'Menu'} />
                </div>
            </div>
            <div className={'tiny__container'} style={{background: slides[index].background}}>
                <h1 className={'tiny__container-header'}>Tiny Phone 4G</h1>
                <p className={'tiny__container-desc'}>Small Size, huge Impact</p>
            </div>
            <div className={'carousel__container'} style={{ backgroundImage: slides[index].background_image }}>
                {slides[index].title}
            </div>
        </>
    )
}