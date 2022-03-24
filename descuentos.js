// const precioOriginal = 100;
// const descuento = 15;

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "Tu_dia_de_suerte",
        discount: 30,
    },
    {
        name: "es un secreto",
        discount: 25,
    },
];

// const isCouponValueValid = function (coupon) {
//     return coupon.name === couponV;
// };



function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDesDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDesDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceV = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponV = inputCoupon.value;
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponV;

        
    }
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponV + "no es válido");
    } else {
        const descuento = userCoupon.discount;

        const precioConDescuento = calcularPrecioConDescuento(priceV, descuento);

        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
