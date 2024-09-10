function test() {
    console.log('Test before');
    (async () => await print(0.6))();
    console.log('Test between');
    (async () => await print(0.9))();
    console.log('Test after');
}

async function print(v) {
    if(v<0.5)await sleep(8000);
    else console.log('No sleep')
    console.log(`Printing ${v}`);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

test();