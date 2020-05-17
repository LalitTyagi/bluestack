let initialState = {
    item: [{
        "name": "Need for Speed",
        "region": "US",
        "createdOn": 1587104988000,
     // "createdOn": 1587104988000,        
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/1.png")
    }, {
        "name": "Summoners War",
        "region": "US",
        "createdOn": 1587796188000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/2.png")
    }, {
        "name": "Shadow Fight 3",
        "region": "US",
        "createdOn": 1588141788000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/3.png")
    }, {
        "name": "PUBG MOBILE",
        "region": "US",
        "createdOn": 1588314588000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/4.png")
    }, {
        "name": "Auto Chess",
        "region": "US",
        "createdOn": 1588660188000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/5.png")
    }, {
        "name": "MORTAL KOMBAT",
        "region": "US",
        "createdOn": 1588919388000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/6.png")
    }, {
        "name": "Garena Free Fire",
        "region": "US",
        "createdOn": 1589264988000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/7.png")
    }, {
        "name": "Flow Free",
        "region": "US",
        "createdOn": 1589696988000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/8.png")
    },{
        "name": "Need for Speed",
        "region": "US",
        "createdOn": 1589696988000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/1.png")
    }, {
        "name": "Summoners War",
        "region": "US",
        "createdOn": 1589696988000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/2.png")
    }, {
        "name": "Shadow Fight 3",
        "region": "US",
        "createdOn": 1589956188000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/3.png")
    }, {
        "name": "PUBG MOBILE",
        "region": "US",
        "createdOn": 1590128988000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/4.png")
    }, {
        "name": "Auto Chess",
        "region": "US",
        "createdOn": 1590301788000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/5.png")
    }, {
        "name": "MORTAL KOMBAT",
        "region": "US",
        "createdOn": 1590474588000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/6.png")
    }, {
        "name": "Garena Free Fire",
        "region": "US",
        "createdOn": 1590409893000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/7.png")
    }, {
        "name": "Flow Free",
        "region": "US",
        "createdOn": 1589610588000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": require("../img/campaign/8.png")
    }
    ],
    upcomingItem:[],
    liveItem:[],
    pastItem:[]
};

function reducer(state = initialState, action) {
    let t1 = new Date();
    let t2;
    var DifferenceInTime;
    var DifferenceInDays;
    var date;
    var { item, upcomingItem, liveItem, pastItem } = state;
    item.map((i)=>{
        t2 = (new Date(i.createdOn))
        date = t2.toUTCString('en').split(',')[1].split(' ').slice(1, 4)
        DifferenceInTime = t1.getTime() - t2.getTime(); 
        DifferenceInDays = Math.ceil(DifferenceInTime / (1000 * 3600 * 24));
        i.DifferenceInDays=DifferenceInDays;
        i.date=date[1]+" "+date[0]+","+date[2];
        i.tempDate=i.createdOn;
        // if(DifferenceInDays>1){
        //     state.upcomingItem.push(i)
        // }else if(DifferenceInDays<1){
        //     state.pastItem.push(i)
        // }else{
        //     state.liveItem.push(i)
        // }
    })

    item.map((i)=>{
        if(i.DifferenceInDays>1){
                upcomingItem.push(i)
            }else if(i.DifferenceInDays<1){
                pastItem.push(i)
            }else{
                liveItem.push(i)
            }
    })
    console.log('----upcomingItem--->',upcomingItem)
    console.log('---pastItem---->',pastItem)
    console.log('---liveItem---->',state)
    console.log('------->',state)
    switch (action.type) {
        case "UPCOMING_CAMPAIGNS":
            return {
                state
            };
        case "LIVE_CAMPAIGNS":
            return {
                state
            };
        case "PAST_CAMPAIGNS":
            return {
                state
            };
        case "UPDATE":
            var foundIndex = item.findIndex(x => x.createdOn === action.oldDate);
            t2 = (new Date(action.newDate))
            date = t2.toUTCString('en').split(',')[1].split(' ').slice(1, 4)
            DifferenceInTime = t1.getTime() - t2.getTime(); 
            DifferenceInDays = Math.ceil(DifferenceInTime / (1000 * 3600 * 24));
            item[foundIndex].DifferenceInDays=DifferenceInDays;
            item[foundIndex].date=date[1]+" "+date[0]+","+date[2];
            item[foundIndex].tempDate = action.newDate;
            return {
                item
            };
        default:
            return state;
    }
}

export default reducer;