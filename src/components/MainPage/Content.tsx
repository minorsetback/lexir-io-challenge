import Baldoria from "../../assets/baldoria-logo.svg"
import Location from "../../assets/location.svg"
import Box from "../../assets/box.svg"
import Card from "../elements/Card"
import Bottle1 from '../../assets/umami.svg'
import Bottle2 from '../../assets/silent-pool.svg'
import Bottle3 from '../../assets/mr-gaston-brandy.svg'
import Bottle4 from '../../assets/mr-gaston-brandy2.svg'

const Content = () => {
    const img = [Bottle1, Bottle2, Bottle3, Bottle4, Bottle1, Bottle2, Bottle3, Bottle4, Bottle1, Bottle2, Bottle3, Bottle4, Bottle1, Bottle2, Bottle3, Bottle4, Bottle1, Bottle2, Bottle3, Bottle4]
    return (
        <section className="grid grid-cols-6 gap-5 w-wrapper mx-auto mt-10">
            <section className="col-span-2 border p-5 h-baldoria ml-12">
                <img className="mx-auto" src={Baldoria.src} />
                <p className="font-serif text-[38px] font-black text-center mt-16 mb-5">Baldoria Vermouth</p>
                <p className="text-base font-normal w-[307px] text-[#2D2D2D]">Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents.</p>
                <p className="text-center font-bold text-[#1C8C64] mt-8 mb-16 cursor-pointer">Read More</p>
                <section className="flex items-start mb-10">
                    <img className="mr-5 mt-1" src={Location.src} />
                    <section>
                        <p className="m-0 font-normal">Location</p>
                        <p className="text-2xl text-[#595959]">London, United Kingdom</p>
                    </section>
                </section>
                <section className="flex items-start">
                    <img className="mr-5 mt-1" src={Box.src} />
                    <section>
                        <p className="m-0 font-normal mb-2">Product Categories</p>
                        <span className="p-1 pr-5 pl-5 bg-[#F9F9F9] mr-2">Gin</span>
                        <span className="p-1 pr-5 pl-5 bg-[#F9F9F9]">Vodka</span>
                    </section>
                </section>
            </section>
            <section className="col-span-4">
                <section className="grid grid-cols-4">
                    {img.map((item, index) => {
                        return (
                            <Card key={index} img={item} />
                        )
                    })}
                </section>
            </section>
        </section >
    )
}
export default Content