import React from 'react'
import ProductList from './productList'

export default function PaginatedProducts({data}) {
    const {sortedProducts, page, changePage} = data
    if (sortedProducts[page]) {
        return (
            <div className="pagenated-products-section">
                <h3>Showing {sortedProducts[page].length} out of {sortedProducts.flat().length} products</h3>
                <ProductList products = {sortedProducts[page]}/>
                {/* Buttons for Pagination */}
                {
                    sortedProducts.length > 1 && (
                        <div className="pagination-buttons">
                            {
                                sortedProducts.map((_, index) => {
                                    return <button key={index} className={`page-btn ${page === index && `page-btn-current`}`} onClick={() => changePage(index)}>
                                        {index + 1}
                                    </button>
                                })
                            }
                        </div>
                    )
                }
            </div>
        )
    }
    else {
        return <h3>No Products to display!</h3>
    }
}
