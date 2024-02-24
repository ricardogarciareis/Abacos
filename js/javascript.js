function calcular() {
    var a = 0.000000;
    if (document.getElementById('r7c01').checked) { a = a + 0.000001; }
    if (document.getElementById('r6c01').checked) { a = a + 0.000001; }
    if (document.getElementById('r5c01').checked) { a = a + 0.000001; }
    if (document.getElementById('r4c01').checked) { a = a + 0.000001; }
    if (document.getElementById('r3c01').checked) { a = a + 0.000001; }
    if (document.getElementById('r2c01').checked) { a = a + 0.000005; }
    if (document.getElementById('r1c01').checked) { a = a + 0.000005; }

    var b = 0.00000;
    if (document.getElementById('r7c02').checked) { b = b + 0.00001; }
    if (document.getElementById('r6c02').checked) { b = b + 0.00001; }
    if (document.getElementById('r5c02').checked) { b = b + 0.00001; }
    if (document.getElementById('r4c02').checked) { b = b + 0.00001; }
    if (document.getElementById('r3c02').checked) { b = b + 0.00001; }
    if (document.getElementById('r2c02').checked) { b = b + 0.00005; }
    if (document.getElementById('r1c02').checked) { b = b + 0.00005; }
    
    var c = 0.0000;
    if (document.getElementById('r7c03').checked) { c = c + 0.0001; }
    if (document.getElementById('r6c03').checked) { c = c + 0.0001; }
    if (document.getElementById('r5c03').checked) { c = c + 0.0001; }
    if (document.getElementById('r4c03').checked) { c = c + 0.0001; }
    if (document.getElementById('r3c03').checked) { c = c + 0.0001; }
    if (document.getElementById('r2c03').checked) { c = c + 0.0005; }
    if (document.getElementById('r1c03').checked) { c = c + 0.0005; }

    var d = 0.000;
    if (document.getElementById('r7c04').checked) { d = d + 0.001; }
    if (document.getElementById('r6c04').checked) { d = d + 0.001; }
    if (document.getElementById('r5c04').checked) { d = d + 0.001; }
    if (document.getElementById('r4c04').checked) { d = d + 0.001; }
    if (document.getElementById('r3c04').checked) { d = d + 0.001; }
    if (document.getElementById('r2c04').checked) { d = d + 0.005; }
    if (document.getElementById('r1c04').checked) { d = d + 0.005; }

    var e = 0.00;
    if (document.getElementById('r7c05').checked) { e = e + 0.01; }
    if (document.getElementById('r6c05').checked) { e = e + 0.01; }
    if (document.getElementById('r5c05').checked) { e = e + 0.01; }
    if (document.getElementById('r4c05').checked) { e = e + 0.01; }
    if (document.getElementById('r3c05').checked) { e = e + 0.01; }
    if (document.getElementById('r2c05').checked) { e = e + 0.05; }
    if (document.getElementById('r1c05').checked) { e = e + 0.05; }

    var f = 0.0;
    if (document.getElementById('r7c06').checked) { f = f + 0.1; }
    if (document.getElementById('r6c06').checked) { f = f + 0.1; }
    if (document.getElementById('r5c06').checked) { f = f + 0.1; }
    if (document.getElementById('r4c06').checked) { f = f + 0.1; }
    if (document.getElementById('r3c06').checked) { f = f + 0.1; }
    if (document.getElementById('r2c06').checked) { f = f + 0.5; }
    if (document.getElementById('r1c06').checked) { f = f + 0.5; }

    var g = 0.0;
    if (document.getElementById('r7c07').checked) { g = g + 1; }
    if (document.getElementById('r6c07').checked) { g = g + 1; }
    if (document.getElementById('r5c07').checked) { g = g + 1; }
    if (document.getElementById('r4c07').checked) { g = g + 1; }
    if (document.getElementById('r3c07').checked) { g = g + 1; }
    if (document.getElementById('r2c07').checked) { g = g + 5; }
    if (document.getElementById('r1c07').checked) { g = g + 5; }

    var h = 0;
    if (document.getElementById('r7c08').checked) { h = h + 10; }
    if (document.getElementById('r6c08').checked) { h = h + 10; }
    if (document.getElementById('r5c08').checked) { h = h + 10; }
    if (document.getElementById('r4c08').checked) { h = h + 10; }
    if (document.getElementById('r3c08').checked) { h = h + 10; }
    if (document.getElementById('r2c08').checked) { h = h + 50; }
    if (document.getElementById('r1c08').checked) { h = h + 50; }

    var i = 0;
    if (document.getElementById('r7c09').checked) { i = i + 100; }
    if (document.getElementById('r6c09').checked) { i = i + 100; }
    if (document.getElementById('r5c09').checked) { i = i + 100; }
    if (document.getElementById('r4c09').checked) { i = i + 100; }
    if (document.getElementById('r3c09').checked) { i = i + 100; }
    if (document.getElementById('r2c09').checked) { i = i + 500; }
    if (document.getElementById('r1c09').checked) { i = i + 500; }

    var j = 0;
    if (document.getElementById('r7c10').checked) { j = j + 1000; }
    if (document.getElementById('r6c10').checked) { j = j + 1000; }
    if (document.getElementById('r5c10').checked) { j = j + 1000; }
    if (document.getElementById('r4c10').checked) { j = j + 1000; }
    if (document.getElementById('r3c10').checked) { j = j + 1000; }
    if (document.getElementById('r2c10').checked) { j = j + 5000; }
    if (document.getElementById('r1c10').checked) { j = j + 5000; }

    var k = 0;
    if (document.getElementById('r7c11').checked) { k = k + 10000; }
    if (document.getElementById('r6c11').checked) { k = k + 10000; }
    if (document.getElementById('r5c11').checked) { k = k + 10000; }
    if (document.getElementById('r4c11').checked) { k = k + 10000; }
    if (document.getElementById('r3c11').checked) { k = k + 10000; }
    if (document.getElementById('r2c11').checked) { k = k + 50000; }
    if (document.getElementById('r1c11').checked) { k = k + 50000; }

    var l = 0;
    if (document.getElementById('r7c12').checked) { l = l + 100000; }
    if (document.getElementById('r6c12').checked) { l = l + 100000; }
    if (document.getElementById('r5c12').checked) { l = l + 100000; }
    if (document.getElementById('r4c12').checked) { l = l + 100000; }
    if (document.getElementById('r3c12').checked) { l = l + 100000; }
    if (document.getElementById('r2c12').checked) { l = l + 500000; }
    if (document.getElementById('r1c12').checked) { l = l + 500000; }

    var m = 0;
    if (document.getElementById('r7c13').checked) { m = m + 1000000; }
    if (document.getElementById('r6c13').checked) { m = m + 1000000; }
    if (document.getElementById('r5c13').checked) { m = m + 1000000; }
    if (document.getElementById('r4c13').checked) { m = m + 1000000; }
    if (document.getElementById('r3c13').checked) { m = m + 1000000; }
    if (document.getElementById('r2c13').checked) { m = m + 5000000; }
    if (document.getElementById('r1c13').checked) { m = m + 5000000; }

    const numberFormatter = new Intl.NumberFormat('fr-FR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 6
    });
    const tot = numberFormatter.format((a + b + c + d + e + f + g + h + i + j + k + l + m).toFixed(6));
    document.getElementById('tot').innerHTML = tot;
}

function s_calcular() {
    var a = 0.000000;
    if (document.getElementById('s_r10c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r09c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r08c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r07c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r06c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r05c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r04c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r03c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r02c01').checked) { a = a + 0.000001; }
    if (document.getElementById('s_r01c01').checked) { a = a + 0.000001; }

    var b = 0.00000;
    if (document.getElementById('s_r10c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r09c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r08c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r07c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r06c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r05c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r04c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r03c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r02c02').checked) { b = b + 0.00001; }
    if (document.getElementById('s_r01c02').checked) { b = b + 0.00001; }
    
    var c = 0.0000;
    if (document.getElementById('s_r10c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r09c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r08c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r07c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r06c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r05c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r04c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r03c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r02c03').checked) { c = c + 0.0001; }
    if (document.getElementById('s_r01c03').checked) { c = c + 0.0001; }

    var d = 0.000;
    if (document.getElementById('s_r10c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r09c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r08c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r07c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r06c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r05c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r04c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r03c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r02c04').checked) { d = d + 0.001; }
    if (document.getElementById('s_r01c04').checked) { d = d + 0.001; }

    var e = 0.00;
    if (document.getElementById('s_r10c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r09c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r08c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r07c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r06c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r05c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r04c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r03c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r02c05').checked) { e = e + 0.01; }
    if (document.getElementById('s_r01c05').checked) { e = e + 0.01; }

    var f = 0.0;
    if (document.getElementById('s_r10c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r09c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r08c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r07c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r06c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r05c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r04c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r03c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r02c06').checked) { f = f + 0.1; }
    if (document.getElementById('s_r01c06').checked) { f = f + 0.1; }

    var g = 0.0;
    if (document.getElementById('s_r10c07').checked) { g = g + 1; }
    if (document.getElementById('s_r09c07').checked) { g = g + 1; }
    if (document.getElementById('s_r08c07').checked) { g = g + 1; }
    if (document.getElementById('s_r07c07').checked) { g = g + 1; }
    if (document.getElementById('s_r06c07').checked) { g = g + 1; }
    if (document.getElementById('s_r05c07').checked) { g = g + 1; }
    if (document.getElementById('s_r04c07').checked) { g = g + 1; }
    if (document.getElementById('s_r03c07').checked) { g = g + 1; }
    if (document.getElementById('s_r02c07').checked) { g = g + 1; }
    if (document.getElementById('s_r01c07').checked) { g = g + 1; }

    var h = 0;
    if (document.getElementById('s_r10c08').checked) { h = h + 10; }
    if (document.getElementById('s_r09c08').checked) { h = h + 10; }
    if (document.getElementById('s_r08c08').checked) { h = h + 10; }
    if (document.getElementById('s_r07c08').checked) { h = h + 10; }
    if (document.getElementById('s_r06c08').checked) { h = h + 10; }
    if (document.getElementById('s_r05c08').checked) { h = h + 10; }
    if (document.getElementById('s_r04c08').checked) { h = h + 10; }
    if (document.getElementById('s_r03c08').checked) { h = h + 10; }
    if (document.getElementById('s_r02c08').checked) { h = h + 10; }
    if (document.getElementById('s_r01c08').checked) { h = h + 10; }

    var i = 0;
    if (document.getElementById('s_r10c09').checked) { i = i + 100; }
    if (document.getElementById('s_r09c09').checked) { i = i + 100; }
    if (document.getElementById('s_r08c09').checked) { i = i + 100; }
    if (document.getElementById('s_r07c09').checked) { i = i + 100; }
    if (document.getElementById('s_r06c09').checked) { i = i + 100; }
    if (document.getElementById('s_r05c09').checked) { i = i + 100; }
    if (document.getElementById('s_r04c09').checked) { i = i + 100; }
    if (document.getElementById('s_r03c09').checked) { i = i + 100; }
    if (document.getElementById('s_r02c09').checked) { i = i + 100; }
    if (document.getElementById('s_r01c09').checked) { i = i + 100; }

    var j = 0;
    if (document.getElementById('s_r10c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r09c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r08c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r07c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r06c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r05c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r04c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r03c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r02c10').checked) { j = j + 1000; }
    if (document.getElementById('s_r01c10').checked) { j = j + 1000; }

    var k = 0;
    if (document.getElementById('s_r10c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r09c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r08c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r07c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r06c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r05c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r04c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r03c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r02c11').checked) { k = k + 10000; }
    if (document.getElementById('s_r01c11').checked) { k = k + 10000; }

    var l = 0;
    if (document.getElementById('s_r10c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r09c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r08c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r07c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r06c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r05c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r04c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r03c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r02c12').checked) { l = l + 100000; }
    if (document.getElementById('s_r01c12').checked) { l = l + 100000; }

    var m = 0;
    if (document.getElementById('s_r10c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r09c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r08c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r07c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r06c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r05c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r04c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r03c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r02c13').checked) { m = m + 1000000; }
    if (document.getElementById('s_r01c13').checked) { m = m + 1000000; }

    const numberFormatter = new Intl.NumberFormat('fr-FR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 6
    });
    const s_tot = numberFormatter.format((a + b + c + d + e + f + g + h + i + j + k + l + m).toFixed(6));
    document.getElementById('s_tot').innerHTML = s_tot;
}

function limpar() {
    document.getElementById('r7c01').checked = false;
    document.getElementById('r6c01').checked = false;
    document.getElementById('r5c01').checked = false;
    document.getElementById('r4c01').checked = false;
    document.getElementById('r3c01').checked = false;
    document.getElementById('r2c01').checked = false;
    document.getElementById('r1c01').checked = false;

    document.getElementById('r7c02').checked = false;
    document.getElementById('r6c02').checked = false;
    document.getElementById('r5c02').checked = false;
    document.getElementById('r4c02').checked = false;
    document.getElementById('r3c02').checked = false;
    document.getElementById('r2c02').checked = false;
    document.getElementById('r1c02').checked = false;

    document.getElementById('r7c03').checked = false;
    document.getElementById('r6c03').checked = false;
    document.getElementById('r5c03').checked = false;
    document.getElementById('r4c03').checked = false;
    document.getElementById('r3c03').checked = false;
    document.getElementById('r2c03').checked = false;
    document.getElementById('r1c03').checked = false;

    document.getElementById('r7c04').checked = false;
    document.getElementById('r6c04').checked = false;
    document.getElementById('r5c04').checked = false;
    document.getElementById('r4c04').checked = false;
    document.getElementById('r3c04').checked = false;
    document.getElementById('r2c04').checked = false;
    document.getElementById('r1c04').checked = false;

    document.getElementById('r7c05').checked = false;
    document.getElementById('r6c05').checked = false;
    document.getElementById('r5c05').checked = false;
    document.getElementById('r4c05').checked = false;
    document.getElementById('r3c05').checked = false;
    document.getElementById('r2c05').checked = false;
    document.getElementById('r1c05').checked = false;

    document.getElementById('r7c06').checked = false;
    document.getElementById('r6c06').checked = false;
    document.getElementById('r5c06').checked = false;
    document.getElementById('r4c06').checked = false;
    document.getElementById('r3c06').checked = false;
    document.getElementById('r2c06').checked = false;
    document.getElementById('r1c06').checked = false;

    document.getElementById('r7c07').checked = false;
    document.getElementById('r6c07').checked = false;
    document.getElementById('r5c07').checked = false;
    document.getElementById('r4c07').checked = false;
    document.getElementById('r3c07').checked = false;
    document.getElementById('r2c07').checked = false;
    document.getElementById('r1c07').checked = false;

    document.getElementById('r7c08').checked = false;
    document.getElementById('r6c08').checked = false;
    document.getElementById('r5c08').checked = false;
    document.getElementById('r4c08').checked = false;
    document.getElementById('r3c08').checked = false;
    document.getElementById('r2c08').checked = false;
    document.getElementById('r1c08').checked = false;

    document.getElementById('r7c09').checked = false;
    document.getElementById('r6c09').checked = false;
    document.getElementById('r5c09').checked = false;
    document.getElementById('r4c09').checked = false;
    document.getElementById('r3c09').checked = false;
    document.getElementById('r2c09').checked = false;
    document.getElementById('r1c09').checked = false;

    document.getElementById('r7c10').checked = false;
    document.getElementById('r6c10').checked = false;
    document.getElementById('r5c10').checked = false;
    document.getElementById('r4c10').checked = false;
    document.getElementById('r3c10').checked = false;
    document.getElementById('r2c10').checked = false;
    document.getElementById('r1c10').checked = false;

    document.getElementById('r7c11').checked = false;
    document.getElementById('r6c11').checked = false;
    document.getElementById('r5c11').checked = false;
    document.getElementById('r4c11').checked = false;
    document.getElementById('r3c11').checked = false;
    document.getElementById('r2c11').checked = false;
    document.getElementById('r1c11').checked = false;

    document.getElementById('r7c12').checked = false;
    document.getElementById('r6c12').checked = false;
    document.getElementById('r5c12').checked = false;
    document.getElementById('r4c12').checked = false;
    document.getElementById('r3c12').checked = false;
    document.getElementById('r2c12').checked = false;
    document.getElementById('r1c12').checked = false;

    document.getElementById('r7c13').checked = false;
    document.getElementById('r6c13').checked = false;
    document.getElementById('r5c13').checked = false;
    document.getElementById('r4c13').checked = false;
    document.getElementById('r3c13').checked = false;
    document.getElementById('r2c13').checked = false;
    document.getElementById('r1c13').checked = false;

    calcular();
}

function s_limpar() {
    document.getElementById('s_r10c01').checked = false;
    document.getElementById('s_r09c01').checked = false;
    document.getElementById('s_r08c01').checked = false;
    document.getElementById('s_r07c01').checked = false;
    document.getElementById('s_r06c01').checked = false;
    document.getElementById('s_r05c01').checked = false;
    document.getElementById('s_r04c01').checked = false;
    document.getElementById('s_r03c01').checked = false;
    document.getElementById('s_r02c01').checked = false;
    document.getElementById('s_r01c01').checked = false;

    document.getElementById('s_r10c02').checked = false;
    document.getElementById('s_r09c02').checked = false;
    document.getElementById('s_r08c02').checked = false;
    document.getElementById('s_r07c02').checked = false;
    document.getElementById('s_r06c02').checked = false;
    document.getElementById('s_r05c02').checked = false;
    document.getElementById('s_r04c02').checked = false;
    document.getElementById('s_r03c02').checked = false;
    document.getElementById('s_r02c02').checked = false;
    document.getElementById('s_r01c02').checked = false;

    document.getElementById('s_r10c03').checked = false;
    document.getElementById('s_r09c03').checked = false;
    document.getElementById('s_r08c03').checked = false;
    document.getElementById('s_r07c03').checked = false;
    document.getElementById('s_r06c03').checked = false;
    document.getElementById('s_r05c03').checked = false;
    document.getElementById('s_r04c03').checked = false;
    document.getElementById('s_r03c03').checked = false;
    document.getElementById('s_r02c03').checked = false;
    document.getElementById('s_r01c03').checked = false;

    document.getElementById('s_r10c04').checked = false;
    document.getElementById('s_r09c04').checked = false;
    document.getElementById('s_r08c04').checked = false;
    document.getElementById('s_r07c04').checked = false;
    document.getElementById('s_r06c04').checked = false;
    document.getElementById('s_r05c04').checked = false;
    document.getElementById('s_r04c04').checked = false;
    document.getElementById('s_r03c04').checked = false;
    document.getElementById('s_r02c04').checked = false;
    document.getElementById('s_r01c04').checked = false;

    document.getElementById('s_r10c05').checked = false;
    document.getElementById('s_r09c05').checked = false;
    document.getElementById('s_r08c05').checked = false;
    document.getElementById('s_r07c05').checked = false;
    document.getElementById('s_r06c05').checked = false;
    document.getElementById('s_r05c05').checked = false;
    document.getElementById('s_r04c05').checked = false;
    document.getElementById('s_r03c05').checked = false;
    document.getElementById('s_r02c05').checked = false;
    document.getElementById('s_r01c05').checked = false;

    document.getElementById('s_r10c06').checked = false;
    document.getElementById('s_r09c06').checked = false;
    document.getElementById('s_r08c06').checked = false;
    document.getElementById('s_r07c06').checked = false;
    document.getElementById('s_r06c06').checked = false;
    document.getElementById('s_r05c06').checked = false;
    document.getElementById('s_r04c06').checked = false;
    document.getElementById('s_r03c06').checked = false;
    document.getElementById('s_r02c06').checked = false;
    document.getElementById('s_r01c06').checked = false;

    document.getElementById('s_r10c07').checked = false;
    document.getElementById('s_r09c07').checked = false;
    document.getElementById('s_r08c07').checked = false;
    document.getElementById('s_r07c07').checked = false;
    document.getElementById('s_r06c07').checked = false;
    document.getElementById('s_r05c07').checked = false;
    document.getElementById('s_r04c07').checked = false;
    document.getElementById('s_r03c07').checked = false;
    document.getElementById('s_r02c07').checked = false;
    document.getElementById('s_r01c07').checked = false;

    document.getElementById('s_r10c08').checked = false;
    document.getElementById('s_r09c08').checked = false;
    document.getElementById('s_r08c08').checked = false;
    document.getElementById('s_r07c08').checked = false;
    document.getElementById('s_r06c08').checked = false;
    document.getElementById('s_r05c08').checked = false;
    document.getElementById('s_r04c08').checked = false;
    document.getElementById('s_r03c08').checked = false;
    document.getElementById('s_r02c08').checked = false;
    document.getElementById('s_r01c08').checked = false;

    document.getElementById('s_r10c09').checked = false;
    document.getElementById('s_r09c09').checked = false;
    document.getElementById('s_r08c09').checked = false;
    document.getElementById('s_r07c09').checked = false;
    document.getElementById('s_r06c09').checked = false;
    document.getElementById('s_r05c09').checked = false;
    document.getElementById('s_r04c09').checked = false;
    document.getElementById('s_r03c09').checked = false;
    document.getElementById('s_r02c09').checked = false;
    document.getElementById('s_r01c09').checked = false;

    document.getElementById('s_r10c10').checked = false;
    document.getElementById('s_r09c10').checked = false;
    document.getElementById('s_r08c10').checked = false;
    document.getElementById('s_r07c10').checked = false;
    document.getElementById('s_r06c10').checked = false;
    document.getElementById('s_r05c10').checked = false;
    document.getElementById('s_r04c10').checked = false;
    document.getElementById('s_r03c10').checked = false;
    document.getElementById('s_r02c10').checked = false;
    document.getElementById('s_r01c10').checked = false;

    document.getElementById('s_r10c11').checked = false;
    document.getElementById('s_r09c11').checked = false;
    document.getElementById('s_r08c11').checked = false;
    document.getElementById('s_r07c11').checked = false;
    document.getElementById('s_r06c11').checked = false;
    document.getElementById('s_r05c11').checked = false;
    document.getElementById('s_r04c11').checked = false;
    document.getElementById('s_r03c11').checked = false;
    document.getElementById('s_r02c11').checked = false;
    document.getElementById('s_r01c11').checked = false;

    document.getElementById('s_r10c12').checked = false;
    document.getElementById('s_r09c12').checked = false;
    document.getElementById('s_r08c12').checked = false;
    document.getElementById('s_r07c12').checked = false;
    document.getElementById('s_r06c12').checked = false;
    document.getElementById('s_r05c12').checked = false;
    document.getElementById('s_r04c12').checked = false;
    document.getElementById('s_r03c12').checked = false;
    document.getElementById('s_r02c12').checked = false;
    document.getElementById('s_r01c12').checked = false;

    document.getElementById('s_r10c13').checked = false;
    document.getElementById('s_r09c13').checked = false;
    document.getElementById('s_r08c13').checked = false;
    document.getElementById('s_r07c13').checked = false;
    document.getElementById('s_r06c13').checked = false;
    document.getElementById('s_r05c13').checked = false;
    document.getElementById('s_r04c13').checked = false;
    document.getElementById('s_r03c13').checked = false;
    document.getElementById('s_r02c13').checked = false;
    document.getElementById('s_r01c13').checked = false;

    s_calcular();
}