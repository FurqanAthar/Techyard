import React from 'react'
import Navbar from '../../components/navbar'
import {mobileComparisonContext} from "../../context/comparisonContexts/mobileComparisonContext";
import MobileCompareProducts from "../../components/comparisonComponents/mobileComparisonComponent";
import EmptySelection from '../../components/comparisonComponents/emptySelection'

export default function MobileComparison() {
    const {productTitles, comparisonProducts, handleSelection, product1ToCompare, product2ToCompare} = React.useContext(mobileComparisonContext);
    return (
        <>
            <Navbar/>
            <div className="grid-layout">
                <div className="grid1">
                    <form className="form2">
                        <select name="cp1" id="cp1" onChange={handleSelection}>
                            <option value="Select">Select</option>
                            {
                                productTitles.map(title => {
                                    return (<option value={title}>{title}</option>);
                                })
                            }
                        </select>
                    </form>
                </div>
                <div className="grid2">
                    <form className="form2">
                        <select name="cp2" id="cp2" onChange={handleSelection}>
                            <option value="Select">Select</option>
                            {
                                productTitles.map(title => {
                                    return (<option value={title}>{title}</option>);
                                })
                            }
                        </select>
                    </form>
                </div>
            </div>
            {
                (product1ToCompare && product2ToCompare) ? <MobileCompareProducts product1={product1ToCompare} product2={product2ToCompare}></MobileCompareProducts> : <EmptySelection/>
            }
        </>
    )
}
