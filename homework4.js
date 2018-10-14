//2


const a = function(x){
  let stars = "";
  while(x > 0){
    x = x - 1;
    stars = stars + '*';
  };
  return stars;
};
const b = function(y){
  let empty = "";
  while(y > 0){
    y = y - 1;
    empty = empty + " ";
  };
  return empty;
};
const triangleStars = function(z){
  let line = "";
  let num = z;
  while(z > 0){
    line = b(num - z) + a(z * 2 - 1);
    z = z - 1;
    console.log(line);
  };
}
triangleStars(5);


//3


const multiToSingle = function(arr){
	let newArr = [];
	let l = 0;
	
	while(l < arr.length){
    let m = 0;
    while(m < arr[l].length){
		newArr[newArr.length] = arr[l][m];
    m = m + 1;
	};
  l = l + 1;
	};
  return newArr;
  };



//4



const findMinMax = function(arr, condition){
  let index = 1;
  let minmax = arr[0];
  if(condition){
    while(index < arr.length){
      if (minmax < arr[index]){
        minmax = arr[index];
      };
      index = index + 1;
    };
    return minmax;
  }
  else{
    while(index < arr.length){
      if(minmax > arr[index]){
        minmax = arr[index];
      };
      index = index + 1;
    }
    return minmax;
  };
};


//5



const forEach = function(arr, func){
  let index = 0;
  while (index < arr.length){
    func(arr[index]);
    index = index + 1;
  };
};
forEach([5,4,3], function(num){
  console.log(num);
});



//6



const sum = function(arr){
	let o = 0;
	let val = 0;
	while(arr.length > o){
		val = val + arr[o];
		o = o + 1;
	}
	return val;
};



//7



const reverse = function(str){
	let newStr = "";
	let index = str.length -1;

	while(index >= 0){

	newStr = newStr + str[index];
  
		index = index - 1;
	}
	return newStr;
};



//8

const func = function(inp){
  let index = 0; 
  let line = "";
  while(index < inp){
    line = line + "*";
    index = index + 1;
  }
  return line;
};
const checkboard = function(x){
  let newIndex = 0;
  while(newIndex < x){
  let raw = func(x)
  if(newIndex % 2 === 0){
    raw = " " + raw;
    console.log(raw);
  }
  else{ console.log(raw); }
  newIndex = newIndex + 1;
  };
};
checkboard(5);