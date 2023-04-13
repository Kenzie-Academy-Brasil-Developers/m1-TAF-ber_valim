// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
let gender = process.argv[2]; // Genero
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**
if (gender === "male") {
  //Verificando se o genêro é masculino
  if (height >= 1.7) {
    //Verificando se a altura é no mínimo 1.70
    if (barReps >= 6 || barSeconds >= 15) {
      // Verificando se ocorre a execução de pelo menos 6 repetições na barra ou duração mínima de 15 s
      if (abs >= 41) {
        // Verificando se executa pelo menos 41 abdominais
        if (
          (runDistance >= 3000 && runTime <= 720) ||
          (runDistance >= 5000 && runTime <= 1200)
        ) {
          // Verificando se corre pelo menos 3 km em no máximo 12 minutos ou pelo menos 5 km em no máximo 20 minutos
          if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
            // Verificando se percorre 100 metros em no máximo 1 minuto nadando ou  se mergulhar por no máximo 30 segundos
            passed = true;
          }
        }
      }
    }
  }
} else if (gender === "female") {
  //Verificando se o genêro é feminino
  if (height >= 1.6) {
    // Verificando se a altura é no mínimo 1.60
    if (barReps >= 5 || barSeconds >= 12) {
      // Verificando se executa 5 repetições na barra ou se apresenta duração mínima de 12 segundos
      if (abs >= 41) {
        // Verificando se executa no mínimo 41 abdominais
        if (
          (runDistance >= 4000 && runTime <= 900) ||
          (runDistance >= 6000 && runTime <= 1320)
        ) {
          //Verificando se corre pelo menos 4 km em no máximo 15 minutos ou pelo menos 6 km em no máximo 22 minutos
          if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
            // Verificando se percorre 100 metros em no máximo 1 minuto nadando ou  se mergulhar por no máximo 30 segundos
            passed = true;
          }
        }
      }
    }
  }
}
/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
