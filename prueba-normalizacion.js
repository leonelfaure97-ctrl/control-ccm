const norm=s=>String(s??'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'').replace(/[0-9]+/g,n=>n.replace(/^0+(?=\d)/,''));
const cases=['CIN-2','CIN-02','cin 2','CIN 2','Cin-002'];
const result=cases.map(x=>[x,norm(x)]);
console.table(result);
if(new Set(result.map(x=>x[1])).size!==1)process.exit(1);
console.log('OK: todas las variantes coinciden.');
