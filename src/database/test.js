const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // INSERIR OS DADOS
    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: '123456789',
        bio: 'Instrutor de Educação Física'
    }

    classValue = {
        subject: '4',
        cost: '20'
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //CONSULTAR OS DADOS

    //todos os proffys
    selectedProffys = await db.all("SELECT * FROM proffys")
})