// 防抖函数
// 注意闭包的使用，保证闭包使用的同一个变量

function myDebounce(func, wait = 500) {
    let timeout = null;
    let context = this;

    if(arguments.length > 2) {
        if(timeout) clearTimeout(timeout);
        setTimeout(() => {
            func.apply(context, Array.prototype.slice.call(arguments, 2));
        }, wait);
    } else {
        return function() {
            // console.log(this, arguments);
            if(timeout) clearTimeout(timeout);
    
            setTimeout(() => {
                func.apply(context, arguments);
            }, wait);
        }
    }
    
    // const stvl = setInterval(() => func, wait)
}

function func(a, b) {
    console.log('debounce', a, b);
}

myDebounce(func, 1000)(1,2);
myDebounce(func, 1000, 3, 4);

// 节流函数
function myThrottle(func, wait) {
    let timeout = null;
    const context = this;

    return function() {
        if(!timeout) {   
            timeout = setTimeout(() => {
                func.apply(context, arguments);
                timeout = null;
            }, wait);
        }
    }
};

function cons(a) {
    console.log(`第${a}次`)
}

myThrottle(() => {console.log(`13`)}, 1000)();
const throttle = myThrottle(cons, 1000);

throttle(1);
throttle(2);
setTimeout(() => throttle(3), 1200);
//两者都是返回一个函数，需要再次传入参数；也可以做函数柯里化的传参方式，允许多种传参方式

setTimeout(
()=> {
    console.log(0);
}); 

new Promise(resolve => 
    {
        console.log(1); 
        setTimeout(()=> {
            resolve(); 
            Promise.resolve().then(()=> {console.log(2); 
            setTimeout(()=> console.log(3)); 
            Promise.resolve().then(()=> console.log(4));
            Promise.resolve().then(()=> console.log(5)).then(()=> console.log(6)); 
            Promise.resolve().then(()=> console.log(7)); setTimeout(()=>console.log(8));
        })
    })
    })    
console.log(9);