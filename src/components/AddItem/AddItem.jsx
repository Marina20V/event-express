import React from 'react'

export default function AddItem() {
    return (
        <div>
            <section>
    <div className="add-product-form">
        <header className="main-header">Add new product</header>
        <div className="data">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Item name..."/>
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" placeholder="Category..."/>
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" placeholder="0.00"/>
        </div>
        <div className="panel">
            <button type="button" id="add-product-button" className="button">Add</button>
            <a href="#/products">
                <button type="button" className="button" id="cancel-button">Cancel</button>
            </a>
        </div>
    </div>
</section>
        </div>
    )
}
