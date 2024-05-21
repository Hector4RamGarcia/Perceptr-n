const matriz = [
  [1,  1,  1,  -1],
  [1,  1, -1, 1],
  [1, -1,  1, 1],
  [1, -1, -1, -1]
];
let num = 0
let iteraciones = 1
var w0 = Math.random();
var w1 = Math.random();
var w2 = Math.random();
var alpha = 0.4

const ecuacion = (w0,w1,w2, fila) => {
  let y = (w0 * fila[0]) + (w1 * fila[1]) + (w2 * fila[2])
  if(y >= 0){
    y = 1
  }else{
    y= -1
  }
  let error = fila[3] - (y)
  return error
}

const recalcular = (w, alpha, error, x ) => {
  return w + (alpha * error * x )
}

while(num <4){
  let fila = matriz[num]
  let error = ecuacion(w0, w1, w2, fila)
  if(error == 0){
    num++
  }else{
    w0 = recalcular(w0, alpha, error,fila[0])
    w1 = recalcular(w1, alpha, error,fila[1])
    w2 = recalcular(w2, alpha, error,fila[2])
    num = 0
    iteraciones ++
  }
  if (num == 4){
    console.log('Pesos Wn')
    console.log('w0 = ',w0)
    console.log('w1 = ',w1)
    console.log('w2 = ',w2)
    console.log('Interaciones realizadas = ',iteraciones)

  }
}
