const arrayToString = (array) => {
    if (array.length === 0) {
        return ''
    } else if (array.length === 1) {
        return array[0].toString()
    } else if (array.length > 1) {
        let string = ''

        for (let i = 0; i < array.length; i++) {
            if (i == array.length - 2) {
                string += `${array[i]} `
            } else if (i !== array.length - 1) {
                string += `${array[i]}, `
            } else {
                string += `dan ${array[i]}`
            }
        }

        return string
    }
}

const cekNomorRahasia = ( nomorRahasia, nomorTebakan ) => {
    nomorRahasia = nomorRahasia.toString();
    nomorTebakan = nomorTebakan.toString();

    if (nomorRahasia.length !== nomorTebakan.length) {
        return "nomor rahasia dan nomor tebakan harus sama panjang";
    }

    let alhamdulillah = [];
    let subhanallah = [];

    for (let i = 0; i < nomorRahasia.length; i++) {
        if (nomorRahasia[i] === nomorTebakan[i]) {
            alhamdulillah.push(nomorRahasia[i]);
        } else {
            subhanallah.push(nomorTebakan[i]);
        }
    }

    let alhamdulillahToString = arrayToString(alhamdulillah);
    let subhanallahToString = arrayToString(subhanallah);

    const result = `${alhamdulillah.length} Alhamdulillah ${subhanallah.length} Subhanallah ( angka${ alhamdulillah.length > 0 ? ' ' + alhamdulillahToString + ' Alhamdulillah, ' : ' ' }${subhanallahToString} adalah Subhanallah )`;
    console.log(result);

}

const nomorRahasia = 102198;
const nomorTebakan = 503182;

cekNomorRahasia(nomorRahasia, nomorTebakan);