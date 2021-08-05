const Leilao = require("./Leilao");


test('pega maior lance aleatorio',
    () => { 
        var leilao = new Leilao('playStation');
        leilao.propoe(200.0);
        leilao.propoe(150.0);
        leilao.propoe(100.0);

        leilao.avalia();
        expect(leilao.getMaiorLance()) .toBe(200.0);
     }
);
test('Colocar lance negativo',
     () => {
         var leilao = new Leilao('bola de futebol');
         leilao.propoe(-100.0);
         leilao.propoe(-10.0);
         leilao.propoe(-1.0);

         leilao.avalia();
         expect(leilao.getMaiorLance()).toBe(0);
     }
);
test('Colocar Menor lance ',
     () => {
         var leilao = new Leilao('chuteira');
         leilao.propoe(100.0);
         leilao.propoe(210.0);
         leilao.propoe(50.0);

         leilao.avalia();
         expect(leilao.getMaiorLance()).toBe(0);
     }
);