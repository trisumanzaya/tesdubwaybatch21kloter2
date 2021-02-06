function hitungGajih(golongan, jenisKelamin, status, jumlahanak) {
    let gaji = 0;
    let tunjangan = 0;
    let tunjangan2 = 0;
    let pensiun= 200000;
    let bpjs= 150000;
    if (golongan === 'Golongan 1') {
        gaji = 1500000;
        tunjangan = 200000;
    } else if (golongan === 'Golongan 2') {
        gaji = 2000000;
        tunjangan = 400000;
    } else if (golongan === 'Golongan 3') {
        gaji = 3000000;
        tunjangan = 600000;
    } else if (golongan === 'Golongan 4') {
        gaji = 4000000;
        tunjangan = 1000000;
    }
    if (jenisKelamin === 'laki') {
        tunjangan2 = 200000;
    }else if(jenisKelamin === 'perempuan'){
        console.log("tunjangan ini hanya untuk kepala keluarga");
    } 
    if(status==='menikah'){
        if (jumlahanak === 1) {
            tunjangananak = 100000;
        } else if (jumlahanak === 2){
            tunjangananak = 200000;
    } else if(status==='lajang'){
        console.log('lajang');
    }
    }
    gajikotor = gaji + tunjangan + tunjangan2 + tunjangananak;
    totaltunjangan= tunjangan+ tunjangan2 + tunjangananak;
    pajak = gajikotor * 0.1;
    totalgaji = gajikotor-pajak;
    gajibersih=totalgaji-(pensiun+bpjs);
    
    console.log("\t HASIL PERHITNGAN GAJI");
    console.log("\t ========================");
    console.log("\t INFO PEGAWAI");
    console.log("\t ========================");
    console.log("\t Pegawai yang bersangkutan");
    console.log(`Golongan: ${golongan} `);
    console.log(`Jenis Kelamin: ${jenisKelamin} `);
    console.log(`Jumlah Anak: ${jumlahanak} `);
    console.log(`\t ========================`);
    console.log(`\t GAJI DAN TUNJANGAN `);
    console.log(`\t ========================`);
    console.log(`\t Gaji Pokok ${gaji}`);
    console.log(`Tunjangan: ${tunjangan}`);
    console.log(`Tunjangan Istri: ${tunjangan2}`);
    console.log(`Tunjangan Anak: ${tunjangananak}`);
    console.log(`Total: ${totaltunjangan}`);
    console.log(`Pajak 10%: ${pajak}`);
    console.log(`Gaji Sementara: ${totalgaji}`);
    console.log(`\t ========================`);
    console.log(`\t GAJI BERSIH `);
    console.log(`\t ========================`);
    console.log(`Potongan Pensuin: ${pensiun}`);
    console.log(`Potongan BPJS: ${bpjs}`);
    console.log(`Gajih Bersih: ${gajibersih}`);
    return gajibersih;
}
hitungGajih('Golongan 4','laki', 'menikah',1);