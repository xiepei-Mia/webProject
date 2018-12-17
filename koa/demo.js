
function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('long_time_value');
        }, 3000);
    })
};

function getThings() {
    return 'something';
}

async function testAsync() {
    return 'hellow async'
}

async function test(){
    const v1 = await getThings();
    const v2 = await testAsync();
    const v3 = await takeLongTime();
    console.log(v1, v2);
    console.log(v3);
}



test();



const result = testAsync();
console.log(result);