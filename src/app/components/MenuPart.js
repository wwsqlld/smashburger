import Image from "next/image";

export default function MenuPart() {
    return (
        <div className="menu-part">
            <div className="menu-text-container">
                <div className="menu-text-text">
                    <p>Menü</p>
                </div>
                <div className="menu-text-image">
                    <Image alt="thommys"
                    src='/res-ob1.png'
                    width={171}
                    priority
                    height={143}
                    className="menu-text-image-img"
                    draggable="false"
                    quality={100}
                    unoptimized
                />
                </div>  
            </div>

            <div className="burger-container">
                <div className="burger-text-container">
                    <div className="burger-text-image">
                        <Image alt="thommys"
                        src='/res-ob6.png'
                        width={87}
                        priority
                        height={144}
                        draggable="false"
                        quality={100}
                        unoptimized
                    />
                    </div>
                    <div className="burger-text-text">
                        <p className="other-menu-txt-p-big">Burger</p>
                    </div>
                </div>
                <div className="burger-menu-container">
                    <div className="burger-menu-sm1">
                        <div className="burger-menu-sm1-1">
                            <p className="burger-menu-txt-p-g">Cheeseburger</p>
                            <p className="burger-menu-txt-p">8,50</p>
                        </div>
                        <div className="burger-menu-sm1-2">
                            <p className="burger-menu-txt-p" >Brioche-Potato-Bun, smashed Beef Patties, American Cheese, Burger Sauce, Salat, Tomaten, Zwiebeln, Gurken</p>
                        </div>
                    </div>
                    <div className="burger-menu-sm2">
                        <div className="burger-menu-sm2-1">
                            <p className="burger-menu-txt-p-g">Off-White BBQ Burger</p>
                            <p className="burger-menu-txt-p">9,50</p>
                        </div>
                        <div className="burger-menu-sm2-2">
                            <p className="burger-menu-txt-p">Brioche-Potato-Bun, smashed Beef Patties, American Cheese, Off-White BBQ Sauce, Onion Jam, Salat, Tomaten, Gurken</p>
                        </div>
                    </div>
                    <div className="burger-menu-sm3">
                        <div className="burger-menu-sm3-1">
                            <p className="burger-menu-txt-p-g">Dark BBQ Burger</p>
                            <p className="burger-menu-txt-p">8,50</p>
                        </div>
                        <div className="burger-menu-sm3-2">
                            <p className="burger-menu-txt-p">Brioche-Potato-Bun, smashed Beef Patties, American Cheese, Dark BBQ Sauce, Onion Jam, Salat, Tomaten, Gurken</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="vegan-text-container">
                <div className="vegan-text-cont-sm">
                    <div className="vegan-text-text">
                    <p className="other-menu-txt-p-big">Veggie & Vegan Burger</p>
                    <p className="burger-menu-txt-p">+1,50</p>
                    </div>
                    <div className="vegan-text-image">
                        <Image alt="thommys"
                            src='/res-ob2.png'
                            width={87}
                            priority
                            height={102}
                            draggable="false"
                            quality={100}
                            unoptimized
                        />
                    </div>
                </div>
                <div className="vegan-text-container-text">
                    <p className="burger-menu-txt-p">
                    Alle Burger gibt es auch in einer vegetarischen oder veganen Variante. Burgerbrötchen, Patties und Saucen stellen wir natürlich auch für alle fleisch- und tierproduktfreien Genießer nach eigenen Rezepten selbst her.</p>
                </div>
            </div>

            <div className="other-menu-container">
                <div className="other-menu-container-image-1">
                <Image alt="thommys"
                    src='/res-ob5.png'
                    width={58}
                    priority
                    height={56}
                    draggable="false"
                    quality={100}
                    unoptimized
                />
                </div>

                <div className="other-menu-container-image-2">
                <Image alt="thommys"
                    src='/res-ob3.png'
                    width={421}
                    priority
                    height={143}
                    draggable="false"
                    quality={100}
                    unoptimized
                />
                </div>

                <div className="other-menu-main">
                <div>
                   <div className="other-menu-beilagen">
                        <div className="other-menu-beilagen-title">
                            <p className="other-menu-txt-p-big">Beilagen</p>
                        </div>
                        <div className="other-menu-beilagen-main">
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Fries</p>
                                <p className="burger-menu-txt-p">(den ersten Dip gibt es gratis)</p>
                                <p className="burger-menu-txt-p">4,50</p>
                            </div>
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Chili-Cheese Fries</p>
                                <p className="burger-menu-txt-p">6,90</p>
                            </div>
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Guacamole-Sour Creme Fries</p>
                                <p className="burger-menu-txt-p">7,90</p>
                            </div>
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Gurkensalat</p>
                                <p className="burger-menu-txt-p">3,90</p>
                            </div>
                        </div>
                    </div>

                    <div className="other-menu-dips">
                        <div className="other-menu-dips-title">
                                <p className="other-menu-txt-p-big">Dips</p>
                        </div>
                        <div className="other-menu-dips-main">
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Ketchup, Mayonnaise</p>
                                <p className="burger-menu-txt-p">1,00</p>
                            </div>
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Dark BBQ, Off-White BBQ</p>
                                <p className="burger-menu-txt-p">1,50</p>
                            </div>
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Chili-Mayonnaise</p>
                                <p className="burger-menu-txt-p">1,50</p>
                            </div>
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Charlie's Dip (Koriander-Limette)</p>
                                <p className="burger-menu-txt-p">2,00</p>
                            </div>
                        </div>  
                    </div>
                    
                    <div className="other-menu-sweet">
                        <div className="other-menu-sweet-title">
                                <p className="other-menu-txt-p-big">Sweet</p>
                        </div>
                        <div className="other-menu-sweet-main">
                            <div className="other-menu-main-2">
                                <p className="other-menu-txt-p-g">Bun & Butter-Pudding</p>
                                <p className="burger-menu-txt-p">4,90</p>
                            </div>
                        </div> 
                    </div> 
                </div>
                </div>
                
            </div>

        </div>
    );
}