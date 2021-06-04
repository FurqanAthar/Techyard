import React from 'react'
import {mobileContext} from '../mobileContext'
import {getAllTitles} from "../../utilityFunctions/utils";

export const mobileComparisonContext = React.createContext();

export default function MobileComparisonProvider({children}) {
    const {mobileData} = React.useContext(mobileContext)
    const [comparisonProducts, setComparisonProducts] = React.useState([]);
    const [productTitles, setProductTitles] = React.useState([]);
    const [product1ToCompare, setProduct1] = React.useState();
    const [product2ToCompare, setProduct2] = React.useState();
    
    React.useEffect(()=>{
        setComparisonProducts([...mobileData])
        setProductTitles([...getAllTitles(mobileData)])
    }, [mobileData])

    const handleSelection = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if(name === "cp1"){
            const p1 = [...comparisonProducts].filter(product1 => {
                return product1.model === value;
            })
            setProduct1(p1[0]);
        }
        else if(name === "cp2"){
            const p2 = [...comparisonProducts].filter(product2 => {
                return product2.model === value;
            })
            setProduct2(p2[0]);
        }
        return;
    }
    return (
        <mobileComparisonContext.Provider value={{comparisonProducts, productTitles, handleSelection, product1ToCompare, product2ToCompare}}>
            {children}
        </mobileComparisonContext.Provider>
    )
}
