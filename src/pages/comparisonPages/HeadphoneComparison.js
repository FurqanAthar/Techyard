import React from 'react'
import {headphoneComparisonContext} from "../../context/comparisonContexts/headphoneComparisonContext";
import HeadphoneComparisonComponent from "../../components/comparisonComponents/HeadphoneComparisonComponent";
import EmptySelection from '../../components/comparisonComponents/emptySelection'

export default function HeadphoneComparison() {
    const {productTitles, handleSelection, product1ToCompare, product2ToCompare} = React.useContext(headphoneComparisonContext);
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
                (product1ToCompare && product2ToCompare) ? <HeadphoneComparisonComponent product1={product1ToCompare} product2={product2ToCompare}></HeadphoneComparisonComponent> : <EmptySelection/>
            }
        </>
    )
}
