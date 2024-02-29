import phones from '../../assets/img/product/phones.png';
import './styles.css'

export const Introducing = ({active}) => {
    return (
        <section className={`intro__container ${active ? 'hidden' : ''}`}>
            <div className={'intro__wrapper'}>
                <div className={'intro__text'}>
                    <h2 className={'intro__text-title'}>Introducing the New</h2>
                    <p className={'intro__text-desc'}>Tiny Phone 4G</p>
                </div>
                <div className={'intro__img'}>
                    <img src={phones} alt={'phones'} className={'intro__img-pic'}/>
                </div>
            </div>
        </section>
    )
}