import { utilsService } from "./utilsService"


const generateMockUsers = (amountOfMockUsers) => {
    let mockUsers = []
    for (let i = 0; i < amountOfMockUsers; i++) {
        mockUsers.push(_generateMockUser())
    }
    return mockUsers
}

const _generateMockUser = () => {
    const userId = getMockUserId()
    return {
        _id: userId,
        startUp: false,
        machineSignature: _generateMachineSignature(userId),
        "guid": null,
        "recLength": 1,
        "recDuration": "00:00:00",
        "state": "WaitingForLicense",
        "assemblyVersion": "21.3.0.9",
        "tenant": "unassigned",
        "lastReport": new Date().getTime(),
        "lastReportMS": 4136047,
        "recorderStatus": "WaitingForLicense",
        "reporting": false,
        "disabled": true,
        "removed": false,
        "agentDataFlow": "Regular",
    }
}

const _generateMachineSignature = (userId) => {
    const firstName = _getName()
    const lastName = _getName()
    const emailAddress = _generateEmailAddress(firstName, lastName)

    return {
        machineSignatureKey: userId,
        machineName: firstName.toLowerCase()[0] + lastName.toLowerCase(),
        macAddress: getMockUserId(10),
        ip: _generateIpAddress(),
        "os": {
            "name": "Microsoft Windows 10 Pro",
            "version": "10.0.19042"
        },
        userDomainName: 'google.com',
        userName: emailAddress,
        displayUserName: emailAddress
    }
}

const getMockUserId = (len = 24) => {
    let userId = ''
    let possibleOption = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    for (let i = 0; i < len; i++) {
        const randomSelection = utilsService.getRandomNum(0, possibleOption.length - 1)
        userId += possibleOption[randomSelection]
    }

    return userId
}

const _generateIpAddress = () => {
    const ipArr = []
    for (let i = 0; i< 4; i++) {
        ipArr.push(utilsService.getRandomNum(60,255))
    }
    return ipArr.join('.')
}

const _generateEmailAddress = (firstName, lastName) => {
    return `${firstName.toLowerCase()}${lastName.toLowerCase()}${utilsService.getRandomNum(1200,9900)}@google.com`
}

const _getName = () => {
    const names = [
        "Aaren"
        ,
        "Aarika"
        ,
        "Abagael"
        ,
        "Abagail"
        ,
        "Abbe"
        ,
        "Abbey"
        ,
        "Abbi"
        ,
        "Abbie"
        ,
        "Abby"
        ,
        "Abbye"
        ,
        "Abigael"
        ,
        "Abigail"
        ,
        "Abigale"
        ,
        "Abra"
        ,
        "Ada"
        ,
        "Adah"
        ,
        "Adaline"
        ,
        "Adan"
        ,
        "Adara"
        ,
        "Adda"
        ,
        "Addi"
        ,
        "Addia"
        ,
        "Addie"
        ,
        "Addy"
        ,
        "Adel"
        ,
        "Adela"
        ,
        "Adelaida"
        ,
        "Adelaide"
        ,
        "Adele"
        ,
        "Adelheid"
        ,
        "Adelice"
        ,
        "Adelina"
        ,
        "Adelind"
        ,
        "Adeline"
        ,
        "Adella"
        ,
        "Adelle"
        ,
        "Adena"
        ,
        "Adey"
        ,
        "Adi"
        ,
        "Adiana"
        ,
        "Adina"
        ,
        "Adora"
        ,
        "Adore"
        ,
        "Adoree"
        ,
        "Adorne"
        ,
        "Adrea"
        ,
        "Adria"
        ,
        "Adriaens"
        ,
        "Adrian"
        ,
        "Adriana"
        ,
        "Adriane"
        ,
        "Adrianna"
        ,
        "Adrianne"
        ,
        "Adriena"
        ,
        "Adrienne"
        ,
        "Aeriel"
        ,
        "Aeriela"
        ,
        "Aeriell"
        ,
        "Afton"
        ,
        "Ag"
        ,
        "Agace"
        ,
        "Agata"
        ,
        "Agatha"
        ,
        "Agathe"
        ,
        "Aggi"
        ,
        "Aggie"
        ,
        "Aggy"
        ,
        "Agna"
        ,
        "Agnella"
        ,
        "Agnes"
        ,
        "Agnese"
        ,
        "Agnesse"
        ,
        "Agneta"
        ,
        "Agnola"
        ,
        "Agretha"
        ,
        "Aida"
        ,
        "Aidan"
        ,
        "Aigneis"
        ,
        "Aila"
        ,
        "Aile"
        ,
        "Ailee"
        ,
        "Aileen"
        ,
        "Ailene"
        ,
        "Ailey"
        ,
        "Aili"
        ,
        "Ailina"
        ,
        "Ailis"
        ,
        "Ailsun"
        ,
        "Ailyn"
        ,
        "Aime"
        ,
        "Aimee"
        ,
        "Aimil"
        ,
        "Aindrea"
        ,
        "Ainslee"
        ,
        "Ainsley"
        ,
        "Ainslie"
        ,
        "Ajay"
        ,
        "Alaine"
        ,
        "Alameda"
        ,
        "Alana"
        ,
        "Alanah"
        ,
        "Alane"
        ,
        "Alanna"
        ,
        "Alayne"
        ,
        "Alberta"
        ,
        "Albertina"
        ,
        "Albertine"
        ,
        "Albina"
        ,
        "Alecia"
        ,
        "Aleda"
        ,
        "Aleece"
        ,
        "Aleen"
        ,
        "Alejandra"
        ,
        "Alejandrina"
        ,
        "Alena"
        ,
        "Alene"
        ,
        "Alessandra"
        ,
        "Aleta"
        ,
        "Alethea"
        ,
        "Alex"
        ,
        "Alexa"
        ,
        "Alexandra"
        ,
        "Alexandrina"
        ,
        "Alexi"
        ,
        "Alexia"
        ,
        "Alexina"
        ,
        "Alexine"
        ,
        "Alexis"
        ,
        "Alfi"
        ,
        "Alfie"
        ,
        "Alfreda"
        ,
        "Alfy"
        ,
        "Ali"
        ,
        "Alia"
        ,
        "Alica"
        ,
        "Alice"
        ,
        "Alicea"
        ,
        "Alicia"
        ,
        "Alida"
        ,
        "Alidia"
        ,
        "Alie"
        ,
        "Alika"
        ,
        "Alikee"
        ,
        "Alina"
        ,
        "Aline"
        ,
        "Alis"
        ,
        "Alisa"
        ,
        "Alisha"
        ,
        "Alison"
        ,
        "Alissa"
        ,
        "Alisun"
        ,
        "Alix"
        ,
        "Aliza"
        ,
        "Alla"
        ,
        "Alleen"
        ,
        "Allegra"
        ,
        "Allene"
        ,
        "Alli"
        ,
        "Allianora"
        ,
        "Allie"
        ,
        "Allina"
        ,
        "Allis"
        ,
        "Allison"
        ,
        "Allissa"
        ,
        "Allix"
        ,
        "Allsun"
        ,
        "Allx"
        ,
        "Ally"
        ,
        "Allyce"
        ,
        "Allyn"
        ,
        "Allys"
        ,
        "Allyson"
        ,
        "Alma"
        ,
        "Almeda"
        ,
        "Almeria"
        ,
        "Almeta"
        ,
        "Almira"
        ,
        "Almire"
        ,
        "Aloise"
        ,
        "Aloisia"
        ,
        "Aloysia"
        ,
        "Alta"
        ,
        "Althea"
        ,
        "Alvera"
        ,
        "Alverta"
        ,
        "Alvina"
        ,
        "Alvinia"
        ,
        "Alvira"
        ,
        "Alyce"
        ,
        "Alyda"
        ,
        "Alys"
        ,
        "Alysa"
        ,
        "Alyse"
        ,
        "Alysia"
        ,
        "Alyson"
        ,
        "Alyss"
        ,
        "Alyssa"
        ,
        "Amabel"
        ,
        "Amabelle"
        ,
        "Amalea"
        ,
        "Amalee"
        ,
        "Amaleta"
        ,
        "Amalia"
        ,
        "Amalie"
        ,
        "Amalita"
        ,
        "Amalle"
        ,
        "Amanda"
        ,
        "Amandi"
        ,
        "Amandie"
        ,
        "Amandy"
        ,
        "Amara"
        ,
        "Amargo"
        ,
        "Amata"
        ,
        "Amber"
        ,
        "Amberly"
        ,
        "Ambur"
        ,
        "Ame"
        ,
        "Amelia"
        ,
        "Amelie"
        ,
        "Amelina"
        ,
        "Ameline"
        ,
        "Amelita"
        ,
        "Ami"
        ,
        "Amie"
        ,
        "Amii"
        ,
        "Amil"
        ,
        "Amitie"
        ,
        "Amity"
        ,
        "Ammamaria"
        ,
        "Amy"
        ,
        "Amye"
        ,
        "Ana"
        ,
        "Anabal"
        ,
        "Anabel"
        ,
        "Anabella"
        ,
        "Anabelle"
        ,
        "Analiese"
        ,
        "Analise"
        ,
        "Anallese"
        ,
        "Anallise"
        ,
        "Anastasia"
        ,
        "Anastasie"
        ,
        "Anastassia"
        ,
        "Anatola"
        ,
        "Andee"
        ,
        "Andeee"
        ,
        "Anderea"
        ,
        "Andi"
        ,
        "Andie"
        ,
        "Andra"
        ,
        "Andrea"
        ,
        "Andreana"
        ,
        "Andree"
        ,
        "Andrei"
        ,
        "Andria"
        ,
        "Andriana"
        ,
        "Andriette"
        ,
        "Andromache"
        ,
        "Andy"
        ,
        "Anestassia"
        ,
        "Anet"
        ,
        "Anett"
        ,
        "Anetta"
        ,
        "Anette"
        ,
        "Ange"
        ,
        "Angel"
        ,
        "Angela"
        ,
        "Angele"
        ,
        "Angelia"
        ,
        "Angelica"
        ,
        "Angelika"
        ,
        "Angelina"
        ,
        "Angeline"
        ,
        "Angelique"
        ,
        "Angelita"
        ,
        "Angelle"
        ,
        "Angie"
        ,
        "Angil"
        ,
        "Angy"
        ,
        "Ania"
        ,
        "Anica"
        ,
        "Anissa"
        ,
        "Anita"
        ,
        "Anitra"
        ,
        "Anjanette"
        ,
        "Anjela"
        ,
        "Ann"
        ,
        "Ann-Marie"
        ,
        "Anna"
        ,
        "Anna-Diana"
        ,
        "Anna-Diane"
        ,
        "Anna-Maria"
        ,
        "Annabal"
        ,
        "Annabel"
        ,
        "Annabela"
        ,
        "Annabell"
        ,
        "Annabella"
        ,
        "Annabelle"
        ,
        "Annadiana"
        ,
        "Annadiane"
        ,
        "Annalee"
        ,
        "Annaliese"
        ,
        "Annalise"
        ,
        "Annamaria"
        ,
        "Annamarie"
        ,
        "Anne"
        ,
        "Anne-Corinne"
        ,
        "Anne-Marie"
        ,
        "Annecorinne"
        ,
        "Anneliese"
        ,
        "Annelise"
        ,
        "Annemarie"
        ,
        "Annetta"
        ,
        "Annette"
        ,
        "Anni"
        ,
        "Annice"
        ,
        "Annie"
        ,
        "Annis"
        ,
        "Annissa"
        ,
        "Annmaria"
        ,
        "Annmarie"
        ,
        "Annnora"
        ,
        "Annora"
        ,
        "Anny"
        ,
        "Anselma"
        ,
        "Ansley"
        ,
        "Anstice"
        ,
        "Anthe"
        ,
        "Anthea"
        ,
        "Anthia"
        ,
        "Anthiathia"
        ,
        "Antoinette"
        ,
        "Antonella"
        ,
        "Antonetta"
        ,
        "Antonia"
        ,
        "Antonie"
        ,
        "Antonietta"
        ,
        "Antonina"
        ,
        "Anya"
        ,
        "Appolonia"
        ,
        "April"
        ,
        "Aprilette"
        ,
        "Ara"
        ,
        "Arabel"
        ,
        "Arabela"
        ,
        "Arabele"
        ,
        "Arabella"
        ,
        "Arabelle"
        ,
        "Arda"
        ,
        "Ardath"
        ,
        "Ardeen"
        ,
        "Ardelia"
        ,
        "Ardelis"
        ,
        "Ardella"
        ,
        "Ardelle"
        ,
        "Arden"
        ,
        "Ardene"
        ,
        "Ardenia"
        ,
        "Ardine"
        ,
        "Ardis"
        ,
        "Ardisj"
        ,
        "Ardith"
        ,
        "Ardra"
        ,
        "Ardyce"
        ,
        "Ardys"
        ,
        "Ardyth"
        ,
        "Aretha"
        ,
        "Ariadne"
        ,
        "Ariana"
        ,
        "Aridatha"
        ,
        "Ariel"
        ,
        "Ariela"
        ,
        "Ariella"
        ,
        "Arielle"
        ,
        "Arlana"
        ,
        "Arlee"
        ,
        "Arleen"
        ,
        "Arlen"
        ,
        "Arlena"
        ,
        "Arlene"
        ,
        "Arleta"
        ,
        "Arlette"
        ,
        "Arleyne"
        ,
        "Arlie"
        ,
        "Arliene"
        ,
        "Arlina"
        ,
        "Arlinda"
        ,
        "Arline"
        ,
        "Arluene"
        ,
        "Arly"
        ,
        "Arlyn"
        ,
        "Arlyne"
        ,
        "Aryn"
        ,
        "Ashely"
        ,
        "Ashia"
        ,
        "Ashien"
        ,
        "Ashil"
        ,
        "Ashla"
        ,
        "Ashlan"
        ,
        "Ashlee"
        ,
        "Ashleigh"
        ,
        "Ashlen"
        ,
        "Ashley"
        ,
        "Ashli"
        ,
        "Ashlie"
        ,
        "Ashly"
        ,
        "Asia"
        ,
        "Astra"
        ,
        "Astrid"
        ,
        "Astrix"
        ,
        "Atalanta"
        ,
        "Athena"
        ,
        "Athene"
        ,
        "Atlanta"
        ,
        "Atlante"
        ,
        "Auberta"
        ,
        "Aubine"
        ,
        "Aubree"
        ,
        "Aubrette"
        ,
        "Aubrey"
        ,
        "Aubrie"
        ,
        "Aubry"
        ,
        "Audi"
        ,
        "Audie"
        ,
        "Audra"
        ,
        "Audre"
        ,
        "Audrey"
        ,
        "Audrie"
        ,
        "Audry"
        ,
        "Audrye"
        ,
        "Audy"
        ,
        "Augusta"
        ,
        "Auguste"
        ,
        "Augustina"
        ,
        "Augustine"
        ,
        "Aundrea"
        ,
        "Aura"
        ,
        "Aurea"
        ,
        "Aurel"
        ,
        "Aurelea"
        ,
        "Aurelia"
        ,
        "Aurelie"
        ,
        "Auria"
        ,
        "Aurie"
        ,
        "Aurilia"
        ,
        "Aurlie"
        ,
        "Auroora"
        ,
        "Aurora"
        ,
        "Aurore"
        ,
        "Austin"
        ,
        "Austina"
        ,
        "Austine"
        ,
        "Ava"
        ,
        "Aveline"
        ,
        "Averil"
        ,
        "Averyl"
        ,
        "Avie"
        ,
        "Avis"
        ,
        "Aviva"
        ,
        "Avivah"
        ,
        "Avril"
        ,
        "Avrit"
        ,
        "Ayn"
    ]

    const randomIdx = utilsService.getRandomNum(0, names.length - 1)
    return names[randomIdx]
}

export const mockUserGenerator = {
    generateMockUsers,
    getMockUserId
}