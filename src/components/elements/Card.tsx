import Add from "../../assets/add-to-cart.svg"

const Card = ({ img }: any) => {
    return (
        <section className="w-44 rounded overflow-hidden shadow-lg mb-10">
            <img className="w-full" src={img?.src} alt="Mountain" />
            <section className="px-3 py-3">
                <section className="text-normal mb-2">
                    <section>
                        <span className="font-medium text">
                            MR GASTON
                        </span>
                        <span className="float-right font-medium text-[#6B6B6B]">
                            €32
                        </span>
                    </section>
                    <section>
                        <span className="font-medium text-[#6B6B6B]">
                            BRANDY
                        </span>
                        <img className="float-right mt-1 cursor-pointer" src={Add.src} />
                    </section>
                </section>
            </section>
        </section>

    )
}
export default Card