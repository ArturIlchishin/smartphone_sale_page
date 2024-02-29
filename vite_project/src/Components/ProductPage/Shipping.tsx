import arrow from '../../assets/img/product/arrow_up.png';
import DHL from '../../assets/img/product/DHL.png';
import DPD from '../../assets/img/product/DPD.png';
import FedEx from '../../assets/img/product/FedEx.png';
import UPS from '../../assets/img/product/UPS.png';
import {useState} from "react";
import './styles.css';

export const Shipping = ({active}) => {

    const [deliveryActive, setDeliveryActive] = useState<boolean>(false);
    const [warrantyActive, setWarrantyActive] = useState<boolean>(false);
    const [moneyActive, setMoneyActive] = useState<boolean>(false);

    return (
        <section className={`shipping__container ${active ? 'hidden' : ''}`}>
            <div className={'shipping__wrapper'}>
                <div className={'shipping__title'}>
                    <h2 className={'shipping__title-text'}>Shipping & Returns</h2>
                </div>
                <div className={'shipping__delivery'} onClick={() => setDeliveryActive(!deliveryActive)}>
                    <div className={'shipping__delivery__title'}>
                        <p className={'shipping__delivery__title-text'}>Free delivery in United Kingdom</p>
                        <img src={arrow} alt={'expand'} className={`shipping_delivery__title-img ${deliveryActive? 'rotate': ''}`} />
                    </div>
                    <div className={`${ deliveryActive ? 'show' : 'hide'}`}>
                        <div className={'shipping__delivery__logos'}>
                            <img src={DHL} alt={'DHL'} className={'shipping__delivery__logos-img'}/>
                            <img src={DPD} alt={'DPD'} className={'shipping__delivery__logos-img'}/>
                            <img src={FedEx} alt={'FedEx'} className={'shipping__delivery__logos-img'}/>
                            <img src={UPS} alt={'UPS'} className={'shipping__delivery__logos-img'}/>
                        </div>
                        <div className={'shipping__delivery__text'}>
                            <p className={'shipping__delivery__text-letters'}><i>All purchases are shipped from our warehouse in</i> <b>United Kingdom</b> <i>and are fully insured with a tracking number. Tracked delivery between 2-4 days in</i> <b>United Kingdom</b> <i> + Free Delivery</i>.</p>
                        </div>
                    </div>
                </div>
                <div className={'shipping__warranty'} onClick={() => setWarrantyActive(!warrantyActive)}>
                    <div className={'shipping__warranty__title'}>
                        <p className={'shipping__warranty__title-text'}>3 years warranty</p>
                        <img src={arrow} alt={'expand'} className={`shipping__warranty__title-img ${warrantyActive? 'rotate': ''}`} />
                    </div>
                    <div className={`shipping__warranty__text ${warrantyActive ? 'show' : 'hide'}`}>
                        <p className={'shipping__warranty__text-letters'}>Our product is guaranteed for 3 years from the date of your purchase.</p>
                        <p className={'shipping__warranty__text-letters'}>For more information, please contact our team.</p>
                    </div>
                </div>
                <div className={'shipping__money'} onClick={() => setMoneyActive(!moneyActive)}>
                    <div className={'shipping__money__title'}>
                        <p className={'shipping__money__title-text'}>100% money-back guarantee</p>
                        <img src={arrow} alt={'expand'} className={`shipping__money__title-img ${moneyActive? 'rotate': ''}`} />
                    </div>
                    <div className={`shipping__money__text ${moneyActive ? 'show' : 'hide'}`}>
                        <p className={'shipping__money__text-letters'}>If you're not satisfied with your purchase, we offer a 100% Money Back Guarantee.</p>
                        <p className={'shipping__money__text-letters'}>No Questions Asked.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}