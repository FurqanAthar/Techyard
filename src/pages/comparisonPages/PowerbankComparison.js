import React from 'react'
import {powerbankComparisonContext} from "../../context/comparisonContexts/powerbankComparisonContext";
import PowerbankComparisonComponent from "../../components/comparisonComponents/PowerbankComparisonComponent";
import EmptySelection from '../../components/comparisonComponents/emptySelection'

export default function PowerbankComparison() {
    const {productTitles, handleSelection, product1ToCompare, product2ToCompare} = React.useContext(powerbankComparisonContext);
    return (
        <>
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
                (product1ToCompare && product2ToCompare) ? <PowerbankComparisonComponent product1={product1ToCompare} product2={product2ToCompare}></PowerbankComparisonComponent> : <EmptySelection/>
            }
        </>
    )
}
