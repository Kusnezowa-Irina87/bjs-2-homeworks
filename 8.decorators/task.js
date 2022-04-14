function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let result = cache.find(item => item['hash'] === hash);
    if (result) {        
      return "Из кэша: " + result.value;
    }

    let value = func(...args);
    cache.push({
      hash,
      value
    });

    if (cache.length === 6) {
      cache.shift();
    }

    return "Вычисляем: " + value;
  }
  return wrapper;
}

function debounceDecoratorNew(f, ms) {
  let timeout;
  return function (...args) { 
    if (!timeout) {
      f.apply(this, args);
    } 
    clearTimeout(timeout);
    timeout = setTimeout(() => { 
      f.apply(this, args);
    }, ms);  
  }
}

function debounceDecorator2(f, ms) {
  let timeout;
  let count = 0;
  return function (...args) { 
    count ++;
    if (!timeout) {
      f.apply(this, args);
    } 

    clearTimeout(timeout);
    timeout = setTimeout(() => { 
      f.apply(this, args);
    }, ms);  
  }
}