

const movies = [
    {
        _id : "1",
        title : 'Film1' ,
        genre : {_id:'1',name:'Action'},
        numberInStock:6,
        dailyRentaRate: 2.5,
        publishDate: "2018-1-03",
    },
    {
        _id : "2",
        title : 'Film2',
        genre : {_id:'1',name:'Action'},
        numberInStock: 3,
        dailyRentaRate: 2.3
    },
    {
        _id : "3",
        title : 'Film3',
        genre :{_id:'2',name:'Comedy'},
        numberInStock:4,
        dailyRentaRate:2.8,
        publishDate:"2018-1-04",
    },
    {
        _id : "4",
        title : 'Film4',
        genre :{_id:'2',name:'Comedy'},
        numberInStock:9,
        dailyRentaRate:2.0,
        publishDate:"2018-1-04",
    }
]


export function getMovie(){
    return movies;
}