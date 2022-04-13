function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let value = func(...args);
    let result = cache.find(item => item['hash'] === hash);
    if (result) {        
      console.log("Из кэша: " + result.value);
      console.log(cache);
      return "Из кэша: " + result.value;
    } else if (cache.length < 5) {
      cache.push({
        hash: hash,
        value: value
      });
      let index = cache.length - 1;
      console.log("Вычисляем: " + cache[index].value); 
      console.log(cache);
      return "Вычисляем: " + cache[index].value;
    } else if (cache.length === 5) {
      cache.shift();
      cache.push({
        hash: hash,
        value: value
      });      
      console.log("Вычисляем: " + cache[4].value);
      console.log(cache);
      return "Вычисляем: " + cache[4].value;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(f, ms) {
  let timeout;
  return function (...args) { 
    if (!timeout) {
      f.apply(this, args);
      timeout = setTimeout(() => { 
        f.apply(this, args);
      }, ms);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { 
        f.apply(this, args);
      }, ms); 
    }   
  };
}

function debounceDecorator2(f, ms) {
  let timeout;
  let start = new Date();
  function wrapper (...args) { 
    if (!timeout) {
      f.apply(this, args);
      wrapper.history.push(args);
      const end = new Date();
      const delay = end - start;
      console.log(`Задержка: ${delay}`);
      start = new Date();
      //console.log(wrapper.history);
      timeout = setTimeout(() => { 
        f.apply(this, args);
      }, ms);
    } else {
      wrapper.history.push(args);
      clearTimeout(timeout);
      const end = new Date();
      const delay = end - start;
      console.log(`Задержка: ${delay}`);
      start = new Date();
      timeout = setTimeout(() => {
        //console.log(wrapper.history);
        f.apply(this, args);
      }, ms); 
    }   
  };

  wrapper.history = [];
  return wrapper;
}