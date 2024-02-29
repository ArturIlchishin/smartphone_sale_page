import {Carousel} from "./Carousel/Carousel";
import {Introducing} from "./Introducing";
import {Shipping} from "./Shipping";
import {Footer} from "./Footer";
import {useState} from "react";

export const Product = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    return (
        <div className={'section__wrapper'}>
            <section className={`product__container`}>
                <Carousel active={modalActive} setActive={setModalActive}/>
                <Introducing active={modalActive}/>
                <Shipping active={modalActive}/>
                <Footer activated={modalActive}/>
            </section>
        </div>

)
}