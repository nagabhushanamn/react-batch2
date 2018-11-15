import React from 'react'

function renderCartItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
            </tr>
        )
    })
}

export default props => {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-8">
                <div className="card card-default">
                    <div className="card-header">Items in cart</div>
                    <table className="table table-sm table-bordered table-stripped">
                        <tbody>
                            {renderCartItems(props.cart)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}