// This is your test secret API key.
const stripe = require('stripe')('sk_test_51LcWq2SFbeZoDjV6i1hz1k3FqhRJ5pg4K4p4kItN24oWm3jpG3hp8NxC2Fv0cxgpx59i5xOOb11IrVQuuikNoCIp00OSt9PALs');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1LdtWaSFbeZoDjV62A2iwApS',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});
app.get('/',function(req,res){
    res.sendFile('/Users/vasuberi/Desktop/Hackathon/new/checkout.html')
})

app.listen(3000, () => console.log('Running on port 3000'));