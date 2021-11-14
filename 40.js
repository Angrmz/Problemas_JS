function ventas(productos, vendedor) {
    let producto = [];
    for (let i = 0; i < productos; i++) {
        producto.push([]);
        for (let j = 0; j < meses.length; j++) {
            producto[i].push([]);
            let venta = Math.floor(Math.random() * 5) + 1;
            for (let k = 0; k < venta; k++) {
                producto[i][j].push({
                    seller: vendedor[Math.floor(Math.random() * vendedor.length)],
                    sale: Math.random() * 150
                });
            }
        }
    }
    return producto;
}

let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let vendedor = ['Angelica', 'Luis', 'Manuel'];
let venta = ventas(4, vendedor);

venta.forEach((product, index) => {
    console.log(`\nVentas del producto #${index+1}:`);
    product.forEach((mes, index) => {
        let total = mes.reduce((acc, current) => {
            return acc + current.sale
        }, 0);
        console.log(`${meses[index]} : ${total}`);
    });
    console.log('\n');
});
