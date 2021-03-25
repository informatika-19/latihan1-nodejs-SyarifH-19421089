//Array
//Harus tau index

// const listnilai = ['A', 'B', 'C']
// console.log(listnilai[2])

const dataMahasiswa = [
    {
        nama: 'Syarif H',
        NPM: '19421089',
        prodi: 'Informatika'
    },
    {
        nama: 'Syarif K',
        NPM: '19421088',
        prodi: 'Informati'
    },
    {
        nama: 'Syarif I',
        NPM: '19421087',
        prodi: 'Info'
    }
]
// console.log(dataMahasiswa[1].nama)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + ' - ' +dataMahasiswa[i].NPM +' - '+ dataMahasiswa[i].prodi)
}
