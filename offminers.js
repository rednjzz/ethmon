function offMiners(miners){
    var cnt=0;
    var oMiners=[];
    miners.forEach(function(item,i){
        if (miners[i].eth_hr === "" || miners[i].eth_hr === null){
            oMiners[cnt] =  {
                "name": miners.name,
                "host": miners.host,
                "comments": miners.comments
            };
            cnt++;
        }
    });

    return oMiners;
}

module.exports = offMiners;