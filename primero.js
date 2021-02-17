/*
function promedio1(nota1, nota2, nota3) {
	let resultado = (nota1+nota2+nota3)/3;
	console.log('El promedio 1 es '+resultado);
}
let promedio2=(nota1,nota2,nota3)=>{
	setTimeout(function(){
		let resultado = (nota1+nota2+nota3)/3;
		console.log('El promedio 2 es '+resultado);
	},2000);
}

//let promedio3=(nota1, nota2, nota3)=>let resultado = (nota1+nota2+nota3)/3;console.log('El promedio 3 es '+resultado);

promedio1(2,3,4);
promedio2(1,5,1);
//promedio3(3,1,2);
*/
//--------------------------------------------------------------------------------------------------------------
 
let promedio = (nota1, nota2 , nota3, callback) => {
	setTimeout(function(){
		let resultado = (nota1+nota2+nota3)/3;
		callback (resultado)
	},0);
} 

promedio(4,4,3, function(resultado){
	console.log(resultado);
});