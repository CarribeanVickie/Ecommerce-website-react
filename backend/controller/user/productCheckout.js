const productCheckout = async(req,res)=>{
    const { products } = req.body

    const lineItems = products.map((product)=>({
       price_data : {
        currency : "Ksh",
        product_data : {
            name : product?.productName,
            images : [product?.productImage]
        },
        unit_amount : Math.round(product?.sellingPrice * 100),
       },
       quantity : product?.quantity
    }))

    const session = await stripe.checkout_session.create({
        payment_method_types : ["card"],
        line_items : lineItems,
        mode : "payment",
        success_url : "/success",
        cancel_url : "/cancel",
    })
    res.json({id:session.id})
}

module.exports = productCheckout