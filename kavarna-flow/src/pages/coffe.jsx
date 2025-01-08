import Paths from '../components/paths.jsx'
import PricesCoffe from "../components/pricescoffe.jsx"

const Coffe = () => {
    return (
      <div>
        <PricesCoffe coffe="ESPRESSO" price="1.80"/>
        <PricesCoffe coffe="DVOJNI ESPRESSO" price="3.00"/>
        <PricesCoffe coffe="MACCHIATO" price="1.90"/>
        <PricesCoffe coffe="KAVA Z MLEKOM" price="2.00"/>
        <PricesCoffe coffe="CAPPUCCINO" price="2.10"/>
        <PricesCoffe coffe="MOCHACCINO (KAVA" price="1.90"/>
        <PricesCoffe coffe=" S ČOKOLADO)"/>
        <PricesCoffe coffe="KAVA S SMETANO" price="2.20"/>
        <PricesCoffe coffe="BELA KAVA" price="2.40"/>
        <PricesCoffe coffe="LATTE MACCHIATO" price="2.40"/>
        <PricesCoffe coffe="KAVA Z OKUSOM" price="3.00"/>
        <PricesCoffe coffe="(VANILIJA, LEŠNIK, KOKOS)"/>
        <PricesCoffe coffe="PUMPKIN SPACE LATTE" price="3.00"/>
        <PricesCoffe coffe="CORTADO" price="1.90"/>
        <PricesCoffe coffe="LEDENA KAVA (ČEZ LED)" price="2.80"/>
        <Paths />
      </div>
      
    )
}



export default Coffe