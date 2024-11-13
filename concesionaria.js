const autos = require('./autos.js');

const concesionaria = {
    vehiculos: autos,
    listaDeVentas: function () {
        return this.vehiculos.filter(car => car.vendido === true)
    },
    autosEnventa: function () {
        return this.vehiculos.filter(car => car.vendido === false)
    },
    vender: function (dominio) {
        this.vehiculos.forEach(car => {
            if (car.patente == dominio) {
                car.vendido = true
            }
        })
    },
    autoFinanciable: function (cuotas) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.cuotas >= cuotas);
    },
    totalDeVentas: function () {
        return this.listaDeVentas().reduce((total, vehiculo) => total + vehiculo.precio, 0);
    },
    autosQuePuedeComprar: function(importe) {
        return this.vehiculos.filter(car => car.precio <= importe && car.vendido === false);
    }
}
module.exports = concesionaria;