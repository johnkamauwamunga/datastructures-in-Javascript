const fs= require('fs')

//console.log(fs)

fs.stat('/', (err, stats)=>{
    if(err){
        console.Error('Error: ',err);

        return;
    }

    const totalSpaceGB= stats.blocks * stats.blksize/(1024 * 1024 * 1024);
    const freeSpaceGB = stats.blocks * stats.blksize/(1024* 1024 * 1024);


    console.log('total space', totalSpaceGB.toFixed(2),'GB');
    console.log('used space',freeSpaceGB, 'GB');
})