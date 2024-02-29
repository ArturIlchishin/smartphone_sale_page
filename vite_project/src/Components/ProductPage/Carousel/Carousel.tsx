import {useEffect, useState} from "react";
import {Slide} from "./Slide";
import '../styles.css'
import slides from './slides.json'

export const Carousel = ({active, setActive}) => {
    const [slide, setSlide] = useState<number>(0);


    const nextSlide = () => {
        if (slide === slides.length-1) {
            setSlide(0)
        } else {
            setSlide(state => state+1)
        }
    }

    useEffect(() => {
        const id = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => {
            clearInterval(id)
        }
    }, [slide])

    return (
        <>
            <Slide index={slide} active={active} setActive={setActive}/>
            <div className={'carousel__buttons__container'}>
                <div className={'carousel__buttons__items'}>
                    {slides.map((item, index) => (
                        <button key={item.id} onClick={() => setSlide(index)} className={'carousel__button'} />
                    ))}
                </div>
            </div>
        </>
    )
}
