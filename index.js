import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id:1,
            name: "Football",
            price: 500,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTkSe-LtvehRIG43pmmOyiayPeablbTNWJ-GM18e32mVcUIJv8z5mvqSTvCGVChjM9d5CuSjTCpVI2s_xZU_a2k-gjNRKHFtWtfQ73WRpJFl780QVgilnWkBg"
        },{
            id:2,
            name: 'Basketball',
            price: 350,
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnBoycVbUIlYsip8EWB7_ySPbdivs_qDNOJbkMY-AKiULWBTFAkf5CBUullpbhjgEqKfvUNTBelijYeKNi7Rv-Z3u3KbmS5mI7Xa_54z-ohEQVM4Z4Pg1rGA"
        }, {
            id:3,
            name : 'Cricket kit',
            price :9000,
            image: "https://m.media-amazon.com/images/I/41xfPDxz83L._AC_UF894,1000_QL80_.jpg"
        }, {
            id:4,
            name: 'volley ball',
            price: 300,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX9-0an9UcSybxlcgk29KoR_akFUJKNsCLg&s"
        }, {
            id : 5,
            name: 'hockey sticke',
            price: 4000,
            image : "https://www.sportswing.in/wp-content/uploads/2023/01/Alfa-AX-9-Hockey-Sticks-2.jpg"
        }
    ]
    
    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return ; 
    }

    setTimeout( () => {
        res.send(products)
    },3000);
})

const port = process.env.PORT || 3000;

app.listen(port ,()=>{
    console.log(`Server in running ${port}`)
});