import Title from "../components/title.jsx";
import Drinks from "../components/drinks.jsx";
import { coctails } from "../components/coctails.js";
import { spirits } from "../components/spirits.js";
import { alcoholicDrinks } from "../components/alcoholicDrinks.js";
import { nonAlcoholicDrinks } from "../components/nonAlcoholicDrinks.js";
import { warmDrinks } from "../components/warmDrinks.js";
import { coffee } from "../components/coffee.js";
import { useState } from "react";
import ReactPaginate from "react-paginate";


const Menu = () => {
 return (
    <div className="price-list">
      <Title title="KAVNI NAPITKI" />
      <Drinks drink={coffee[0]} price="1.80 €" />
      <Drinks drink={coffee[1]} price="3.00 €" />
      <Drinks drink={coffee[2]} price="1.90 €" />
      <Drinks drink={coffee[3]} price="2.00 €" />
      <Drinks drink={coffee[4]} price="2.10 €" />
      <Drinks drink={coffee[5]} price="1.90 €" />
      <Drinks drink={coffee[6]} price="2.20 €" />
      <Drinks drink={coffee[7]} price="2.40 €" />
      <Drinks drink={coffee[8]} price="2.40 €" />
      <Drinks drink={coffee[9]} price="3.00 €" />
      <Drinks misc={coffee[10]} />
      <Drinks drink={coffee[11]} price="1.90 €" />
      <Drinks drink={coffee[12]} price="2.80 €" />
      <Drinks drink={coffee[13]} price="3.20 €" />
      <Drinks drink={coffee[14]} price="1.50 €" />
      <Drinks misc={coffee[15]} />
      <Drinks drink={coffee[16]} price="3.50 €" />
      <Drinks drink={coffee[17]} price="3.50 €" />
      <Title sup="DODATKI"/>
      <Drinks drink="BREZKOFEINKSA KAVA" price="+0.50 €"/>
      <Drinks drink="RASTLINSKI NAPITEK 0,10L" price="+0.40 €"/>
      <Title title="TOPLI NAPITKI"/>
      <Drinks drink={warmDrinks[0]} price="3.00 €" />
      <Drinks misc={warmDrinks[1]} />
      <Drinks misc={warmDrinks[2]} />
      <Drinks misc={warmDrinks[3]} />
      <Drinks misc={warmDrinks[4]} />
      <Drinks drink={warmDrinks[5]} price="2.00 €" />
      <Drinks drink={warmDrinks[6]} price="2.40 €" />
      <Drinks drink={warmDrinks[7]} price="2.90 €" />
      <Drinks drink={warmDrinks[8]} price="3.30 €" />
      <Drinks drink={warmDrinks[9]} price="3.50 €" />
      <Drinks misc={warmDrinks[10]} />
      <Title sup="DODATKI" />
      <Drinks drink="SMETANA, MLEKO 0,1L" price="+0.50 €"/>
      <Drinks drink="MED" price="+0.70 €"/>
      <Drinks drink="LIMONA" price="+0.50 €"/>
      <Title title="BREZALKOHOLNE PIJAČE"/>
      <Drinks drink={nonAlcoholicDrinks[0]} price="3.00 €" />
      <Drinks drink={nonAlcoholicDrinks[1]} price="3.50 €" />
      <Drinks misc={nonAlcoholicDrinks[2]} />
      <Drinks drink={nonAlcoholicDrinks[3]} price="2.50 €" />
      <Drinks drink={nonAlcoholicDrinks[4]} price="3.00 €" />
      <Drinks drink={nonAlcoholicDrinks[5]} price="3.00 €" />
      <Drinks drink={nonAlcoholicDrinks[6]} price="3.00 €" />
      <Drinks drink={nonAlcoholicDrinks[7]} price="3.00 €" />
      <Drinks drink={nonAlcoholicDrinks[8]} price="3.00 €" />
      <Drinks drink={nonAlcoholicDrinks[9]} price="1.90 €" />
      <Drinks drink={nonAlcoholicDrinks[10]} price="2.00 €" />
      <Drinks drink={nonAlcoholicDrinks[11]} price="2.20 €" />
      <Drinks drink={nonAlcoholicDrinks[12]} price="0.50 €" />
      <Drinks drink={nonAlcoholicDrinks[13]} price="1.40 €" />
      <Drinks drink={nonAlcoholicDrinks[14]} price="3.00 €" />
      <Drinks drink={nonAlcoholicDrinks[15]} price="3.00 €" />
      <Title title="ALKOHOLNE PIJAČE"/>
      <Title sup="PIVO"/>
      <Drinks drink={alcoholicDrinks[0]} price="2.70 €" />
      <Drinks drink={alcoholicDrinks[1]} price="3.00 €" />
      <Drinks drink={alcoholicDrinks[2]} price="3.00 €" />
      <Drinks drink={alcoholicDrinks[3]} price="3.00 €" />
      <Title sup="VINO IN PENEČA VINA"/>
      <Drinks drink={alcoholicDrinks[4]} price="1.50 €" />
      <Drinks drink={alcoholicDrinks[5]} price="1.80 €" />
      <Drinks drink={alcoholicDrinks[6]} price="4.00 €" />
      <Drinks drink={alcoholicDrinks[7]} price="5.00 €" />
      <Title sup="TOPLI ALKOHOLNI NAPITKI"/>
      <Drinks drink={alcoholicDrinks[8]} price="2.50 €" />
      <Drinks drink={alcoholicDrinks[9]} price="5.50 €" />
      <Drinks misc={alcoholicDrinks[10]} />
      <Drinks drink={alcoholicDrinks[11]} price="5.50 €" />
      <Drinks misc={alcoholicDrinks[12]} />
      <Title sup="ŽGANE PIJAČE"/>
      <Drinks drink={spirits[0]} price="3.50 €" />
      <Drinks drink={spirits[1]} price="4.50 €" />
      <Drinks drink={spirits[2]} price="3.50 €" />
      <Drinks drink={spirits[3]} price="3.50 €" />
      <Drinks drink={spirits[4]} price="3.00 €" />
      <Drinks drink={spirits[5]} price="3.50 €" />
      <Drinks drink={spirits[6]} price="8.00 €" />
      <Drinks drink={spirits[7]} price="3.00 €" />
      <Drinks drink={spirits[8]} price="3.00 €" />
      <Drinks drink={spirits[9]} price="4.00 €" />
      <Drinks drink={spirits[10]} price="3.50 €" />
      <Drinks drink={spirits[11]} price="3.50 €" />
      <Drinks drink={spirits[12]} price="6.50 €" />
      <Drinks drink={spirits[13]} price="3.50 €" />
      <Drinks drink={spirits[14]} price="3.00 €" />
      <Drinks drink={spirits[15]} price="3.00 €" />
      <Drinks drink={spirits[16]} price="3.00 €" />
      <Title sup="KOKTEJLI"/>
      <Drinks drink={coctails[0]} price="6.00 €" />
      <Drinks misc={coctails[1]} />
      <Drinks drink={coctails[2]} price="6.00 €" />
      <Drinks misc={coctails[3]} />
      <Drinks drink={coctails[4]} price="6.00 €" />
      <Drinks misc={coctails[5]} />
      <Drinks drink={coctails[6]} price="6.00 €" />
      <Drinks misc={coctails[7]} />
      <Drinks drink={coctails[8]} price="6.00 €" />
      <Drinks misc={coctails[9]} />
      <Drinks drink={coctails[10]} price="6.00 €" />
      <Drinks misc={coctails[11]} />
      <Drinks drink={coctails[12]} price="6.00 €" />
      <Drinks misc={coctails[13]} />
      <Drinks drink={coctails[14]} price="6.00 €" />
      <Drinks misc={coctails[15]} />
      <Drinks drink={coctails[16]} price="6.00 €" />
      <Drinks misc={coctails[17]} />
    </div>
  )
};

export default Menu;
